"use client";

import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, CheckCircle, Calendar } from "lucide-react";

export default function MuscleExercisesEffectivenessPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-100 py-12  mt-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full sm:max-w-3xl lg:max-w-6xl">
          <div className="mb-8">
            <Link
              href="/scientific-studies"
              className="text-primary hover:underline text-base sm:text-lg"
            >
              ← العودة للدراسات العلمية
            </Link>
          </div>
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
              الدراسات العلمية
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              فعالية التمارين العضلية في علاج اضطرابات النوم
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-3xl mx-auto break-words">
              نظرة علمية على كيفية تحسين التمارين العضلية لعضلات الفم والحلق
              جودة النوم وتقليل الشخير.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full sm:max-w-3xl lg:max-w-6xl">
          <Card className="bg-white border-0 shadow-xl rounded-2xl">
            <CardContent className="p-4 sm:p-6 lg:p-8 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                  دور التمارين العضلية في علاج الشخير وتوقف التنفس أثناء النوم
                </h2>
                <p className="text-gray-700 text-sm sm:text-lg leading-relaxed break-words">
                  تشير الدراسات العلمية إلى أن التمارين العضلية للفم والحلق
                  (Myofunctional Therapy) تلعب دورًا فعالًا في تقليل الشخير
                  وتحسين جودة النوم لدى الأشخاص الذين يعانون من اضطرابات التنفس
                  أثناء النوم، مثل توقف التنفس الانسدادي أثناء النوم (OSA). هذه
                  التمارين تعزز قوة عضلات مجرى الهواء العلوي، مما يقلل من
                  انسداده أثناء النوم.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-base sm:text-lg">
                      تقليل شدة الشخير
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words">
                      أظهرت دراسة منهجية أن التمارين العضلية أدت إلى انخفاض
                      بنسبة 51% في شدة الشخير لدى المرضى بعد ممارسة التمارين
                      لمدة 3 أشهر، مما يساهم في تحسين جودة النوم للمريض وشريكه{" "}
                      <sup>[1]</sup>.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent text-base sm:text-lg">
                      تحسين توقف التنفس أثناء النوم
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words">
                      وجدت الأبحاث أن التمارين العضلية قللت من مؤشر توقف التنفس
                      ونقص التنفس (AHI) بنسبة تصل إلى 31% في الحالات الخفيف ة
                      إلى المتوسطة من توقف التنفس الانسدادي، مما يجعلها علاجًا
                      غير جراحي فعال <sup>[2]</sup>.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-base sm:text-lg">
                      سهولة التطبيق والأمان
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words">
                      تعتبر التمارين العضلية خيارًا غير جراحي، آمن، ومنخفض
                      التكلفة يمكن للمرضى تطبيقه بسهولة في المنزل. يمكن دمجها مع
                      علاجات أخرى مثل الأجهزة الفموية لتحقيق نتائج أفضل، مع
                      مستويات عالية من التزام المرضى <sup>[3]</sup>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-lg sm:text-xl font-semibold text-primary border-b-2 border-primary/20 pb-2">
                  المراجع
                </h3>
                <ul className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-6">
                  <li className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                    <span className="text-primary font-bold text-lg">[1]</span>
                    <div className="space-y-1">
                      <p className="font-semibold text-primary">
                        Ramos, P., et al. (2023).
                      </p>
                      <p className="italic text-gray-800">
                        Effect of Oropharyngeal Exercises on Snoring and
                        Obstructive Sleep Apnea.
                      </p>
                      <p className="text-gray-600">
                        <i>Frontiers in Neurology</i>.
                      </p>
                      <a
                        href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10136844/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all flex items-center gap-2"
                      >
                        <BookOpen className="w-4 h-4" />
                        https://pmc.ncbi.nlm.nih.gov/articles/PMC10136844/
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                    <span className="text-primary font-bold text-lg">[2]</span>
                    <div className="space-y-1">
                      <p className="font-semibold text-primary">
                        Ieto, V., et al. (2021).
                      </p>
                      <p className="italic text-gray-800">
                        Effects of Oropharyngeal Exercises on Patients with
                        Moderate Obstructive Sleep Apnea.
                      </p>
                      <p className="text-gray-600">
                        <i>
                          American Journal of Respiratory and Critical Care
                          Medicine
                        </i>
                        .
                      </p>
                      <a
                        href="https://pubmed.ncbi.nlm.nih.gov/34643521/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all flex items-center gap-2"
                      >
                        <BookOpen className="w-4 h-4" />
                        https://pubmed.ncbi.nlm.nih.gov/34643521/
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                    <span className="text-primary font-bold text-lg">[3]</span>
                    <div className="space-y-1">
                      <p className="font-semibold text-primary">
                        Camacho, M., et al. (2020).
                      </p>
                      <p className="italic text-gray-800">
                        Myofunctional Therapy to Treat Obstructive Sleep Apnea:
                        A Systematic Review.
                      </p>
                      <p className="text-gray-600">
                        <i>Sleep</i>.
                      </p>
                      <a
                        href="https://pubmed.ncbi.nlm.nih.gov/33141943/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all flex items-center gap-2"
                      >
                        <BookOpen className="w-4 h-4" />
                        https://pubmed.ncbi.nlm.nih.gov/33141943/
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                    <span className="text-primary font-bold text-lg">[4]</span>
                    <div className="space-y-1">
                      <p className="font-semibold text-primary">
                        Hsu, B., et al. (2023).
                      </p>
                      <p className="italic text-gray-800">
                        Oropharyngeal Exercises for Sleep-Disordered Breathing:
                        A Meta-Analysis.
                      </p>
                      <p className="text-gray-600">
                        <i>Journal of Clinical Sleep Medicine</i>.
                      </p>
                      <a
                        href="https://pubmed.ncbi.nlm.nih.gov/37606313/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all flex items-center gap-2"
                      >
                        <BookOpen className="w-4 h-4" />
                        https://pubmed.ncbi.nlm.nih.gov/37606313/
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                    <span className="text-primary font-bold text-lg">[5]</span>
                    <div className="space-y-1">
                      <p className="font-semibold text-primary">
                        Guimaraes, K. C., et al. (2018).
                      </p>
                      <p className="italic text-gray-800">
                        Effects of Oropharyngeal Exercises on Snoring and
                        Obstructive Sleep Apnea.
                      </p>
                      <p className="text-gray-600">
                        <i>Chest</i>.
                      </p>
                      <a
                        href="https://pubmed.ncbi.nlm.nih.gov/30233265/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all flex items-center gap-2"
                      >
                        <BookOpen className="w-4 h-4" />
                        https://pubmed.ncbi.nlm.nih.gov/30233265/
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/962797377131?text=أريد استشارة حول التمارين العضلية لعلاج الشخير"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-blue-600 hover:bg-primary text-white px-4 py-2 text-sm sm:text-base">
                    <Calendar className="w-4 h-4 ml-2" />
                    احجز استشارة
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
