import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'علاج الشخير للبالغين',
  description:
    'حلول متقدمة لعلاج الشخير وانقطاع التنفس أثناء النوم للبالغين. ليزر NightLase، الأجهزة الفموية، وبرامج علاجية متكاملة في عمان، الأردن.',
  keywords: ['علاج الشخير للبالغين', 'انقطاع التنفس أثناء النوم', 'NightLase', 'ليزر الشخير', 'أجهزة فموية للشخير'],
  alternates: { canonical: 'https://dentalsnoreclinic.com/adults' },
  openGraph: {
    title: 'علاج الشخير للبالغين | عيادة الشخير',
    description: 'علاج متخصص للشخير وانقطاع التنفس أثناء النوم للبالغين باستخدام أحدث التقنيات.',
    url: 'https://dentalsnoreclinic.com/adults',
    type: 'website',
  },
}

export default function AdultsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
