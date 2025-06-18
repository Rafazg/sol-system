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
import { Package, Plus, Search, ArrowLeft, ArrowUp, ArrowDown, Recycle, Edit } from "lucide-react"
import Link from "next/link"

export default function ControleMateriaiis() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [tipoMovimento, setTipoMovimento] = useState("entrada")

  const movimentos = [
    {
      id: 1,
      data: "2024-01-30",
      hora: "14:30",
      tipo: "entrada",
      material: "Papel/Papelão",
      peso: 250,
      origem: "Rota Centro - Supermercado Central",
      responsavel: "João Silva",
      observacoes: "Material em bom estado",
      status: "processado",
    },
    {
      id: 2,
      data: "2024-01-30",
      hora: "15:45",
      tipo: "saida",
      material: "Plástico PET",
      peso: 180,
      destino: "Recicladora ABC Ltda",
      responsavel: "Maria Santos",
      observacoes: "Lote 001/2024",
      status: "processado",
    },
    {
      id: 3,
      data: "2024-01-30",
      hora: "16:20",
      tipo: "entrada",
      material: "Metal/Alumínio",
      peso: 95,
      origem: "Rota Vila Nova - Shopping Plaza",
      responsavel: "Pedro Costa",
      observacoes: "Separação necessária",
      status: "pendente",
    },
    {
      id: 4,
      data: "2024-01-29",
      hora: "09:15",
      tipo: "saida",
      material: "Vidro",
      peso: 320,
      destino: "Vidraria São Paulo",
      responsavel: "Ana Silva",
      observacoes: "Transporte especial",
      status: "processado",
    },
  ]

  const estoque = [
    { material: "Papel/Papelão", peso_atual: 1250, peso_maximo: 2000, unidade: "kg" },
    { material: "Plástico PET", peso_atual: 890, peso_maximo: 1500, unidade: "kg" },
    { material: "Metal/Alumínio", peso_atual: 340, peso_maximo: 800, unidade: "kg" },
    { material: "Vidro", peso_atual: 560, peso_maximo: 1000, unidade: "kg" },
    { material: "Orgânico", peso_atual: 2100, peso_maximo: 3000, unidade: "kg" },
  ]

  const filteredMovimentos = movimentos.filter(
    (movimento) =>
      movimento.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movimento.responsavel.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status) => {
    switch (status) {
      case "processado":
        return "default"
      case "pendente":
        return "secondary"
      case "rejeitado":
        return "destructive"
      default:
        return "secondary"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "processado":
        return "Processado"
      case "pendente":
        return "Pendente"
      case "rejeitado":
        return "Rejeitado"
      default:
        return "Desconhecido"
    }
  }

  const getPercentualEstoque = (atual, maximo) => {
    return Math.round((atual / maximo) * 100)
  }

  const getCorEstoque = (percentual) => {
    if (percentual >= 80) return "text-red-600 bg-red-100"
    if (percentual >= 60) return "text-yellow-600 bg-yellow-100"
    return "text-green-600 bg-green-100"
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
              <h1 className="text-xl font-bold text-gray-900">Controle de Materiais</h1>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Movimento
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Registrar Movimento de Material</DialogTitle>
                  <DialogDescription>Registre entrada ou saída de materiais</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Tipo de Movimento</Label>
                      <Select value={tipoMovimento} onValueChange={setTipoMovimento}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entrada">Entrada</SelectItem>
                          <SelectItem value="saida">Saída</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="material">Tipo de Material</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="papel">Papel/Papelão</SelectItem>
                          <SelectItem value="plastico">Plástico PET</SelectItem>
                          <SelectItem value="metal">Metal/Alumínio</SelectItem>
                          <SelectItem value="vidro">Vidro</SelectItem>
                          <SelectItem value="organico">Orgânico</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="peso">Peso (kg)</Label>
                      <Input id="peso" type="number" placeholder="0.00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="responsavel">Responsável</Label>
                      <Input id="responsavel" placeholder="Nome do responsável" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="origem-destino">{tipoMovimento === "entrada" ? "Origem" : "Destino"}</Label>
                    <Input
                      id="origem-destino"
                      placeholder={tipoMovimento === "entrada" ? "Ex: Rota Centro - Ponto X" : "Ex: Recicladora ABC"}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="observacoes">Observações</Label>
                    <Input id="observacoes" placeholder="Observações adicionais..." />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={() => setIsDialogOpen(false)}>Registrar</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="movimentos" className="space-y-4">
          <TabsList>
            <TabsTrigger value="movimentos">Movimentos</TabsTrigger>
            <TabsTrigger value="estoque">Estoque Atual</TabsTrigger>
            <TabsTrigger value="triagem">Triagem</TabsTrigger>
            <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
          </TabsList>

          <TabsContent value="movimentos" className="space-y-4">
            {/* Search */}
            <div className="flex items-center space-x-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar movimentos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select defaultValue="todos">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="entrada">Entradas</SelectItem>
                  <SelectItem value="saida">Saídas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Lista de Movimentos */}
            <div className="space-y-4">
              {filteredMovimentos.map((movimento) => (
                <Card key={movimento.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {movimento.tipo === "entrada" ? (
                          <ArrowDown className="h-6 w-6 text-green-600" />
                        ) : (
                          <ArrowUp className="h-6 w-6 text-blue-600" />
                        )}
                        <div>
                          <h3 className="font-medium">{movimento.material}</h3>
                          <p className="text-sm text-gray-500">
                            {movimento.data} às {movimento.hora}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={getStatusColor(movimento.status)}>{getStatusText(movimento.status)}</Badge>
                        <Button size="sm" variant="outline">
                          <Edit className="h-3 w-3 mr-1" />
                          Editar
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Peso</p>
                        <p className="font-medium">{movimento.peso} kg</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{movimento.tipo === "entrada" ? "Origem" : "Destino"}</p>
                        <p className="font-medium">
                          {movimento.tipo === "entrada" ? movimento.origem : movimento.destino}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Responsável</p>
                        <p className="font-medium">{movimento.responsavel}</p>
                      </div>
                    </div>

                    {movimento.observacoes && (
                      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">
                          <strong>Observações:</strong> {movimento.observacoes}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="estoque" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {estoque.map((item, index) => {
                const percentual = getPercentualEstoque(item.peso_atual, item.peso_maximo)
                return (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{item.material}</span>
                        <Package className="h-5 w-5 text-gray-500" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Atual</span>
                            <span>
                              {item.peso_atual} / {item.peso_maximo} {item.unidade}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                percentual >= 80 ? "bg-red-500" : percentual >= 60 ? "bg-yellow-500" : "bg-green-500"
                              }`}
                              style={{ width: `${percentual}%` }}
                            />
                          </div>
                        </div>
                        <div className={`text-center p-2 rounded-lg ${getCorEstoque(percentual)}`}>
                          <span className="font-bold">{percentual}%</span>
                          <span className="text-xs block">da capacidade</span>
                        </div>
                        {percentual >= 80 && (
                          <div className="text-center">
                            <Button size="sm" variant="outline" className="w-full">
                              <ArrowUp className="h-3 w-3 mr-2" />
                              Programar Saída
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="triagem" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Controle de Triagem</CardTitle>
                <CardDescription>Acompanhe o processo de separação e classificação dos materiais</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">Materiais Aguardando Triagem</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Lote #001 - Material Misto</p>
                          <p className="text-sm text-gray-600">450 kg - Entrada: 30/01/2024</p>
                        </div>
                        <Button size="sm">Iniciar Triagem</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Lote #002 - Plásticos</p>
                          <p className="text-sm text-gray-600">280 kg - Entrada: 29/01/2024</p>
                        </div>
                        <Button size="sm">Iniciar Triagem</Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Triagem em Andamento</h3>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg bg-blue-50">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium">Lote #003 - Material Orgânico</p>
                          <Badge>Em Processo</Badge>
                        </div>
                        <p className="text-sm text-gray-600">320 kg - Responsável: Maria Santos</p>
                        <div className="mt-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Progresso</span>
                            <span>65%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-blue-500 h-1 rounded-full" style={{ width: "65%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="relatorios" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Resumo do Dia</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <ArrowDown className="h-4 w-4 mr-2 text-green-600" />
                        Entradas
                      </span>
                      <span className="font-bold">525 kg</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <ArrowUp className="h-4 w-4 mr-2 text-blue-600" />
                        Saídas
                      </span>
                      <span className="font-bold">380 kg</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <Recycle className="h-4 w-4 mr-2 text-purple-600" />
                        Processado
                      </span>
                      <span className="font-bold">420 kg</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Eficiência de Triagem</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">92%</div>
                      <p className="text-sm text-gray-600">Taxa de aproveitamento</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Material aproveitado</span>
                        <span>387 kg</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Material rejeitado</span>
                        <span>33 kg</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alertas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm font-medium text-red-800">Estoque Papel/Papelão</p>
                      <p className="text-xs text-red-600">Capacidade em 85% - Programar saída</p>
                    </div>
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm font-medium text-yellow-800">Triagem Pendente</p>
                      <p className="text-xs text-yellow-600">2 lotes aguardando processamento</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
