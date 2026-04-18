import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'فعالية الأجهزة الفموية - دراسات علمية',
  description:
    'الأبحاث العلمية التي تثبت فعالية الأجهزة الفموية في علاج الشخير وانقطاع التنفس الانسدادي أثناء النوم.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/scientific-studies/oral-devices-effectiveness' },
  openGraph: {
    title: 'فعالية الأجهزة الفموية | الدراسات العلمية',
    description: 'دراسات علمية حول فعالية الأجهزة الفموية في علاج الشخير.',
    url: 'https://dentalsnoreclinic.com/scientific-studies/oral-devices-effectiveness',
    type: 'article',
  },
}

export default function OralDevEffLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
