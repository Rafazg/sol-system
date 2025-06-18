"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { Truck, Eye, EyeOff, AlertCircle, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // Usuários de exemplo para demonstração
  const users = [
    {
      email: "motorista@ecocoleta.com",
      password: "123456",
      role: "motorista",
      name: "João Silva",
      cooperativa: "Cooperativa Verde",
    },
    {
      email: "presidente@cooperativaverde.com",
      password: "123456",
      role: "cooperativa",
      name: "Maria Santos",
      cooperativa: "Cooperativa Verde",
    },
    {
      email: "admin@ecocoleta.com",
      password: "123456",
      role: "admin",
      name: "Carlos Admin",
      cooperativa: null,
    },
    {
      email: "gestor@prefeitura.gov.br",
      password: "123456",
      role: "gestor",
      name: "Ana Gestora",
      cooperativa: null,
    },
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
    setError("")
  }

  const validateForm = () => {
    if (!formData.email) {
      setError("E-mail é obrigatório")
      return false
    }
    if (!formData.password) {
      setError("Senha é obrigatória")
      return false
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("E-mail inválido")
      return false
    }
    if (formData.password.length < 6) {
      setError("Senha deve ter pelo menos 6 caracteres")
      return false
    }
    return true
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    // Simular delay de autenticação
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Verificar credenciais
    const user = users.find((u) => u.email === formData.email && u.password === formData.password)

    if (!user) {
      setError("E-mail ou senha incorretos")
      setIsLoading(false)
      return
    }

    // Salvar dados do usuário no localStorage
    const userData = {
      id: Date.now(),
      email: user.email,
      name: user.name,
      role: user.role,
      cooperativa: user.cooperativa,
      loginTime: new Date().toISOString(),
      rememberMe: formData.rememberMe,
    }

    if (formData.rememberMe) {
      localStorage.setItem("ecoColeta_user", JSON.stringify(userData))
      localStorage.setItem("ecoColeta_rememberMe", "true")
    } else {
      sessionStorage.setItem("ecoColeta_user", JSON.stringify(userData))
    }

    // Registrar log de acesso
    const accessLog = {
      userId: userData.id,
      email: userData.email,
      role: userData.role,
      timestamp: new Date().toISOString(),
      ip: "192.168.1.1", // Em produção, pegar IP real
      userAgent: navigator.userAgent,
    }

    const logs = JSON.parse(localStorage.getItem("ecoColeta_accessLogs") || "[]")
    logs.push(accessLog)
    localStorage.setItem("ecoColeta_accessLogs", JSON.stringify(logs))

    setIsLoading(false)
    router.push("/")
  }

  const handleForgotPassword = () => {
    alert("Funcionalidade de recuperação de senha será implementada")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo e Título */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Truck className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Sol. System</h1>
          <p className="text-gray-600 mt-2">Sistema de Gestão de Coleta</p>
        </div>

        {/* Card de Login */}
        <Card>
          <CardHeader>
            <CardTitle>Fazer Login</CardTitle>
            <CardDescription>Entre com suas credenciais para acessar o sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {/* E-mail */}
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>

              {/* Senha */}
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha"
                    value={formData.password}
                    onChange={handleInputChange}
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Lembrar de mim */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, rememberMe: checked }))}
                  disabled={isLoading}
                />
                <Label htmlFor="rememberMe" className="text-sm">
                  Lembrar de mim
                </Label>
              </div>

              {/* Erro */}
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Botão de Login */}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Entrando...
                  </>
                ) : (
                  "Entrar"
                )}
              </Button>

              {/* Link Esqueci a Senha */}
              <div className="text-center">
                <Button
                  type="button"
                  variant="link"
                  className="text-sm"
                  onClick={handleForgotPassword}
                  disabled={isLoading}
                >
                  Esqueci minha senha
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Usuários de Demonstração */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-sm">Usuários de Demonstração</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="font-medium">Motorista:</p>
                  <p>motorista@ecocoleta.com</p>
                </div>
                <div>
                  <p className="font-medium">Presidente:</p>
                  <p>presidente@cooperativaverde.com</p>
                </div>
                <div>
                  <p className="font-medium">Admin:</p>
                  <p>admin@ecocoleta.com</p>
                </div>
                <div>
                  <p className="font-medium">Gestor:</p>
                  <p>gestor@prefeitura.gov.br</p>
                </div>
              </div>
              <p className="text-center text-gray-500 mt-2">Senha para todos: 123456</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
