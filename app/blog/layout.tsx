import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'المدوّنة',
  description:
    'مقالات ونصائح طبية حول الشخير واضطرابات النوم والتنفس من متخصصي عيادة الشخير واضطرابات التنفس أثناء النوم.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/blog' },
  openGraph: {
    title: 'المدوّنة | عيادة الشخير',
    description: 'مقالات طبية متخصصة في الشخير واضطرابات النوم.',
    url: 'https://dentalsnoreclinic.com/blog',
    type: 'website',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
