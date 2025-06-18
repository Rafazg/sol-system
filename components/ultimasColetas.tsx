import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Coleta {
  id: number;
  pontoColeta: string;
  peso: number;
  unidade: "kg" | "ton";
  createdAt: string;
}

export default function UltimasColetas() {
  const [coletas, setColetas] = useState<Coleta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/coleta")
      .then((res) => res.json())
      .then((data) => {
        setColetas(data);
      })
      .catch(() => {
        setColetas([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Suas Últimas Coletas</CardTitle>
        <CardDescription>Histórico das suas coletas recentes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {coletas.length === 0 && <p>Nenhuma coleta encontrada.</p>}

          {coletas.map(({ id, pontoColeta, peso, unidade, createdAt }) => {
            const data = new Date(createdAt);
            const formattedDate = data.toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
            });
            const formattedTime = data.toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <div
                key={id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div>
                  <p className="font-medium">{pontoColeta}</p>
                  <p className="text-sm text-gray-500">
                    {peso} {unidade === "ton" ? "ton" : "kg"} - {formattedDate} {formattedTime}
                  </p>
                </div>
                <Badge>Concluída</Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
} 