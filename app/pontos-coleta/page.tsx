"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MapPin, Plus, Search, ArrowLeft, Building2, Phone, Mail, Edit } from "lucide-react"
import Link from "next/link"

export default function PontosColeta() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const pontosColeta = [
    {
      id: 1,
      nome: "Supermercado Central",
      cnpj: "12.345.678/0001-90",
      endereco: "Rua das Flores, 123",
      bairro: "Centro",
      cidade: "São Paulo",
      cep: "01234-567",
      telefone: "(11) 3333-3333",
      email: "contato@supercentral.com",
      responsavel: "Ana Silva",
      tipo_material: "Orgânico",
      frequencia: "Diária",
      horario_coleta: "08:00 - 10:00",
      status: "ativo",
      ultima_coleta: "2024-01-30",
      peso_medio: 150,
    },
    {
      id: 2,
      nome: "Shopping Plaza",
      cnpj: "98.765.432/0001-10",
      endereco: "Av. Principal, 456",
      bairro: "Vila Nova",
      cidade: "São Paulo",
      cep: "04567-890",
      telefone: "(11) 4444-4444",
      email: "sustentabilidade@shoppingplaza.com",
      responsavel: "Carlos Santos",
      tipo_material: "Reciclável",
      frequencia: "3x por semana",
      horario_coleta: "14:00 - 16:00",
      status: "ativo",
      ultima_coleta: "2024-01-29",
      peso_medio: 320,
    },
    {
      id: 3,
      nome: "Mercado do Bairro",
      cnpj: "11.222.333/0001-44",
      endereco: "Rua do Comércio, 789",
      bairro: "Jardim América",
      cidade: "São Paulo",
      cep: "05678-901",
      telefone: "(11) 5555-5555",
      email: "gerencia@mercadobairro.com",
      responsavel: "Maria Costa",
      tipo_material: "Misto",
      frequencia: "2x por semana",
      horario_coleta: "10:00 - 12:00",
      status: "inativo",
      ultima_coleta: "2024-01-15",
      peso_medio: 85,
    },
  ]

  const filteredPontos = pontosColeta.filter(
    (ponto) =>
      ponto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ponto.cnpj.includes(searchTerm) ||
      ponto.endereco.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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
              <h1 className="text-xl font-bold text-gray-900">Pontos de Coleta</h1>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Ponto
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Cadastrar Novo Ponto de Coleta</DialogTitle>
                  <DialogDescription>Preencha as informações do novo ponto de coleta</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome do Estabelecimento</Label>
                    <Input id="nome" placeholder="Ex: Supermercado ABC" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cnpj">CNPJ</Label>
                    <Input id="cnpj" placeholder="00.000.000/0001-00" />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="endereco">Endereço</Label>
                    <Input id="endereco" placeholder="Rua, número" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" placeholder="(11) 9999-9999" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="contato@empresa.com" />
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
              placeholder="Buscar pontos de coleta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Tabs defaultValue="lista" className="space-y-4">
          <TabsList>
            <TabsTrigger value="lista">Lista de Pontos</TabsTrigger>
            <TabsTrigger value="mapa">Visualização no Mapa</TabsTrigger>
            <TabsTrigger value="estatisticas">Estatísticas</TabsTrigger>
          </TabsList>

          <TabsContent value="lista" className="space-y-4">
            <div className="grid gap-6">
              {filteredPontos.map((ponto) => (
                <Card key={ponto.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Building2 className="h-8 w-8 text-green-600" />
                        <div>
                          <CardTitle>{ponto.nome}</CardTitle>
                          <CardDescription>CNPJ: {ponto.cnpj}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={ponto.status === "ativo" ? "default" : "secondary"}>
                          {ponto.status === "ativo" ? "Ativo" : "Inativo"}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Edit className="h-3 w-3 mr-1" />
                          Editar
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {/* Localização */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Localização</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-start">
                            <MapPin className="h-3 w-3 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <div>{ponto.endereco}</div>
                              <div>
                                {ponto.bairro}, {ponto.cidade}
                              </div>
                              <div>CEP: {ponto.cep}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Contato */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Contato</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Phone className="h-3 w-3 mr-2" />
                            {ponto.telefone}
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-3 w-3 mr-2" />
                            {ponto.email}
                          </div>
                          <div>Responsável: {ponto.responsavel}</div>
                        </div>
                      </div>

                      {/* Coleta */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Informações de Coleta</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div>Material: {ponto.tipo_material}</div>
                          <div>Frequência: {ponto.frequencia}</div>
                          <div>Horário: {ponto.horario_coleta}</div>
                          <div>Peso médio: {ponto.peso_medio} kg</div>
                        </div>
                      </div>

                      {/* Status */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Status</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div>Última coleta: {new Date(ponto.ultima_coleta).toLocaleDateString()}</div>
                          <div className="pt-2">
                            <Button size="sm" variant="outline" className="w-full mb-2">
                              <MapPin className="h-3 w-3 mr-2" />
                              Ver no Mapa
                            </Button>
                            <Button size="sm" variant="outline" className="w-full">
                              Histórico
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
                <CardTitle>Mapa dos Pontos de Coleta</CardTitle>
                <CardDescription>Visualização geográfica dos pontos cadastrados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600">Mapa interativo será implementado aqui</p>
                    <p className="text-sm text-gray-500">Integração com Google Maps ou similar</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="estatisticas">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Resumo Geral</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total de Pontos</span>
                      <span className="font-bold">{pontosColeta.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pontos Ativos</span>
                      <span className="font-bold">{pontosColeta.filter((p) => p.status === "ativo").length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Peso Médio Total</span>
                      <span className="font-bold">
                        {Math.round(pontosColeta.reduce((acc, p) => acc + p.peso_medio, 0) / pontosColeta.length)} kg
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Por Tipo de Material</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Orgânico</span>
                      <span className="font-bold">1</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reciclável</span>
                      <span className="font-bold">1</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Misto</span>
                      <span className="font-bold">1</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Por Frequência</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Diária</span>
                      <span className="font-bold">1</span>
                    </div>
                    <div className="flex justify-between">
                      <span>3x por semana</span>
                      <span className="font-bold">1</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2x por semana</span>
                      <span className="font-bold">1</span>
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
