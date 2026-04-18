import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'التنفس الأنفي مقابل الفموي: ما الفرق؟',
  description:
    'دراسة مقارنة بين التنفس الأنفي والفموي وتأثير كل منهما على الصحة العامة وجودة النوم والشخير.',
  keywords: ['التنفس الفموي', 'التنفس الأنفي', 'التنفس وأثره على النوم'],
  alternates: { canonical: 'https://dentalsnoreclinic.com/medical-library/materials/nose-vs-mouth-breathing' },
  openGraph: {
    title: 'التنفس الأنفي مقابل الفموي | المكتبة الطبية',
    description: 'الفرق بين التنفس الأنفي والفموي وتأثيره على النوم.',
    url: 'https://dentalsnoreclinic.com/medical-library/materials/nose-vs-mouth-breathing',
    type: 'article',
  },
}

export default function NoseMouthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
