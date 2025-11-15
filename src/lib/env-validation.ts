interface EnvironmentConfig {
  NODE_ENV: 'development' | 'production' | 'test'
  OPENAI_API_KEY?: string
  ERROR_WEBHOOK_URL?: string
  PERFORMANCE_WEBHOOK_URL?: string
  ANALYTICS_API_KEY?: string
  DATABASE_URL?: string
}

class EnvironmentValidator {
  private config: EnvironmentConfig
  private warnings: string[] = []
  private errors: string[] = []

  constructor() {
    this.config = this.loadConfig()
    this.validate()
  }

  private loadConfig(): EnvironmentConfig {
    return {
      NODE_ENV: (process.env.NODE_ENV as EnvironmentConfig['NODE_ENV']) || 'development',
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
      ERROR_WEBHOOK_URL: process.env.ERROR_WEBHOOK_URL,
      PERFORMANCE_WEBHOOK_URL: process.env.PERFORMANCE_WEBHOOK_URL,
      ANALYTICS_API_KEY: process.env.ANALYTICS_API_KEY,
      DATABASE_URL: process.env.DATABASE_URL,
    }
  }

  private validate() {
    this.validateNodeEnv()
    this.validateOptionalServices()
    this.validateProductionRequirements()
    this.logValidationResults()
  }

  private validateNodeEnv() {
    if (!['development', 'production', 'test'].includes(this.config.NODE_ENV)) {
      this.errors.push(`Invalid NODE_ENV: ${this.config.NODE_ENV}. Must be 'development', 'production', or 'test'`)
    }
  }

  private validateOptionalServices() {
    // Skip validation during build time (Vercel sets NEXT_PHASE during builds)
    const isBuildTime = process.env.NEXT_PHASE === 'phase-production-build' ||
                        process.env.VERCEL_ENV === undefined

    // Only show warnings at runtime, not during build
    if (isBuildTime) {
      return
    }

    if (!this.config.OPENAI_API_KEY) {
      this.warnings.push('OPENAI_API_KEY not set - AI chat will run in demo mode')
    }

    if (!this.config.ERROR_WEBHOOK_URL && this.config.NODE_ENV === 'production') {
      this.warnings.push('ERROR_WEBHOOK_URL not set - error notifications disabled')
    }

    if (!this.config.PERFORMANCE_WEBHOOK_URL && this.config.NODE_ENV === 'production') {
      this.warnings.push('PERFORMANCE_WEBHOOK_URL not set - performance alerts disabled')
    }

    if (!this.config.ANALYTICS_API_KEY && this.config.NODE_ENV === 'production') {
      this.warnings.push('ANALYTICS_API_KEY not set - analytics tracking disabled')
    }
  }

  private validateProductionRequirements() {
    if (this.config.NODE_ENV === 'production') {
      const requiredForProduction: (keyof EnvironmentConfig)[] = []
      
      requiredForProduction.forEach(key => {
        if (!this.config[key]) {
          this.errors.push(`${key} is required in production but not set`)
        }
      })

      // Additional production checks
      if (this.config.OPENAI_API_KEY && !this.config.OPENAI_API_KEY.startsWith('sk-')) {
        this.warnings.push('OPENAI_API_KEY may be invalid - should start with "sk-"')
      }

      if (this.config.DATABASE_URL && !this.config.DATABASE_URL.includes('://')) {
        this.warnings.push('DATABASE_URL may be invalid - should be a valid connection string')
      }
    }
  }

  private logValidationResults() {
    // Skip logging during build time to avoid confusing build logs
    const isBuildTime = process.env.NEXT_PHASE === 'phase-production-build' ||
                        process.env.VERCEL_ENV === undefined

    if (isBuildTime) {
      return
    }

    if (this.errors.length > 0) {
      console.error('🚨 Environment Configuration Errors:')
      this.errors.forEach(error => console.error(`  ❌ ${error}`))
    }

    if (this.warnings.length > 0) {
      console.warn('⚠️ Environment Configuration Warnings:')
      this.warnings.forEach(warning => console.warn(`  ⚠️ ${warning}`))
    }

    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('✅ Environment configuration validated successfully')
    }
  }

  public getConfig(): EnvironmentConfig {
    return { ...this.config }
  }

  public hasErrors(): boolean {
    return this.errors.length > 0
  }

  public hasWarnings(): boolean {
    return this.warnings.length > 0
  }

  public getErrors(): string[] {
    return [...this.errors]
  }

  public getWarnings(): string[] {
    return [...this.warnings]
  }

  public isFeatureEnabled(feature: keyof EnvironmentConfig): boolean {
    return Boolean(this.config[feature])
  }
}

export const envValidator = new EnvironmentValidator()
export const env = envValidator.getConfig()

// Helper functions
export function requireEnv(key: string): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Environment variable ${key} is required but not set`)
  }
  return value
}

export function getOptionalEnv(key: string, defaultValue?: string): string | undefined {
  return process.env[key] || defaultValue
}

export function isDevelopment(): boolean {
  return env.NODE_ENV === 'development'
}

export function isProduction(): boolean {
  return env.NODE_ENV === 'production'
}

export function isTest(): boolean {
  return env.NODE_ENV === 'test'
}