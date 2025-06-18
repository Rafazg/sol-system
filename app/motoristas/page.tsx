"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { User, Plus, Search, ArrowLeft, Phone, Mail, MapPin, Truck, Calendar, Star } from "lucide-react"
import Link from "next/link"

export default function Motoristas() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const motoristas = [
    {
      id: 1,
      nome: "João Silva",
      cpf: "123.456.789-00",
      telefone: "(11) 99999-9999",
      email: "joao.silva@email.com",
      endereco: "Rua das Flores, 123 - Centro",
      cnh: "12345678901",
      categoria_cnh: "D",
      vencimento_cnh: "2025-06-15",
      cooperativa: "Cooperativa Verde",
      veiculo_atual: "ABC-1234",
      status: "ativo",
      data_admissao: "2023-01-15",
      coletas_mes: 45,
      avaliacao: 4.8,
      observacoes: "Motorista experiente, pontual",
    },
    {
      id: 2,
      nome: "Maria Santos",
      cpf: "987.654.321-00",
      telefone: "(11) 88888-8888",
      email: "maria.santos@email.com",
      endereco: "Av. Principal, 456 - Vila Nova",
      cnh: "98765432109",
      categoria_cnh: "D",
      vencimento_cnh: "2024-12-20",
      cooperativa: "EcoRecicla Cooperativa",
      veiculo_atual: "DEF-5678",
      status: "ativo",
      data_admissao: "2022-08-10",
      coletas_mes: 62,
      avaliacao: 4.9,
      observacoes: "Excelente desempenho",
    },
    {
      id: 3,
      nome: "Pedro Costa",
      cpf: "456.789.123-00",
      telefone: "(11) 77777-7777",
      email: "pedro.costa@email.com",
      endereco: "Rua do Comércio, 789 - Jardim América",
      cnh: "45678912345",
      categoria_cnh: "D",
      vencimento_cnh: "2024-03-10",
      cooperativa: "Recicla Mais",
      veiculo_atual: "GHI-9012",
      status: "licenca",
      data_admissao: "2023-05-20",
      coletas_mes: 0,
      avaliacao: 4.5,
      observacoes: "Em licença médica",
    },
  ]

  const filteredMotoristas = motoristas.filter(
    (motorista) =>
      motorista.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      motorista.cpf.includes(searchTerm) ||
      motorista.cooperativa.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status) => {
    switch (status) {
      case "ativo":
        return "default"
      case "licenca":
        return "secondary"
      case "inativo":
        return "destructive"
      default:
        return "secondary"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "ativo":
        return "Ativo"
      case "licenca":
        return "Em Licença"
      case "inativo":
        return "Inativo"
      default:
        return "Desconhecido"
    }
  }

  const verificarVencimentoCNH = (vencimento) => {
    const hoje = new Date()
    const dataVencimento = new Date(vencimento)
    const diasRestantes = Math.ceil((dataVencimento - hoje) / (1000 * 60 * 60 * 24))

    if (diasRestantes <= 30) return "urgente"
    if (diasRestantes <= 90) return "atencao"
    return "ok"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 mr-6">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Voltar
              </Link>
              <h1 className="text-xl font-bold text-gray-900">Gestão de Motoristas</h1>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Motorista
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Cadastrar Novo Motorista</DialogTitle>
                  <DialogDescription>Preencha as informações do motorista</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input id="nome" placeholder="Nome do motorista" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF</Label>
                    <Input id="cpf" placeholder="000.000.000-00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" placeholder="(11) 99999-9999" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="email@exemplo.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cnh">CNH</Label>
                    <Input id="cnh" placeholder="Número da CNH" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="categoria">Categoria CNH</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="B">B</SelectItem>
                        <SelectItem value="C">C</SelectItem>
                        <SelectItem value="D">D</SelectItem>
                        <SelectItem value="E">E</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vencimento">Vencimento CNH</Label>
                    <Input id="vencimento" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cooperativa">Cooperativa</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cooperativa-verde">Cooperativa Verde</SelectItem>
                        <SelectItem value="ecorecicla">EcoRecicla Cooperativa</SelectItem>
                        <SelectItem value="recicla-mais">Recicla Mais</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={() => setIsDialogOpen(false)}>Cadastrar</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar motoristas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Tabs defaultValue="lista" className="space-y-4">
          <TabsList>
            <TabsTrigger value="lista">Lista de Motoristas</TabsTrigger>
            <TabsTrigger value="documentos">Documentos</TabsTrigger>
            <TabsTrigger value="desempenho">Desempenho</TabsTrigger>
          </TabsList>

          <TabsContent value="lista" className="space-y-4">
            <div className="grid gap-6">
              {filteredMotoristas.map((motorista) => (
                <Card key={motorista.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <User className="h-8 w-8 text-blue-600" />
                        <div>
                          <CardTitle>{motorista.nome}</CardTitle>
                          <CardDescription>CPF: {motorista.cpf}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={getStatusColor(motorista.status)}>{getStatusText(motorista.status)}</Badge>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm font-medium">{motorista.avaliacao}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {/* Contato */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Contato</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Phone className="h-3 w-3 mr-2" />
                            {motorista.telefone}
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-3 w-3 mr-2" />
                            {motorista.email}
                          </div>
                          <div className="flex items-start">
                            <MapPin className="h-3 w-3 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{motorista.endereco}</span>
                          </div>
                        </div>
                      </div>

                      {/* Documentação */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Documentação</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div>CNH: {motorista.cnh}</div>
                          <div>Categoria: {motorista.categoria_cnh}</div>
                          <div>
                            Vencimento: {new Date(motorista.vencimento_cnh).toLocaleDateString()}
                            {verificarVencimentoCNH(motorista.vencimento_cnh) === "urgente" && (
                              <Badge variant="destructive" className="ml-2 text-xs">
                                Vencida
                              </Badge>
                            )}
                            {verificarVencimentoCNH(motorista.vencimento_cnh) === "atencao" && (
                              <Badge variant="secondary" className="ml-2 text-xs">
                                Vence em breve
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Trabalho */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Trabalho</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div>Cooperativa: {motorista.cooperativa}</div>
                          <div className="flex items-center">
                            <Truck className="h-3 w-3 mr-2" />
                            {motorista.veiculo_atual}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-2" />
                            Desde {new Date(motorista.data_admissao).toLocaleDateString()}
                          </div>
                        </div>
                      </div>

                      {/* Performance */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Performance</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div>Coletas/mês: {motorista.coletas_mes}</div>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 mr-2 text-yellow-500" />
                            Avaliação: {motorista.avaliacao}
                          </div>
                          <div className="pt-2">
                            <Button size="sm" variant="outline" className="w-full">
                              Ver Detalhes
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {motorista.observacoes && (
                      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">
                          <strong>Observações:</strong> {motorista.observacoes}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="documentos">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-red-600" />
                    CNHs com Vencimento Próximo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {motoristas
                      .filter((m) => verificarVencimentoCNH(m.vencimento_cnh) !== "ok")
                      .map((motorista) => (
                        <div
                          key={motorista.id}
                          className={`flex items-center justify-between p-4 border rounded-lg ${
                            verificarVencimentoCNH(motorista.vencimento_cnh) === "urgente"
                              ? "bg-red-50 border-red-200"
                              : "bg-yellow-50 border-yellow-200"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <User className="h-6 w-6 text-gray-600" />
                            <div>
                              <p className="font-medium">{motorista.nome}</p>
                              <p className="text-sm text-gray-600">
                                CNH vence em: {new Date(motorista.vencimento_cnh).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <Button size="sm">Notificar</Button>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Controle de Documentos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        {motoristas.filter((m) => verificarVencimentoCNH(m.vencimento_cnh) === "ok").length}
                      </div>
                      <p className="text-sm text-gray-600">CNHs Válidas</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-yellow-600">
                        {motoristas.filter((m) => verificarVencimentoCNH(m.vencimento_cnh) === "atencao").length}
                      </div>
                      <p className="text-sm text-gray-600">Vencem em 90 dias</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-red-600">
                        {motoristas.filter((m) => verificarVencimentoCNH(m.vencimento_cnh) === "urgente").length}
                      </div>
                      <p className="text-sm text-gray-600">Vencidas/Críticas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="desempenho">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {motoristas
                .filter((m) => m.status === "ativo")
                .map((motorista) => (
                  <Card key={motorista.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{motorista.nome}</CardTitle>
                      <CardDescription>{motorista.cooperativa}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Coletas/Mês</span>
                          <span className="font-bold">{motorista.coletas_mes}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Avaliação</span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="font-bold">{motorista.avaliacao}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Pontualidade</span>
                          <Badge variant="outline">95%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Eficiência</span>
                          <Badge variant="outline">
                            {motorista.coletas_mes > 50 ? "Alta" : motorista.coletas_mes > 30 ? "Média" : "Baixa"}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
