import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مقاطع فيديو تعليمية',
  description:
    'شاهد مقاطع فيديو تعليمية حول الشخير وانقطاع التنفس أثناء النوم وطرق العلاج المختلفة.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/medical-library/videos' },
  openGraph: {
    title: 'مقاطع فيديو تعليمية | المكتبة الطبية',
    description: 'فيديوهات تعليمية متخصصة في الشخير واضطرابات النوم.',
    url: 'https://dentalsnoreclinic.com/medical-library/videos',
    type: 'website',
  },
}

export default function VideosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
