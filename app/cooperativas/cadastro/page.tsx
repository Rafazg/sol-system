"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Save, Building2, Users, Truck, MapPin } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";

export default function CadastroCooperativa() {
  const router = useRouter();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    nome: "",
    cnpj: "",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
    telefone: "",
    email: "",
    responsavel: "",
    cargo: "",
    celular: "",
    website: "",
    descricao: "",
    status: "ativa",
    tipoMaterial: [],
    capacidadeColeta: "",
    numeroFuncionarios: "",
    numeroVeiculos: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Limpa o erro quando o usuário começa a digitar
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Campos obrigatórios
    if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório";
    if (!formData.cnpj.trim()) newErrors.cnpj = "CNPJ é obrigatório";
    if (!formData.endereco.trim())
      newErrors.endereco = "Endereço é obrigatório";
    if (!formData.cidade.trim()) newErrors.cidade = "Cidade é obrigatória";
    if (!formData.estado.trim()) newErrors.estado = "Estado é obrigatório";
    if (!formData.telefone.trim())
      newErrors.telefone = "Telefone é obrigatório";
    if (!formData.email.trim()) newErrors.email = "Email é obrigatório";
    if (!formData.responsavel.trim())
      newErrors.responsavel = "Nome do responsável é obrigatório";

    // Validação de formato
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Formato de email inválido";
    }

    if (
      formData.cnpj &&
      !/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(formData.cnpj)
    ) {
      newErrors.cnpj = "Formato de CNPJ inválido (XX.XXX.XXX/XXXX-XX)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  console.log("🟡 handleSubmit foi chamado");

  if (!validateForm()) {
    toast({
      title: "Erro no formulário",
      description: "Por favor, corrija os campos destacados.",
      variant: "destructive",
    });
    return;
  }

  setIsSubmitting(true);

  try {
    console.log("📦 formData bruto:", formData);

    const payload = {
      ...formData,
      numeroFuncionarios: Number(formData.numeroFuncionarios) || 0,
      numeroVeiculos: Number(formData.numeroVeiculos) || 0,
      capacidadeColeta: (formData.capacidadeColeta || "").trim(),
      tipoMaterial: Array.isArray(formData.tipoMaterial)
        ? formData.tipoMaterial
        : [],
    };

    console.log("📦 payload final:", payload);

    const response = await fetch("/api/cooperativas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("✅ Resposta da API:", response.status);

    if (!response.ok) {
      throw new Error("Erro ao salvar cooperativa");
    }

    toast({
      title: "Cooperativa cadastrada!",
      description: `${formData.nome} foi cadastrada com sucesso.`,
      variant: "default",
    });

    router.push("/cooperativas");
  } catch (error) {
    console.error("❌ Erro no envio:", error);

    toast({
      title: "Erro ao cadastrar",
      description: "Ocorreu um erro ao cadastrar a cooperativa. Tente novamente.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                href="/cooperativas"
                className="flex items-center text-gray-600 hover:text-gray-900 mr-6"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Voltar para Cooperativas
              </Link>
              <h1 className="text-xl font-bold text-gray-900">
                Cadastro de Nova Cooperativa
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            {/* Informações Básicas */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5 text-blue-600" />
                  <CardTitle>Informações Básicas</CardTitle>
                </div>
                <CardDescription>
                  Dados principais da cooperativa
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="nome"
                    className={errors.nome ? "text-red-500" : ""}
                  >
                    Nome da Cooperativa *
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Nome completo da cooperativa"
                    className={errors.nome ? "border-red-500" : ""}
                  />
                  {errors.nome && (
                    <p className="text-xs text-red-500">{errors.nome}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="cnpj"
                    className={errors.cnpj ? "text-red-500" : ""}
                  >
                    CNPJ *
                  </Label>
                  <Input
                    id="cnpj"
                    name="cnpj"
                    value={formData.cnpj}
                    onChange={handleChange}
                    placeholder="XX.XXX.XXX/XXXX-XX"
                    className={errors.cnpj ? "border-red-500" : ""}
                  />
                  {errors.cnpj && (
                    <p className="text-xs text-red-500">{errors.cnpj}</p>
                  )}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="descricao">Descrição</Label>
                  <Textarea
                    id="descricao"
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleChange}
                    placeholder="Breve descrição sobre a cooperativa e suas atividades"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) =>
                      handleSelectChange("status", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ativa">Ativa</SelectItem>
                      <SelectItem value="inativa">Inativa</SelectItem>
                      <SelectItem value="pendente">Pendente</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://www.exemplo.com.br"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Endereço */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <CardTitle>Endereço</CardTitle>
                </div>
                <CardDescription>Localização da cooperativa</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <Label
                    htmlFor="endereco"
                    className={errors.endereco ? "text-red-500" : ""}
                  >
                    Endereço Completo *
                  </Label>
                  <Input
                    id="endereco"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleChange}
                    placeholder="Rua, número, complemento"
                    className={errors.endereco ? "border-red-500" : ""}
                  />
                  {errors.endereco && (
                    <p className="text-xs text-red-500">{errors.endereco}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="cidade"
                    className={errors.cidade ? "text-red-500" : ""}
                  >
                    Cidade *
                  </Label>
                  <Input
                    id="cidade"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    placeholder="Nome da cidade"
                    className={errors.cidade ? "border-red-500" : ""}
                  />
                  {errors.cidade && (
                    <p className="text-xs text-red-500">{errors.cidade}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="estado"
                      className={errors.estado ? "text-red-500" : ""}
                    >
                      Estado *
                    </Label>
                    <Input
                      id="estado"
                      name="estado"
                      value={formData.estado}
                      onChange={handleChange}
                      placeholder="UF"
                      maxLength={2}
                      className={errors.estado ? "border-red-500" : ""}
                    />
                    {errors.estado && (
                      <p className="text-xs text-red-500">{errors.estado}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cep">CEP</Label>
                    <Input
                      id="cep"
                      name="cep"
                      value={formData.cep}
                      onChange={handleChange}
                      placeholder="00000-000"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contato */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <CardTitle>Contato</CardTitle>
                </div>
                <CardDescription>
                  Informações de contato da cooperativa
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="telefone"
                    className={errors.telefone ? "text-red-500" : ""}
                  >
                    Telefone *
                  </Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(00) 0000-0000"
                    className={errors.telefone ? "border-red-500" : ""}
                  />
                  {errors.telefone && (
                    <p className="text-xs text-red-500">{errors.telefone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className={errors.email ? "text-red-500" : ""}
                  >
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contato@cooperativa.com.br"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="responsavel"
                    className={errors.responsavel ? "text-red-500" : ""}
                  >
                    Nome do Responsável *
                  </Label>
                  <Input
                    id="responsavel"
                    name="responsavel"
                    value={formData.responsavel}
                    onChange={handleChange}
                    placeholder="Nome completo"
                    className={errors.responsavel ? "border-red-500" : ""}
                  />
                  {errors.responsavel && (
                    <p className="text-xs text-red-500">{errors.responsavel}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cargo">Cargo do Responsável</Label>
                  <Input
                    id="cargo"
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleChange}
                    placeholder="Ex: Diretor, Presidente, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="celular">Celular do Responsável</Label>
                  <Input
                    id="celular"
                    name="celular"
                    value={formData.celular}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Capacidade Operacional */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-blue-600" />
                  <CardTitle>Capacidade Operacional</CardTitle>
                </div>
                <CardDescription>
                  Informações sobre a capacidade de operação
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="numeroFuncionarios">
                    Número de Funcionários
                  </Label>
                  <Input
                    id="numeroFuncionarios"
                    name="numeroFuncionarios"
                    type="number"
                    value={formData.numeroFuncionarios}
                    onChange={handleChange}
                    placeholder="0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="numeroVeiculos">Número de Veículos</Label>
                  <Input
                    id="numeroVeiculos"
                    name="numeroVeiculos"
                    type="number"
                    value={formData.numeroVeiculos}
                    onChange={handleChange}
                    placeholder="0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="capacidadeColeta">
                    Capacidade de Coleta (ton/mês)
                  </Label>
                  <Input
                    id="capacidadeColeta"
                    name="capacidadeColeta"
                    value={formData.capacidadeColeta}
                    onChange={handleChange}
                    placeholder="0"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Botões de Ação */}
            <CardFooter className="flex justify-end space-x-4 px-0">
              <Button
                variant="outline"
                type="button"
                onClick={() => router.push("/cooperativas")}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Salvando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Save className="h-4 w-4 mr-2" />
                    Salvar Cooperativa
                  </span>
                )}
              </Button>
            </CardFooter>
          </div>
        </form>
      </div>
    </div>
  );
}
