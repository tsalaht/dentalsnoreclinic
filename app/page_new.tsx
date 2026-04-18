"use client";
import Image from "@/components/Image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Phone,
  MapPin,
  Clock,
  Users,
  Award,
  Heart,
  Brain,
  Moon,
  Stethoscope,
  Baby,
  User,
  BookOpen,
  Play,
  GamepadIcon,
  CheckCircle,
  AlertTriangle,
  Zap,
  Target,
  Trophy,
  Video,
  FileText,
  Search,
  MessageCircle,
  Calendar,
  PlayCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useEffect } from "react";

export default function ArabicSnoringClinic() {
  useEffect(() => {
    document.title = "الرئيسيه - عيادة الشخير واضطراب التنفس أثناء النوم";
  }, []);

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Head>
        <title>الرئيسيه -عيادة الشخير واضطراب التنفس أثناء النوم</title>
        <meta
          name="description"
          content="نساعدك على علاج الشخير وتحسين جودة التنفس والنوم. اتصل بنا اليوم للحصول على استشارة."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dentalsnoreclinic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />

      <section className="relative bg-gradient-to-l from-blue-50 to-blue-100 py-12 ">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                  تحذير صحي مهم
                </Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-primary leading-tight">
                  الشخير والتنفس الفموي يؤثران على صحتك - اكتشف العلاج المناسب
                  لك!
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Dental Snore Clinic - المركز الأوروبي، د. مهند الكسواني كأفضل
                  طبيب لعلاج الشخير واضطرابات النوم المتعلقة بصحة الفم في الأردن
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/adults">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-primary text-white px-8 py-4 text-lg w-full"
                  >
                    <User className="w-5 h-5 ml-2" />
                    أنا بالغ وأريد علاج الشخير
                  </Button>
                </Link>
                <Link href="/children">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 text-lg w-full"
                  >
                    <Baby className="w-5 h-5 ml-2" />
                    طفلي يعاني من الشخير وأحتاج حلاً
                  </Button>
                </Link>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-yellow-800 mb-3">
                  🔍 اكتشف مدى خطورة شخيرك - أجب عن الأسئلة الآن!
                </h3>
                <Link href="#snoring-assessment">
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                    ابدأ الاستبيان المجاني
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative  bg-red-800 ">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="شخص نائم يعاني من الشخير مع طفل ينام بفمه مفتوح"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-800">
                    علاج فعال وآمن للشخير للبالغين والأطفال
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Assessment Section */}
      <section
        className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50 border-t-4 border-yellow-400"
        id="snoring-assessment"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                🔍 اكتشف مدى خطورة شخيرك - اختبار مجاني شامل
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                أجب على بضعة أسئلة سريعة واحصل على تقييم طبي فوري ومخصص لحالتك
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white hover:shadow-xl transition-shadow border-blue-200">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    اختبار البالغين
                  </h3>
                  <p className="text-gray-600 mb-4">
                    تقييم شامل للشخير وانقطاع التنفس أثناء النوم
                  </p>
                  <a
                    href="https://wa.me/962797377131"
                    target="_blank"
                    className="w-full"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-primary text-white py-3 text-lg">
                      ابدأ اختبار البالغين
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-xl transition-shadow border-green-200">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Baby className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    اختبار الأطفال
                  </h3>
                  <p className="text-gray-600 mb-4">
                    فحص مبكر للتنفس الفموي ومشاكل النوم عند الأطفال
                  </p>
                  <a
                    href="https://wa.me/962797377131"
                    target="_blank"
                    className="w-full"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
                      ابدأ اختبار الأطفال
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-200">
              <h3 className="text-xl font-bold text-primary mb-4">
                ما الذي ستحصل عليه من الاختبار؟
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">
                    تقييم فوري
                  </h4>
                  <p className="text-sm text-gray-600">
                    نتيجة دقيقة لمدى خطورة حالتك
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">
                    تقرير مفصل
                  </h4>
                  <p className="text-sm text-gray-600">
                    توصيات طبية مخصصة لحالتك
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">
                    موعد مجاني
                  </h4>
                  <p className="text-sm text-gray-600">
                    استشارة مجانية إذا كانت الحالة تستدعي
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-semibold mb-2">
                ⚠️ تحذير طبي مهم
              </p>
              <p className="text-red-700 text-sm">
                إذا كنت تعاني من توقف التنفس أثناء النوم أو شخير شديد، لا تتأخر
                في طلب المساعدة الطبية
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              خدماتنا المتخصصة
            </h2>
            <p className="text-lg text-gray-600">
              علاج شامل ومخصص لكل عمر ولكل حالة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/adults">
              <Card className="bg-blue-50 border-blue-200 hover:shadow-xl transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    علاج البالغين
                  </h3>
                  <p className="text-gray-600 text-sm">
                    علاج الشخير وانقطاع التنفس النومي
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/children">
              <Card className="bg-green-50 border-green-200 hover:shadow-xl transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Baby className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    علاج الأطفال
                  </h3>
                  <p className="text-gray-600 text-sm">
                    العلاج المبكر والوقاية
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/medical-library">
              <Card className="bg-purple-50 border-purple-200 hover:shadow-xl transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    المكتبة الطبية
                  </h3>
                  <p className="text-gray-600 text-sm">
                    فيديوهات ودراسات تعليمية
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/sleep-challenge">
              <Card className="bg-pink-50 border-pink-200 hover:shadow-xl transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GamepadIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    تحدي النوم
                  </h3>
                  <p className="text-gray-600 text-sm">
                    اختبر جودة نومك بطريقة تفاعلية
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-white mr-1" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    فيديو ترحيبي من د. مهند
                  </h3>
                  <p className="text-gray-600 mb-4">
                    تعرف على العيادة وأهمية علاج الشخير
                  </p>
                  <a href="https://wa.me/962797377131" target="_blank">
                    <Button className="bg-blue-600 hover:bg-primary text-white">
                      <PlayCircle className="w-5 h-5 ml-2" />
                      شاهد الفيديو
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  د. مهند الكسواني
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  أفضل طبيب لعلاج الشخير واضطرابات النوم المتعلقة بصحة الفم في
                  الأردن
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-blue-600 mt-1" />
                    <span className="text-gray-700">
                      خبرة أكثر من 15 عاماً في علاج اضطرابات النوم
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-600 mt-1" />
                    <span className="text-gray-700">
                      أكثر من 5000 مريض تم علاجهم بنجاح
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-blue-600 mt-1" />
                    <span className="text-gray-700">
                      تقييم 4.9/5 من المرضى السابقين
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-primary text-white">
                    <Calendar className="w-4 h-4 ml-2" />
                    احجز استشارة
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    <BookOpen className="w-4 h-4 ml-2" />
                    المزيد عن الدكتور
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              لا تدع الشخير يؤثر على حياتك
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              احجز استشارتك اليوم واحصل على خطة علاج مخصصة لحالتك
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href="https://wa.me/962797377131"
                target="_blank"
                className="flex-1"
              >
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white w-full"
                >
                  <MessageCircle className="w-5 h-5 ml-2" />
                  واتساب مباشر
                </Button>
              </a>
              <a href="tel:+962797377131" className="flex-1">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 w-full"
                >
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل الآن
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Dental Snore Clinic</h3>
              <p className="text-gray-400 mb-4">المركز الأوروبي للطب الأسنان</p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>د. مهند الكسواني</p>
                <p>ﺧﺒﻴﺮ ﻋﻼج اﻟﺸﺨﻴﺮ واﻟﺘﻨﻔﺲ اﻟﻔﻤﻮي</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">صفحات الموقع</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/adults" className="hover:text-white">
                    علاج البالغين
                  </Link>
                </li>
                <li>
                  <Link href="/children" className="hover:text-white">
                    علاج الأطفال
                  </Link>
                </li>
                <li>
                  <Link href="/medical-library" className="hover:text-white">
                    المكتبة الطبية
                  </Link>
                </li>
                <li>
                  <Link href="/sleep-challenge" className="hover:text-white">
                    تحدي النوم
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    الأسئلة الشائعة
                  </Link>
                </li>
                <li>
                  <Link href="/user-policy" className="hover:text-white">
                    سياسة المستخدم
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white">
                    سياسة الخصوصية
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">خدماتنا</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>تشخيص أسباب الشخير</li>
                <li>علاج انقطاع التنفس النومي</li>
                <li>تقويم الفكين</li>
                <li>العلاج الوقائي للأطفال</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">تواصل معنا</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📞 962797377131</p>
                <p>📍 الأردن - عمان - صويفية - شارع باريس - مجمع الشانزليزيه</p>
                <p>السبت - الأربعاء : 10:00 - 6:00 </p>
                <p>الخميس : 10:00 - 2:00 </p>
                <p>الجمعة: عطلة </p>
                <div className="flex gap-2 mt-4">
                  <a
                    href="https://wa.me/962797377131"
                    target="_blank"
                    className="hover:text-green-400"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a href="tel:+962797377131" className="hover:text-blue-400">
                    <Phone className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/HealthyStartCenter"
                    target="_blank"
                    className="hover:text-blue-400"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/edc.snore/"
                    target="_blank"
                    className="hover:text-pink-400"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/90 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; 2024 Dental Snore Clinic - المركز الأوروبي. جميع الحقوق
              محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
