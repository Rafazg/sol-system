"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Bell, Shield, Database, Mail, Smartphone } from "lucide-react"
import Link from "next/link"

export default function Configuracoes() {
  const [notificacoes, setNotificacoes] = useState({
    email: true,
    sms: false,
    push: true,
    relatorios: true,
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 mr-6">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Configurações do Sistema</h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="geral" className="space-y-4">
          <TabsList>
            <TabsTrigger value="geral">Geral</TabsTrigger>
            <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
            <TabsTrigger value="usuarios">Usuários</TabsTrigger>
            <TabsTrigger value="backup">Backup</TabsTrigger>
          </TabsList>

          <TabsContent value="geral" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações da Empresa</CardTitle>
                <CardDescription>Configure as informações básicas da organização</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome-empresa">Nome da Empresa</Label>
                    <Input id="nome-empresa" defaultValue="EcoColeta Gestão Ambiental" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cnpj-empresa">CNPJ</Label>
                    <Input id="cnpj-empresa" defaultValue="12.345.678/0001-90" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endereco-empresa">Endereço</Label>
                  <Input id="endereco-empresa" defaultValue="Rua da Sustentabilidade, 123 - Centro" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telefone-empresa">Telefone</Label>
                    <Input id="telefone-empresa" defaultValue="(11) 3333-3333" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-empresa">E-mail</Label>
                    <Input id="email-empresa" defaultValue="contato@ecocoleta.com" />
                  </div>
                </div>
                <Button>Salvar Alterações</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Configurações Operacionais</CardTitle>
                <CardDescription>Defina parâmetros para o funcionamento do sistema</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="unidade-peso">Unidade de Peso Padrão</Label>
                    <Select defaultValue="kg">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kg">Quilogramas (kg)</SelectItem>
                        <SelectItem value="ton">Toneladas (ton)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fuso-horario">Fuso Horário</Label>
                    <Select defaultValue="america-sao_paulo">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="america-sao_paulo">América/São Paulo (UTC-3)</SelectItem>
                        <SelectItem value="america-manaus">América/Manaus (UTC-4)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="limite-fotos">Limite de Fotos por Coleta</Label>
                  <Input id="limite-fotos" type="number" defaultValue="5" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tempo-sessao">Tempo de Sessão (minutos)</Label>
                  <Input id="tempo-sessao" type="number" defaultValue="480" />
                </div>
                <Button>Salvar Configurações</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notificacoes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Configurações de Notificações
                </CardTitle>
                <CardDescription>Configure como e quando receber notificações</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        <Label>Notificações por E-mail</Label>
                      </div>
                      <p className="text-sm text-gray-600">Receba alertas importantes por e-mail</p>
                    </div>
                    <Switch
                      checked={notificacoes.email}
                      onCheckedChange={(checked) => setNotificacoes({ ...notificacoes, email: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="flex items-center">
                        <Smartphone className="h-4 w-4 mr-2" />
                        <Label>Notificações SMS</Label>
                      </div>
                      <p className="text-sm text-gray-600">Receba alertas críticos por SMS</p>
                    </div>
                    <Switch
                      checked={notificacoes.sms}
                      onCheckedChange={(checked) => setNotificacoes({ ...notificacoes, sms: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="flex items-center">
                        <Bell className="h-4 w-4 mr-2" />
                        <Label>Notificações Push</Label>
                      </div>
                      <p className="text-sm text-gray-600">Receba notificações no navegador</p>
                    </div>
                    <Switch
                      checked={notificacoes.push}
                      onCheckedChange={(checked) => setNotificacoes({ ...notificacoes, push: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Relatórios Automáticos</Label>
                      <p className="text-sm text-gray-600">Receba relatórios semanais por e-mail</p>
                    </div>
                    <Switch
                      checked={notificacoes.relatorios}
                      onCheckedChange={(checked) => setNotificacoes({ ...notificacoes, relatorios: checked })}
                    />
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium mb-4">Tipos de Alertas</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="alerta-manutencao" defaultChecked />
                      <Label htmlFor="alerta-manutencao">Manutenções vencidas</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="alerta-cnh" defaultChecked />
                      <Label htmlFor="alerta-cnh">CNH próxima do vencimento</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="alerta-estoque" defaultChecked />
                      <Label htmlFor="alerta-estoque">Estoque próximo da capacidade</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="alerta-coleta" />
                      <Label htmlFor="alerta-coleta">Coletas atrasadas</Label>
                    </div>
                  </div>
                </div>

                <Button>Salvar Preferências</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usuarios" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Gestão de Usuários e Permissões
                </CardTitle>
                <CardDescription>Configure acessos e permissões do sistema</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Perfis de Acesso</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium">Motorista</h5>
                      <p className="text-sm text-gray-600 mb-3">Acesso limitado para registro de coletas</p>
                      <ul className="text-xs space-y-1">
                        <li>✓ Registrar coletas</li>
                        <li>✓ Ver histórico próprio</li>
                        <li>✗ Relatórios gerenciais</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium">Presidente Cooperativa</h5>
                      <p className="text-sm text-gray-600 mb-3">Acesso aos dados da cooperativa</p>
                      <ul className="text-xs space-y-1">
                        <li>✓ Relatórios da cooperativa</li>
                        <li>✓ Gestão de motoristas</li>
                        <li>✗ Dados de outras cooperativas</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium">Administrador</h5>
                      <p className="text-sm text-gray-600 mb-3">Acesso completo ao sistema</p>
                      <ul className="text-xs space-y-1">
                        <li>✓ Todos os relatórios</li>
                        <li>✓ Configurações</li>
                        <li>✓ Gestão de usuários</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium">Gestor Público</h5>
                      <p className="text-sm text-gray-600 mb-3">Supervisão e acompanhamento</p>
                      <ul className="text-xs space-y-1">
                        <li>✓ Relatórios operacionais</li>
                        <li>✓ Monitoramento de rotas</li>
                        <li>✗ Configurações do sistema</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Configurações de Segurança</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Exigir autenticação de dois fatores</Label>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Logout automático após inatividade</Label>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Registrar log de atividades</Label>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <Button>Salvar Configurações</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backup" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  Backup e Recuperação
                </CardTitle>
                <CardDescription>Configure backups automáticos e recuperação de dados</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Configurações de Backup</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Frequência do Backup</Label>
                      <Select defaultValue="diario">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="diario">Diário</SelectItem>
                          <SelectItem value="semanal">Semanal</SelectItem>
                          <SelectItem value="mensal">Mensal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Horário do Backup</Label>
                      <Input type="time" defaultValue="02:00" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Retenção de Backups (dias)</Label>
                    <Input type="number" defaultValue="30" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Status dos Backups</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Último Backup</p>
                        <p className="text-sm text-gray-600">30/01/2024 às 02:00</p>
                      </div>
                      <span className="text-green-600 font-medium">Sucesso</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Próximo Backup</p>
                        <p className="text-sm text-gray-600">31/01/2024 às 02:00</p>
                      </div>
                      <span className="text-blue-600 font-medium">Agendado</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Ações</h4>
                  <div className="flex space-x-4">
                    <Button>Fazer Backup Agora</Button>
                    <Button variant="outline">Restaurar Backup</Button>
                    <Button variant="outline">Download Backup</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
