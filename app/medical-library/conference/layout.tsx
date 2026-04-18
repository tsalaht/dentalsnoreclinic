import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'المؤتمرات والندوات الطبية',
  description:
    'مواد ومستجدات المؤتمرات الطبية المتخصصة في اضطرابات النوم والشخير التي يشارك فيها فريق عيادتنا.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/medical-library/conference' },
  openGraph: {
    title: 'المؤتمرات والندوات | المكتبة الطبية',
    description: 'أبرز المؤتمرات الطبية المتخصصة في الشخير واضطرابات النوم.',
    url: 'https://dentalsnoreclinic.com/medical-library/conference',
    type: 'website',
  },
}

export default function ConferenceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
