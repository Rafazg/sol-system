import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";

export function CardProximasColetas() {
  const proximasColetas = [
    {
      id: 1,
      endereco: "Rua das Flores, 123",
      horario: "09:00",
      status: "pendente",
    },
    {
      id: 2,
      endereco: "Av. Principal, 456",
      horario: "10:30",
      status: "em_andamento",
    },
    {
      id: 3,
      endereco: "Rua do Comércio, 789",
      horario: "14:00",
      status: "pendente",
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Próximas Coletas</CardTitle>
        <CardDescription>Agenda do dia</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {proximasColetas.map((coleta) => (
            <div
              key={coleta.id}
              className="flex items-center justify-between p-3 border rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="font-medium">{coleta.endereco}</p>
                  <p className="text-sm text-gray-500">{coleta.horario}</p>
                </div>
              </div>
              <Badge
                variant={
                  coleta.status === "em_andamento" ? "default" : "secondary"
                }
              >
                {coleta.status === "em_andamento" ? "Em Andamento" : "Pendente"}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
