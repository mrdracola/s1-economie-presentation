import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PresentationNavigationProps {
  onPrevious: () => void
  onNext: () => void
  canGoPrevious: boolean
  canGoNext: boolean
  labels: {
    previous: string
    next: string
  }
}

export function PresentationNavigation({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  labels,
}: PresentationNavigationProps) {
  return (
    <div className="flex items-center gap-3 bg-(--color-primary-navy)/80 backdrop-blur-sm rounded-full p-1 border border-white/10">
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className="p-2 hover:bg-white/10 disabled:opacity-30 rounded-full text-(--color-off-white) transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-teal)"
        aria-label={labels.previous}
      >
        <ChevronLeft size={22} aria-hidden="true" />
      </button>
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className="p-2 hover:bg-white/10 disabled:opacity-30 rounded-full text-(--color-off-white) transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-teal)"
        aria-label={labels.next}
      >
        <ChevronRight size={22} aria-hidden="true" />
      </button>
    </div>
  )
}