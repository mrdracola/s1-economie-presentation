import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface StudyClockProps {
  mode?: 'weekday' | 'weekend'
  className?: string
  size?: number
}

export function StudyClock({ mode = 'weekday', className = '', size = 160 }: StudyClockProps) {
  const clockRef = useRef<SVGSVGElement>(null)
  const hourHandRef = useRef<SVGLineElement>(null)
  const minuteHandRef = useRef<SVGLineElement>(null)
  const arcRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (!clockRef.current) return

    const ctx = gsap.context(() => {
      const targetHourRotation = mode === 'weekday' ? 540 : 270

      if (hourHandRef.current && minuteHandRef.current && arcRef.current) {
        gsap.set([hourHandRef.current, minuteHandRef.current, arcRef.current], { autoAlpha: 1 })

        gsap.fromTo(
          hourHandRef.current,
          { rotation: 0, transformOrigin: '50px 50px' },
          { rotation: targetHourRotation, duration: 1.2, ease: 'power3.out', delay: 0.2 }
        )
        gsap.fromTo(
          minuteHandRef.current,
          { rotation: 0, transformOrigin: '50px 50px' },
          { rotation: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
        )
        gsap.fromTo(
          arcRef.current,
          { strokeDasharray: 251, strokeDashoffset: 251, autoAlpha: 0 },
          { strokeDashoffset: mode === 'weekday' ? 90 : 125, autoAlpha: 1, duration: 1.5, ease: 'power2.out', delay: 0.4 }
        )
      }
    }, clockRef)

    return () => ctx.revert()
  }, [mode])

  return (
    <div className={`relative flex items-center justify-center opacity-0 gsap-clock-root ${className}`}>
      <svg
        ref={clockRef}
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="drop-shadow-lg"
      >
        <defs>
          <linearGradient id="clockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#13B8A6" />
            <stop offset="100%" stopColor="#F59E42" />
          </linearGradient>
        </defs>

        {/* Clock outer ring */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="#10243A"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
        />

        {/* Highlight Arc for Study Window */}
        <path
          ref={arcRef}
          d="M 50 50 L 50 4 A 46 46 0 0 1 92 65 Z"
          fill="url(#clockGradient)"
          opacity="0.3"
          style={{ visibility: 'hidden' }}
        />

        {/* Tick marks */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180
          const x1 = 50 + 38 * Math.sin(angle)
          const y1 = 50 - 38 * Math.cos(angle)
          const x2 = 50 + 42 * Math.sin(angle)
          const y2 = 50 - 42 * Math.cos(angle)
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={i % 3 === 0 ? '#13B8A6' : 'rgba(255,255,255,0.3)'}
              strokeWidth={i % 3 === 0 ? '2' : '1'}
            />
          )
        })}

        {/* Hour Hand */}
        <line
          ref={hourHandRef}
          x1="50"
          y1="50"
          x2="50"
          y2="28"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ visibility: 'hidden' }}
        />

        {/* Minute Hand */}
        <line
          ref={minuteHandRef}
          x1="50"
          y1="50"
          x2="50"
          y2="20"
          stroke="#13B8A6"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ visibility: 'hidden' }}
        />

        {/* Center dot */}
        <circle cx="50" cy="50" r="3.5" fill="#F59E42" />
      </svg>
    </div>
  )
}