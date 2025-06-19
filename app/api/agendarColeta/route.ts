import { PrismaClient } from "../../../prisma/src/generated/prisma-client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

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
