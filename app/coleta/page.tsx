"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Camera, MapPin, Weight, CheckCircle, ArrowLeft, Upload, Trash2 } from "lucide-react"
import Link from "next/link"

export default function RegistroColeta() {
  const [step, setStep] = useState(1)
  const [coletaData, setColetaData] = useState({
    pontoColeta: "",
    peso: "",
    unidade: "kg",
    observacoes: "",
    fotos: [],
    localizacao: null,
  })

  const pontosColeta = [
    { id: 1, nome: "Supermercado Central", endereco: "Rua das Flores, 123", cnpj: "12.345.678/0001-90" },
    { id: 2, nome: "Shopping Plaza", endereco: "Av. Principal, 456", cnpj: "98.765.432/0001-10" },
    { id: 3, nome: "Mercado do Bairro", endereco: "Rua do Comércio, 789", cnpj: "11.222.333/0001-44" },
  ]

  const handleFotoUpload = (event) => {
    const files = Array.from(event.target.files)
    setColetaData((prev) => ({
      ...prev,
      fotos: [...prev.fotos, ...files],
    }))
  }

  const removeFoto = (index) => {
    setColetaData((prev) => ({
      ...prev,
      fotos: prev.fotos.filter((_, i) => i !== index),
    }))
  }

  const obterLocalizacao = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setColetaData((prev) => ({
            ...prev,
            localizacao: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          }))
        },
        (error) => {
          console.error("Erro ao obter localização:", error)
        },
      )
    }
  }

