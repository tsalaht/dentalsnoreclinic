import type { Metadata } from 'next'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'لماذا يعالج طبيب الأسنان الشخير؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'طبيب الأسنان المتخصص في طب النوم يملك الخبرة في تصنيع الأجهزة الفموية وعلاجات الليزر التي تعالج الشخير وانقطاع التنفس أثناء النوم من خلال تحسين موضع الفك والأنسجة الرخوة.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل علاج الشخير بالليزر مؤلم؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'علاج NightLase بالليزر غير جراحي وغير مؤلم تقريباً، ولا يتطلب تخديراً وتستطيع مزاولة نشاطك اليومي فور انتهاء الجلسة.',
      },
    },
    {
      '@type': 'Question',
      name: 'كم جلسة تحتاج لعلاج الشخير بالليزر؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'عادةً يحتاج البروتوكول العلاجي إلى 3 جلسات على مدى 6 أسابيع، مع نتائج ملحوظة منذ الجلسة الأولى.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل يمكن علاج شخير الأطفال؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم، شخير الأطفال قابل للعلاج وكثيراً ما يكون مرتبطاً بتضخم اللوزتين أو التنفس الفموي. التدخل المبكر يمنع مضاعفات التطور والنمو.',
      },
    },
    {
      '@type': 'Question',
      name: 'ما هي الأجهزة الفموية لعلاج الشخير؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'هي أجهزة مخصصة تُوضع في الفم أثناء النوم لتقديم الفك السفلي وإبقاء مجرى الهواء مفتوحاً، مما يقلل الشخير وانقطاع التنفس.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'الأسئلة الشائعة',
  description:
    'إجابات على أكثر الأسئلة شيوعاً حول الشخير وانقطاع التنفس أثناء النوم وطرق العلاج المتاحة في عيادتنا.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/faq' },
  openGraph: {
    title: 'الأسئلة الشائعة | عيادة الشخير',
    description: 'إجابات شاملة على أسئلتك حول الشخير وعلاجه.',
    url: 'https://dentalsnoreclinic.com/faq',
    type: 'website',
  },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  )
}
