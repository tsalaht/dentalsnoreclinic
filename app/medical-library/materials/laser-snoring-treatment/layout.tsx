import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'علاج الشخير بالليزر: ثورة في طب النوم',
  description:
    'تعرف على تقنية NightLase لعلاج الشخير بالليزر، كيف تعمل، فوائدها، ونتائجها العلمية المثبتة.',
  keywords: ['NightLase', 'علاج الشخير بالليزر', 'ليزر النوم', 'علاج الشخير بدون جراحة'],
  alternates: { canonical: 'https://dentalsnoreclinic.com/medical-library/materials/laser-snoring-treatment' },
  openGraph: {
    title: 'علاج الشخير بالليزر | المكتبة الطبية',
    description: 'ثورة في طب النوم: تقنية الليزر لعلاج الشخير.',
    url: 'https://dentalsnoreclinic.com/medical-library/materials/laser-snoring-treatment',
    type: 'article',
  },
}

export default function LaserLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
