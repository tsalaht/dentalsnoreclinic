import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'فعالية الليزر في علاج الشخير - دراسات علمية',
  description:
    'استعراض الدراسات العلمية التي تثبت فعالية الليزر (NightLase) في علاج الشخير وانقطاع التنفس أثناء النوم.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/scientific-studies/laser-effectiveness' },
  openGraph: {
    title: 'فعالية الليزر في علاج الشخير | الدراسات العلمية',
    description: 'أدلة علمية على فعالية الليزر في علاج الشخير.',
    url: 'https://dentalsnoreclinic.com/scientific-studies/laser-effectiveness',
    type: 'article',
  },
}

export default function LaserEffLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
