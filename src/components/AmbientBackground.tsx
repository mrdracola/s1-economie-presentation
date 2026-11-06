/**
 * AmbientBackground
 * Living ambient background with GSAP-animated glowing orbs.
 * Meant to sit behind all slides as a shared atmospheric layer.
 * Colors: soft teal & warm orange/gold against deep navy or off-white.
 */

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

interface AmbientBackgroundProps {
  /** 'dark' = deep navy base (Slide 1), 'light' = off-white base (Slides 2–5) */
  variant?: 'dark' | 'light'
  className?: string
}

export function AmbientBackground({ variant = 'dark', className = '' }: AmbientBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Each orb drifts on its own timeline — random-feeling but deterministic
      const orbs = containerRef.current?.querySelectorAll('.amb-orb')
      if (!orbs) return

      orbs.forEach((orb, i) => {
        const dur = 12 + i * 3.7          // stagger durations 12–35 s
        const xAmp = 30 + (i % 3) * 20   // horizontal drift amplitude
        const yAmp = 20 + (i % 4) * 15   // vertical drift amplitude
        const delay = i * 1.4

        gsap.to(orb, {
          x: `+=${xAmp}`,
          y: `+=${yAmp}`,
          duration: dur,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay,
        })

        // Independent opacity pulse
        gsap.to(orb, {
          opacity: variant === 'dark' ? 0.18 : 0.12,
          duration: dur * 0.6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: delay + 1.5,
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, { scope: containerRef, dependencies: [variant] })

  const teal   = 'var(--color-teal)'
  const orange = 'var(--color-orange)'
  const gold   = 'var(--color-gold)'

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Orb 1 — large teal, top-left */}
      <div
        className="amb-orb absolute rounded-full blur-[90px]"
        style={{
          width: 520, height: 520,
          top: '-10%', left: '-5%',
          background: teal,
          opacity: variant === 'dark' ? 0.1 : 0.07,
        }}
      />

      {/* Orb 2 — warm orange, bottom-right */}
      <div
        className="amb-orb absolute rounded-full blur-[80px]"
        style={{
          width: 480, height: 480,
          bottom: '-8%', right: '-4%',
          background: orange,
          opacity: variant === 'dark' ? 0.1 : 0.07,
        }}
      />

      {/* Orb 3 — gold accent, center-right */}
      <div
        className="amb-orb absolute rounded-full blur-[110px]"
        style={{
          width: 360, height: 360,
          top: '20%', right: '15%',
          background: gold,
          opacity: variant === 'dark' ? 0.07 : 0.05,
        }}
      />

      {/* Orb 4 — small teal, bottom-left */}
      <div
        className="amb-orb absolute rounded-full blur-[70px]"
        style={{
          width: 280, height: 280,
          bottom: '15%', left: '10%',
          background: teal,
          opacity: variant === 'dark' ? 0.08 : 0.06,
        }}
      />

      {/* Orb 5 — tiny gold, top-center */}
      <div
        className="amb-orb absolute rounded-full blur-[60px]"
        style={{
          width: 200, height: 200,
          top: '5%', left: '40%',
          background: gold,
          opacity: variant === 'dark' ? 0.06 : 0.04,
        }}
      />
    </div>
  )
}
