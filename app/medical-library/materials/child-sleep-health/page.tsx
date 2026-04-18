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
              <Image src="/baby.png" alt="صحة نوم الأطفال" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">صحة نوم الأطفال: نصائح ذهبية للأهل</h1>
              <p className="text-primary/90 text-lg mb-4">اكتشف كيف يؤثر الشخير واضطرابات التنفس على نمو الأطفال وأفضل طرق الوقاية والعلاج المبكر.</p>
              <div className="text-gray-700 leading-relaxed space-y-4 text-base">
                <p>نوم الأطفال الصحي هو أساس نموهم الجسدي والعقلي. الشخير واضطرابات التنفس أثناء النوم قد تؤثر سلبًا على تركيز الطفل، نموه، وحتى سلوكه اليومي.</p>
                <p>من المهم مراقبة علامات اضطرابات النوم مثل الشخير، صعوبة الاستيقاظ، أو التعب المزمن. التدخل المبكر من خلال استشارة الطبيب المختص يمكن أن يمنع المضاعفات ويحسن جودة حياة الطفل.</p>
                <p>احرص على توفير بيئة نوم هادئة، واتباع روتين نوم منتظم، وطلب الاستشارة الطبية عند ظهور أي أعراض غير طبيعية.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 