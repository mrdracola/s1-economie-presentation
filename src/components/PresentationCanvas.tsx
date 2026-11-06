/**
 * PresentationCanvas
 * Apple Keynote-style borderless 16:9 stage container.
 * Constrains content positioning to the presentation aspect ratio while allowing
 * the outer slide background (including AmbientBackground) to fill the full screen.
 */

import type { ReactNode } from 'react'

interface PresentationCanvasProps {
  children: ReactNode
  className?: string
}

export function PresentationCanvas({ children, className = '' }: PresentationCanvasProps) {
  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={{ aspectRatio: '16 / 9', width: '100%', height: '100%' }}
    >
      <div className="relative w-full h-full overflow-hidden">
        {children}
      </div>
    </div>
  )
}