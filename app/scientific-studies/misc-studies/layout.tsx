import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'دراسات علمية متنوعة',
  description:
    'مجموعة متنوعة من الدراسات والأبحاث العلمية في مجال اضطرابات النوم والشخير وانقطاع التنفس.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/scientific-studies/misc-studies' },
  openGraph: {
    title: 'دراسات علمية متنوعة | عيادة الشخير',
    description: 'أبحاث علمية متنوعة في مجال اضطرابات النوم.',
    url: 'https://dentalsnoreclinic.com/scientific-studies/misc-studies',
    type: 'article',
  },
}

export default function MiscStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
