"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Truck,
  MapPin,
  Weight,
  Camera,
  Users,
  Building2,
  BarChart3,
  Package,
  Route,
  TrendingUp,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import { AuthGuard } from "@/components/auth-guard"
import { AuthService, type User } from "@/lib/auth"
import { useRouter } from "next/navigation"
import UltimasColetas from "@/components/ultimasColetas";
import { ColetasHojeCard } from "@/components/dashBoardCards/cardColetasHoje";
import { PesoTotalHojeCard } from "@/components/dashBoardCards/cardPesoTotal"
import { CardTotalCooperativas } from "@/components/dashBoardCards/cardTotalCooperativas"
import { CardProximasColetas } from "@/components/dashBoardCards/cardProximasColetas"

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser()
    setUser(currentUser)
  }, [])

  const handleLogout = () => {
    AuthService.logout()
    router.push("/login")
  }

  const stats = {
    coletas_hoje: 12,
    peso_total: 2.5,
    rotas_ativas: 8,
    cooperativas: 15,
  }

  const getRoleDisplayName = (role: string) => {
    const roleNames = {
      motorista: "Motorista",
      cooperativa: "Presidente de Cooperativa",
      admin: "Administrador",
      gestor: "Gestor Público",
    }
    return roleNames[role] || role
  }

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Truck className="h-8 w-8 text-green-600" />
                <h1 className="ml-2 text-xl font-bold text-gray-900">Natureza Sol. System</h1>
              </div>
              <div className="flex items-center space-x-4">
                {user && (
                  <div className="text-sm">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-gray-500">{getRoleDisplayName(user.role)}</p>
                  </div>
                )}
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sair
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Cards - Apenas para não-motoristas */}
          {user?.role !== "motorista" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

              {/* Card Coletas Hoje */}
            <ColetasHojeCard />

              {/* Card Peso Total */}
            <PesoTotalHojeCard />

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Rotas Ativas</CardTitle>
                  <Route className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.rotas_ativas}</div>
                  <p className="text-xs text-muted-foreground">3 em andamento</p>
                </CardContent>
              </Card>
              <CardTotalCooperativas />
            </div>
          )}

          {/* Dashboard específico para Motoristas */}
          {user?.role === "motorista" ? (
            <div className="space-y-6">
              {/* Boas-vindas para Motorista */}
              <Card>
                <CardHeader>
                  <CardTitle>Bem-vindo, {user.name}!</CardTitle>
                  <CardDescription>Acesse suas funcionalidades principais</CardDescription>
                </CardHeader>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Ações Rápidas para Motorista */}
                <Card>
                  <CardHeader>
                    <CardTitle>Ações Rápidas</CardTitle>
                    <CardDescription>Funcionalidades disponíveis para você</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-4">
                      <Button asChild className="h-20 flex flex-col items-center justify-center space-y-2">
                        <Link href="/coleta">
                          <Camera className="h-6 w-6" />
                          <span>Nova Coleta</span>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Histórico Próprio */}
                <UltimasColetas />
              </div>
            </div>
          ) : (

            /* Dashboard completo para outros perfis */
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                <TabsTrigger value="coletas">Coletas</TabsTrigger>
                <TabsTrigger value="rotas">Rotas</TabsTrigger>
                <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Próximas Coletas */}
                <CardProximasColetas />

                  {/* Ações Rápidas */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Ações Rápidas</CardTitle>
                      <CardDescription>Acesso rápido às principais funcionalidades</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <Button asChild className="h-20 flex flex-col items-center justify-center space-y-2">
                          <Link href="/coleta">
                            <Camera className="h-6 w-6" />
                            <span>Nova Coleta</span>
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="h-20 flex flex-col items-center justify-center space-y-2"
                        >
                          <Link href="/relatorios">
                            <BarChart3 className="h-6 w-6" />
                            <span>Relatórios</span>
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="h-20 flex flex-col items-center justify-center space-y-2"
                        >
                          <Link href="/cooperativas">
                            <Users className="h-6 w-6" />
                            <span>Cooperativas</span>
                          </Link>
                        </Button>
                        {AuthService.canAccess("veiculos_view") && (
                          <Button
                            asChild
                            variant="outline"
                            className="h-20 flex flex-col items-center justify-center space-y-2"
                          >
                            <Link href="/veiculos">
                              <Truck className="h-6 w-6" />
                              <span>Veículos</span>
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="coletas">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Ações de Coleta</CardTitle>
                      <CardDescription>Gerencie as atividades de coleta</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <Button asChild className="h-20 flex flex-col items-center justify-center space-y-2">
                          <Link href="/coleta">
                            <Camera className="h-6 w-6" />
                            <span>Nova Coleta</span>
                          </Link>
                        </Button>
                        {AuthService.canAccess("materiais_full") && (
                          <Button
                            asChild
                            variant="outline"
                            className="h-20 flex flex-col items-center justify-center space-y-2"
                          >
                            <Link href="/materiais">
                              <Package className="h-6 w-6" />
                              <span>Controle Materiais</span>
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                    <UltimasColetas />
                </div>
              </TabsContent>

              <TabsContent value="rotas">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Gestão de Rotas</CardTitle>
                      <CardDescription>Configure e monitore as rotas de coleta</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        {AuthService.canAccess("rotas_view") && (
                          <Button asChild className="h-20 flex flex-col items-center justify-center space-y-2">
                            <Link href="/rotas">
                              <Route className="h-6 w-6" />
                              <span>Ver Rotas</span>
                            </Link>
                          </Button>
                        )}
                        <Button
                          asChild
                          variant="outline"
                          className="h-20 flex flex-col items-center justify-center space-y-2"
                        >
                          <Link href="/pontos-coleta">
                            <MapPin className="h-6 w-6" />
                            <span>Pontos Coleta</span>
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Status das Rotas</CardTitle>
                      <CardDescription>Situação atual das rotas</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span>Rotas Ativas</span>
                          <Badge>6</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Em Execução</span>
                          <Badge variant="secondary">2</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Pausadas</span>
                          <Badge variant="outline">1</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="relatorios">
                <Card>
                  <CardHeader>
                    <CardTitle>Relatórios</CardTitle>
                    <CardDescription>Análises e métricas do sistema</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {AuthService.canAccess("relatorios_full") ? (
                      <div className="grid grid-cols-2 gap-4">
                        <Button asChild className="h-20 flex flex-col items-center justify-center space-y-2">
                          <Link href="/relatorios">
                            <BarChart3 className="h-6 w-6" />
                            <span>Relatórios Operacionais</span>
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="h-20 flex flex-col items-center justify-center space-y-2"
                        >
                          <Link href="/relatorios">
                            <TrendingUp className="h-6 w-6" />
                            <span>Análise de Desempenho</span>
                          </Link>
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 inline-block">
                          <p className="text-yellow-800">
                            <span className="font-medium">Acesso restrito.</span> Você não tem permissão para visualizar
                            relatórios.
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
    </AuthGuard>
  )
}
