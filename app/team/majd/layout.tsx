import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ماجد - الفريق الطبي',
  description: 'تعرف على ماجد، عضو الفريق الطبي في عيادة الشخير واضطرابات التنفس أثناء النوم.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/team/majd' },
  openGraph: {
    title: 'ماجد | عيادة الشخير',
    description: 'الفريق الطبي في عيادة الشخير واضطرابات التنفس أثناء النوم.',
    url: 'https://dentalsnoreclinic.com/team/majd',
    type: 'profile',
  },
}

export default function MajdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
