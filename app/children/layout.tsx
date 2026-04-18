                            import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'علاج الشخير لدى الأطفال',
  description:
    'تشخيص وعلاج اضطرابات التنفس أثناء النوم والشخير لدى الأطفال. رعاية متخصصة لضمان نوم صحي وتطور سليم لطفلك.',
  keywords: ['شخير الأطفال', 'اضطرابات نوم الأطفال', 'التنفس الفموي عند الأطفال', 'علاج شخير الأطفال الأردن'],
  alternates: { canonical: 'https://dentalsnoreclinic.com/children' },
  openGraph: {
    title: 'علاج الشخير لدى الأطفال | عيادة الشخير',
    description: 'تشخيص وعلاج متخصص لاضطرابات التنفس أثناء النوم لدى الأطفال.',
    url: 'https://dentalsnoreclinic.com/children',
    type: 'website',
  },
}

export default function ChildrenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
