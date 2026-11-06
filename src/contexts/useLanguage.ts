import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

// Separate file to avoid fast-refresh issues with mixed context + hook exports
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
