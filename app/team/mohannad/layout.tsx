import type { Metadata } from 'next'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'د. مهند الكسواني',
  jobTitle: 'طبيب أسنان متخصص في اضطرابات النوم والشخير',
  worksFor: {
    '@type': 'Dentist',
    name: 'عيادة الشخير واضطرابات التنفس أثناء النوم',
    url: 'https://dentalsnoreclinic.com',
  },
  url: 'https://dentalsnoreclinic.com/team/mohannad',
  image: 'https://dentalsnoreclinic.com/doctor.JPG',
}

export const metadata: Metadata = {
  title: 'د. مهند الكسواني',
  description:
    'تعرف على د. مهند الكسواني، مؤسس عيادة الشخير وطبيب متخصص في علاج الشخير وانقطاع التنفس أثناء النوم للبالغين والأطفال.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/team/mohannad' },
  openGraph: {
    title: 'د. مهند الكسواني | عيادة الشخير',
    description: 'طبيب أسنان متخصص في اضطرابات النوم والشخير.',
    url: 'https://dentalsnoreclinic.com/team/mohannad',
    type: 'profile',
  },
}

export default function MohannadLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
