"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, MapPin, Phone, Mail,  BarChart3 } from "lucide-react"

interface Cooperativa {
  id: number;
  nome: string;
  cnpj: string;
  endereco: string;
  telefone: string;
  email: string;
  status: string;
  numeroFuncionarios: number;
  numeroVeiculos: number;
  capacidadeColeta: string; // ou number, se converter
  peso_mes: number;
}

export default function CardListaCooperativas() {
  
  const [filteredCooperativas, setFilteredCooperativas] = useState<Cooperativa[]>([]);

  useEffect(() => {
  async function fetchCooperativas() {
    try {
      const response = await fetch("/api/cooperativas", { cache: "no-store" });
      const data = await response.json();
      console.log("Dados das cooperativas:", data);
      setFilteredCooperativas(data); // ou aplique filtros aqui se quiser
    } catch (error) {
      console.error("Erro ao buscar cooperativas:", error);
    }
  }

  fetchCooperativas();
}, []);
    
    return (
        <div className="grid gap-6">
              {filteredCooperativas.map((cooperativa) => (
                <Card key={cooperativa.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Building2 className="h-8 w-8 text-blue-600" />
                        <div>
                          <CardTitle>{cooperativa.nome}</CardTitle>
                          <CardDescription>CNPJ: {cooperativa.cnpj}</CardDescription>
                        </div>
                      </div>
                      <Badge variant={cooperativa.status === "ativa" ? "default" : "secondary"}>
                        {cooperativa.status === "ativa" ? "Ativa" : "Inativa"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {/* Informações de Contato */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Contato</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 mr-2" />
                            {cooperativa.endereco}
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-3 w-3 mr-2" />
                            {cooperativa.telefone}
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-3 w-3 mr-2" />
                            {cooperativa.email}
                          </div>
                        </div>
                      </div>

                      {/* Recursos */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Recursos</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Users className="h-3 w-3 mr-2" />
                            {cooperativa.numeroFuncionarios} motoristas
                          </div>
                          <div className="flex items-center">
                            <Building2 className="h-3 w-3 mr-2" />
                            {cooperativa.numeroVeiculos} veículos
                          </div>
                        </div>
                      </div>

                      {/* Desempenho Mensal */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Este Mês</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div>{cooperativa.peso_mes} coletas</div>
                          <div>{cooperativa.capacidadeColeta} toneladas</div>
                        </div>
                      </div>

                      {/* Ações */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">Ações</h4>
                        <div className="space-y-2">
                          <Button size="sm" variant="outline" className="w-full">
                            <BarChart3 className="h-3 w-3 mr-2" />
                            Ver Relatório
                          </Button>
                          <Button size="sm" variant="outline" className="w-full">
                            Editar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
    )
}