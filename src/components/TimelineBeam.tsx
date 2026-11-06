import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface TimelineBeamProps {
  className?: string
  progress?: number
}

export function TimelineBeam({ className = '', progress = 1 }: TimelineBeamProps) {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (!pathRef.current) return

    const ctx = gsap.context(() => {
      const length = pathRef.current?.getTotalLength() || 300
      gsap.fromTo(
        pathRef.current,
        { strokeDasharray: length, strokeDashoffset: length },
        { strokeDashoffset: length * (1 - progress), duration: 1.2, ease: 'power2.out', delay: 0.3 }
      )
    })

    return () => ctx.revert()
  }, [progress])

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#13B8A6" stopOpacity="0" />
            <stop offset="50%" stopColor="#13B8A6" stopOpacity="1" />
            <stop offset="100%" stopColor="#F59E42" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d="M 50 50 L 950 50"
          fill="none"
          stroke="url(#beamGradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}