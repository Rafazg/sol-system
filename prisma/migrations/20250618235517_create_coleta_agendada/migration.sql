-- CreateTable
CREATE TABLE "ColetaAgendada" (
    "id" SERIAL NOT NULL,
    "pontoColeta" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "dataHora" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pendente',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ColetaAgendada_pkey" PRIMARY KEY ("id")
);
