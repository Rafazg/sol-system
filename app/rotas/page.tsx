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
import { Route, Plus, Search, ArrowLeft, MapPin, Clock, Truck, Edit, Play, Pause } from "lucide-react"
import Link from "next/link"
import { AuthService } from "@/lib/auth"

export default function Rotas() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const rotas = [
    {
      id: 1,
      nome: "Rota Centro",
      codigo: "RT-001",
      cooperativa: "Cooperativa Verde",
      motorista: "João Silva",
      veiculo: "ABC-1234",
      status: "ativa",
      pontos_coleta: 8,
      distancia_total: 45.2,
      tempo_estimado: "4h 30min",
      frequencia: "Diária",
      horario_inicio: "08:00",
      horario_fim: "12:30",
      ultima_execucao: "2024-01-30",
      peso_medio: 320,
      custo_estimado: 180.5,
    },
    {
      id: 2,
      nome: "Rota Vila Nova",
      codigo: "RT-002",
      cooperativa: "EcoRecicla Cooperativa",
      motorista: "Maria Santos",
      veiculo: "DEF-5678",
      status: "ativa",
      pontos_coleta: 12,
      distancia_total: 62.8,
      tempo_estimado: "6h 15min",
      frequencia: "3x por semana",
      horario_inicio: "07:00",
      horario_fim: "13:15",
      ultima_execucao: "2024-01-29",
      peso_medio: 480,
      custo_estimado: 245.75,
    },
    {
      id: 3,
      nome: "Rota Jardim América",
      codigo: "RT-003",
      cooperativa: "Recicla Mais",
      motorista: "Pedro Costa",
      veiculo: "GHI-9012",
      status: "pausada",
      pontos_coleta: 6,
      distancia_total: 28.5,
      tempo_estimado: "3h 45min",
      frequencia: "2x por semana",
      horario_inicio: "09:00",
      horario_fim: "12:45",
      ultima_execucao: "2024-01-25",
      peso_medio: 195,
      custo_estimado: 125.3,
    },
  ]

  const filteredRotas = rotas.filter(
    (rota) =>
      rota.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rota.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rota.motorista.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status) => {
    switch (status) {
      case "ativa":
        return "default"
      case "pausada":
        return "secondary"
      case "inativa":
        return "destructive"
      default:
        return "secondary"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "ativa":
        return "Ativa"
      case "pausada":
        return "Pausada"
      case "inativa":
        return "Inativa"
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
              <h1 className="text-xl font-bold text-gray-900">Gestão de Rotas</h1>
            </div>
            {AuthService.canAccess("rotas_add") && (
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Nova Rota
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Criar Nova Rota</DialogTitle>
                    <DialogDescription>Configure uma nova rota de coleta</DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome-rota">Nome da Rota</Label>
                      <Input id="nome-rota" placeholder="Ex: Rota Centro" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="codigo-rota">Código</Label>
                      <Input id="codigo-rota" placeholder="RT-004" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cooperativa-rota">Cooperativa</Label>
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
                    <div className="space-y-2">
                      <Label htmlFor="frequencia-rota">Frequência</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="diaria">Diária</SelectItem>
                          <SelectItem value="3x-semana">3x por semana</SelectItem>
                          <SelectItem value="2x-semana">2x por semana</SelectItem>
                          <SelectItem value="semanal">Semanal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="horario-inicio">Horário de Início</Label>
                      <Input id="horario-inicio" type="time" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="horario-fim">Horário de Fim</Label>
                      <Input id="horario-fim" type="time" />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancelar
                    </Button>
                    <Button onClick={() => setIsDialogOpen(false)}>Criar Rota</Button>
                  </div>
                </DialogContent>
              </Dialog>
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
              placeholder="Buscar rotas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Tabs defaultValue="lista" className="space-y-4">
          <TabsList>
            <TabsTrigger value="lista">Lista de Rotas</TabsTrigger>
            <TabsTrigger value="mapa">Visualização no Mapa</TabsTrigger>
            <TabsTrigger value="otimizacao">Otimização</TabsTrigger>
          </TabsList>

          <TabsContent value="lista" className="space-y-4">
            <div className="grid gap-6">
              {filteredRotas.map((rota) => (
                <Card key={rota.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Route className="h-8 w-8 text-blue-600" />
                        <div>
                          <CardTitle>{rota.nome}</CardTitle>
                          <CardDescription>Código: {rota.codigo}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={getStatusColor(rota.status)}>{getStatusText(rota.status)}</Badge>
                        {rota.status === "ativa" ? (
                          <Button size="sm" variant="outline">
                            <Pause className="h-3 w-3 mr-1" />
                            Pausar
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline">
                            <Play className="h-3 w-3 mr-1" />
                            Ativar
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          <Edit className="h-3 w-3 mr-1" />
                          Editar
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {/* Informações Básicas */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Informações</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div>Cooperativa: {rota.cooperativa}</div>
                          <div>Motorista: {rota.motorista}</div>
                          <div>Veículo: {rota.veiculo}</div>
                          <div>Frequência: {rota.frequencia}</div>
                        </div>
                      </div>

                      {/* Operação */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Operação</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {rota.pontos_coleta} pontos
                          </div>
                          <div className="flex items-center">
                            <Route className="h-3 w-3 mr-1" />
                            {rota.distancia_total} km
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {rota.tempo_estimado}
                          </div>
                        </div>
                      </div>

                      {/* Horários */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Horários</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div>Início: {rota.horario_inicio}</div>
                          <div>Fim: {rota.horario_fim}</div>
                          <div>Última execução: {new Date(rota.ultima_execucao).toLocaleDateString()}</div>
                        </div>
                      </div>

                      {/* Performance */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Performance</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div>Peso médio: {rota.peso_medio} kg</div>
                          <div>Custo estimado: R$ {rota.custo_estimado.toFixed(2)}</div>
                          <div className="pt-2">
                            <Button size="sm" variant="outline" className="w-full">
                              <MapPin className="h-3 w-3 mr-2" />
                              Ver no Mapa
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mapa">
            <Card>
              <CardHeader>
                <CardTitle>Mapa das Rotas</CardTitle>
                <CardDescription>Visualização geográfica das rotas de coleta</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Route className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600">Mapa interativo das rotas será implementado aqui</p>
                    <p className="text-sm text-gray-500">Visualização de todas as rotas e pontos de coleta</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="otimizacao">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Otimização de Rotas</CardTitle>
                  <CardDescription>Ferramentas para otimizar eficiência e reduzir custos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                      <Route className="h-6 w-6" />
                      <span>Otimizar Distância</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                      <Clock className="h-6 w-6" />
                      <span>Otimizar Tempo</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                      <Truck className="h-6 w-6" />
                      <span>Balancear Carga</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sugestões de Melhoria</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg bg-blue-50">
                        <h4 className="font-medium">Rota Centro</h4>
                        <p className="text-sm text-gray-600">Pode economizar 15 min reorganizando pontos 3 e 4</p>
                      </div>
                      <div className="p-4 border rounded-lg bg-green-50">
                        <h4 className="font-medium">Rota Vila Nova</h4>
                        <p className="text-sm text-gray-600">Eficiência ótima - sem alterações necessárias</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Análise de Custos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Custo total/dia</span>
                        <span className="font-bold">R$ 551,55</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Economia potencial</span>
                        <span className="font-bold text-green-600">R$ 45,20</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Eficiência média</span>
                        <span className="font-bold">87%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
