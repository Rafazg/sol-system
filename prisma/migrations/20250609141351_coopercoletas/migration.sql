-- CreateTable
CREATE TABLE "Coleta" (
    "id" SERIAL NOT NULL,
    "pontoColeta" TEXT NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "unidade" TEXT NOT NULL,
    "observacoes" TEXT,
    "localizacao" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Coleta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cooperativa" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cep" TEXT,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "responsavel" TEXT NOT NULL,
    "cargo" TEXT,
    "celular" TEXT,
    "website" TEXT,
    "descricao" TEXT,
    "status" TEXT NOT NULL DEFAULT 'ativa',
    "tipoMaterial" TEXT[],
    "capacidadeColeta" TEXT,
    "numeroFuncionarios" TEXT,
    "numeroVeiculos" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cooperativa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cooperativa_cnpj_key" ON "Cooperativa"("cnpj");
