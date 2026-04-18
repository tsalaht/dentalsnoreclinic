import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تحدي النوم الصحي',
  description:
    'شارك في تحدي النوم الصحي لمدة 30 يوماً وتعلّم كيف تحسّن جودة نومك وتتخلص من الشخير تدريجياً.',
  alternates: { canonical: 'https://dentalsnoreclinic.com/sleep-challenge' },
  openGraph: {
    title: 'تحدي النوم الصحي | عيادة الشخير',
    description: 'تحدي تفاعلي لمدة 30 يوماً لتحسين جودة نومك.',
    url: 'https://dentalsnoreclinic.com/sleep-challenge',
    type: 'website',
  },
}

export default function SleepChallengeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
