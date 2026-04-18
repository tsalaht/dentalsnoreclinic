import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'فعالية تمارين العضلات - دراسات علمية',
  description:
    'الدراسات العلمية التي تثبت دور تمارين عضلات الفم والحلق في تقليل الشخير وتحسين جودة النوم.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/scientific-studies/muscle-exercises-effectiveness' },
  openGraph: {
    title: 'فعالية تمارين العضلات | الدراسات العلمية',
    description: 'دراسات علمية حول دور تمارين الفم والحلق في علاج الشخير.',
    url: 'https://dentalsnoreclinic.com/scientific-studies/muscle-exercises-effectiveness',
    type: 'article',
  },
}

export default function MuscleExLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
