import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'عيدا - الفريق الطبي',
  description: 'تعرف على عيدا، عضو الفريق الطبي في عيادة الشخير واضطرابات التنفس أثناء النوم.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/team/aida' },
  openGraph: {
    title: 'عيدا | عيادة الشخير',
    description: 'الفريق الطبي في عيادة الشخير واضطرابات التنفس أثناء النوم.',
    url: 'https://dentalsnoreclinic.com/team/aida',
    type: 'profile',
  },
}

export default function AidaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
