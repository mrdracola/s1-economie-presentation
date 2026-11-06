import { createContext, useContext, useState, type ReactNode } from 'react'

export interface LanguageContextType {
  language: 'fr' | 'ar'
  setLanguage: (lang: 'fr' | 'ar') => void
}

// Context object — exported for advanced use; prefer useLanguage() hook
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'fr' | 'ar'>('fr')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
