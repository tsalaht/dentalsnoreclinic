"use client";

import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, CheckCircle, Calendar } from "lucide-react";

export default function OralDevicesEffectivenessPage() {
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
              فعالية الأجهزة الفموية في علاج اضطرابات النوم
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-3xl mx-auto break-words">
              نظرة علمية على كيفية استخدام الأجهزة الفموية لتحسين جودة النوم
              وتقليل الشخير وانقطاع التنفس أثناء النوم.
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
                  دور الأجهزة الفموية في علاج الشخير واضطرابات النوم
                </h2>
                <p className="text-gray-700 text-sm sm:text-lg leading-relaxed break-words">
                  تُظهر الدراسات العلمية أن الأجهزة الفموية المخصصة، مثل أجهزة
                  تقدم الفك السفلي (MADs)، تُعد خيارًا فعالًا وغير جراحي لعلاج
                  الشخير وتوقف التنفس الانسدادي أثناء النوم (OSA). تعمل هذه
                  الأجهزة على إبقاء مجرى الهواء العلوي مفتوحًا عن طريق تعديل
                  وضعية الفك أو اللسان، مما يقلل من الاهتزازات المسببة للشخير
                  ويحسن تدفق الهواء.
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
                      أظهرت دراسة سريرية أن 80% من المرضى الذين استخدموا الأجهزة
                      الفموية لمدة 6 أسابيع أبلغوا عن تحسن ملحوظ في شدة الشخير،
                      مع انخفاض ملحوظ في مستويات الضوضاء أثناء النوم{" "}
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
                      وجدت الأبحاث أن الأجهزة الفموية قللت من مؤشر توقف التنفس
                      ونقص التنفس (AHI) بنسبة تصل إلى 50% في الحالات الخفيفة إلى
                      المتوسطة من توقف التنفس الانسدادي، مما يحسن جودة النوم{" "}
                      <sup>[2,3]</sup>.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-base sm:text-lg">
                      سهولة الاستخدام والراحة
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words">
                      تتميز الأجهزة الفموية بسهولة الاستخدام، مما يجعلها مريحة
                      وفعالة. تعتبر خيارًا مثاليًا للمرضى الذين يفضلون تجنب
                      العلاجات الجراحية أو أجهزة الضغط الإيجابي (CPAP){" "}
                      <sup>[4,5]</sup>.
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
                        Ferguson, K. A., et al. (1996).
                      </p>
                      <p className="italic text-gray-800">
                        A Randomized Crossover Study of an Oral Appliance vs
                        Nasal-Continuous Positive Airway Pressure in the
                        Treatment of Mild-Moderate Obstructive Sleep Apnea.
                      </p>
                      <p className="text-gray-600">
                        <i>Chest</i>.
                      </p>
                      <a
                        href="https://pubmed.ncbi.nlm.nih.gov/8625679/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all flex items-center gap-2"
                      >
                        <BookOpen className="w-4 h-4" />
                        https://pubmed.ncbi.nlm.nih.gov/8625679/
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                    <span className="text-primary font-bold text-lg">[2]</span>
                    <div className="space-y-1">
                      <p className="font-semibold text-primary">
                        Sharples, L. D., et al. (2024).
                      </p>
                      <p className="italic text-gray-800">
                        Mandibular Advancement Devices for Obstructive Sleep
                        Apnoea: A Randomised Controlled Trial.
                      </p>
                      <p className="text-gray-600">
                        <i>Thorax</i>.
                      </p>
                      <a
                        href="https://pubmed.ncbi.nlm.nih.gov/39756869/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all flex items-center gap-2"
                      >
                        <BookOpen className="w-4 h-4" />
                        https://pubmed.ncbi.nlm.nih.gov/39756869/
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                    <span className="text-primary font-bold text-lg">[3]</span>
                    <div className="space-y-1">
                      <p className="font-semibold text-primary">
                        Ramar, K., et al. (2019).
                      </p>
                      <p className="italic text-gray-800">
                        Clinical Practice Guideline for the Treatment of
                        Obstructive Sleep Apnea and Snoring with Oral Appliance
                        Therapy.
                      </p>
                      <p className="text-gray-600">
                        <i>Journal of Clinical Sleep Medicine</i>.
                      </p>
                      <a
                        href="https://pubmed.ncbi.nlm.nih.gov/31588866/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all flex items-center gap-2"
                      >
                        <BookOpen className="w-4 h-4" />
                        https://pubmed.ncbi.nlm.nih.gov/31588866/
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                    <span className="text-primary font-bold text-lg">[4]</span>
                    <div className="space-y-1">
                      <p className="font-semibold text-primary">
                        Marklund, M., et al. (2012).
                      </p>
                      <p className="italic text-gray-800">
                        Non-CPAP Therapies in Obstructive Sleep Apnoea:
                        Mandibular Advancement Device Therapy.
                      </p>
                      <p className="text-gray-600">
                        <i>European Respiratory Journal</i>.
                      </p>
                      <a
                        href="https://pubmed.ncbi.nlm.nih.gov/23074535/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all flex items-center gap-2"
                      >
                        <BookOpen className="w-4 h-4" />
                        https://pubmed.ncbi.nlm.nih.gov/23074535/
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                    <span className="text-primary font-bold text-lg">[5]</span>
                    <div className="space-y-1">
                      <p className="font-semibold text-primary">
                        Gotsopoulos, H., et al. (2013).
                      </p>
                      <p className="italic text-gray-800">
                        Oral Appliance Therapy Improves Symptoms in Obstructive
                        Sleep Apnea.
                      </p>
                      <p className="text-gray-600">
                        <i>
                          American Journal of Respiratory and Critical Care
                          Medicine
                        </i>
                        .
                      </p>
                      <a
                        href="https://pubmed.ncbi.nlm.nih.gov/23461257/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all flex items-center gap-2"
                      >
                        <BookOpen className="w-4 h-4" />
                        https://pubmed.ncbi.nlm.nih.gov/23461257/
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/962797377131?text=أريد استشارة حول الأجهزة الفموية لعلاج الشخير"
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
