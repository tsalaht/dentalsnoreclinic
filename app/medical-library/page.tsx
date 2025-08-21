import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  PlayCircle,
  FileText,
  Download,
  AlertTriangle,
  Video,
  Brain,
  BookOpen,
  Zap,
  Baby,
  Phone,
  MessageCircle,
  CheckCircle,
  Eye,
  Clock,
} from "lucide-react";
import MedicalLibrarySearch from "@/components/MedicalLibrarySearch";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";

export default function MedicalLibraryPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-purple-50 to-indigo-100 py-12  mt-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb items={[{ label: "المكتبة الطبية" }]} />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
                  المكتبة الطبية
                </Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-primary leading-tight">
                  تعلم كل شيء عن الشخير واضطرابات النوم
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  مجموعة شاملة من الفيديوهات التعليمية والمقالات العلمية
                  والدراسات الحديثة من د. مهند الكسواني
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/87.jpg"
                  alt="مكتبة طبية شاملة للشخير واضطرابات النوم"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-800">
                    معرفة علمية موثوقة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Videos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              الفيديوهات الأكثر مشاهدة
            </h2>
            <p className="text-lg text-gray-600">
              المحتوى الذي يهتم به المرضى أكثر
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/_XhyV1vNMuI"
                    title="لماذا يحدث الشخير؟"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-2">
                    مكافحة الشخير مع طبيب الأسنان
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {" "}
                    يعمل أطباء الأسنان على تشخيص وعلاج العديد من الحالات التي
                    تؤدي إلى الشخير
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/Wrr9Z9CiATY"
                    title="أفضل العلاجات الحديثة"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-2">
                    ما هو التنفس الفموي؟!
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    تعرف على أسباب التنفس الفموي
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/QCQBFqfRzaM"
                    title="أفضل العلاجات الحديثة"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-2">
                    التنفس الفموي.. أعراضه و مضاره
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    يعد المركز الأوروبي لطب الأسنان بإدارة الدكتور مهند الكسواني
                    واحد من أكبر مراكز طب الأسنان على مستوى الشرق الأوسط، ويتميز
                    بخدماته التجميلية والطبية فيما يخص زراعة الاسنان وتجميل
                    الاسنان وجراحة الوجه والفكين وعلاج الشخير وانقطاع التنفس
                    الانسدادي وغيرها من الخدمات التي تتم على ايدي أمهر
                    الاخصائيين والأطباء بخبرات تجاوزت ال 25 سنة.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/MI_P6dhPfh8"
                    title="أفضل العلاجات الحديثة"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-2">
                    اختناقات النوم تذكرني بسكرات الموت!
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    لو كنت تعتقد أن انقطاع نفسك وأنت نائم شيء طبيعي؛ عليك أن
                    تراجع الطبيب فورا انتقطاع التنفس والشخير عبارة عن مؤشرات من
                    الجسم تنبيها منه بالخطر يؤدي الاختناق المتكرر إلى نقص
                    الأوكسجين وضعف عضلة القلب ووصولا الموت
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/rF6D2mnqM3A"
                    title="أفضل العلاجات الحديثة"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-2">
                    ما هو علاج الشخير وانقطاع التنفس عند النوم؟
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    لا تترددوا باستشارة #الدكتور_مهند_الكسواني ليقدم لكم أفضل
                    الحلول للتخلص من الشخير و انقطاع النفس أثناء النوم.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/l7RlJzxwk_k"
                    title="كيف يساعد الليزر؟"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    15:20
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-2">
                    رحلة الدكتور مهند الكسواني لعلاج الشخي
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {" "}
                    رحلة الدكتور مهند الكسواني لعلاج الشخير: تقنيات الليزر
                    المتطورة في المركز الأوروبي لطب الأسنان{" "}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/haWdsUIrJeg"
                    title="الشخير عند الأطفال - الخطر الخفي"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    6:15
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-2">
                    {" "}
                    ما يميز عيادتنا في علاج الشخير واضطراب التنفس أثناء النوم
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    ما يميز عيادتنا في علاج الشخير هو التعاون مع الأطباء
                    المختصين لعلاج الشخير مثل : طبيب الصدرية وطبيب الأنف والأذن
                    والحنجرة، وطبيب الأطفال{" "}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/fqgjlBycmCo"
                    title="توقف التنفس أثناء النوم"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    10:45
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-2">
                    البروتوكول العلاجي المتبع لمعالجة الشخير واضطراب التنفس
                    أثناء النوم
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    عيادة تخصصية في علاج الشخير ضمن المركز الأوروبي لطب الأسنان
                    بإدارة د. مهند الكسواني، تتبع بروتوكولًا متقدمًا يهدف إلى
                    توفير أفضل الطرق للتخلص من عادة الشخير والتنفس الفموي.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/SmuFVRI0AEQ"
                    title="الأجهزة الفموية - دليل شامل"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    7:30
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-2">
                    لماذا طبيب الأسنان يعالج الشخير ؟
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    يطرح الدكتور مهند الكسواني تعاوناً مُبتكراً مع الأطباء في
                    التخصصات الطبية المختلفة لِعلاجِ الشخير واضطراب التنفس
                    الليلي والتحدياتِ الطبيةِ التي قد يواجهها بعض الأشخاص اثناء
                    رحلتهم ومحاولتهم الحصول على نوم هانىء ومريح و التخلص من
                    الشخير{" "}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.youtube.com/@EuroDentalCenterJO"
              target="_blank"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-primary text-white px-8 py-4"
              >
                <Video className="w-5 h-5 ml-2" />
                شاهد جميع الفيديوهات
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Snoring Conference Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              مؤتمر الشخير
            </h2>
            <p className="text-lg text-gray-600">
              ورشة علمية نظمها المركز الأوروبي لطب الأسنان بتاريخ 30-4-2024
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                “الشخير واضطرابات التنفس أثناء النوم / بروتوكول علاجي متعدد
                الاختصاصات”
              </h3>
              <p className="text-gray-600 leading-relaxed">
                إيمانًا من الدكتور مهند الكسواني بما يقدمه من علم في مجال طب
                الأسنان المتعلق بمشكلة الشخير وتقديم طرق علاج حديثة له، نظم
                المركز الأوروبي لطب الأسنان ورشة علمية بتاريخ 30-4-2024. جمعت
                الندوة نخبة من أطباء الأسنان المهتمين بعلاج الشخير والتنفس
                الفموي، واستشاريين طب وجراحة الأنف والأذن والحنجرة، واستشاريين
                الأمراض الصدرية، واستشاريين طب الأطفال.
              </p>
              <p className="text-gray-600 leading-relaxed">
                يوفر المركز الأوروبي لطب الأسنان أجهزة فموية خاصة لكسر عادة
                التنفس الفموي، بالإضافة إلى استخدام ليزر عالي التردد لعلاج
                الشخير أثناء النوم بدون جراحة وبدون بنج، من خلال شد اللهاة
                وأنسجة الحلق الطرية إلى الأعلى لفتح مجرى التنفس.
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/confirense.JPG"
                  alt="مؤتمر الشخير 2024"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-800">
                    ورشة علمية - 30 أبريل 2024
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/ANSU1PZ6A4U"
                    title="جلسة افتتاح مؤتمر الشخير"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-3">
                    نظم المركز الأوروبي ورشة بحث علمية حول الشخير واضطرابات
                    التنفس أثناء النوم
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/-92gKrJaegI"
                    title="التنفس الفموي وعلاجه"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  {/* <h4 className="font-bold text-primary mb-2">التنفس الفموي وعلاجه</h4> */}
                  <p className="text-sm text-gray-600 mb-3">
                    ورشة علمية بعنوان "الشخير واضطربات التنفس أثناء النوم/
                    بروتوكول علاجي متعدد الاختصاصات
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/YoYGb9DZ5io"
                    title="تقنيات الليزر في علاج الشخير"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-3">
                    {" "}
                    لقطات من ورشة الشخير التي أقامها المركز الأوروبي وحضرها عدد
                    من الأطباء المهتمين
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              أحدث المواد التعليمية والأكثر مشاهدة
            </h2>
          </div>

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

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
              <CardContent className="p-0 flex-grow">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/_o9ohoJ8r9w"
                    title="أحدث تقنيات العلاج بالليزر 2024"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <Badge className="absolute top-3 right-3 bg-primary text-white flex items-center gap-1">
                    <Video className="w-3 h-3" />
                    فيديو جديد
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-primary/20 p-1 rounded">
                      <Video className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary">
                      فيديو تعليمي
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-2">
                    علاج الشخير بالليزر | الدكتور مهند الكسواني
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    في هذا الفيديو، يشرح الدكتور مهند الكسواني، المحاضر الدولي
                    في علوم طب الأسنان، أحدث طرق علاج الشخير باستخدام تقنية
                    الليزر. يعتمد العلاج على تقنيات متطورة لشد عضلات سقف الحلق
                    وتقليل الشخير بشكل فعال ودون الحاجة للجراحة.
                  </p>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <a
                  href="https://www.youtube.com/@dentalsnoreclinic"
                  target="_blank"
                >
                  <Button className="w-full bg-primary/80 hover:bg-primary text-white btn-hover-scale">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    مشاهدة الفيديو التعليمي
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
              <CardContent className="p-0 flex-grow">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/iClh79sqQ-Q"
                    title="كيف تعمل أجهزة Myobrace للأطفال؟"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <Badge className="absolute top-3 right-3 bg-green-500 text-white flex items-center gap-1">
                    <Video className="w-3 h-3" />
                    الأكثر مشاهدة
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-accent/20 0 p-1 rounded">
                      <Video className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-accent">
                      فيديو تعليمي
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-accent mb-2">
                    كتاب "الشخير حتى الموت" | مناقشة مع الدكتور مهند الكسواني
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    في هذا الفيديو، يستعرض الدكتور مهند الكسواني، المحاضر الدولي
                    في علوم طب الأسنان، كتاب "الشخير حتى الموت" لمؤلفه ديفيد
                    ماكنتوش. يقدم الدكتور مهند رؤىً شاملة حول المخاطر الصحية
                    المرتبطة بالشخير وتأثيراته السلبية على نوعية الحياة.
                  </p>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <a
                  href="https://www.youtube.com/@dentalsnoreclinic"
                  target="_blank"
                >
                  <Button className="w-full bg-accent/80 hover:bg-accent text-white btn-hover-scale">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    مشاهدة الفيديو التعليمي
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
              <CardContent className="p-0 flex-grow">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/NQK5SWteZbE"
                    title="دراسة: العلاقة بين الشخير وأمراض القلب"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <Badge className="absolute top-3 right-3 bg-secondary text-white flex items-center gap-1">
                    <Brain className="w-3 h-3" />
                    دراسة علمية
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-secondary/20 p-1 rounded">
                      <Brain className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-sm font-medium text-secondary">
                      دراسة علمية
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-secondary mb-2">
                    الشخير المزمن هو القاتل الصامت!!
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    الشخير المزمن ليس مجرد إزعاج بسيط، بل هو مؤشر على مشكلة صحية
                    قد تؤثر على صحتك ونومك وجودة حياتك.
                  </p>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <a
                  href="https://www.youtube.com/@dentalsnoreclinic"
                  target="_blank"
                >
                  <Button className="w-full bg-secondary/80 hover:bg-secondary text-white btn-hover-scale">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    مشاهدة الفيديو التعليمي
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            هل تحتاج لاستشارة مخصصة؟
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            بعد مراجعة المواد التعليمية، احجز استشارة مع د. مهند للحصول على
            تشخيص دقيق وخطة علاج مخصصة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/962797377131?text=راجعت المكتبة الطبية وأريد استشارة مخصصة"
              target="_blank"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-primary text-white px-8 py-4 text-lg"
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                احجز استشارة الآن
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/70 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 ml-2" />
                معلومات التواصل
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
