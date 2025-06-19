import { PrismaClient } from "../../../prisma/src/generated/prisma-client";
import { NextResponse } from "next/server"

const prisma = new PrismaClient();

export async function GET(request: Request){
  const { searchParams } = new URL(request.url);
  const countOnly = searchParams.get("count");
  try{
    if (countOnly === "true") {
      const total = await prisma.cooperativa.count();
      return NextResponse.json({ total });
    }
    
    const cooperativas = await prisma.cooperativa.findMany();
    return NextResponse.json(cooperativas);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Erro ao buscar cooperativas" }, { status: 500})
  }
}

export async function POST(request: Request) {
  const body = await request.json()

  try {
    const novaCooperativa = await prisma.cooperativa.create({
      data: {
      nome: body.nome,
      cnpj: body.cnpj,
      endereco: body.endereco,
      cidade: body.cidade,
      estado: body.estado,
      cep: body.cep,
      telefone: body.telefone,
      email: body.email,
      responsavel: body.responsavel,
      cargo: body.cargo,
      celular: body.celular,
      website: body.website,
      descricao: body.descricao,
      status: body.status,
      tipoMaterial: body.tipoMaterial,
      capacidadeColeta: body.capacidadeColeta,
      numeroFuncionarios: body.numeroFuncionarios,
      numeroVeiculos: body.numeroVeiculos,
      },
    })

    return NextResponse.json(novaCooperativa, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: "Erro ao salvar cooperativa" }, { status: 500 })
  }
}