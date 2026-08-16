import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'es' | 'pt'

type Dict = Record<string, string>

const en: Dict = {
  // Nav
  'nav.home': 'Home',
  'nav.training': 'Training',
  'nav.nutrition': 'Nutrition',
  'nav.challenge': 'Challenge',
  'nav.progress': 'Progress',
  // Headers
  'home.welcome': 'Welcome back,',
  'training.title': 'Training',
  'training.subtitle': 'Build your performance.',
  'nutrition.title': 'Nutrition',
  'nutrition.subtitle': 'Fuel the work. Track the day.',
  'progress.title': 'Progress',
  'challenge.label': '90 Day Challenge',
  'challenge.title': 'Evolution',
  'challenge.subtitle': 'One block. Full commitment.',
  'profile.title': 'Profile',
  'notifications.title': 'Notifications',
  // Profile menu
  'menu.Health Profile': 'Health Profile',
  'menu.Core XP & Rewards': 'Core XP & Rewards',
  'menu.Training Profile': 'Training Profile',
  'menu.Goals': 'Goals',
  'menu.Assessment History': 'Assessment History',
  'menu.Notifications': 'Notifications',
  'menu.Connected Devices': 'Connected Devices',
  'menu.Subscription': 'Subscription',
  'menu.Settings': 'Settings',
  'menu.Help': 'Help',
  'menu.Privacy': 'Privacy',
  'menu.Sign Out': 'Sign Out',
  // Settings
  'settings.title': 'Settings',
  'settings.language': 'Language',
  'settings.language.desc': 'Choose your app language.',
  'settings.notifications': 'Push Notifications',
  'settings.notifications.desc': 'Training and reminder alerts.',
  'settings.units': 'Metric Units',
  'settings.units.desc': 'Kilograms and centimeters.',
  'settings.sound': 'Workout Sounds',
  'settings.sound.desc': 'Cues and timer beeps.',
  'settings.saved': 'Language updated',
  // Language chooser (onboarding)
  'lang.title': 'Choose your language',
  'lang.subtitle': 'You can change this later in Settings.',
  'lang.continue': 'Continue',
}

const es: Dict = {
  // Nav
  'nav.home': 'Inicio',
  'nav.training': 'Entreno',
  'nav.nutrition': 'Nutrición',
  'nav.challenge': 'Reto',
  'nav.progress': 'Progreso',
  // Headers
  'home.welcome': 'Bienvenido de nuevo,',
  'training.title': 'Entreno',
  'training.subtitle': 'Construye tu rendimiento.',
  'nutrition.title': 'Nutrición',
  'nutrition.subtitle': 'Alimenta el trabajo. Registra tu día.',
  'progress.title': 'Progreso',
  'challenge.label': 'Reto de 90 Días',
  'challenge.title': 'Evolución',
  'challenge.subtitle': 'Un ciclo. Compromiso total.',
  'profile.title': 'Perfil',
  'notifications.title': 'Notificaciones',
  // Profile menu
  'menu.Health Profile': 'Perfil de Salud',
  'menu.Core XP & Rewards': 'Core XP y Recompensas',
  'menu.Training Profile': 'Perfil de Entrenamiento',
  'menu.Goals': 'Objetivos',
  'menu.Assessment History': 'Historial de Evaluaciones',
  'menu.Notifications': 'Notificaciones',
  'menu.Connected Devices': 'Dispositivos Conectados',
  'menu.Subscription': 'Suscripción',
  'menu.Settings': 'Configuración',
  'menu.Help': 'Ayuda',
  'menu.Privacy': 'Privacidad',
  'menu.Sign Out': 'Cerrar Sesión',
  // Settings
  'settings.title': 'Configuración',
  'settings.language': 'Idioma',
  'settings.language.desc': 'Elige el idioma de la app.',
  'settings.notifications': 'Notificaciones Push',
  'settings.notifications.desc': 'Alertas de entreno y recordatorios.',
  'settings.units': 'Unidades Métricas',
  'settings.units.desc': 'Kilogramos y centímetros.',
  'settings.sound': 'Sonidos del Entreno',
  'settings.sound.desc': 'Señales y pitidos del cronómetro.',
  'settings.saved': 'Idioma actualizado',
  // Language chooser (onboarding)
  'lang.title': 'Elige tu idioma',
  'lang.subtitle': 'Puedes cambiarlo luego en Configuración.',
  'lang.continue': 'Continuar',
}

const pt: Dict = {
  // Nav
  'nav.home': 'Início',
  'nav.training': 'Treino',
  'nav.nutrition': 'Nutrição',
  'nav.challenge': 'Desafio',
  'nav.progress': 'Progresso',
  // Headers
  'home.welcome': 'Bem-vindo de volta,',
  'training.title': 'Treino',
  'training.subtitle': 'Construa sua performance.',
  'nutrition.title': 'Nutrição',
  'nutrition.subtitle': 'Abasteça o trabalho. Acompanhe o dia.',
  'progress.title': 'Progresso',
  'challenge.label': 'Desafio de 90 Dias',
  'challenge.title': 'Evolução',
  'challenge.subtitle': 'Um ciclo. Comprometimento total.',
  'profile.title': 'Perfil',
  'notifications.title': 'Notificações',
  // Profile menu
  'menu.Health Profile': 'Perfil de Saúde',
  'menu.Core XP & Rewards': 'Core XP & Recompensas',
  'menu.Training Profile': 'Perfil de Treino',
  'menu.Goals': 'Objetivos',
  'menu.Assessment History': 'Histórico de Avaliações',
  'menu.Notifications': 'Notificações',
  'menu.Connected Devices': 'Dispositivos Conectados',
  'menu.Subscription': 'Assinatura',
  'menu.Settings': 'Configurações',
  'menu.Help': 'Ajuda',
  'menu.Privacy': 'Privacidade',
  'menu.Sign Out': 'Sair',
  // Settings
  'settings.title': 'Configurações',
  'settings.language': 'Idioma',
  'settings.language.desc': 'Escolha o idioma do app.',
  'settings.notifications': 'Notificações Push',
  'settings.notifications.desc': 'Alertas de treino e lembretes.',
  'settings.units': 'Unidades Métricas',
  'settings.units.desc': 'Quilogramas e centímetros.',
  'settings.sound': 'Sons do Treino',
  'settings.sound.desc': 'Comandos e bipes do cronômetro.',
  'settings.saved': 'Idioma atualizado',
  // Language chooser (onboarding)
  'lang.title': 'Escolha seu idioma',
  'lang.subtitle': 'Você pode alterar depois nas Configurações.',
  'lang.continue': 'Continuar',
}

const dicts: Record<Lang, Dict> = { en, es, pt }

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string }
const LangContext = createContext<Ctx>({ lang: 'en', setLang: () => {}, t: (k) => k })

const STORAGE_KEY = 'ec-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'en' || saved === 'pt') return saved
    }
    return 'en'
  })

  useEffect(() => {
    if (typeof document !== 'undefined') document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
    if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, l)
  }

  const t = (key: string) => dicts[lang][key] ?? dicts.en[key] ?? key

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
