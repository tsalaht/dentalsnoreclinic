import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'فوائد الأجهزة الفموية لعلاج الشخير',
  description:
    'تعرف على الأجهزة الفموية المستخدمة لعلاج الشخير وانقطاع التنفس أثناء النوم وفوائدها العلمية المثبتة.',
  keywords: ['أجهزة فموية', 'علاج الشخير بالأجهزة', 'oral appliance', 'MAD', 'جهاز تقديم الفك'],
  alternates: { canonical: 'https://dentalsnoreclinic.com/medical-library/materials/oral-devices-benefits' },
  openGraph: {
    title: 'فوائد الأجهزة الفموية | المكتبة الطبية',
    description: 'الأجهزة الفموية كحل فعّال لعلاج الشخير.',
    url: 'https://dentalsnoreclinic.com/medical-library/materials/oral-devices-benefits',
    type: 'article',
  },
}

export default function OralDevicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
