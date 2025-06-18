"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Users, TrendingUp, MapPin, Phone, Mail, Plus, Search, ArrowLeft, BarChart3 } from "lucide-react"
import Link from "next/link"
import CardListaCooperativas from "@/components/dashBoardCards/cardListaCooperativas";


export default function Cooperativas() {
  const [searchTerm, setSearchTerm] = useState("")
  const [cooperativas, setCooperativas] = useState([]);
  const [filteredCooperativas, setFilteredCooperativas] = useState([]);

  useEffect(() => {
  async function fetchCooperativas() {
    try {
      const response = await fetch("/api/cooperativas", { cache: "no-store" });
      const data = await response.json();
      setCooperativas(data);
      setFilteredCooperativas(data); // ou aplique filtros aqui se quiser
    } catch (error) {
      console.error("Erro ao buscar cooperativas:", error);
    }
  }

  fetchCooperativas();
}, []);

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
              <h1 className="text-xl font-bold text-gray-900">Gestão de Cooperativas</h1>
            </div>
          <Link href="/cooperativas/cadastro">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Nova Cooperativa
            </Button>
          </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar cooperativas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        <Tabs defaultValue="lista" className="space-y-4">
          <TabsList>
            <TabsTrigger value="lista">Lista de Cooperativas</TabsTrigger>
            <TabsTrigger value="desempenho">Desempenho</TabsTrigger>
            <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
          </TabsList>

          <TabsContent value="lista" className="space-y-4">
            <CardListaCooperativas />
          </TabsContent>

          <TabsContent value="desempenho">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cooperativas
                .filter((c) => c.status === "ativa")
                .map((cooperativa) => (
                  <Card key={cooperativa.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{cooperativa.nome}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Coletas/Mês</span>
                          <span className="font-bold">{cooperativa.coletas_mes}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Peso/Mês</span>
                          <span className="font-bold">{cooperativa.peso_mes} ton</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Eficiência</span>
                          <Badge variant="outline">
                            {((cooperativa.peso_mes / cooperativa.coletas_mes) * 1000).toFixed(0)} kg/coleta
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="relatorios">
            <Card>
              <CardHeader>
                <CardTitle>Relatórios de Cooperativas</CardTitle>
                <CardDescription>Análises detalhadas do desempenho das cooperativas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                    <BarChart3 className="h-6 w-6" />
                    <span>Desempenho Mensal</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                    <TrendingUp className="h-6 w-6" />
                    <span>Análise de Crescimento</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                    <Users className="h-6 w-6" />
                    <span>Recursos Humanos</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
