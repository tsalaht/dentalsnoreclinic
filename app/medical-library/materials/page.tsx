"use client";

import Link from "next/link";
import Image from "@/components/Image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import { Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Brain } from "lucide-react";
import { PlayCircle } from "lucide-react";
const blogPosts = [
  {
    slug: "laser-snoring-treatment",
    title: "علاج الشخير بالليزر: ثورة في طب النوم",
    image: "/DSC00016.JPG",
    description:
      "تعرف على أحدث تقنيات علاج الشخير باستخدام الليزر وكيف يمكن أن تحسن جودة نومك وصحتك العامة.",
  },
  {
    slug: "child-sleep-health",
    title: "صحة نوم الأطفال: نصائح ذهبية للأهل",
    image: "/Sleeping_baby.jpg",
    description:
      "اكتشف كيف يؤثر الشخير واضطرابات التنفس على نمو الأطفال وأفضل طرق الوقاية والعلاج المبكر.",
  },
  {
    slug: "oral-devices-benefits",
    title: "فوائد الأجهزة الفموية في علاج اضطرابات النوم",
    image: "/blog3.jpg",
    description:
      "الأجهزة الفموية المخصصة تقدم حلولاً فعالة وغير جراحية لمشاكل الشخير وانقطاع التنفس أثناء النوم.",
  },
  {
    slug: "nose-vs-mouth-breathing",
    title: "التنفس من الأنف أم الفم: أيهما أفضل لصحتك؟",
    image: "/v1.mp4",
    description:
      "تعرف على الفروق الجوهرية بين التنفس الأنفي والفموي وتأثير كل منهما على الصحة العامة.",
  },
];

export default function MedicalLibraryMaterialsPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <Navbar />

      {/* Blog Section */}
      <section className="relative bg-gradient-to-l from-blue-50 to-teal-100 py-12  mt-12 overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-teal-200/30 rounded-full blur-3xl animate-float morphing-shape"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-sky-200/20 rounded-full blur-3xl animate-bounce-slow morphing-shape"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl animate-scale-pulse morphing-shape"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "المكتبة الطبية", href: "/medical-library" },
              { label: "المواد التعليمية" },
            ]}
          />

          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 animate-fade-in-up mb-4">
              المدونة الطبية
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 animate-fade-in-down relative">
              أحدث المواد التعليمية
              <span className="block w-28 h-1 bg-secondary mx-auto mt-3 rounded-full opacity-90"></span>
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              تعرف على معلومات قيمة حول الشخير، اضطرابات النوم، وصحة الفم
              والأسنان من خلال أحدث المواد التعليمية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, idx) => (
              <Link
                key={post.slug}
                href={`/medical-library/materials/${post.slug}`}
                className="group"
              >
                <Card className="bg-white border-0 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 card-hover-lift">
                  <CardContent className="p-6 text-center relative">
                    <div className="w-full h-48 rounded-xl overflow-hidden mb-4 relative">
                      {post.image.endsWith(".mp4") ? (
                        <video
                          src={post.image}
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                        />
                      ) : (
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <Badge className="absolute top-3 right-3 bg-primary/70 text-white flex items-center gap-1 animate-fade-in-up">
                        <BookOpen className="w-3 h-3" />
                        مقالة
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base line-clamp-3">
                      {post.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
              <CardContent className="p-0 flex-grow">
                <div className="relative bg-blue-100 p-6 text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    كيف أعرف أنني أتنفس عن طريق الفم عندما أكون نائمًا؟
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    قد لا تشعر أنك تقوم بالتنفس عن طريق الفم بدلًا من الأنف،
                    بالأخص في ساعات النوم، ولكن عادة ما تظهر الأعراض الآتية عليك
                    إن كنت تقوم بذلك:
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-2">الأعراض العامة:</p>
                  <ul className="list-disc list-inside text-gray-600 text-sm mb-4 space-y-1">
                    <li>الشخير</li>
                    <li>الناس يقولون إني أفتح فمي ساعات النوم</li>
                    <li>جفاف الشفاه وتشققها</li>
                    <li>رائحة الفم الكريهة</li>
                    <li>خشونة في الصوت</li>
                    <li>جفاف الفم</li>
                    <li>مشاكل في التركيز</li>
                  </ul>
                  <p className="text-gray-600 text-sm mb-2">
                    الأعراض التي تظهر لدى الأطفال:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm mb-4 space-y-1">
                    <li>تعب مزمن</li>
                    <li>تضخم اللوزتين</li>
                    <li>الاستيقاظ متعبًا</li>
                    <li>بطء في عملية النمو</li>
                    <li>السواد حول العينين</li>
                    <li>زيادة عدد مرات التبول ليلًا</li>
                  </ul>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <a
                  href="https://wa.me/962797377131?text=أريد معرفة المزيد عن التنفس الفموي"
                  target="_blank"
                >
                  <Button className="w-full bg-blue-600 hover:bg-primary text-white btn-hover-scale">
                    <MessageCircle className="w-4 h-4 ml-2" />
                    احجز استشارة
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
              <CardContent className="p-0 flex-grow">
                <div className="relative bg-green-100 p-6 text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    تعرف على حالات طبيعية للتنفس عن طريق الفم؟
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    هناك بعض الحالات التي تكون حقًا بحاجة خلالها إلى اللجوء إلى
                    التنفس عن طريق الفم لأخذ الشهيق، ولكن إن لاحظت أنك تتنفس عبر
                    الفم طوال الوقت وخلال النوم، فهذا قد يكون يؤدي إلى الإصابة
                    بمشكلة ما.
                  </p>
                </div>
                <div className="p-6">
                  <div className="bg-blue-100 p-4 rounded-lg mb-4">
                    <p className="text-gray-600 text-sm">
                      من الممكن أن تلجأ إلى التنفس عن طريق الفم عندما تعاني من
                      احتقان الأنف نتيجة الإصابة بالحساسية أو الزكام، أو حتى
                      عندما تمارس التمارين الرياضية بشدة فتكون عضلاتك بحاجة إلى
                      وصول الأكسجين لها بصورة أسرع.
                    </p>
                  </div>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <a
                  href="https://wa.me/962797377131?text=أريد معرفة الحالات الطبيعية للتنفس الفموي"
                  target="_blank"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white btn-hover-scale">
                    <MessageCircle className="w-4 h-4 ml-2" />
                    احجز استشارة
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
              <CardContent className="p-0 flex-grow">
                <div className="relative bg-orange-100 p-6 text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    لماذا تقوم بالتنفس عن طريق الفم؟
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    هناك دائمًا أسباب كامنة وراء قيامك بالتنفس عن طريق الفم، ومن
                    أهم هذه الأسباب هو انسداد مجرى الأنف، فعندما يحدث ذلك يقوم
                    الجسم بشكل تلقائي بالتوجه إلى الفم كبديل عن الأنف لتزويده
                    بالأكسجين اللازم. ومن الأسباب التي تؤدي إلى انسداد مجرى
                    الأنف:
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-2">الأسباب:</p>
                  <ul className="list-disc list-inside text-gray-600 text-sm mb-4 space-y-1">
                    <li>احتقان الأنف</li>
                    <li>تضخم اللوزتين</li>
                    <li>انحراف الحاجز الأنفي</li>
                    <li>شكل الأنف والفك</li>
                    <li>متلازمة توقف التنفس الانسدادي أثناء النوم</li>
                    <li>الإصابة بالتوتر والقلق</li>
                  </ul>
                  <p className="text-gray-600 text-sm mb-4">
                    ملاحظة: في كثير من الحالات يعود الإنسان على التنفس عن طريق
                    الفم حتى بعد زوال سبب انسداد الأنف. لذا يجب على الطبيب أو
                    أخصائي التنفس أن يساعدك في كسر عادة التنفس الفموي.
                  </p>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <a
                  href="https://wa.me/962797377131?text=أريد معرفة أسباب التنفس الفموي"
                  target="_blank"
                >
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white btn-hover-scale">
                    <MessageCircle className="w-4 h-4 ml-2" />
                    احجز استشارة
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
