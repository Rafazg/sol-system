"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, TrendingUp, Download, ArrowLeft, DollarSign, Truck, Weight } from "lucide-react"
import Link from "next/link"
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function Relatorios() {
  const coletasPorMes = [
    { mes: "Jan", coletas: 245, peso: 12.5 },
    { mes: "Fev", coletas: 289, peso: 14.2 },
    { mes: "Mar", coletas: 312, peso: 15.8 },
    { mes: "Abr", coletas: 298, peso: 14.9 },
    { mes: "Mai", coletas: 356, peso: 17.2 },
  ]

  const custoPorRota = [
    { rota: "Rota A", custo: 2500, coletas: 45 },
    { rota: "Rota B", custo: 3200, coletas: 62 },
    { rota: "Rota C", custo: 1800, coletas: 38 },
    { rota: "Rota D", custo: 2900, coletas: 55 },
  ]

  const desempenhoCooperativas = [
    { nome: "Cooperativa Verde", coletas: 245, peso: 12.5, eficiencia: 95 },
    { nome: "EcoRecicla", coletas: 389, peso: 18.7, eficiencia: 92 },
    { nome: "Recicla Mais", coletas: 156, peso: 7.2, eficiencia: 88 },
  ]

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
              <h1 className="text-xl font-bold text-gray-900">Relatórios e Análises</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Select defaultValue="mes">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="semana">Esta Semana</SelectItem>
                  <SelectItem value="mes">Este Mês</SelectItem>
                  <SelectItem value="trimestre">Trimestre</SelectItem>
                  <SelectItem value="ano">Este Ano</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="operacional" className="space-y-4">
          <TabsList>
            <TabsTrigger value="operacional">Operacional</TabsTrigger>
            <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
            <TabsTrigger value="cooperativas">Cooperativas</TabsTrigger>
            <TabsTrigger value="veiculos">Veículos</TabsTrigger>
          </TabsList>

          <TabsContent value="operacional" className="space-y-6">
            {/* Métricas Principais */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total de Coletas</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,500</div>
                  <p className="text-xs text-muted-foreground">+12% em relação ao mês anterior</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Peso Total (ton)</CardTitle>
                  <Weight className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">74.6</div>
                  <p className="text-xs text-muted-foreground">+8% em relação ao mês anterior</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Eficiência Média</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">92%</div>
                  <p className="text-xs text-muted-foreground">+3% em relação ao mês anterior</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Rotas Ativas</CardTitle>
                  <Truck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">Todas operacionais</p>
                </CardContent>
              </Card>
            </div>

            {/* Gráficos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Coletas por Mês</CardTitle>
                  <CardDescription>Evolução mensal das coletas realizadas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      coletas: {
                        label: "Coletas",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <BarChart data={coletasPorMes}>
                      <XAxis dataKey="mes" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="coletas" fill="var(--color-coletas)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Peso Coletado (Toneladas)</CardTitle>
                  <CardDescription>Evolução mensal do peso coletado</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      peso: {
                        label: "Peso (ton)",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <LineChart data={coletasPorMes}>
                      <XAxis dataKey="mes" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="peso" stroke="var(--color-peso)" strokeWidth={3} />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="financeiro" className="space-y-6">
            {/* Métricas Financeiras */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 45.200</div>
                  <p className="text-xs text-muted-foreground">+15% em relação ao mês anterior</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Custo Operacional</CardTitle>
                  <Truck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 32.800</div>
                  <p className="text-xs text-muted-foreground">+8% em relação ao mês anterior</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Lucro Líquido</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 12.400</div>
                  <p className="text-xs text-muted-foreground">+28% em relação ao mês anterior</p>
                </CardContent>
              </Card>
            </div>

            {/* Custo por Rota */}
            <Card>
              <CardHeader>
                <CardTitle>Custo por Rota</CardTitle>
                <CardDescription>Análise de custos operacionais por rota</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    custo: {
                      label: "Custo (R$)",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <BarChart data={custoPorRota}>
                    <XAxis dataKey="rota" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="custo" fill="var(--color-custo)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cooperativas" className="space-y-6">
            {/* Desempenho das Cooperativas */}
            <Card>
              <CardHeader>
                <CardTitle>Desempenho das Cooperativas</CardTitle>
                <CardDescription>Comparativo de performance entre cooperativas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {desempenhoCooperativas.map((coop, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{coop.nome}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold">{coop.coletas}</p>
                        <p className="text-xs text-gray-500">Coletas</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold">{coop.peso}</p>
                        <p className="text-xs text-gray-500">Toneladas</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold">{coop.eficiencia}%</p>
                        <p className="text-xs text-gray-500">Eficiência</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="veiculos" className="space-y-6">
            {/* Relatórios de Veículos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Utilização da Frota</CardTitle>
                  <CardDescription>Taxa de utilização dos veículos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Veículos Ativos</span>
                      <span className="font-bold">18/20</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Taxa de Utilização</span>
                      <span className="font-bold">90%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>KM Médio/Dia</span>
                      <span className="font-bold">245 km</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Manutenções</CardTitle>
                  <CardDescription>Status das manutenções da frota</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Manutenções Pendentes</span>
                      <span className="font-bold text-red-600">3</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Manutenções Este Mês</span>
                      <span className="font-bold">7</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Custo Médio</span>
                      <span className="font-bold">R$ 2.500</span>
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
