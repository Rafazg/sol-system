import { PrismaClient } from "../../../prisma/src/generated/prisma-client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();


export async function GET() {
  try {
    const coletas = await prisma.coletaAgendada.findMany({
      orderBy: { dataHora: "asc" },
    });
    return NextResponse.json(coletas);
  } catch (error) {
    console.error("Erro ao buscar coletas agendadas:", error);
    return NextResponse.json({ message: "Erro" }, { status: 500 });
  }
}
export async function POST(request: Request) {
  const body = await request.json();

  try {
    const agendamento = await prisma.coletaAgendada.create({
      data: {
        pontoColeta: body.pontoColeta,
        endereco: body.endereco,
        dataHora: new Date(body.dataHora),
        status: "pendente"
      }
    });

    return NextResponse.json(agendamento, { status: 201 });
  } catch (error) {
    console.error("Erro ao agendar coleta", error);
    return NextResponse.json({ message: "Erro ao agendar coleta" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    const updated = await prisma.coletaAgendada.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Erro ao atualizar status da coleta:", error);
    return NextResponse.json({ message: "Erro ao atualizar status" }, { status: 500 });
  }
}
