import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

interface GoldenPocketWatchProps {
  size?: number
  className?: string
  targetTime?: number // in hours (0-24), e.g. 18.5 = 18:30
  onSlideEnter?: boolean
  watchPhase?: 'cours' | 'révision' | 'idle'
}

// Watch face center — the single source of truth for all geometry
const CX = 100
const CY = 100

export function GoldenPocketWatch({
  size = 300,
  className = '',
  targetTime = 12,
  onSlideEnter = false,
  watchPhase = 'idle',
}: GoldenPocketWatchProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef       = useRef<SVGSVGElement>(null)
  const hourHandRef  = useRef<SVGGElement>(null)
  const minuteHandRef= useRef<SVGGElement>(null)
  const pendulumRef  = useRef<SVGGElement>(null)
  const glowRef      = useRef<SVGCircleElement>(null)
  const pulseRef     = useRef<SVGCircleElement>(null)

  // Prevent FOUC — hide everything before GSAP runs
  useEffect(() => {
    if (svgRef.current) {
      gsap.set(svgRef.current, { autoAlpha: 0, scale: 0.85 })
    }
  }, [])

  useGSAP(() => {
    if (!svgRef.current) return
    const ctx = gsap.context(() => {
      // ─── STATIC ANIMATIONS ONLY (NO HAND ROTATION) ──────────────────────
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Entrance: scale + fade in
      tl.to(svgRef.current, {
        autoAlpha: 1,
        scale: 1,
        duration: onSlideEnter ? 1.2 : 0.6,
        ease: 'back.out(1.2)',
        transformOrigin: '50% 50%',
      })

      // Pendulum sway (whole watch body)
      gsap.to(pendulumRef.current, {
        rotation: 2.5,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        transformOrigin: `${CX}px 20px`,
      })

      // Breathing glow
      gsap.to(glowRef.current, {
        opacity: 0.7,
        scale: 1.06,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        transformOrigin: '50% 50%',
      })

      // Pulse ring
      gsap.to(pulseRef.current, {
        opacity: 0,
        scale: 1.18,
        duration: 2.8,
        repeat: -1,
        ease: 'sine.out',
        transformOrigin: '50% 50%',
      })
    }, containerRef)

    return () => ctx.revert()
  }, { scope: containerRef, dependencies: [targetTime, watchPhase, onSlideEnter] })

  // Static hand positions (10:10)
  // Hour: 10 * 30deg = 300deg (-60deg)
  // Minute: 2 * 30deg = 60deg
  const staticHourRotation = -60
  const staticMinuteRotation = 60

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 200 200"
        width={size}
        height={size}
        style={{ overflow: 'visible', transformOrigin: '50% 50%' }}
      >
        <defs>
          <radialGradient id="gpw-gold-body" cx="35%" cy="30%" r="70%">
            <stop offset="0%"   stopColor="#FFF0A0" />
            <stop offset="20%"  stopColor="#FFD700" />
            <stop offset="45%"  stopColor="#C8860A" />
            <stop offset="70%"  stopColor="#8B5E00" />
            <stop offset="100%" stopColor="#3D2800" />
          </radialGradient>

          <radialGradient id="gpw-gold-bezel" cx="40%" cy="25%" r="65%">
            <stop offset="0%"   stopColor="#FFED80" />
            <stop offset="30%"  stopColor="#F0A800" />
            <stop offset="60%"  stopColor="#9A6400" />
            <stop offset="100%" stopColor="#3D2800" />
          </radialGradient>

          <radialGradient id="gpw-face" cx="40%" cy="35%" r="65%">
            <stop offset="0%"   stopColor="#1A1000" />
            <stop offset="40%"  stopColor="#0D0800" />
            <stop offset="100%" stopColor="#060400" />
          </radialGradient>

          <linearGradient id="gpw-glass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="rgba(255,255,255,0.25)" />
            <stop offset="40%"  stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </linearGradient>

          <linearGradient id="gpw-hand-hour" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%"   stopColor="#C8860A" />
            <stop offset="100%" stopColor="#FFF0A0" />
          </linearGradient>

          <linearGradient id="gpw-hand-minute" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%"   stopColor="#CCCCCC" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          <linearGradient id="gpw-chain" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#FFD700" />
            <stop offset="50%"  stopColor="#B8860B" />
            <stop offset="100%" stopColor="#8B6914" />
          </linearGradient>

          <filter id="gpw-shadow">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="rgba(0,0,0,0.55)" />
          </filter>
          <filter id="gpw-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="gpw-soft-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Pendulum group */}
        <g ref={pendulumRef}>

          {/* Chain */}
          <g opacity="0.75">
            {[0,1,2,3,4].map((i) => (
              <ellipse key={i} cx={CX} cy={12 - i * 5} rx={4} ry={2.5}
                fill="none" stroke="url(#gpw-chain)" strokeWidth="1.2" />
            ))}
            <rect x="96" y="6" width="8" height="4" rx="1" fill="url(#gpw-gold-bezel)" />
          </g>

          {/* Outer case */}
          <circle cx={CX} cy={CY} r="88" fill="url(#gpw-gold-body)" filter="url(#gpw-shadow)" />
          <circle cx={CX} cy={CY} r="88" fill="none" stroke="rgba(255,220,80,0.35)" strokeWidth="1" />
          <circle cx={CX} cy={CY} r="84" fill="none" stroke="rgba(0,0,0,0.3)"       strokeWidth="0.5" />
          <circle cx={CX} cy={CY} r="81" fill="none" stroke="rgba(255,220,80,0.2)"  strokeWidth="0.8" />

          {/* Bezel flourish dots */}
          {[0,45,90,135,180,225,270,315].map((angle) => {
            const rad = (angle * Math.PI) / 180
            return <circle key={angle}
              cx={CX + 85 * Math.sin(rad)}
              cy={CY - 85 * Math.cos(rad)}
              r="1.5" fill="rgba(255,220,80,0.45)" />
          })}

          {/* Breathing glow */}
          <circle ref={glowRef} cx={CX} cy={CY} r="86"
            fill="none" stroke="rgba(255,200,0,0.25)" strokeWidth="4" opacity="0.4" />

          {/* Watch face */}
          <circle cx={CX} cy={CY} r="76" fill="url(#gpw-face)" />
          <circle cx={CX} cy={CY} r="76" fill="none" stroke="rgba(255,180,0,0.4)"   strokeWidth="1.5" />
          <circle cx={CX} cy={CY} r="72" fill="none" stroke="rgba(255,220,80,0.15)" strokeWidth="0.5" />

          {/* Hour tick marks */}
          {Array.from({ length: 12 }, (_, i) => {
            const rad = (i * 30 * Math.PI) / 180
            return (
              <line key={i}
                x1={CX + 62 * Math.sin(rad)} y1={CY - 62 * Math.cos(rad)}
                x2={CX + 70 * Math.sin(rad)} y2={CY - 70 * Math.cos(rad)}
                stroke={i % 3 === 0 ? '#FFD700' : 'rgba(255,200,80,0.55)'}
                strokeWidth={i % 3 === 0 ? '2' : '1'}
                strokeLinecap="round"
              />
            )
          })}

          {/* Roman numerals — major */}
          {[
            { num: 'XII', idx: 0 }, { num: 'III', idx: 3 },
            { num: 'VI',  idx: 6 }, { num: 'IX',  idx: 9 },
          ].map(({ num, idx }) => {
            const rad = (idx * 30 * Math.PI) / 180
            return (
              <text key={num}
                x={CX + 54 * Math.sin(rad)} y={CY - 54 * Math.cos(rad)}
                textAnchor="middle" dominantBaseline="middle"
                fill="#FFD700" fontSize="10" fontWeight="600"
                fontFamily="Georgia, 'Times New Roman', serif"
                style={{ filter: 'drop-shadow(0 0 2px rgba(255,200,0,0.5))' }}
              >{num}</text>
            )
          })}

          {/* Roman numerals — minor */}
          {[
            { num: 'I', idx:1 }, { num: 'II', idx:2 }, { num: 'IV', idx:4 },
            { num: 'V', idx:5 }, { num: 'VII', idx:7 }, { num: 'VIII', idx:8 },
            { num: 'X', idx:10 }, { num: 'XI', idx:11 },
          ].map(({ num, idx }) => {
            const rad = (idx * 30 * Math.PI) / 180
            return (
              <text key={num}
                x={CX + 54 * Math.sin(rad)} y={CY - 54 * Math.cos(rad)}
                textAnchor="middle" dominantBaseline="middle"
                fill="rgba(255,200,80,0.7)" fontSize="7" fontWeight="400"
                fontFamily="Georgia, 'Times New Roman', serif"
              >{num}</text>
            )
          })}

          {/* Center medallion */}
          <circle cx={CX} cy={CY} r="14" fill="none" stroke="rgba(255,200,0,0.4)" strokeWidth="0.8" strokeDasharray="3 2" />
          <circle cx={CX} cy={CY} r="10" fill="url(#gpw-gold-bezel)" filter="url(#gpw-soft-glow)" />
          <circle cx={CX} cy={CY} r="7"  fill="rgba(0,0,0,0.6)" />
          <circle cx={CX} cy={CY} r="4"  fill="#13B8A6" opacity="0.85" />
          <circle cx={CX-1} cy={CY-1} r="1.5" fill="rgba(255,255,255,0.6)" />

          {/* ── STATIC WATCH HANDS ── */}

          {/* Hour hand */}
          <g ref={hourHandRef} transform={`translate(${CX}, ${CY}) rotate(${staticHourRotation})`}>
            <line
              x1="0" y1="0"
              x2="0" y2="-38"
              stroke="url(#gpw-hand-hour)"
              strokeWidth="4.5"
              strokeLinecap="round"
              filter="url(#gpw-soft-glow)"
            />
          </g>

          {/* Minute hand */}
          <g ref={minuteHandRef} transform={`translate(${CX}, ${CY}) rotate(${staticMinuteRotation})`}>
            <line
              x1="0" y1="0"
              x2="0" y2="-62"
              stroke="url(#gpw-hand-minute)"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#gpw-soft-glow)"
            />
          </g>

          {/* Second hand */}
          <g ref={minuteHandRef} transform={`translate(${CX}, ${CY}) rotate(0)`}>
            <line
              x1="0" y1="12"
              x2="0" y2="-62"
              stroke="#FF4444"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <circle cx="0" cy="6" r="2.5" fill="#FF4444" opacity="0.4" />
          </g>

          {/* Center pin cap — sits on top of all hands */}
          <circle cx={CX} cy={CY} r="3.5" fill="#FFD700" filter="url(#gpw-glow)" />
          <circle cx={CX} cy={CY} r="1.5" fill="#1A0A00" />

          {/* ── GLASS REFLECTION ── */}
          <ellipse
            cx="82"
            cy="82"
            rx="22"
            ry="14"
            fill="url(#gpw-glass)"
            transform="rotate(-35 82 82)"
            opacity="0.75"
          />
          <ellipse
            cx="118"
            cy="125"
            rx="8"
            ry="5"
            fill="rgba(255,255,255,0.06)"
            transform="rotate(-35 118 125)"
          />
        </g>

        {/* Pulse ring */}
        <circle
          ref={pulseRef}
          cx={CX}
          cy={CY}
          r="88"
          fill="none"
          stroke="rgba(255,200,0,0.3)"
          strokeWidth="2"
          opacity="0"
        />
      </svg>
    </div>
  )
}
