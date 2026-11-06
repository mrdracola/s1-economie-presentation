/**
 * Centralized bilingual translations for the presentation.
 * Supports French (fr) and Arabic (ar).
 */

export const translations = {
  fr: {
    slideTitles: {
      demo1: 'Organisation et planification',
      demo2: 'Une progression maîtrisée',
      demo3: 'Du temps à la réussite',
    },

    slideContents: {
      demo1: {
        subtitle: 'Une méthode structurée en 5 étapes',
        description: "Diviser la tâche en différentes parties, attribuer un temps à chacune, ajouter une marge de sécurité de 5 %, établir un échéancier précis, organiser les horaires dans l'agenda.",
      },
      demo2: {
        subtitle: "Apprendre → Consolider → Réviser → S'entraîner",
        description: "Progression méthodique à travers les étapes fondamentales de l'apprentissage efficace.",
      },
      demo3: {
        subtitle: 'Octobre → Novembre → Décembre',
        description: 'Calendrier trimestriel structuré pour maximiser la préparation aux examens.',
      },
    },

    nav: {
      previous: 'Diapositive précédente',
      next: 'Diapositive suivante',
      fullscreen: 'Plein écran',
      exitFullscreen: 'Quitter le plein écran',
      language: 'Langue',
      progress: 'Progression de la présentation',
    },

    languages: {
      fr: 'FR',
      ar: 'AR',
    },
  },

  ar: {
    slideTitles: {
      demo1: 'تنظيم الدراسة والتخطيط',
      demo2: 'مسار تعليمي منضبط',
      demo3: 'من الوقت إلى النجاح',
    },

    slideContents: {
      demo1: {
        subtitle: 'طريقة منظمة في 5 خطوات',
        description: 'تقسيم المهمة إلى أجزاء مختلفة، تخصيص وقت لكل جزء، إضافة هامش أمان بنسبة 5%، وضع جدول زمني دقيق، تنظيم أوقات الدراسة في التقويم.',
      },
      demo2: {
        subtitle: 'تعلم → ترسيخ → مراجعة → تدريب',
        description: 'مسار منهجي عبر الخطوات الأساسية للتعلم الفعّال.',
      },
      demo3: {
        subtitle: 'أكتوبر → نوفمبر → ديسمبر',
        description: 'جدول زمني ثلاثي الأشهر لتحقيق أقصى تحضير للامتحانات.',
      },
    },

    nav: {
      previous: 'الشريحة السابقة',
      next: 'الشريحة التالية',
      fullscreen: 'شاشة كاملة',
      exitFullscreen: 'الخروج من الشاشة الكاملة',
      language: 'اللغة',
      progress: 'تقدم العرض التقديمي',
    },

    languages: {
      fr: 'FR',
      ar: 'AR',
    },
  },
} as const

export type Language = keyof typeof translations
export type Translations = typeof translations.fr

export const getTranslation = (language: Language) => translations[language]