const finalizarColeta = async () => {
  try {
    const formData = new FormData()
    coletaData.fotos.forEach((foto, i) => {
      formData.append(`foto${i}`, foto)
    })

    const response = await fetch("/api/coleta", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pontoColeta: coletaData.pontoColeta,
        peso: coletaData.peso,
        unidade: coletaData.unidade,
        observacoes: coletaData.observacoes,
        localizacao: coletaData.localizacao,
      }),
    })

    if (response.ok) {
      const json = await response.json()
      console.log("Sucesso:", json)
      setStep(4)
    } else {
      console.error("Erro ao salvar coleta")
    }
  } catch (error) {
    console.error("Erro ao finalizar coleta:", error)
  }
}

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar ao Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= stepNumber ? "bg-green-600 text-white" : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {step > stepNumber ? <CheckCircle className="h-5 w-5" /> : stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-24 h-1 mx-4 ${step > stepNumber ? "bg-green-600" : "bg-gray-300"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Selecionar Ponto</span>
            <span>Registrar Dados</span>
            <span>Confirmar</span>
          </div>
        </div>

        {/* Step 1: Selecionar Ponto de Coleta */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Selecionar Ponto de Coleta
              </CardTitle>
              <CardDescription>Escolha o ponto de coleta onde você está localizado</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                {pontosColeta.map((ponto) => (
                  <div
                    key={ponto.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      coletaData.pontoColeta === ponto.id.toString()
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setColetaData((prev) => ({ ...prev, pontoColeta: ponto.id.toString() }))}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{ponto.nome}</h3>
                        <p className="text-sm text-gray-600">{ponto.endereco}</p>
                        <p className="text-xs text-gray-500">CNPJ: {ponto.cnpj}</p>
                      </div>
                      {coletaData.pontoColeta === ponto.id.toString() && (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={obterLocalizacao}>
                  <MapPin className="h-4 w-4 mr-2" />
                  Obter Localização Atual
                </Button>
                <Button onClick={() => setStep(2)} disabled={!coletaData.pontoColeta}>
                  Próximo
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Registrar Dados */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Weight className="h-5 w-5 mr-2" />
                Registrar Dados da Coleta
              </CardTitle>
              <CardDescription>Insira o peso coletado e tire fotos do material</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Peso */}
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Label htmlFor="peso">Peso Coletado</Label>
                  <Input
                    id="peso"
                    type="number"
                    placeholder="0.00"
                    value={coletaData.peso}
                    onChange={(e) => setColetaData((prev) => ({ ...prev, peso: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="unidade">Unidade</Label>
                  <Select
                    value={coletaData.unidade}
                    onValueChange={(value) => setColetaData((prev) => ({ ...prev, unidade: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">Quilogramas (kg)</SelectItem>
                      <SelectItem value="ton">Toneladas (ton)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Fotos */}
              <div>
                <Label>Fotos do Material</Label>
                <div className="mt-2">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Camera className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-4">Tire fotos do material coletado</p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFotoUpload}
                      className="hidden"
                      id="foto-upload"
                    />
                    <Button asChild variant="outline">
                      <label htmlFor="foto-upload" className="cursor-pointer">
                        <Upload className="h-4 w-4 mr-2" />
                        Selecionar Fotos
                      </label>
                    </Button>
                  </div>

                  {/* Preview das fotos */}
                  {coletaData.fotos.length > 0 && (
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      {coletaData.fotos.map((foto, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(foto) || "/placeholder.svg"}
                            alt={`Foto ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <Button
                            size="sm"
                            variant="destructive"
                            className="absolute top-1 right-1 h-6 w-6 p-0"
                            onClick={() => removeFoto(index)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Observações */}
              <div>
                <Label htmlFor="observacoes">Observações (opcional)</Label>
                <Textarea
                  id="observacoes"
                  placeholder="Adicione observações sobre a coleta..."
                  value={coletaData.observacoes}
                  onChange={(e) => setColetaData((prev) => ({ ...prev, observacoes: e.target.value }))}
                />
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Voltar
                </Button>
                <Button onClick={() => setStep(3)} disabled={!coletaData.peso || coletaData.fotos.length === 0}>
                  Próximo
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Confirmar */}
        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Confirmar Coleta
              </CardTitle>
              <CardDescription>Revise os dados antes de finalizar o registro</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Dados da Coleta</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Ponto:</strong>{" "}
                      {pontosColeta.find((p) => p.id.toString() === coletaData.pontoColeta)?.nome}
                    </p>
                    <p>
                      <strong>Peso:</strong> {coletaData.peso} {coletaData.unidade}
                    </p>
                    <p>
                      <strong>Data/Hora:</strong> {new Date().toLocaleString()}
                    </p>
                    <p>
                      <strong>Fotos:</strong> {coletaData.fotos.length} anexadas
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Localização</h3>
                  {coletaData.localizacao ? (
                    <div className="text-sm">
                      <p>
                        <strong>Latitude:</strong> {coletaData.localizacao.lat.toFixed(6)}
                      </p>
                      <p>
                        <strong>Longitude:</strong> {coletaData.localizacao.lng.toFixed(6)}
                      </p>
                      <Badge variant="outline" className="mt-2">
                        <MapPin className="h-3 w-3 mr-1" />
                        Localização Confirmada
                      </Badge>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">Localização não obtida</p>
                  )}
                </div>
              </div>

              {coletaData.observacoes && (
                <div>
                  <h3 className="font-medium mb-2">Observações</h3>
                  <p className="text-sm text-gray-600">{coletaData.observacoes}</p>
                </div>
              )}

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Voltar
                </Button>
                <Button onClick={finalizarColeta}>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Finalizar Coleta
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Sucesso */}
        {step === 4 && (
          <Card>
            <CardContent className="text-center py-12">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Coleta Registrada com Sucesso!</h2>
              <p className="text-gray-600 mb-6">Os dados foram salvos e estão disponíveis no histórico</p>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/">Voltar ao Dashboard</Link>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setStep(1)
                    setColetaData({
                      pontoColeta: "",
                      peso: "",
                      unidade: "kg",
                      observacoes: "",
                      fotos: [],
                      localizacao: null,
                    })
                  }}
                >
                  Nova Coleta
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
