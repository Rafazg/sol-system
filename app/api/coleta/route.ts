import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export async function GET() {
  try {
    const coletas = await prisma.coleta.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5, // último 5 registros, pode mudar conforme quiser
    });

    return new Response(JSON.stringify(coletas), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ sucesso: false, erro: "Erro ao buscar coletas" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const novaColeta = await prisma.coleta.create({
      data: {
        pontoColeta: data.pontoColeta,
        peso: parseFloat(data.peso),
        unidade: data.unidade,
        observacoes: data.observacoes || "",
        localizacao: data.localizacao || null,
      },
    })

    return NextResponse.json({ sucesso: true, coleta: novaColeta })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ sucesso: false, erro: "Erro ao registrar coleta" }, { status: 500 })
  }
}