"use client";
import Image from "@/components/Image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Phone,
  Clock,
  Users,
  Award,
  Stethoscope,
  BookOpen,
  CheckCircle,
  Zap,
  MessageCircle,
  Calendar,
  Building,
  GraduationCap,
  Shield,
  Smile,
  Trophy,
  Baby,
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  useEffect(() => {
    document.title = "من نحن - عيادة الشخير واضطراب التنفس أثناء النوم";
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);
  const sleepMedicineRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash === "#sleep-medicine") {
      setIsExpanded(true);
      setTimeout(() => {
        sleepMedicineRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Head>
        <title>من نحن - عيادة الشخير واضطراب التنفس أثناء النوم</title>
        <meta
          name="description"
          content="نساعدك على علاج الشخير وتحسين جودة التنفس والنوم. اتصل بنا اليوم للحصول على استشارة."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dentalsnoreclinic.com" />
      </Head>

      <Navbar />
      <section className="relative bg-gradient-to-l from-blue-50 to-indigo-100 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  عن العيادة والطبيب
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
                  د. مهند الكسواني - رائد علاج الشخير في الأردن
                </h1>
              </div>
            </div>

            <div className="relative">
              {/* <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image  
                  src="/18.png"
                  alt="د. مهند الكسواني في عيادة علاج الشخير"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-800">خبرة وثقة ونتائج مؤكدة</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/73.jpg"
                  alt="د. مهند الكسواني"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-lg w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <Badge className="bg-blue-100 text-blue-800 mb-4">
                    الطبيب المتخصص
                  </Badge>
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    د. مهند الكسواني
                  </h2>
                  <p className="text-xl text-blue-600 font-semibold mb-6">
                    المحاضر الدولي في علوم طب الأسنان الرقمي وإطباق الأسنان
                    والابتسامة الرقمية وطب الأسنان المتعلق بالشخير واضطراب
                    التنفس أثناء النوم
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    د. مهند الكسواني، مؤسس ومدير المركز الأوروبي لطب الأسنان،
                    يتميز بخبرته الواسعة في طب الأسنان وزراعة الأسنان، مع
                    التركيز على تقنيات متقدمة مثل زراعة الأسنان الموجهة بالحاسوب
                    والزراعة الفورية خلال 48 ساعة. يشتهر المركز بتقديم خدمات
                    شاملة عالية الجودة مع فريق من الأطباء والأخصائيين المتميزين.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-lg">
                        التحصيل العلمي
                      </h4>
                      <ul className="text-gray-600 space-y-1 mt-2">
                        <li>• دكتور في طب الأسنان - الجامعة الأردنية</li>
                        <li>
                          • ماجستير في علوم الخدمة الصحية - كلية الجراحين، لندن
                        </li>
                        <li>
                          • شهادات متقدمة في طب الأسنان الرقمي وزراعة الأسنان
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-accent text-lg">
                        الخبرة المهنية
                      </h4>
                      <ul className="text-gray-600 space-y-1 mt-2">
                        <li>• مؤسس ومدير المركز الأوروبي لطب الأسنان</li>
                        <li>
                          • خبير في زراعة الأسنان الموجهة بالحاسوب والزراعة
                          الفورية
                        </li>
                        <li>• عضو في الجمعية الأوروبية لتجميل الأسنان</li>
                        <li>
                          • محاضر دولي في طب الأسنان الرقمي والابتسامة الرقمية
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary text-lg">
                        الإنجازات والجوائز
                      </h4>
                      <ul className="text-gray-600 space-y-1 mt-2">
                        <li>
                          • رائد في تقديم محتوى طبي عبر منصات التواصل الاجتماعي
                        </li>
                        <li>
                          • يؤمن بالممارسات الأخلاقية ومشاركة المريض في قرارات
                          العلاج
                        </li>
                        <li>• محاضر في المؤتمرات الدولية لطب الأسنان الرقمي</li>
                        <li>
                          • تقييم عالي من المرضى لخدمات المركز الأوروبي لطب
                          الأسنان
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://wa.me/962797377131?text=أريد حجز استشارة مع د. مهند الكسواني"
                    target="_blank"
                  >
                    <Button className="bg-blue-600 hover:bg primary text-white px-6 py-3">
                      <Calendar className="w-4 h-4 ml-2" />
                      احجز استشارة
                    </Button>
                  </a>
                  <Link href="/medical-library">
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3"
                    >
                      <BookOpen className="w-4 h-4 ml-2" />
                      شاهد محاضراته
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-50 to-white border-t-4 border-blue-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
              <Award className="w-8 h-8 text-primar" />
              شهادات الدكتور مهند
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              شهادات واعتمادات دولية تؤكد خبرة الدكتور مهند في علاج الشخير
              واضطرابات النوم
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-8 w-full mx-auto">
            {[
              { src: "/sartafica1.jpeg", label: "شهادة اعتماد دولية" },
              { src: "/sartafica2.jpeg", label: "شهادة تدريب في علاج الشخير" },
              { src: "/sartafica3.jpeg", label: "شهادة مشاركة في مؤتمرات دولية" },
              { src: "/sartafica6.png",  label: "شهادة بروتوكولات علاج اضطرابات الفك والتنفس" },
              { src: "/sartafica4.png",  label: "شهادة علاج أجهزة الفم للنوم" },
              { src: "/sartafica5.png",  label: "شهادة تفسير اختبار النوم البوليسوموغرافي" },
              { src: "/sartafica4.jpeg", label: "شهادة خبرة في اضطرابات النوم" },
            ].map((cert, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300 border border-blue-100 cursor-pointer"
                onClick={() => openModal(cert.src)}
              >
                <div className="relative w-full h-48 mb-3 rounded-lg overflow-hidden">
                  <Image src={cert.src} alt={cert.label} className="object-cover" />
                </div>
                <span className="text-primary font-semibold text-sm text-center">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg p-4 max-w-5xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 z-10 text-gray-600 hover:text-gray-800 text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="relative w-full h-[80vh] rounded-lg overflow-hidden">
              <Image src={selectedImage!} alt="Certificate Full View" className="object-contain" />
            </div>
          </div>
        </div>
      )}

      <section className="py-16 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <Badge className="bg-blue-100 text-blue-800 mb-4">
                    عضوية جديدة
                  </Badge>
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    عضو في الجمعية البريطانية لطب أمراض النوم المتعلق بطب
                    الأسنان
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    الإضافة إلى خبرته الواسعة، أصبح الدكتور مهند الكسواني مؤخراً
                    عضو في الجمعية البريطانية لطب أمراض النوم المتعلق بطب
                    الأسنان (British Society of Dental Sleep Medicine). يعكس هذا
                    الانضمام التزامه المستمر بأحدث التطورات في مجال صحة النوم
                    والعلاقة الوثيقة بينها وبين طب الأسنان، ويؤكد سعيه الدائم
                    لتقديم أفضل الحلول العلاجية لمشاكل الشخير واضطرابات التنفس
                    المرتبطة بالحجرة الفموية.
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/new.png"
                  alt="عضوية الجمعية البريطانية لطب أمراض النوم"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-12 bg-gradient-to-br from-blue-50 to-teal-50"
        dir="rtl"
      >
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Header */}

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center relative">
              فريق العمل
              <span className="block w-16 h-1 bg-secondary mx-auto mt-2 rounded-full"></span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "د. مهند الكسواني",
                  role: `Airway Dentist\nSnoring and mouth breathing physician`,
                  image: "/73.jpg",
                  slug: "mohannad",
                },
                {
                  name: "د. عايدة",
                  role: `Airway Dentist\nSnoring and mouth breathing physician`,
                  image: "/aida.jpg",
                  slug: "aida",
                },
                {
                  name: "د. مجد",
                  role: `Airway Dentist\nSnoring and mouth breathing physician`,
                  image: "/majd.png",
                  slug: "majd",
                },
                {
                  name: "د. إيمان",
                  role: "أخصائية الأشعة السنية التشخيصية",
                  image: "/iman.JPG",
                  slug: "iman",
                },
              ].map((doctor, idx) => (
                <Link key={idx} href={`/team/${doctor.slug}`} className="flex">
                  <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col w-full">
                    <CardContent className="p-6 text-center flex flex-col flex-1">
                      <div className="w-48 h-64 mx-auto mb-4 rounded-xl overflow-hidden relative">
                        <Image
                          src={doctor.image}
                          alt={doctor.name}
                          className="object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-primary mb-2">
                        {doctor.name}
                      </h4>
                      <div className="text-gray-600 leading-relaxed text-base">
                        {doctor.role.split("\n").map((line, index) => (
                          <p
                            key={index}
                            className={index === 0 ? "font-semibold" : ""}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
          {/* Dental Sleep Medicine */}
          <div className="mt-20">
            <h3
              id="sleep-medicine"
              ref={sleepMedicineRef}
              className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center relative"
            >
              طب الأسنان المتعلق بأمراض النوم
              <span className="block w-16 h-1 bg-secondary mx-auto mt-2 rounded-full"></span>
            </h3>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div>
                <p className="text-gray-600 leading-relaxed text-base mb-6">
                  يؤدي تخصص طب الأسنان المتعلق بالنوم أو ما يعرف بـ Dental Sleep
                  Medicine دوراً مهماً في معالجة مشكلة الشخير واضطراب التنفس
                  والتنفس الفموي أثناء النوم. منذ عام 2015 ظهرت توصيات أمريكية
                  حديثة فيما يتعلق بتشخيص ومعالجة الشخير واضطراب التنفس أثناء
                  النوم، والتي تؤكد دور طبيب الأسنان مع أطباء النوم في معالجة
                  هذه المشكلة للحد من الآثار السلبية الناجمة منها.
                </p>
                {isExpanded && (
                  <>
                    <p className="text-gray-600 leading-relaxed text-base mb-6">
                      إن من أحد طرق المعالجة هو استخدام أجهزة فموية مخصصة
                      يرتديها المريض لتقدم الفك السفلي وفتح مجرى النفس بشكل
                      أكبر. من المثير للاهتمام أن مثل هذه الأجهزة الفموية تعطي
                      نتائج فعالة بشكل سريع بعد مدة 6 أسابيع من ارتدائها. كما
                      أنه من غير الضروري تقديم الفك السفلي بشكل كبير لفتح مجرى
                      النفس، بضعة ملليمترات تكفي لحل المشكلة!
                    </p>
                    <p className="text-gray-600 leading-relaxed text-base mb-6">
                      إضافة إلى ذلك، فإن الأجهزة الفموية التي يصفها طبيب الأسنان
                      المختص تعتبر أقل كلفة وأكثر راحة من الحلول الأخرى لمعالجة
                      الشخير واضطراب التنفس أثناء النوم. كما أن طبيب الأسنان
                      المدرّب على استخدام الليزر لشد عضلة سقف الحلق واللهاة
                      المرتخية، والمسببة للشخير وانسداد مجرى الهواء، يمكنه
                      استعمال بروتوكول علاج الشخير بالليزر عن طريق جهازي Snore3
                      وLightwalker AST مثل المركز الأوروبي، علمًا أن دمج العلاج
                      بالليزر والأجهزة الفموية بحسب تعليمات الطبيب المتخصص مثل
                      د. مهند الكسواني وفريقه الطبي يقدّم أفضل النتائج للتخلص من
                      الشخير، والحصول على نوم مريح وتنفس سهل.
                    </p>
                  </>
                )}
                <div className="flex justify-center mb-6">
                  <button
                    onClick={() => {
                      setIsExpanded(!isExpanded);
                      router.push("/about#sleep-medicine");
                    }}
                    className="text-primary font-semibold hover:underline focus:outline-none"
                  >
                    {isExpanded ? "اقرأ أقل" : "اقرأ المزيد"}
                  </button>
                </div>
                <div className="flex justify-center">
                  <a
                    href="tel:+962797377131"
                    className="inline-flex items-center bg-primary text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:bg-primary-dark"
                  >
                    <Phone className="w-5 h-5 ml-2" />
                    تواصلوا معنا: 0797377131
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Showcase */}
        </div>
      </section>

      {/* Clinic Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              عيادة علاج الشخير - المركز الأوروبي
            </h2>
            <p className="text-lg text-gray-600">
              أول عيادة أسنان متخصصة في علاج الشخير واضطرابات النوم في الأردن
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="bg-white hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">الموقع</h3>
                <p className="text-gray-600 text-sm">
                  الأردن - عمان - صويفية - شارع باريس - مجمع الشانزليزيه
                </p>
                <p className="text-gray-600 text-sm">موقع متميز وسهل الوصول</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-accent mb-2">التقنيات</h3>
                <p className="text-gray-600 text-sm">أحدث تقنيات العلاج</p>
                <p className="text-gray-600 text-sm">معدات طبية متطورة</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">الأمان</h3>
                <p className="text-gray-600 text-sm">معايير أمان عالية</p>
                <p className="text-gray-600 text-sm">تعقيم شامل ونظافة</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smile className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">
                  الراحة
                </h3>
                <p className="text-gray-600 text-sm">بيئة مريحة ومهدئة</p>
                <p className="text-gray-600 text-sm">خدمة عملاء متميزة</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                لماذا تختار عيادتنا؟
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">
                      التخصص الدقيق
                    </h4>
                    <p className="text-gray-600 text-sm">
                      نركز فقط على علاج الشخير واضطرابات النوم، مما يضمن خبرة
                      عميقة ونتائج أفضل
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">
                      التقنيات الحديثة
                    </h4>
                    <p className="text-gray-600 text-sm">
                      أول عيادة تستخدم تقنية الليزر وأجهزة Myobrace المتطورة في
                      الأردن
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">
                      نسب نجاح عالية
                    </h4>
                    <p className="text-gray-600 text-sm">
                      أكثر من 90% من مرضانا حققوا تحسناً ملموساً في جودة النوم
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">
                      متابعة مستمرة
                    </h4>
                    <p className="text-gray-600 text-sm">
                      نقدم متابعة شاملة للمريض حتى بعد انتهاء العلاج لضمان
                      النتائج
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/DSC00016.JPG"
                alt="عيادة علاج الشخير الحديثة"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            ابدأ رحلتك نحو نوم أفضل اليوم
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            احجز استشارتك مع د. مهند الكسواني واكتشف الحل المناسب لحالتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/962797377131?text=أريد حجز استشارة مع د. مهند الكسواني"
              target="_blank"
            >
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                احجز عبر واتساب
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 ml-2" />
                معلومات التواصل
              </Button>
            </Link>
          </div>
        </div>{" "}
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
