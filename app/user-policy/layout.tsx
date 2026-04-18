import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'شروط الاستخدام',
  description: 'شروط وأحكام استخدام موقع عيادة الشخير واضطرابات التنفس أثناء النوم.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://dentalsnoreclinic.com/user-policy' },
}

export default function UserPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
