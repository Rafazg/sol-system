"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { AuthService } from "@/lib/auth"

export default function Unauthorized() {
  const user = AuthService.getCurrentUser()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <Shield className="h-6 w-6 text-red-600" />
          </div>
          <CardTitle className="text-red-600">Acesso Negado</CardTitle>
          <CardDescription>Você não tem permissão para acessar esta funcionalidade</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          {user && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Usuário:</strong> {user.name}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Perfil:</strong> {user.role}
              </p>
            </div>
          )}
          <p className="text-sm text-gray-600">
            Entre em contato com o administrador do sistema se você acredita que deveria ter acesso a esta área.
          </p>
          <div className="space-y-2">
            <Button asChild className="w-full">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao Dashboard
              </Link>
            </Button>
            <Button variant="outline" onClick={() => AuthService.logout()} className="w-full">
              Fazer Logout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
