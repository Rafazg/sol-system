import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Package } from "lucide-react";

interface Coleta {
  id: number;
  createdAt: string;
}

export function ColetasHojeCard() {
  const [coletasHoje, setColetasHoje] = useState<number>(0);

  useEffect(() => {
    fetch("/api/coleta")
      .then((res) => res.json())
      .then((data: Coleta[]) => {
        const hoje = new Date();
        const coletasDoDia = data.filter((coleta) => {
          const dataColeta = new Date(coleta.createdAt);
          return (
            dataColeta.getDate() === hoje.getDate() &&
            dataColeta.getMonth() === hoje.getMonth() &&
            dataColeta.getFullYear() === hoje.getFullYear()
          );
        });
        setColetasHoje(coletasDoDia.length);
      })
      .catch((error) => {
        console.error("Erro ao buscar coletas:", error);
        setColetasHoje(0);
      });
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Coletas Hoje</CardTitle>
        <Package className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{coletasHoje}</div>
        {/* <p className="text-xs text-muted-foreground">+2 desde ontem</p> */}
      </CardContent>
    </Card>
  );
}
