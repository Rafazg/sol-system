import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Building2 } from "lucide-react";

export function CardTotalCooperativas() {
  const [totalCooperativas, setTotalCooperativas] = useState<number>(0);

  useEffect(() => {
    async function fetchCooperativaCount() {
      try {
        const response = await fetch("/api/cooperativas?count=true");
        const data = await response.json();
        setTotalCooperativas(data.total);
      } catch (error) {
        console.error("Erro ao buscar total de cooperativas:", error);
      }
    }

    fetchCooperativaCount();
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Cooperativas</CardTitle>
        <Building2 className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{totalCooperativas}</div>
        <p className="text-xs text-muted-foreground">Todas ativas</p>
      </CardContent>
    </Card>
  );
}