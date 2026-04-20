/** Production web app origin (Vercel deploy). */
const raw = import.meta.env.VITE_APP_ORIGIN as string | undefined
export const APP_ORIGIN = (
  raw?.replace(/\/$/, '') || 'https://grocerease-topaz.vercel.app'
).trim()

export function appPath(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`
  return `${APP_ORIGIN}${p}`
}

/** Shopper registration with callback to shopper account (matches deployed app). */
export function shopperSignupUrl(): string {
  const q = new URLSearchParams({ callbackUrl: '/shopper/account' })
  return `${appPath('/shopper/signup')}?${q}`
}

export const urls = {
  home: () => appPath('/'),
  map: () => appPath('/map'),
  deals: () => appPath('/deals'),
  shopperSignup: shopperSignupUrl,
  /** Unified sign-in for deployed app */
  signIn: () => appPath('/sign-in'),
  myAlerts: () => appPath('/my-alerts'),
  ownerSignup: () => appPath('/signup'),
  github: 'https://github.com/gsha22/GrocerEase',
  githubIssues: 'https://github.com/gsha22/GrocerEase/issues',
} as const

const contact = import.meta.env.VITE_CONTACT_EMAIL as string | undefined
export function mailtoContact(subject = 'GrocerEase inquiry'): string | undefined {
  if (!contact?.includes('@')) return undefined
  const q = new URLSearchParams({ subject })
  return `mailto:${contact}?${q}`
}
