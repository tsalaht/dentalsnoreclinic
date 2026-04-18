import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'المكتبة الطبية',
  description:
    'مكتبة طبية شاملة تضم مقالات ومواد تعليمية وأبحاث علمية حول الشخير واضطرابات التنفس أثناء النوم.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/medical-library' },
  openGraph: {
    title: 'المكتبة الطبية | عيادة الشخير',
    description: 'مواد تعليمية وأبحاث علمية متخصصة في الشخير واضطرابات النوم.',
    url: 'https://dentalsnoreclinic.com/medical-library',
    type: 'website',
  },
}

export default function MedicalLibraryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
