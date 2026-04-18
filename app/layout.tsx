import type { Metadata, Viewport } from 'next'
import { Tajawal } from 'next/font/google'
import './globals.css'

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-tajawal',
  display: 'swap',
})

const siteUrl = 'https://dentalsnoreclinic.com'
const siteName = 'عيادة الشخير واضطرابات التنفس أثناء النوم'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e40af',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    'أفضل طبيب لعلاج الشخير واضطرابات النوم في الأردن. د. مهند الكسواني يقدم حلول متقدمة لعلاج الشخير وانقطاع التنفس للبالغين والأطفال في المركز الأوروبي - عمان',
  keywords: [
    'علاج الشخير',
    'د. مهند الكسواني',
    'انقطاع التنفس أثناء النوم',
    'عيادة الشخير عمان',
    'المركز الأوروبي',
    'علاج الشخير للأطفال',
    'اضطرابات النوم',
    'CPAP',
    'التنفس الفموي',
    'طبيب الشخير الأردن',
  ],
  authors: [{ name: 'د. مهند الكسواني' }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    title: siteName,
    description:
      'أفضل طبيب لعلاج الشخير واضطرابات النوم في الأردن. حلول متقدمة للبالغين والأطفال',
    url: siteUrl,
    siteName,
    locale: 'ar_JO',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: 'أفضل طبيب لعلاج الشخير واضطرابات النوم في الأردن',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/dental-snore-logo.png',
    apple: '/dental-snore-logo.png',
  },
  verification: {
    google: '',
  },
}

const clinicJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': `${siteUrl}/#clinic`,
  name: 'Dental Snore Clinic - عيادة الشخير واضطرابات التنفس أثناء النوم',
  url: siteUrl,
  logo: `${siteUrl}/dental-snore-logo.png`,
  image: `${siteUrl}/og-image.png`,
  description:
    'عيادة متخصصة في علاج الشخير واضطرابات التنفس أثناء النوم للبالغين والأطفال في عمان، الأردن',
  telephone: '+962797377131',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'شارع باريس - مجمع الشانزليزيه',
    addressLocality: 'الصويفية',
    addressRegion: 'عمان',
    addressCountry: 'JO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.9696,
    longitude: 35.8717,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
      opens: '09:00',
      closes: '21:00',
    },
  ],
  sameAs: [],
  priceRange: '$$',
  medicalSpecialty: 'Dentistry',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
