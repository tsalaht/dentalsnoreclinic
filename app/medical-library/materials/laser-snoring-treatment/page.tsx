"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image';

export default function BlogDetail() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <div className="mb-8">
            <Link href="/blog" className="text-primary hover:underline">←  المواد التثقيفية</Link>
          </div>
          <Card className="bg-white border-0 shadow-xl rounded-2xl">
            <CardContent className="p-8">
              <Image src="/DSC00016.JPG" alt="علاج الشخير بالليزر" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">علاج الشخير بالليزر: ثورة في طب النوم</h1>
              <p className="text-primary/90 text-lg mb-4">تعرف على أحدث تقنيات علاج الشخير باستخدام الليزر وكيف يمكن أن تحسن جودة نومك وصحتك العامة.</p>
              <div className="text-primary/90 leading-relaxed space-y-4 text-base">
                <p>يُعد الشخير من أكثر اضطرابات النوم شيوعًا، ويؤثر بشكل كبير على جودة النوم والصحة العامة. في السنوات الأخيرة، ظهرت تقنية علاج الشخير بالليزر كحل مبتكر وفعال، حيث تعمل على شد الأنسجة الرخوة في سقف الحلق وتقليل الاهتزازات المسببة للشخير دون الحاجة إلى تدخل جراحي.</p>
                <p>تتميز هذه التقنية بأنها غير مؤلمة تقريبًا، ولا تتطلب فترة نقاهة طويلة، ويمكن للمريض العودة إلى حياته الطبيعية فورًا بعد الجلسة. كما أن نتائج العلاج تظهر تدريجيًا وتستمر لفترة طويلة، مما يجعلها خيارًا مثاليًا للعديد من المرضى.</p>
                <p>إذا كنت تعاني من الشخير أو اضطرابات التنفس أثناء النوم، استشر طبيبك حول إمكانية الاستفادة من علاج الليزر لتحسين جودة نومك وصحتك.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 