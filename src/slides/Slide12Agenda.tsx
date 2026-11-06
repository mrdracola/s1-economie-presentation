import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { PremiumHeading } from '../components/PremiumHeading'
import { PhaseBadge } from '../components/PhaseBadge'
import { AmbientBackground } from '../components/AmbientBackground'
import { Calendar, Clock, Shield, Sun, Heart, CheckCircle2 } from 'lucide-react'

interface SlideProps {
  language: 'fr' | 'ar'
}

export function Slide12Agenda({ language }: SlideProps) {
  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'
  const containerRef = useRef<HTMLDivElement>(null)

  const title = isArabic ? 'تنظيم الأجندة اليومية' : 'Organiser l\'agenda au quotidien'
  const subtitle = isArabic ? 'الخطوة 5: جدول أسبوعي واقعي مع هامش أمان' : 'Étape 5 : Planning hebdomadaire réaliste avec marge de sécurité'

  const weekDays = isArabic
    ? [{ short: 'ل', full: 'الاثنين' }, { short: 'م', full: 'الثلاثاء' }, { short: 'م', full: 'الأربعاء' }, { short: 'ج', full: 'الخميس' }, { short: 'ج', full: 'الجمعة' }, { short: 'س', full: 'السبت' }, { short: 'أ', full: 'الأحد' }]
    : [{ short: 'L', full: 'Lundi' }, { short: 'M', full: 'Mardi' }, { short: 'M', full: 'Mercredi' }, { short: 'J', full: 'Jeudi' }, { short: 'V', full: 'Vendredi' }, { short: 'S', full: 'Samedi' }, { short: 'D', full: 'Dimanche' }]

  const timeSlots = [{ start: '18:00', end: '19:00', label: '18h-19h' }, { start: '19:00', end: '20:00', label: '19h-20h' }]
  const weekendSlots = [{ start: '09:00', end: '10:00', label: '09h-10h' }, { start: '10:00', end: '11:00', label: '10h-11h' }, { start: '11:00', end: '12:00', label: '11h-12h' }]
  const weekDayKeys = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
  const weekendDayKeys = ['saturday', 'sunday']

  const schedule = isArabic
    ? {
        monday: { module: 'اقتصاد المؤسسة', color: 'var(--color-teal)', bg: 'rgba(19,184,166,0.15)' },
        tuesday: { module: 'محاسبة عامة', color: 'var(--color-orange)', bg: 'rgba(245,158,66,0.15)' },
        wednesday: { module: 'مقدمة في العلوم الاقتصادية', color: 'var(--color-teal)', bg: 'rgba(19,184,166,0.15)' },
        thursday: { module: 'مقدمة في دراسة القانون', color: 'var(--color-teal)', bg: 'rgba(19,184,166,0.15)' },
        friday: { module: 'اقتصاد جزئي 1', color: '#A78BFA', bg: 'rgba(167,139,250,0.15)' },
        saturday: { module: 'رياضيات 1', color: 'var(--color-orange)', bg: 'rgba(245,158,66,0.15)' },
        sunday: { module: 'منهجية العمل الجامعي', color: '#F472B6', bg: 'rgba(244,114,182,0.15)' },
      }
    : {
        monday: { module: 'Économie d\'entreprise', color: 'var(--color-teal)', bg: 'rgba(19,184,166,0.15)' },
        tuesday: { module: 'Comptabilité générale', color: 'var(--color-orange)', bg: 'rgba(245,158,66,0.15)' },
        wednesday: { module: 'Intro sciences économiques', color: 'var(--color-teal)', bg: 'rgba(19,184,166,0.15)' },
        thursday: { module: 'Intro étude de droit', color: 'var(--color-teal)', bg: 'rgba(19,184,166,0.15)' },
        friday: { module: 'Micro-économie 1', color: '#A78BFA', bg: 'rgba(167,139,250,0.15)' },
        saturday: { module: 'Mathématiques 1', color: 'var(--color-orange)', bg: 'rgba(245,158,66,0.15)' },
        sunday: { module: 'Méthodologie universitaire', color: '#F472B6', bg: 'rgba(244,114,182,0.15)' },
      }

  const insights = isArabic
    ? [
        { id: 'hero', icon: Clock, iconBg: 'var(--color-teal)', title: '16h / semaine', subtitle: '10h semaine + 6h week-end', desc: 'Charge idéale pour maîtriser les 7 modules sans surcharge', highlight: { value: '100%', label: 'Équilibre atteint', color: 'var(--color-teal)' } },
        { id: 'rest', icon: Sun, iconBg: 'var(--color-orange)', title: 'Après-midis 100% Libres', subtitle: 'Samedi & Dimanche dès 12h00', desc: 'Récupération mentale, sport, vie sociale — essentiel pour la tenue sur la durée', highlight: { value: 'Libre', label: 'Repos garanti', color: 'var(--color-orange)' } },
        { id: 'regularity', icon: Heart, iconBg: '#F472B6', title: 'Régularité > Épuisement', subtitle: '2h par soir = zéro panique', desc: 'Mieux vaut 2h quotidiennes que 10h le dimanche. La constance bat l\'intensité.', highlight: { value: '2h/jour', label: 'Règle d\'or', color: '#F472B6' } },
        { id: 'buffer', icon: Shield, iconBg: '#A78BFA', title: 'Marge de Sécurité +48 min', subtitle: '5% du temps hebdomadaire', desc: 'Absorbe les imprévus (fatigue, urgence, révision difficile). Le plan tient la route.', highlight: { value: '+48 min', label: 'Assurance', color: '#A78BFA' } },
      ]
    : [
        { id: 'hero', icon: Clock, iconBg: 'var(--color-teal)', title: '16h / semaine', subtitle: '10h semaine + 6h week-end', desc: 'Charge idéale pour maîtriser les 7 modules sans surcharge', highlight: { value: '100%', label: 'Équilibre atteint', color: 'var(--color-teal)' } },
        { id: 'rest', icon: Sun, iconBg: 'var(--color-orange)', title: 'Après-midis 100% Libres', subtitle: 'Samedi & Dimanche dès 12h00', desc: 'Récupération mentale, sport, vie sociale — essentiel pour la tenue sur la durée', highlight: { value: 'Libre', label: 'Repos garanti', color: 'var(--color-orange)' } },
        { id: 'regularity', icon: Heart, iconBg: '#F472B6', title: 'Régularité > Épuisement', subtitle: '2h par soir = zéro panique', desc: 'Mieux vaut 2h quotidiennes que 10h le dimanche. La constance bat l\'intensité.', highlight: { value: '2h/jour', label: 'Règle d\'or', color: '#F472B6' } },
        { id: 'buffer', icon: Shield, iconBg: '#A78BFA', title: 'Marge de Sécurité +48 min', subtitle: '5% du temps hebdomadaire', desc: 'Absorbe les imprévus (fatigue, urgence, révision difficile). Le plan tient la route.', highlight: { value: '+48 min', label: 'Assurance', color: '#A78BFA' } },
      ]

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.set(['.s12-badge', '.s12-heading', '.s12-main-grid', '.s12-left-col', '.s12-right-col', '.s12-timetable', '.s12-insight-card'], { autoAlpha: 1, y: 0 })
    }, containerRef)
    return () => ctx.revert()
  }, { scope: containerRef, dependencies: [language] })

  return (
    <div ref={containerRef} className={`relative flex flex-col justify-between h-full w-full ${isArabic ? 'font-arabic' : ''}`} lang={language} dir={dir}>
      <AmbientBackground variant="light" />
      <div className="relative z-10 flex items-center justify-between s12-badge">
        <PhaseBadge label={isArabic ? 'الخطوة 5 · تنظيم الأجندة' : 'Étape 5 · Organiser l\'agenda'} variant="teal" />
        <PhaseBadge label={isArabic ? 'تخطيط أسبوعي واقعي' : 'Planning hebdo réaliste'} variant="orange" />
      </div>
      <div className="relative z-10 flex-1 flex flex-col justify-center gap-4 my-auto py-2 px-6">
        <div className="s12-heading">
          <PremiumHeading title={title} subtitle={subtitle} align="center" lang={language} onDark={false} />
        </div>
        <div className="s12-main-grid grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 w-full max-w-6xl mx-auto flex-1 items-start">
          <div className="s12-left-col relative flex flex-col gap-6 min-w-0">
            <div className="s12-timetable flex flex-col gap-3">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: 'rgba(19,184,166,0.08)', border: '1px solid rgba(19,184,166,0.2)' }}>
                <Calendar size={18} style={{ color: 'var(--color-teal)' }} />
                <span className="font-bold text-sm uppercase tracking-wider" style={{ color: 'var(--color-primary-navy)' }}>{isArabic ? 'أيام الأسبوع (18h–20h)' : 'Jours de semaine (18h–20h)'}</span>
                <span className="ml-auto font-mono text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'rgba(19,184,166,0.15)', color: 'var(--color-teal)' }}>10h</span>
              </div>
              <div className="grid grid-cols-[auto_repeat(5,1fr)] gap-2">
                <div className="w-12" />
                {weekDays.slice(0, 5).map((d, i) => (<div key={i} className="text-center font-bold text-sm uppercase opacity-75">{d.short}</div>))}
              </div>
              {timeSlots.map((s, si) => (
                <div key={si} className="grid grid-cols-[auto_repeat(5,1fr)] gap-2 items-center">
                  <span className="font-mono text-sm font-bold opacity-75 w-12 text-center">{s.label}</span>
                  {weekDayKeys.map((k, di) => (
                    <div key={di} className="h-16 flex items-center justify-center p-2 rounded-xl transition-all hover:scale-105" style={{ background: schedule[k as keyof typeof schedule].bg, border: `1px solid ${schedule[k as keyof typeof schedule].color}30` }}>
                      <span className="text-sm font-semibold text-center leading-tight" style={{ color: schedule[k as keyof typeof schedule].color }}>{schedule[k as keyof typeof schedule].module}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="s12-timetable flex flex-col gap-3">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: 'rgba(245,158,66,0.08)', border: '1px solid rgba(245,158,66,0.2)' }}>
                <Sun size={18} style={{ color: 'var(--color-orange)' }} />
                <span className="font-bold text-sm uppercase tracking-wider" style={{ color: 'var(--color-primary-navy)' }}>{isArabic ? 'عطلة نهاية الأسبوع (09h–12h)' : 'Week-end (09h–12h)'}</span>
                <span className="ml-auto font-mono text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'rgba(245,158,66,0.15)', color: 'var(--color-orange)' }}>6h</span>
              </div>
              <div className="grid grid-cols-[auto_repeat(2,1fr)] gap-2">
                <div className="w-12" />
                {weekDays.slice(5).map((d, i) => (<div key={i} className="text-center font-bold text-sm uppercase opacity-75">{d.short}</div>))}
              </div>
              {weekendSlots.map((s, si) => (
                <div key={si} className="grid grid-cols-[auto_repeat(2,1fr)] gap-2 items-center">
                  <span className="font-mono text-sm font-bold opacity-75 w-12 text-center">{s.label}</span>
                  {weekendDayKeys.map((k, di) => (
                    <div key={di} className="h-16 flex items-center justify-center p-2 rounded-xl transition-all hover:scale-105" style={{ background: schedule[k as keyof typeof schedule].bg, border: `1px solid ${schedule[k as keyof typeof schedule].color}30` }}>
                      <span className="text-sm font-semibold text-center leading-tight" style={{ color: schedule[k as keyof typeof schedule].color }}>{schedule[k as keyof typeof schedule].module}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl mt-2" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.12), rgba(19,184,166,0.12))', border: '1px solid rgba(34,197,94,0.3)' }}>
              <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full" style={{ background: 'rgba(34,197,94,0.2)' }}><CheckCircle2 size={18} style={{ color: '#22C55E' }} strokeWidth={2.5} /></div>
              <div className="flex-1">
                <div className="font-bold text-sm" style={{ color: 'var(--color-primary-navy)' }}>{isArabic ? 'بعد الظهيرة 100% حر' : 'Après-midis 100% libres'}</div>
              </div>
            </div>
          </div>
          <div className="s12-right-col relative flex flex-col gap-4">
            {insights.map((i) => (
              <div key={i.id} className="s12-insight-card relative flex flex-col p-5 rounded-2xl border transition-all hover:shadow-xl" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(16px)', border: '1px solid rgba(16,36,58,0.08)' }}>
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl" style={{ background: `${i.iconBg}15` }}><i.icon size={22} style={{ color: i.iconBg }} /></div>
                  <div className="flex-1">
                    <div className="font-extrabold text-base" style={{ color: 'var(--color-primary-navy)' }}>{i.title}</div>
                    <div className="text-sm font-medium opacity-75">{i.subtitle}</div>
                  </div>
                  <span className="font-mono font-bold text-sm px-2 py-1 rounded-full" style={{ color: i.highlight.color, background: `${i.highlight.color}15` }}>{i.highlight.value}</span>
                </div>
                <p className="text-base leading-relaxed opacity-85">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}