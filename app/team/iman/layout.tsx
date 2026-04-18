import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'إيمان - الفريق الطبي',
  description: 'تعرف على إيمان، عضو الفريق الطبي في عيادة الشخير واضطرابات التنفس أثناء النوم.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/team/iman' },
  openGraph: {
    title: 'إيمان | عيادة الشخير',
    description: 'الفريق الطبي في عيادة الشخير واضطرابات التنفس أثناء النوم.',
    url: 'https://dentalsnoreclinic.com/team/iman',
    type: 'profile',
  },
}

export default function ImanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
