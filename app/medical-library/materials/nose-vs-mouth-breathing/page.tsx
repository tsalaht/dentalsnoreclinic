"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

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
              <div className="w-full h-64 rounded-xl overflow-hidden mb-6 flex items-center justify-center bg-gray-100">
                <video src="/v1.mp4" className="w-full h-full object-cover" controls />
              </div>
              <h1 className="text-3xl font-bold text-primary mb-4">التنفس من الأنف أم الفم: أيهما أفضل لصحتك؟</h1>
              <p className="text-primary/90 text-lg mb-4">تعرف على الفروق الجوهرية بين التنفس الأنفي والفموي وتأثير كل منهما على الصحة العامة.</p>
              <div className="text-gray-700 leading-relaxed space-y-4 text-base">
                <p>التنفس من الأنف هو الطريقة الطبيعية والصحية التي صمم لها الجسم البشري. يساعد التنفس الأنفي على ترطيب الهواء وتنقيته من الشوائب، كما يساهم في تنظيم درجة حرارة الهواء الداخل إلى الرئتين.</p>
                <p>أما التنفس من الفم فقد يؤدي إلى جفاف الفم، وزيادة خطر الإصابة بالتهابات الجهاز التنفسي، واضطرابات النوم مثل الشخير وانقطاع التنفس النومي.</p>
                <p>لذلك، ينصح دائمًا بتدريب النفس على التنفس الأنفي، وطلب الاستشارة الطبية في حال وجود صعوبات في التنفس عبر الأنف.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 