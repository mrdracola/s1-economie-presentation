import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface WorkloadRingsProps {
  className?: string
  size?: number
}

export function WorkloadRings({ className = '', size = 180 }: WorkloadRingsProps) {
  const ringsRef = useRef<SVGSVGElement>(null)
  const ring1Ref = useRef<SVGCircleElement>(null)
  const ring2Ref = useRef<SVGCircleElement>(null)
  const ring3Ref = useRef<SVGCircleElement>(null)

  useEffect(() => {
    if (!ringsRef.current) return

    const ctx = gsap.context(() => {
      if (ring1Ref.current && ring2Ref.current && ring3Ref.current) {
        gsap.set([ring1Ref.current, ring2Ref.current, ring3Ref.current], { autoAlpha: 1 })

        const circ1 = 452.38
        const circ2 = 351.85
        const circ3 = 251.32

        gsap.fromTo(
          ring1Ref.current,
          { strokeDashoffset: circ1 },
          { strokeDashoffset: circ1 * (1 - 0.7), duration: 1.4, ease: 'power3.out', delay: 0.2 }
        )
        gsap.fromTo(
          ring2Ref.current,
          { strokeDashoffset: circ2 },
          { strokeDashoffset: circ2 * (1 - 0.5), duration: 1.4, ease: 'power3.out', delay: 0.4 }
        )
        gsap.fromTo(
          ring3Ref.current,
          { strokeDashoffset: circ3 },
          { strokeDashoffset: circ3 * (1 - 0.3), duration: 1.4, ease: 'power3.out', delay: 0.6 }
        )
      }
    }, ringsRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className={`relative flex items-center justify-center opacity-0 gsap-rings-root ${className}`}>
      <svg
        ref={ringsRef}
        viewBox="0 0 180 180"
        width={size}
        height={size}
        className="drop-shadow-xl"
      >
        {/* Background track rings */}
        <circle cx="90" cy="90" r="72" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
        <circle cx="90" cy="90" r="56" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
        <circle cx="90" cy="90" r="40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />

        {/* Ring 1: Mon-Fri (10h) - Teal */}
        <circle
          ref={ring1Ref}
          cx="90"
          cy="90"
          r="72"
          fill="none"
          stroke="#13B8A6"
          strokeWidth="12"
          strokeDasharray="452.38"
          strokeDashoffset="452.38"
          strokeLinecap="round"
          transform="rotate(-90 90 90)"
          style={{ visibility: 'hidden' }}
        />

        {/* Ring 2: Saturday (3h) - Orange */}
        <circle
          ref={ring2Ref}
          cx="90"
          cy="90"
          r="56"
          fill="none"
          stroke="#F59E42"
          strokeWidth="12"
          strokeDasharray="351.85"
          strokeDashoffset="351.85"
          strokeLinecap="round"
          transform="rotate(-90 90 90)"
          style={{ visibility: 'hidden' }}
        />

        {/* Ring 3: Sunday (3h + Buffer) - White / Accent */}
        <circle
          ref={ring3Ref}
          cx="90"
          cy="90"
          r="40"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="12"
          strokeDasharray="251.32"
          strokeDashoffset="251.32"
          strokeLinecap="round"
          transform="rotate(-90 90 90)"
          style={{ visibility: 'hidden' }}
        />

        {/* Center label */}
        <text
          x="90"
          y="86"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="22"
          fontWeight="800"
          fontFamily="Inter, sans-serif"
        >
          16h
        </text>
        <text
          x="90"
          y="106"
          textAnchor="middle"
          fill="#64748B"
          fontSize="10"
          fontWeight="600"
          letterSpacing="1.5"
        >
          TOTAL
        </text>
      </svg>
    </div>
  )
}