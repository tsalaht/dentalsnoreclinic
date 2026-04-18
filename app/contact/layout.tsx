import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تواصل معنا وحجز موعد',
  description:
    'احجز موعدك في عيادة الشخير واضطرابات التنفس أثناء النوم. الصويفية، عمان. اتصل بنا: 0797377131.',
  keywords: ['حجز موعد عيادة الشخير', 'عيادة شخير عمان', 'تواصل عيادة الشخير'],
  alternates: { canonical: 'https://dentalsnoreclinic.com/contact' },
  openGraph: {
    title: 'تواصل معنا | عيادة الشخير',
    description: 'احجز موعدك في عيادة الشخير واضطرابات التنفس أثناء النوم - عمان، الأردن.',
    url: 'https://dentalsnoreclinic.com/contact',
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
