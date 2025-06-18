"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AuthService } from "@/lib/auth"
import { Loader2 } from "lucide-react"

interface AuthGuardProps {
  children: React.ReactNode
  requiredRole?: string | string[]
  feature?: string
}

export function AuthGuard({ children, requiredRole, feature }: AuthGuardProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    const checkAuth = () => {
      // Verificar se está autenticado
      if (!AuthService.isAuthenticated()) {
        router.push("/login")
        return
      }

      // Verificar se a sessão expirou
      if (AuthService.isSessionExpired()) {
        AuthService.logout()
        router.push("/login")
        return
      }

      // Verificar permissões de role
      if (requiredRole && !AuthService.hasPermission(requiredRole)) {
        router.push("/unauthorized")
        return
      }

      // Verificar permissões de funcionalidade
      if (feature && !AuthService.canAccess(feature)) {
        router.push("/unauthorized")
        return
      }

      // Renovar sessão
      AuthService.renewSession()
      setIsAuthorized(true)
      setIsLoading(false)
    }

    checkAuth()
  }, [router, requiredRole, feature])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Verificando autenticação...</p>
        </div>
      </div>
    )
  }

  if (!isAuthorized) {
    return null
  }

  return <>{children}</>
}
