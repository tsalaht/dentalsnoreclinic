import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'آراء الأطباء',
  description:
    'توصيات وآراء الأطباء المتخصصين حول أساليب علاج الشخير واضطرابات التنفس أثناء النوم المتبعة في عيادتنا.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/testimonials/doctors' },
  openGraph: {
    title: 'آراء الأطباء | عيادة الشخير',
    description: 'توصيات الأطباء المتخصصين حول علاج الشخير.',
    url: 'https://dentalsnoreclinic.com/testimonials/doctors',
    type: 'website',
  },
}

export default function DoctorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
