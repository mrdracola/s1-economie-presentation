interface SlideProgressProps {
  current: number
  total: number
  className?: string
}

export function SlideProgress({ current, total, className = '' }: SlideProgressProps) {
  const percentage = ((current + 1) / total) * 100

  return (
    <div
      className={`relative h-full bg-(--color-deep-navy) rounded-full overflow-hidden ${className}`}
      role="progressbar"
      aria-valuenow={current + 1}
      aria-valuemin={1}
      aria-valuemax={total}
      aria-label="Presentation progress"
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-(--color-teal) to-(--color-orange) transition-all duration-300 ease-out"
        style={{ width: `${percentage}%` }}
      />

      {/* Pulse animation on the progress fill */}
      <div
        className="absolute inset-0 bg-white/20 animate-pulse"
        style={{
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          opacity: percentage > 0 ? 0.3 : 0,
        }}
      />
    </div>
  )
}
