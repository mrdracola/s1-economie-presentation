import { useLanguage } from '../contexts/LanguageContext'
import { Languages } from 'lucide-react'
import { translations } from '../data/translations'

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'ar' : 'fr')
  }

  const t = translations[language]
  const nextLabel = language === 'fr' ? t.languages.ar : t.languages.fr

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-4 py-2 bg-(--color-primary-navy)/80 hover:bg-(--color-primary-navy) backdrop-blur-sm rounded-full text-(--color-off-white) transition-all duration-200 border border-white/10 font-medium text-sm ${className}`}
      aria-label={t.nav.language}
    >
      <Languages size={16} strokeWidth={2} aria-hidden="true" />
      <span>{nextLabel}</span>
    </button>
  )
}
