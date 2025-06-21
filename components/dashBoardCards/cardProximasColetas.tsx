"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

type ColetaAgendada = {
  id: number;
  endereco: string;
  dataHora: string;
  status: "pendente" | "em_andamento" | "finalizada";
};

export function CardProximasColetas() {
  const [coletas, setColetas] = useState<ColetaAgendada[]>([]);

  useEffect(() => {
    fetchColetas();
  }, []);

  const fetchColetas = async () => {
    try {
      const res = await fetch("/api/agendarColeta");
      const data = await res.json();
      setColetas(data);
    } catch (error) {
      console.error("Erro ao buscar coletas agendadas:", error);
    }
  };

  const atualizarStatus = async (id: number, novoStatus: ColetaAgendada["status"]) => {
    try {
      await fetch("/api/agendarColeta", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: novoStatus }),
      });
      fetchColetas(); // Recarrega os dados
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Próximas Coletas</CardTitle>
        <CardDescription>Agenda do dia</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {coletas.map((coleta) => (
            <div
              key={coleta.id}
              className="flex items-center justify-between p-3 border rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="font-medium">{coleta.endereco}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(coleta.dataHora).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge
                  variant={
                    coleta.status === "em_andamento"
                      ? "default"
                      : coleta.status === "finalizada"
                      ? "outline"
                      : "secondary"
                  }
                >
                  {coleta.status === "em_andamento"
                    ? "Em Andamento"
                    : coleta.status === "finalizada"
                    ? "Finalizada"
                    : "Pendente"}
                </Badge>

                {coleta.status === "pendente" && (
                  <Button
                    size="sm"
                    onClick={() => atualizarStatus(coleta.id, "em_andamento")}
                  >
                    Iniciar
                  </Button>
                )}

                {coleta.status === "em_andamento" && (
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => atualizarStatus(coleta.id, "finalizada")}
                  >
                    Finalizar
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}