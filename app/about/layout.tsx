import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'من نحن',
  description:
    'تعرف على عيادة الشخير واضطرابات التنفس أثناء النوم وفريقها الطبي المتخصص بقيادة د. مهند الكسواني في عمان، الأردن.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/about' },
  openGraph: {
    title: 'من نحن | عيادة الشخير واضطرابات التنفس أثناء النوم',
    description: 'تعرف على عيادتنا وفريقنا الطبي المتخصص في علاج الشخير واضطرابات النوم.',
    url: 'https://dentalsnoreclinic.com/about',
    type: 'website',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
