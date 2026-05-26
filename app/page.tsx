"use client";

import Image from "@/components/Image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Phone,
  Users,
  Award,
  Heart,
  Stethoscope,
  Baby,
  User,
  BookOpen,
  Play,
  GamepadIcon,
  MessageCircle,
  Calendar,
  PlayCircle,
  ThumbsUp,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import WhatsAppButton from "@/components/WhatsAppButton";
import SimpleRating from "@/components/SimpleRating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { useState ,useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

// Hero slides data
const heroSlides = [
  {
    image: "/confirense.JPG",
    headline: "الشخير واضطرابات التنفس أثناء النوم",
    subheadline: "بروتوكول علاجي متعدد التخصصات",
    headlineClass: "text-white text-center",
    subheadlineClass: "text-secondary text-center",
  },
  {
    image: "/baby.png",
    headline: "هل يشخر طفلك ويطحن أسنانه؟",
    subheadline: " طفلك ليس هادئاً كما تعتقد!!",
    headlineClass: "text-secondary text-center",
    subheadlineClass: "text-secondary/90 text-center",
  },
  {
    image: "/doctor.JPG",
    headline: "الدكتور مهنـد الكسواني",
    subheadline: `المحاضر الدولي في علوم علاج الشخير والتنفس الفموي،
والتخصصات المتعلقة بطب الأسنان، والابتسامة الرقمية، وعلوم إطباق الأسنان.
`,
    headlineClass: "text-blue-200 text-center",
    subheadlineClass: "text-blue-400 text-center",
  },
  {
    image: "/couples.jpg",
    headline: "الشخير والتنفس الفموي يؤثران على صحتك",
    subheadline: "احصل على نوم هادئ وصحة أفضل مع أحدث تقنيات العلاج",
    headlineClass: "text-green-200 text-center",
    subheadlineClass: "text-green-400 text-center",
  },
];

// Team members data
const teamMembers = [
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
    name: "د. إيمان",
    role: "أخصائية الأشعة السنية التشخيصية",
    image: "/iman.JPG",
    slug: "iman",
  },
];

