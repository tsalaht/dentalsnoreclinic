import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مواد ومقالات طبية',
  description:
    'اطّلع على مجموعة من المقالات والمواد الطبية المتخصصة في الشخير واضطرابات التنفس أثناء النوم.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/medical-library/materials' },
  openGraph: {
    title: 'مواد طبية | المكتبة الطبية',
    description: 'مقالات ومواد طبية متخصصة في الشخير واضطرابات النوم.',
    url: 'https://dentalsnoreclinic.com/medical-library/materials',
    type: 'website',
  },
}

export default function MaterialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
