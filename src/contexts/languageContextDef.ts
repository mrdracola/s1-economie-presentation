import { createContext } from 'react'

export interface LanguageContextType {
  language: 'fr' | 'ar'
  setLanguage: (lang: 'fr' | 'ar') => void
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)
