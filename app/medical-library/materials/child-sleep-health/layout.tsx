import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'صحة نوم الأطفال: نصائح ذهبية للأهل',
  description:
    'دليل الأهل لفهم اضطرابات نوم الأطفال وعلامات الشخير والتنفس الفموي والطرق الصحية لضمان نوم سليم.',
  keywords: ['نوم صحي للأطفال', 'شخير الأطفال', 'اضطرابات نوم الأطفال', 'نصائح نوم الأطفال'],
  alternates: { canonical: 'https://dentalsnoreclinic.com/medical-library/materials/child-sleep-health' },
  openGraph: {
    title: 'صحة نوم الأطفال | المكتبة الطبية',
    description: 'نصائح ذهبية لصحة نوم طفلك.',
    url: 'https://dentalsnoreclinic.com/medical-library/materials/child-sleep-health',
    type: 'article',
  },
}

export default function ChildSleepLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
