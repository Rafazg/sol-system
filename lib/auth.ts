"use client"

export interface User {
  id: number
  email: string
  name: string
  role: "motorista" | "cooperativa" | "admin" | "gestor"
  cooperativa?: string | null
  loginTime: string
  rememberMe: boolean
}

export interface AccessLog {
  userId: number
  email: string
  role: string
  timestamp: string
  ip: string
  userAgent: string
}

export class AuthService {
  private static readonly USER_KEY = "ecoColeta_user"
  private static readonly REMEMBER_KEY = "ecoColeta_rememberMe"
  private static readonly LOGS_KEY = "ecoColeta_accessLogs"

  // Verificar se o usuário está autenticado
  static isAuthenticated(): boolean {
    if (typeof window === "undefined") return false

    const user = this.getCurrentUser()
    return user !== null
  }

  // Obter usuário atual
  static getCurrentUser(): User | null {
    if (typeof window === "undefined") return null

    try {
      // Verificar primeiro no localStorage (remember me)
      const rememberedUser = localStorage.getItem(this.USER_KEY)
      if (rememberedUser) {
        return JSON.parse(rememberedUser)
      }

      // Verificar no sessionStorage
      const sessionUser = sessionStorage.getItem(this.USER_KEY)
      if (sessionUser) {
        return JSON.parse(sessionUser)
      }

      return null
    } catch (error) {
      console.error("Erro ao obter usuário:", error)
      return null
    }
  }

  // Verificar permissões
  static hasPermission(requiredRole: string | string[]): boolean {
    const user = this.getCurrentUser()
    if (!user) return false

    const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole]
    return roles.includes(user.role)
  }

  // Verificar se pode acessar funcionalidade específica
  static canAccess(feature: string): boolean {
    const user = this.getCurrentUser()
    if (!user) return false

    const permissions = {
      motorista: ["nova_coleta", "historico_proprio"],
      cooperativa: [
        "nova_coleta",
        "veiculos_view",
        "veiculos_add",
        "motoristas_cooperativa",
        "relatorios_cooperativa",
        "pontos_coleta",
        "rotas_view",
        "rotas_add",
      ],
      admin: [
        "nova_coleta",
        "veiculos_view",
        "veiculos_add",
        "motoristas_full",
        "cooperativas_full",
        "relatorios_full",
        "pontos_coleta_full",
        "rotas_view",
        "rotas_add",
        "rotas_full",
        "materiais_full",
        "configuracoes",
        "usuarios",
      ],
      gestor: ["relatorios_full", "cooperativas_view", "pontos_coleta_view", "monitoramento"],
    }

    return permissions[user.role]?.includes(feature) || false
  }

  // Fazer logout
  static logout(): void {
    if (typeof window === "undefined") return

    // Registrar log de logout
    const user = this.getCurrentUser()
    if (user) {
      const logoutLog: AccessLog = {
        userId: user.id,
        email: user.email,
        role: user.role,
        timestamp: new Date().toISOString(),
        ip: "192.168.1.1", // Em produção, pegar IP real
        userAgent: navigator.userAgent,
      }

      const logs = this.getAccessLogs()
      logs.push({ ...logoutLog, action: "logout" })
      localStorage.setItem(this.LOGS_KEY, JSON.stringify(logs))
    }

    // Limpar dados de autenticação
    localStorage.removeItem(this.USER_KEY)
    localStorage.removeItem(this.REMEMBER_KEY)
    sessionStorage.removeItem(this.USER_KEY)
  }

  // Obter logs de acesso
  static getAccessLogs(): AccessLog[] {
    if (typeof window === "undefined") return []

    try {
      const logs = localStorage.getItem(this.LOGS_KEY)
      return logs ? JSON.parse(logs) : []
    } catch (error) {
      console.error("Erro ao obter logs:", error)
      return []
    }
  }

  // Verificar se a sessão expirou
  static isSessionExpired(): boolean {
    const user = this.getCurrentUser()
    if (!user) return true

    // Se "lembrar de mim" estiver ativo, não expira
    if (user.rememberMe) return false

    // Verificar se passou mais de 8 horas desde o login
    const loginTime = new Date(user.loginTime)
    const now = new Date()
    const diffHours = (now.getTime() - loginTime.getTime()) / (1000 * 60 * 60)

    return diffHours > 8
  }

  // Renovar sessão
  static renewSession(): void {
    const user = this.getCurrentUser()
    if (!user) return

    const updatedUser = {
      ...user,
      loginTime: new Date().toISOString(),
    }

    if (user.rememberMe) {
      localStorage.setItem(this.USER_KEY, JSON.stringify(updatedUser))
    } else {
      sessionStorage.setItem(this.USER_KEY, JSON.stringify(updatedUser))
    }
  }
}