export default function ArabicSnoringClinic() {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollToBookSection = () => {
    const section = document.getElementById("book-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const scrollToAppSection = () => {
    const section = document.getElementById("app-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  useEffect(() => {
    document.title = "الرئيسيه - عيادة الشخير واضطراب التنفس أثناء النوم";
    
  }, []);

  return (
    <PageLayout>
      <Head>
        <title>الرئيسيه -عيادة الشخير واضطراب التنفس أثناء النوم
        </title>
        <meta
          name="description"
          content="نساعدك على علاج الشخير وتحسين جودة التنفس والنوم. اتصل بنا اليوم للحصول على استشارة."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dentalsnoreclinic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section - Optimized with priority loading for first image */}
<section className="relative min-h-[70vh] md:min-h-[92vh] bg-primary/5 flex items-center  justify-center">
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="w-full h-full bg-[#028FC5]"
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          >
            {heroSlides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="w-full h-full min-h-[19vh] md:min-h-[92vh] flex items-center justify-center relative"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute inset-0 bg-black/30 z-10" />
                  <div className="relative z-10 flex flex-col items-center px-6 md:py-16 py-6 bg-black/30 rounded-lg md:mt-0 mt-14">
                    <h1 className={`text-lg md:text-5xl font-bold leading-tight mb-6 drop-shadow-sm ${slide.headlineClass}`}>
                      {slide.headline}
                    </h1>
                    <p className={`text-base md:text-2xl  leading-relaxed max-w-2xl mx-auto font-bold ${slide.subheadlineClass}`}>
                      {slide.subheadline}
                    </p>
                    {/* You can add per-slide buttons or other content here if needed */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      
          <div className="flex flex-row flex-wrap gap-2 justify-center items-center max-w-xl mx-auto z-10 md:mt-52 mt-64 px-4">
            <Link href="/children" className="w-auto">
              <Button
                size={'sm'}
                className="bg-accent hover:bg-accent/90 text-white px-2 py-1 text-[10px] font-semibold rounded-xl shadow-md transition-all duration-300 sm:px-8 sm:py-3 sm:text-lg sm:rounded-2xl"
              >
                طفلي يعاني من الشخير
              </Button>
            </Link>
            <Link href="/adults" className="w-auto">
              <Button
                size="sm"
                className="bg-secondary hover:bg-secondary/90 text-white px-2 py-1 text-[10px] font-semibold rounded-xl shadow-md transition-all duration-300 sm:px-8 sm:py-3 sm:text-lg sm:rounded-2xl"
              >
                أنا بالغ وأريد العلاج
              </Button>
            </Link>
            <button
              onClick={scrollToAppSection}
              className="w-auto inline-flex items-center justify-center gap-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 text-white px-2 py-1 text-[10px] font-semibold rounded-xl shadow-md transition-all duration-300 sm:px-6 sm:py-3 sm:text-base sm:rounded-2xl sm:gap-2"
            >
            
              حمّل التطبيق
            </button>
          </div>

      </section>

      <section className="py-6 bg-white" dir="rtl">
        <div className="container mx-auto px-6 lg:px-12">
          <button
            type="button"
            onClick={scrollToBookSection}
            className="mx-auto block w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            aria-label="الانتقال إلى قسم الكتاب"
          >
            <div className="relative w-full">
              <Image src="/bookCover.jpeg" alt="غلاف الكتاب" width={800} height={1100} className="w-full h-auto" />
              <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                <span className="bg-secondary/90 text-white font-bold px-5 py-2 rounded-full">
                  اضغط هنا لعرض قسم الكتاب
                </span>
              </div>
            </div>
          </button>
        </div>
      </section>


      {/* Features Section - Optimized images with sizes attribute */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-4 animate-fade-in-down relative">
              لماذا تختار Dental Snore Clinic؟
              <span className="block w-24 h-1 bg-secondary mx-auto mt-3 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed tracking-wide">
              تفخر Dental Snore Clinic التابعة للمركز الأوروبي لطب الأسنان
               تقديم بروتوكول علاجي متكامل واضطرابات التنفس الليلي، والتنفس
              الفموي.يتضمن برنامجنا حصولك على الراحة اللازمة لنوم هانئ، تحسين
              الصحة العامة، وتفادي مضاعفات مثل ضعف عضلة القلب والجلطات المفاجئة.
            </p>
          </div>
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 h-80 relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/DSC00023.JPG"
                  alt="Medical Devices"
                  fill
                  priority
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-right">
                <h3 className="md:text-3xl text-2xl font-bold text-primary mb-3 relative">
                  علاج الشخير بالليزر والجهاز الموجّه العضلي الوظيفي الفموي
                  <span className="block w-16 h-1 bg-secondary mx-auto md:mx-0 mt-2 rounded-full"></span>
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  نستخدم أحدث أجهزة الليزر لشد عضلات سقف الحلق المترهلة والجهاز
                  الموجّه العضلي الوظيفي الفموي لتصحيح التنفس الفموي إلى التنفس
                  الأنفي، مما يعزز جودة النوم ويقلل الشخير بفعالية.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2 h-80 relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/70.jpg"
                  alt="Healthcare Center"
                  fill
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-right">
                <h3 className="md:text-3xl text-2xl font-bold text-primary mb-3 relative">
                  رواد الشرق الأوسط
                  <span className="block w-16 h-1 bg-secondary mx-auto md:mx-0 mt-2 rounded-full"></span>
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  نحن من المراكز الرائدة في الشرق الأوسط في علاج اضطرابات التنفس
                  أثناء النوم بمعايير عالمية، مع فريق طبي متخصص ونتائج مثبتة.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 h-96 relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/1.jpg"
                  alt="Medical Devices"
                  fill
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-right">
                <h3 className="md:text-3xl text-2xl font-bold text-primary mb-3 relative">
                  ديفيد ماكنتوش مؤلف كتاب (الشخير حتى الموت)
                  <span className="block w-16 h-1 bg-secondary mx-auto md:mx-0 mt-2 rounded-full"></span>
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  بعد أسبوع من تبادل الخبرات مع الطبيب الاسترالي الشهير ديفيد
                  ماكنتوش مؤلف كتاب (الشخير حتى الموت) ... في المركز الأوروبي
                  لطب الأسنان والإشراف على دورة تدريب متقدمة في علاج الشخير
                  واضطرابات التنفس ... ويهدي كتابه إلى د.مهند الكسواني بداية
                  تعاون مثمر مع أحد أعلام الطب في جراحة الأنف والأذن والحنجرة في
                  العالم
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <p className="text-xl text-primary font-semibold animate-pulse relative">
              مع Dental Snore Clinic، قل وداعًا لليالي المزعجة وأهلاً بالراحة
              والنوم الهانئ.
              <span className="block w-32 h-1 bg-primary mx-auto mt-3 rounded-full"></span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="pb-20 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              خدماتنا المتخصصة
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              علاج شامل ومخصص لكل عمر ولكل حالة
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/adults">
              <Card className="bg-primary/10 border-0 hover:shadow-xl transition-all duration-300 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-4">
                    علاج البالغين
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    علاج الشخير وانقطاع التنفس النومي
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/children">
              <Card className="bg-accent/10 border-0 hover:shadow-xl transition-all duration-300 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Baby className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-accent mb-4">
                    علاج الأطفال
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    العلاج المبكر والوقاية
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/medical-library">
              <Card className="bg-secondary/10 border-0 hover:shadow-xl transition-all duration-300 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-4">
                    المكتبة الطبية
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    مقالات ودراسات علمية
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/sleep-challenge">
              <Card className="bg-primary/10 border-0 hover:shadow-xl transition-all duration-300 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <GamepadIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-4">
                    تحدي النوم
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    اختبر جودة نومك بطريقة تفاعلية
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor Introduction - Optimized image with priority */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-blue-50 transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/79.jpg"
                alt="Dr. Mohannad Al-Kaswani"
                fill
                priority
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-extrabold text-primary relative">
                د. مهند الكسواني
                <span className="block w-16 h-1 bg-secondary mt-2 rounded-full"></span>
              </h3>
              <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
                طبيب أسنان متمرس بخبرة تمتد لأكثر من 30 عاماً، يُعرف دولياً
                كمحاضر في مجالات علاج الشخير واضطرابات التنفس الفموي، وطب تجميل
                الابتسامة الرقمية، وعلوم إطباق الأسنان. يتميز بخبرته العميقة في
                تطبيقات طب الأسنان للعلاج لليزر ، ومعرفته الواسعة في علاج
                اضطرابات النوم والتنفس الفموي مما جعله من الرواد في تقديم أحدث
                الحلول العلاجية المتقدمة، مع حرصه الدائم على دمج الخبرة العلمية
                بالتقنيات الحديثة لخدمة مرضاه بأعلى المعايير.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-base md:text-lg text-gray-600">
                    خبرة أكثر من 30 عاماً
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-base md:text-lg text-gray-600">
                    أكثر من 5000 مريض تم علاجهم
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-base md:text-lg text-gray-600">
                    نسبة نجاح تصل إلى 80% في معظم الحالات
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 w-full md:w-auto">
                    <Calendar className="w-5 h-5 ml-2" />
                    احجز عبر النموذج
                  </Button>
                </Link>
                <a href="https://wa.me/962797377131" target="_blank">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 w-full md:w-auto"
                  >
                    <MessageCircle className="w-5 h-5 ml-2" />
                    احجز عبر واتساب
                  </Button>
                </a>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 w-full md:w-auto"
                  >
                    <BookOpen className="w-5 h-5 ml-2" />
                    المزيد عن الدكتور
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Experiences */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 relative">
              تجارب المرضى
              <span className="block w-24 h-1 bg-secondary mx-auto mt-3 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              استمع إلى تجارب مرضانا الذين حققوا تحسناً ملحوظاً في جودة نومهم مع
              علاج الشخير في المركز الأوروبي لطب الأسنان
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="relative h-48">
                <iframe
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/SvJikdXAySI"
                  title="تجربة السيد عمار من موسكو"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-3 relative">
                  تجربة السيد عمار من موسكو
                  <span className="block w-16 h-1 bg-secondary mx-auto mt-2 rounded-full"></span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  تجربة السيد عمار من موسكو في علاج الشخير في المركز الأوروبي
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="relative h-48">
                <iframe
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/nmog1iNuFAQ"
                  title="تجربة السيد ماهر التميمي"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-3 relative">
                  تجربة السيد ماهر التميمي
                  <span className="block w-16 h-1 bg-secondary mx-auto mt-2 rounded-full"></span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  تجربة السيد ماهر التميمي في علاج الشخير داخل المركز الأوروبي
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="relative h-48">
                <iframe
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/uN9LpOMKswA"
                  title="تجربة الدكتور محمد نور العبسي"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-3 relative">
                  تجربة الدكتور محمد نور العبسي
                  <span className="block w-16 h-1 bg-secondary mx-auto mt-2 rounded-full"></span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  تجربة الدكتور محمد نور العبسي في علاج الشخير داخل المركز
                  الأوروبي
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Section - Optimized video loading */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 relative">
              حملتنـا تنفس صح، بتعيش صح
              <span className="block w-24 h-1 bg-secondary mx-auto mt-3 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              أطلقنا حملة "تنفس صح، بتعيش صح" لتسليط الضوء على أهمية علاج مشاكل
              التنفس الفموي والشخير باستخدام أحدث التقنيات الطبية والليزر،
              لتحسين جودة حياتك من أول نفس.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="relative h-[320px]">
                <video
                  controls
                  className="w-full h-full object-cover"
                  src="/correct.mp4"
                  poster="/logoTnafsSah.png"
                  preload="metadata"
                ></video>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-3 relative">
                  تنفس صح تعيش صح
                  <span className="block w-16 h-1 bg-secondary mx-auto mt-2 rounded-full"></span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  من الشخير إلى التنفس الصحي
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="relative h-[320px]">
                <video
                  controls
                  className="w-full h-full object-cover"
                  src="/v3.mp4"
                  poster="/logoTnafsSah.png"
                  preload="metadata"
                ></video>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-3 relative">
                  لماذا التنفس من الأنف أفضل من التنفس من الفم
                  <span className="block w-16 h-1 bg-secondary mx-auto mt-2 rounded-full"></span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  تعلم الفوائد الصحية للتنفس الأنفي .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Coming Soon Section */}
      <section
        id="book-section"
        className="py-20 bg-gradient-to-bl from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden"
        dir="rtl"
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-10">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              قريبًا — إصدار جديد
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

            {/* ── Both books at natural size ── */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-start">
              {/* Front cover */}
              <div className="relative flex-1 max-w-xs w-full">
                <div className="absolute inset-0 scale-95 translate-y-4 bg-[#028FC5]/30 blur-3xl rounded-3xl pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] border border-white/10">
                  <Image
                    src="/bookCover.jpeg"
                    alt="غلاف الكتاب"
                    width={600}
                    height={850}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                </div>
         
              </div>

              {/* About book */}
              <div className="relative flex-1 max-w-xs w-full">
                <div className="absolute inset-0 scale-95 translate-y-4 bg-[#F38025]/20 blur-3xl rounded-3xl pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] border border-white/10">
                  <Image
                    src="/aboutbook.jpeg"
                    alt="نبذة عن الكتاب"
                    width={600}
                    height={850}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                </div>
             
              </div>
            </div>

            {/* ── Text content ── */}
            <div className="text-white space-y-6 lg:pt-4">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-snug text-white ">
                كتاب جديد في طريقه إليكم
                <span className="block w-20 h-1 bg-secondary mt-3 rounded-full" />
              </h2>

              <div className="space-y-4 text-blue-100 text-lg leading-relaxed">
                <p>إلى كل مريض يعاني من الشخير وانقطاع التنفس الانسدادي أثناء النوم،</p>
                <p>إلى كل من يخوض صراعًا صامتًا مع أنفاسه في عتمة الليل…</p>
                <p className="font-semibold text-white">هذا العمل كُتب من أجلكم.</p>

                <div className="border-r-2 border-secondary pr-4 space-y-1 text-blue-200">
                  <p>ليكون خطوة نحو فهمٍ أعمق،</p>
                  <p>وأملٍ أقرب،</p>
                  <p>وحياةٍ أكثر طمأنينة.</p>
                </div>

                <p>
                  لأن هذه الحالة ليست قدرًا محتومًا، بل نتيجة عوامل يمكن فهمها،
                  والوقاية منها، وعلاجها.
                </p>
                <p>
                  ولأن دور طبيب الأسنان لا يتوقف عند حدود الفم، بل يمتد ليكون
                  جزءًا أساسيًا في حماية صحة الإنسان ككل…
                </p>

                <div className="border-r-2 border-secondary/60 pr-4 space-y-1 text-blue-200 italic">
                  <p>يبقى التعاون بين مختلف التخصصات الطبية</p>
                  <p>هو الطريق نحو تشخيص أدق،</p>
                  <p>وعلاج أكثر فاعلية… قائم على العلم ومدعوم بالأمل.</p>
                </div>
              </div>

              <a
                href="https://wa.me/962797377131?text=أريد الاطلاع على الكتاب الجديد"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-2 bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  الاستفسار حول الكتاب
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section id="app-section" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50 overflow-hidden" dir="rtl">
        <div className="container mx-auto px-6 lg:px-12">

          {/* ── Top: text content centered ── */}
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-sm font-semibold px-5 py-2 rounded-full">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              متاح الآن على App Store
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight">
              تطبيق Dental Snore Clinic
              <span className="block w-20 h-1 bg-secondary mx-auto mt-3 rounded-full" />
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              تجربة طبية متكاملة في راحة يدك — تابع نومك، احجز مواعيدك، وتواصل مع فريقنا الطبي في أي وقت
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {["🌙 تتبع النوم", "📅 حجز سريع", "📚 مكتبة طبية", "🎯 اختبار تفاعلي"].map((f) => (
                <span key={f} className="bg-white border border-primary/15 text-gray-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm">
                  {f}
                </span>
              ))}
            </div>

            {/* Store buttons */}
            <div className="flex flex-wrap justify-center gap-3 pt-2 mb-3">
              <a
                href="https://apps.apple.com/app/dental-snore-app/id6749490944"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-right">
                  <div className="text-xs opacity-70 leading-none mb-0.5">حمّل من</div>
                  <div className="text-base font-bold leading-none">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.elhardouf.dentalApp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.65.19.97.07l11.7-6.73-2.48-2.48-10.19 9.14zm-1.76-20.34A1.76 1.76 0 0 0 1 4.75v14.5c0 .55.24 1.04.62 1.38l.07.06 8.13-8.13v-.19L1.42 3.42zm19.44 8.04-2.5-1.44-2.77 2.77 2.77 2.77 2.52-1.45c.72-.41.72-1.24-.02-1.65zM4.15.31l11.7 6.73-2.48 2.48L3.18.38A1.1 1.1 0 0 1 4.15.31z"/>
                </svg>
                <div className="text-right">
                  <div className="text-xs opacity-70 leading-none mb-0.5">حمّل من</div>
                  <div className="text-base font-bold leading-none">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* ── Bottom: Coverflow Swiper ── */}
          <div className="relative mt-4">
            <Swiper
              effect="coverflow"
              modules={[Pagination, Autoplay, EffectCoverflow]}
              coverflowEffect={{ rotate: 20, stretch: 0, depth: 180, modifier: 1, slideShadows: false }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2800, disableOnInteraction: false }}
              loop
              centeredSlides
              slidesPerView={1.2}
              spaceBetween={0}
              breakpoints={{
                480:  { slidesPerView: 1.6 },
                768:  { slidesPerView: 2.8 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
              className="pb-14"
            >
              {["/1.png", "/2.png", "/3.png", "/4.png", "/6.png"].map((src, i) => (
                <SwiperSlide key={i} className="flex justify-center py-6">
                  {/* Phone frame */}
                  <div className="relative mx-auto w-[175px] md:w-[160px] lg:w-[140px]">
                    {/* side buttons */}
                    <div className="absolute top-14 -right-[5px] w-[5px] h-10 bg-gray-700 rounded-r-sm" />
                    <div className="absolute top-28 -left-[5px] w-[5px] h-7 bg-gray-700 rounded-l-sm" />
                    <div className="absolute top-[148px] -left-[5px] w-[5px] h-7 bg-gray-700 rounded-l-sm" />

                    {/* phone body */}
                    <div className="relative rounded-[2.8rem] overflow-hidden border-[7px] border-gray-800 shadow-[0_24px_60px_rgba(0,0,0,0.28),0_0_0_1px_rgba(0,0,0,0.06)] bg-black">
                      {/* dynamic island / notch */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20" />
                      {/* screenshot */}
                      <Image
                        src={src}
                        alt={`شاشة التطبيق ${i + 1}`}
                        width={180}
                        height={406}
                        className="w-full h-auto block"
                      />
                      {/* home indicator */}
                      <div className="absolute bottom-2 inset-x-0 flex justify-center z-20">
                        <div className="w-20 h-[5px] bg-gray-300 rounded-full opacity-80" />
                      </div>
                      {/* subtle inner glow on left edge */}
                      <div className="absolute inset-0 pointer-events-none rounded-[2rem]"
                        style={{ boxShadow: "inset 2px 0 6px rgba(255,255,255,0.07)" }} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>

      {/* About Us Section */}
      <section
        className="py-12 bg-gradient-to-br from-blue-50 to-teal-50"
        dir="rtl"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 relative">
              من نحن
              <span className="block w-24 h-1 bg-secondary mx-auto mt-3 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              تعرف على عيادة Dental Snore Clinic، الرائدة في علاج الشخير
              واضطرابات التنفس أثناء النوم في الأردن والمنطقة
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center relative">
              رسالتنا ورؤيتنا
              <span className="block w-16 h-1 bg-secondary mx-auto mt-2 rounded-full"></span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <CardContent>
                  <h4 className="text-xl font-semibold text-primary mb-4">
                    رسالتنا
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-base">
                    في عيادة علاج الشخير Dental Snore Clinic، نسعى لتحسين جودة
                    حياة مرضانا من خلال تقديم حلول طبية متقدمة وغير جراحية لعلاج
                    الشخير والتنفس الفموي، وانقطاع التنفس أثناء النوم، مع
                    تركيزنا على نهج العلاج الشامل. نلتزم بتوفير أعلى مستوى من
                    الرعاية والراحة باستخدام أحدث التقنيات الطبية، ومواكبة كل
                    جديد، وندرك أن الصحة العامة مرتبطة بالنوم الجيد والصحة
                    النفسية؛ مما يضمن لكم أفضل النتائج الممكنة.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <CardContent>
                  <h4 className="text-xl font-semibold text-primary mb-4">
                    رؤيتنا
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-base">
                    أن نكون ونبقى الروّاد في مجال علاج الشخير في الأردن والمنطقة
                    من خلال تقديم خدمات مبتكرة ومتكاملة تعتمد على الأسس العلمية
                    والتكنولوجيا المتطورة والكوادر الطبية المؤهلة، مع تركيزنا
                    على النهج الشامل في العلاج الذي يأخذ الجوانب المختلفة
                    المتعلقة في العلاج لتحقيق الصحة والعافية الشمولية.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center relative">
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
                      if (!isExpanded) {
                        router.push("/about#sleep-medicine");
                      } else {
                        setIsExpanded(false);
                      }
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

          {/* Team Showcase - Optimized team images */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center relative">
              فريق العمل
              <span className="block w-16 h-1 bg-secondary mx-auto mt-2 rounded-full"></span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((doctor, idx) => (
                <Link key={idx} href={`/team/${doctor.slug}`} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#028FC5]/30">
                    {/* Photo */}
                    <div className="relative h-[560px] overflow-hidden">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        quality={85}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      {/* Name on photo */}
                      <div className="absolute bottom-0 right-0 left-0 px-5 pb-4">
                        <h4 className="text-white text-xl font-bold leading-tight drop-shadow">
                          {doctor.name}
                        </h4>
                      </div>
                    </div>

                    {/* Role */}
                    <div className="px-5 py-4 flex items-center justify-between">
                      <div>
                        {doctor.role.split("\n").map((line, i) => (
                          <p
                            key={i}
                            className={
                              i === 0
                                ? "text-[#028FC5] text-sm font-semibold"
                                : "text-gray-500 text-xs mt-0.5"
                            }
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                      <span className="w-8 h-8 rounded-full bg-[#028FC5]/10 flex items-center justify-center shrink-0 group-hover:bg-[#028FC5] transition-colors duration-300">
                        <svg className="w-4 h-4 text-[#028FC5] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Protocol Section - Optimized video */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 relative">
              البروتوكول العلاجي في Dental Snore Clinic
              <span className="block w-24 h-1 bg-secondary mx-auto mt-3 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              ندرك في Dental Snore Clinic أهمية اتباع طرق العلاج التي توصل لها
              العلم الحديث في علاج الشخير المتعلق بمجال طب الأسنان والتنفس
              الفموي. نقدم لك بروتوكول علاجي متكامل وفعال للتخلص من هذه المشكلة
              المزعجة، بدءًا من التشخيص الدقيق مع الدكتور مهند باستخدام أحدث
              التقنيات وصولًا إلى خطط علاجية مخصصة تناسب احتياجاتك الفردية.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="relative h-[550px]">
                <video
                  controls
                  className="w-full h-full object-cover"
                  src="/treatment-protocol.mp4"
                  poster="/2.jpg"
                  preload="metadata"
                ></video>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-3 relative">
                  بروتوكول علاجي متكامل
                  <span className="block w-16 h-1 bg-secondary mx-auto mt-2 rounded-full"></span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  اكتشف كيف يمكن لخططنا العلاجية المخصصة تحسين جودة نومك وصحتك
                  العامة
                </p>
                <a
                  href="https://wa.me/962797377131?text=أريد معرفة المزيد عن البروتوكول العلاجي"
                  target="_blank"
                  className="mt-4 inline-block"
                >
                  <Button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300">
                    <MessageCircle className="w-5 h-5 ml-2" />
                    استشر الآن
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 relative">
              الأسئلة الشائعة
              <span className="block w-24 h-1 bg-secondary mx-auto mt-3 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              تعرف على إجابات الأسئلة الشائعة حول علاج الشخير واضطرابات النوم مع
              فريقنا المتخصص
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
                onClick={(e) =>
                  e.currentTarget.nextElementSibling.classList.toggle("hidden")
                }
              >
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  هل أتنفس عن طريق الفم أثناء النوم؟
                </h3>
                <span className="text-primary text-2xl">+</span>
              </button>
              <div className="p-6 text-gray-600 hidden">
                <p className="text-lg leading-relaxed">
                  قد لا تشعر أنك تتنفس عن طريق الفم بدلاً من الأنف، خاصة أثناء
                  النوم، ولكن عادةً ما تظهر الأعراض التالية إذا كنت تقوم بذلك:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>جفاف الشفاه وتشققها</li>
                  <li>النعاس في ساعات النهار</li>
                  <li>الشخير</li>
                  <li>رائحة الفم الكريهة</li>
                  <li>خشونة في الصوت</li>
                  <li>جفاف الفم</li>
                  <li>مشاكل في التركيز</li>
                </ul>
                <p className="text-lg leading-relaxed mt-4">
                  الأعراض التي تظهر لدى الأطفال:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>تعب مزمن</li>
                  <li>تضخم اللوزتين</li>
                  <li>الاستيقاظ متعبًا</li>
                  <li>بطء في عملية النمو</li>
                  <li>السواد حول العينين</li>
                  <li>زيادة في نوبات البكاء، خاصة في ساعات الليل</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
                onClick={(e) =>
                  e.currentTarget.nextElementSibling.classList.toggle("hidden")
                }
              >
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  هل علاج الليزر مؤلم؟
                </h3>
                <span className="text-primary text-2xl">+</span>
              </button>
              <div className="p-6 text-gray-600 hidden">
                <p className="text-lg leading-relaxed">
                  لا، علاج الليزر غير مؤلم إلى حد كبير. يبلغ معظم المرضى عن
                  إحساس دافئ خفيف أثناء الإجراء.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
                onClick={(e) =>
                  e.currentTarget.nextElementSibling.classList.toggle("hidden")
                }
              >
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  كيف يعمل الجهاز الفموي؟
                </h3>
                <span className="text-primary text-2xl">+</span>
              </button>
              <div className="p-6 text-gray-600 hidden">
                <p className="text-lg leading-relaxed">
                  عندما يكون الجهاز العضلي الوظيفي الفموي المخصص لمشكلة الشخير
                  في مكانه، فإنه يفتح مجرى الهواء ويتحكم في التنفس الزائد من
                  خلال الفم. تعمل الجوانب المرنة للجهاز مع قاعدة الزنبرك الهوائي
                  على تقليل التأثير على مفصل الفك (TMJ)، مما يجعله مناسبًا أيضًا
                  للمستخدمين الذين يعانون من اضطراب المفصل الفكي الصدغي أو يصكون
                  أسنانهم.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  بدلاً من التركيز فقط على تخفيف أعراض المشكلة، يهدف الجهاز إلى
                  تصحيح مجرى الهواء العلوي والخلل العصبي العضلي، الذي يمكن أن
                  يسبب اضطراب التنفس أثناء النوم (SDB). تعمل أجهزة الجهاز العضلي
                  الوظيفي الفموي (S1 وS2) عن طريق وضع الفك السفلي للأمام وفتح
                  العض، مما يعمل على فتح مجرى الهواء وتنظيم التنفس.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-primary/70 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              لا تدع الشخير يؤثر على حياتك
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              احجز استشارتك اليوم للحصول على خطة علاج مخصصة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link href="/contact" className="flex-1">
                <Button
                  size="lg"
                  className="bg-white text-primary/70 hover:bg-gray-100 w-full"
                >
                  <Calendar className="w-5 h-5 ml-2" />
                  احجز عبر النموذج
                </Button>
              </Link>
              <a
                href="https://wa.me/962797377131?text=أريد حجز موعد لعلاج الشخير"
                target="_blank"
                className="flex-1"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-primary/70 hover:bg-white hover:text-primary/70 w-full"
                >
                  <MessageCircle className="w-5 h-5 ml-2" />
                  احجز عبر واتساب
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Dental Snore Clinic</h3>
              <p className="text-gray-300 mb-4">
                عيادة ضمن أقسام المركز الأوروبي لطب الأسنان
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>د. مهند الكسواني</p>
                <p>ﺧﺒﻴﺮ ﻋﻼج اﻟﺸﺨﻴﺮ واﻟﺘﻨﻔﺲ اﻟﻔﻤﻮي</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">صفحات الموقع</h4>
              <ul className="space-y-2 text-sm text-gray-300">
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
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/adults" className="hover:text-white">
                    تشخيص أسباب الشخير
                  </Link>
                </li>
                <li>
                  <Link href="/adults" className="hover:text-white">
                    علاج انقطاع التنفس النومي
                  </Link>
                </li>
                <li>
                  <Link href="/adults" className="hover:text-white">
                    تقويم الفكين
                  </Link>
                </li>
                <li>
                  <Link href="/adults" className="hover:text-white">
                    العلاج الوقائي للأطفال
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">تواصل معنا</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📞 962797377131</p>
                <p>📍 الأردن - عمان - صويفية - شارع باريس - مجمع الشانزليزيه</p>
                <p>السبت - الأربعاء : 10:00 - 6:00 </p>
                <p>الخميس : 10:00 - 2:00 </p>
                <p>الجمعة: عطلة </p>
                <div className="flex gap-2 mt-4">
                  <a
                    href="https://wa.me/962797377131"
                    target="_blank"
                    className="hover:text-green-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a href="tel:+962797377131" className="hover:text-blue-300">
                    <Phone className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/HealthyStartCenter"
                    target="_blank"
                    className="hover:text-blue-300"
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
                    className="hover:text-pink-300"
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
                        fillRule="evenodd"
                        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>
              © 2025 Dental Snore Clinic - المركز الأوروبي لطب الأسنان. جميع
              الحقوق محفوظة. | حقوق التصميم والتطوير: كريبتون
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </PageLayout>
  );
}