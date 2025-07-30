import type { Metadata } from 'next'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Dental Snore Clinic - د. مهند الكسواني | المركز الأوروبي',
  description: 'أفضل طبيب لعلاج الشخير واضطرابات النوم في الأردن. د. مهند الكسواني يقدم حلول متقدمة لعلاج الشخير وانقطاع التنفس للبالغين والأطفال في المركز الأوروبي - عمان',
  keywords: ['علاج الشخير', 'د. مهند الكسواني', 'انقطاع التنفس أثناء النوم', 'عيادة الشخير عمان', 'المركز الأوروبي', 'علاج الشخير للأطفال', 'اضطرابات النوم', 'CPAP', 'التنفس الفموي'],
  authors: [{ name: 'د. مهند الكسواني' }],
  creator: 'Dental Snore Clinic - المركز الأوروبي',
  publisher: 'Dental Snore Clinic - المركز الأوروبي',
  robots: 'index, follow',
  openGraph: {
    title: 'Dental Snore Clinic - د. مهند الكسواني | المركز الأوروبي',
    description: 'أفضل طبيب لعلاج الشخير واضطرابات النوم في الأردن. حلول متقدمة للبالغين والأطفال',
    url: 'https://dental-snore-clinic.com',
    siteName: 'Dental Snore Clinic - المركز الأوروبي',
    locale: 'ar_JO',
    type: 'website',
    images: [
      {
        url: '/Artboard 2.svg',
        width: 1200,
        height: 630,
        alt: 'Dental Snore Clinic - د. مهند الكسواني',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Snore Clinic - د. مهند الكسواني',
    description: 'أفضل طبيب لعلاج الشخير واضطرابات النوم في الأردن',
    images: ['/Artboard 2.svg'],
  },
  alternates: {
    canonical: 'https://dental-snore-clinic.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
        {/* <WhatsAppButton /> */}
      </body>
    </html>
  )
}
