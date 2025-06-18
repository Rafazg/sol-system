"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Truck, Plus, Search, ArrowLeft, Fuel, Calendar, MapPin, Settings, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { AuthService } from "@/lib/auth"

export default function Veiculos() {
  const [searchTerm, setSearchTerm] = useState("")

  const veiculos = [
    {
      id: 1,
      placa: "ABC-1234",
      modelo: "Mercedes-Benz Atego 1719",
      ano: 2020,
      cooperativa: "Cooperativa Verde",
      motorista: "João Silva",
      status: "ativo",
      km_rodados: 45230,
      ultima_manutencao: "2024-01-15",
      proxima_manutencao: "2024-04-15",
      consumo_medio: 8.5,
      capacidade: 7.5,
      rotas_ativas: 3,
    },
    {
      id: 2,
      placa: "DEF-5678",
      modelo: "Volkswagen Delivery 9.170",
      ano: 2019,
      cooperativa: "EcoRecicla Cooperativa",
      motorista: "Maria Santos",
      status: "ativo",
      km_rodados: 62150,
      ultima_manutencao: "2024-01-20",
      proxima_manutencao: "2024-04-20",
      consumo_medio: 9.2,
      capacidade: 5.0,
      rotas_ativas: 2,
    },
    {
      id: 3,
      placa: "GHI-9012",
      modelo: "Ford Cargo 816",
      ano: 2018,
      cooperativa: "Recicla Mais",
      motorista: "Pedro Costa",
      status: "manutencao",
      km_rodados: 78900,
      ultima_manutencao: "2024-01-25",
      proxima_manutencao: "2024-04-25",
      consumo_medio: 7.8,
      capacidade: 4.5,
      rotas_ativas: 0,
    },
  ]

  const filteredVeiculos = veiculos.filter(
    (veiculo) =>
      veiculo.placa.toLowerCase().includes(searchTerm.toLowerCase()) ||
      veiculo.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      veiculo.motorista.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status) => {
    switch (status) {
      case "ativo":
        return "default"
      case "manutencao":
        return "destructive"
      case "inativo":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "ativo":
        return "Ativo"
      case "manutencao":
        return "Manutenção"
      case "inativo":
        return "Inativo"
      default:
        return "Desconhecido"
    }
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
              <h1 className="text-xl font-bold text-gray-900">Gestão de Veículos</h1>
            </div>
            {AuthService.canAccess("veiculos_add") && (
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Novo Veículo
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar veículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Tabs defaultValue="lista" className="space-y-4">
          <TabsList>
            <TabsTrigger value="lista">Lista de Veículos</TabsTrigger>
            <TabsTrigger value="manutencao">Manutenção</TabsTrigger>
            <TabsTrigger value="custos">Custos</TabsTrigger>
          </TabsList>

          <TabsContent value="lista" className="space-y-4">
            <div className="grid gap-6">
              {filteredVeiculos.map((veiculo) => (
                <Card key={veiculo.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Truck className="h-8 w-8 text-blue-600" />
                        <div>
                          <CardTitle>{veiculo.placa}</CardTitle>
                          <CardDescription>
                            {veiculo.modelo} ({veiculo.ano})
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant={getStatusColor(veiculo.status)}>{getStatusText(veiculo.status)}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {/* Informações Básicas */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Informações</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div>Cooperativa: {veiculo.cooperativa}</div>
                          <div>Motorista: {veiculo.motorista}</div>
                          <div>Capacidade: {veiculo.capacidade} ton</div>
                        </div>
                      </div>

                      {/* Operação */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Operação</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div>KM Rodados: {veiculo.km_rodados.toLocaleString()}</div>
                          <div>Rotas Ativas: {veiculo.rotas_ativas}</div>
                          <div>Consumo: {veiculo.consumo_medio} km/l</div>
                        </div>
                      </div>

                      {/* Manutenção */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Manutenção</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div>Última: {new Date(veiculo.ultima_manutencao).toLocaleDateString()}</div>
                          <div>Próxima: {new Date(veiculo.proxima_manutencao).toLocaleDateString()}</div>
                          {new Date(veiculo.proxima_manutencao) < new Date() && (
                            <Badge variant="destructive" className="text-xs">
                              <AlertTriangle className="h-3 w-3 mr-1" />
                              Atrasada
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Ações */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Ações</h4>
                        <div className="space-y-2">
                          <Button size="sm" variant="outline" className="w-full">
                            <MapPin className="h-3 w-3 mr-2" />
                            Ver Rotas
                          </Button>
                          <Button size="sm" variant="outline" className="w-full">
                            <Settings className="h-3 w-3 mr-2" />
                            Editar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="manutencao">
            <div className="space-y-6">
              {/* Veículos que precisam de manutenção */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                    Manutenções Pendentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {veiculos
                      .filter((v) => new Date(v.proxima_manutencao) < new Date() || v.status === "manutencao")
                      .map((veiculo) => (
                        <div
                          key={veiculo.id}
                          className="flex items-center justify-between p-4 border rounded-lg bg-red-50"
                        >
                          <div className="flex items-center space-x-3">
                            <Truck className="h-6 w-6 text-red-600" />
                            <div>
                              <p className="font-medium">
                                {veiculo.placa} - {veiculo.modelo}
                              </p>
                              <p className="text-sm text-gray-600">
                                Próxima manutenção: {new Date(veiculo.proxima_manutencao).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <Button size="sm">Agendar Manutenção</Button>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Histórico de Manutenções */}
              <Card>
                <CardHeader>
                  <CardTitle>Histórico de Manutenções</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {veiculos.map((veiculo) => (
                      <div key={veiculo.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Calendar className="h-5 w-5 text-gray-500" />
                          <div>
                            <p className="font-medium">{veiculo.placa}</p>
                            <p className="text-sm text-gray-600">
                              Última manutenção: {new Date(veiculo.ultima_manutencao).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Ver Detalhes
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="custos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {veiculos.map((veiculo) => (
                <Card key={veiculo.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{veiculo.placa}</CardTitle>
                    <CardDescription>{veiculo.modelo}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 flex items-center">
                          <Fuel className="h-4 w-4 mr-1" />
                          Consumo
                        </span>
                        <span className="font-bold">{veiculo.consumo_medio} km/l</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Custo/km estimado</span>
                        <span className="font-bold">R$ 2,50</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Custo mensal</span>
                        <span className="font-bold">R$ 3.200,00</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Ver Relatório Detalhado
                      </Button>
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
