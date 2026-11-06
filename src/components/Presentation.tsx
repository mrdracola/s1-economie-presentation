import { useEffect } from 'react'
import { PhaseBadge } from './PhaseBadge'
import { AmbientBackground } from './AmbientBackground'
import { Clock } from 'lucide-react'
import { usePresentationNavigation } from '../hooks/usePresentationNavigation'
import { useFullscreen } from '../hooks/useFullscreen'
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext'

interface PresentationProps {
  totalSlides: number
  demoSlides: ((props: { language: 'fr' | 'ar' }) => React.ReactElement)[]
}

function PresentationInner({ totalSlides, demoSlides }: PresentationProps) {
  const { currentSlide, goToNextSlide, goToPreviousSlide } = usePresentationNavigation(totalSlides)
  const { isFullscreen, toggleFullscreen } = useFullscreen()
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        goToNextSlide()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goToPreviousSlide()
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault()
        toggleFullscreen()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [goToNextSlide, goToPreviousSlide, toggleFullscreen])

  const SlideComponent = demoSlides[currentSlide]
  // Slide 0 is dark navy; all others are off-white
  const isDark = currentSlide === 0
  const slideBg = isDark ? 'var(--color-deep-navy)' : 'var(--color-off-white)'
  const ambientVariant = isDark ? 'dark' : 'light'

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Outer viewport background — full screen bleed */}
      <div
        className="absolute inset-0"
        style={{ background: slideBg, transition: 'background 0.4s ease' }}
      />

      {/* Living Ambient Background — GSAP-animated drifting orbs */}
      <AmbientBackground variant={ambientVariant} className="absolute inset-0 z-0" />

      {/* Slide Content — full screen with safe padding inside */}
      <div className="relative z-10 w-full h-full px-[6%] py-[4%]">
        <SlideComponent language={language} />
      </div>

      {/* Top HUD */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-2 bg-(--color-deep-navy)/70 backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-(--color-teal)" />
          <span className="text-xs font-medium text-(--color-muted) tracking-wide">
            {language === 'fr' ? 'Présentation Académique' : 'العرض التقديمي الأكاديمي'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center gap-1 bg-white/8 rounded-full p-0.5">
            <button
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                language === 'fr'
                  ? 'bg-(--color-teal) text-(--color-deep-navy)'
                  : 'text-(--color-muted) hover:text-white'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage('ar')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                language === 'ar'
                  ? 'bg-(--color-teal) text-(--color-deep-navy)'
                  : 'text-(--color-muted) hover:text-white'
              }`}
            >
              AR
            </button>
          </div>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="w-7 h-7 bg-white/8 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors"
            title={isFullscreen ? 'Quitter plein écran' : 'Plein écran'}
          >
            {isFullscreen ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Side navigation */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2">
        <button
          onClick={goToPreviousSlide}
          disabled={currentSlide === 0}
          aria-label="Slide précédente"
          className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={goToNextSlide}
          disabled={currentSlide === totalSlides - 1}
          aria-label="Slide suivante"
          className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Bottom progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-0.5 bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-(--color-teal) to-(--color-orange) transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-3 right-6 z-30 text-xs text-(--color-muted) font-mono">
        {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
      </div>

      {/* Step badge bottom-left */}
      <div className="absolute bottom-3 left-6 z-30">
        <PhaseBadge
          label={language === 'fr' ? `Slide ${currentSlide + 1}` : `الشريحة ${currentSlide + 1}`}
          variant="teal"
          className="text-[10px] py-0.5"
        />
      </div>
    </div>
  )
}

import React from 'react'

export function Presentation({ totalSlides, demoSlides }: PresentationProps) {
  return (
    <LanguageProvider>
      <PresentationInner totalSlides={totalSlides} demoSlides={demoSlides} />
    </LanguageProvider>
  )
}
