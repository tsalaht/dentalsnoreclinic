"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import Image from '@/components/Image';

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
              <Image src="/baby.png" alt="فوائد الأجهزة الفموية" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">فوائد الأجهزة الفموية في علاج اضطرابات النوم</h1>
              <p className="text-primary/90 text-lg mb-4">الأجهزة الفموية المخصصة تقدم حلولاً فعالة وغير جراحية لمشاكل الشخير وانقطاع التنفس أثناء النوم.</p>
              <div className="text-gray-700 leading-relaxed space-y-4 text-base">
                <p>تُعد الأجهزة الفموية من أكثر الحلول فعالية لعلاج الشخير وانقطاع التنفس النومي، خاصةً للمرضى الذين لا يفضلون الجراحة أو أجهزة الضغط الهوائي.</p>
                <p>تعمل هذه الأجهزة على إبقاء مجرى الهواء مفتوحًا أثناء النوم من خلال تقديم الفك السفلي للأمام، مما يقلل من احتمالية انسداد مجرى التنفس.</p>
                <p>تتميز الأجهزة الفموية بسهولة استخدامها، وفعاليتها السريعة، وراحتها مقارنة بالحلول الأخرى. استشر طبيب الأسنان المختص لمعرفة ما إذا كانت مناسبة لحالتك.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 