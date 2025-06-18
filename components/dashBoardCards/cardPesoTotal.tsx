import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Weight } from "lucide-react";

interface Coleta {
  id: number;
  createdAt: string;
  peso: number;
  unidade: "kg" | "ton";
}

export function PesoTotalHojeCard() {
  const [pesoTotalTon, setPesoTotalTon] = useState<number>(0);

  useEffect(() => {
    fetch("/api/coleta")
      .then((res) => res.json())
      .then((data: Coleta[]) => {
        const hoje = new Date();

        const coletasHoje = data.filter((coleta) => {
          const dataColeta = new Date(coleta.createdAt);
          return (
            dataColeta.getDate() === hoje.getDate() &&
            dataColeta.getMonth() === hoje.getMonth() &&
            dataColeta.getFullYear() === hoje.getFullYear()
          );
        });

        const pesoTotalEmToneladas = coletasHoje.reduce((total, coleta) => {
          const pesoConvertido =
            coleta.unidade === "kg" ? coleta.peso / 1000 : coleta.peso;
          return total + pesoConvertido;
        }, 0);

        setPesoTotalTon(pesoTotalEmToneladas);
      })
      .catch((error) => {
        console.error("Erro ao buscar peso das coletas:", error);
        setPesoTotalTon(0);
      });
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Peso Total (ton)</CardTitle>
        <Weight className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{pesoTotalTon.toFixed(2)}</div>
        {/* <p className="text-xs text-muted-foreground">+0.3 ton hoje</p> */}
      </CardContent>
    </Card>
  );
}
