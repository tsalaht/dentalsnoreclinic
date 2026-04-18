import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'آراء المرضى والأطباء',
  description:
    'استعرض تجارب مرضانا وآراء الأطباء حول نتائج علاج الشخير واضطرابات النوم في عيادتنا بعمان.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/testimonials' },
  openGraph: {
    title: 'آراء المرضى والأطباء | عيادة الشخير',
    description: 'تجارب حقيقية من مرضى عيادة الشخير.',
    url: 'https://dentalsnoreclinic.com/testimonials',
    type: 'website',
  },
}

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
