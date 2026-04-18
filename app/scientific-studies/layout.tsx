import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الدراسات العلمية',
  description:
    'أبرز الدراسات والأبحاث العلمية المحكّمة في مجال علاج الشخير وانقطاع التنفس أثناء النوم.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/scientific-studies' },
  openGraph: {
    title: 'الدراسات العلمية | عيادة الشخير',
    description: 'أبحاث ودراسات علمية محكّمة في مجال الشخير واضطرابات النوم.',
    url: 'https://dentalsnoreclinic.com/scientific-studies',
    type: 'website',
  },
}

export default function ScientificStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
