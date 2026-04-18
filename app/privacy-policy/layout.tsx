import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'سياسة الخصوصية',
  description: 'سياسة الخصوصية وحماية البيانات الشخصية في عيادة الشخير واضطرابات التنفس أثناء النوم.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://dentalsnoreclinic.com/privacy-policy' },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
