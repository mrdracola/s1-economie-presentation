import type { ReactNode } from 'react'

interface SlideFrameProps {
  children: ReactNode
  className?: string
}

export function SlideFrame({ children, className = '' }: SlideFrameProps) {
  return (
    <div className={`relative w-full h-full flex flex-col ${className}`}
      style={{ background: 'transparent', padding: 0 }}
    >
      {children}
    </div>
  )
}
