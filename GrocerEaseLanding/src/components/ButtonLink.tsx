import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const styles: Record<Variant, string> = {
  primary:
    'bg-brand-700 text-white shadow-sm hover:bg-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700',
  secondary:
    'bg-white text-brand-900 ring-1 ring-stone-200 hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700',
  ghost:
    'text-brand-800 hover:text-brand-950 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700',
}

type Props = {
  href: string
  variant?: Variant
  children: ReactNode
  external?: boolean
  className?: string
}

export function ButtonLink({
  href,
  variant = 'primary',
  children,
  external,
  className = '',
}: Props) {
  const ext =
    external === true
      ? { target: '_blank' as const, rel: 'noopener noreferrer' }
      : {}
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${styles[variant]} ${className}`}
      {...ext}
    >
      {children}
    </a>
  )
}
