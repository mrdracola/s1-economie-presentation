import { useState, useCallback } from 'react'

interface UsePresentationNavigationReturn {
  currentSlide: number
  isFirstSlide: boolean
  isLastSlide: boolean
  goToNextSlide: () => void
  goToPreviousSlide: () => void
  goToFirstSlide: () => void
  goToLastSlide: () => void
  canGoNext: boolean
  canGoPrevious: boolean
}

export function usePresentationNavigation(totalSlides: number): UsePresentationNavigationReturn {
  const [currentSlide, setCurrentSlide] = useState(0)

  const isFirstSlide = currentSlide === 0
  const isLastSlide = currentSlide === totalSlides - 1

  const goToNextSlide = useCallback(() => {
    if (!isLastSlide) setCurrentSlide((prev) => prev + 1)
  }, [isLastSlide])

  const goToPreviousSlide = useCallback(() => {
    if (!isFirstSlide) setCurrentSlide((prev) => prev - 1)
  }, [isFirstSlide])

  const goToFirstSlide = useCallback(() => {
    if (!isFirstSlide) setCurrentSlide(0)
  }, [isFirstSlide])

  const goToLastSlide = useCallback(() => {
    if (!isLastSlide) setCurrentSlide(totalSlides - 1)
  }, [isLastSlide, totalSlides])

  return {
    currentSlide,
    isFirstSlide,
    isLastSlide,
    goToNextSlide,
    goToPreviousSlide,
    goToFirstSlide,
    goToLastSlide,
    canGoNext: !isLastSlide,
    canGoPrevious: !isFirstSlide,
  }
}
