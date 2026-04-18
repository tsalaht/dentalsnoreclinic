import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'آراء المرضى',
  description:
    'قصص نجاح ومراجعات حقيقية من مرضى عيادة الشخير الذين تعافوا من الشخير واضطرابات النوم.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/testimonials/patients' },
  openGraph: {
    title: 'آراء المرضى | عيادة الشخير',
    description: 'قصص نجاح حقيقية من مرضى عيادة الشخير.',
    url: 'https://dentalsnoreclinic.com/testimonials/patients',
    type: 'website',
  },
}

export default function PatientsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
