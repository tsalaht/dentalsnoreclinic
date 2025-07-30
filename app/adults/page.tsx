import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Award,
  Heart,
  Brain,
  Stethoscope,
  User,
  CheckCircle,
  AlertTriangle,
  Target,
  FileText,
  MessageCircle,
  Calendar,
  Zap,
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import SimpleRating from "@/components/SimpleRating";
import AdultSnoringAssessment from "@/components/AdultSnoringAssessment";

export default function AdultsPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-primary/5 flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <Breadcrumb items={[{ label: "علاج البالغين" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6 relative z-20">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary font-semibold rounded-xl px-4 py-2">
                  علاج البالغين
                </Badge>
                <h1 className="text-4xl font-bold text-primary leading-tight drop-shadow-sm">
                  علاج شامل للشخير عند البالغين
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  حلول متقدمة ومخصصة لعلاج الشخير وانقطاع التنفس أثناء النوم
                  باستخدام أحدث التقنيات الطبية
                </p>
              </div>
            </div>
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-primary/10">
                <Image
                  src="/6.jpg"
                  alt="علاج الشخير عند البالغين"
                  width={500}
                  height={400}
                  className="w-full h-auto object-contain bg-white"
                  loading="lazy"
                />
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md">
                  <p className="text-sm font-medium text-primary">
                    نتائج فعالة خلال أسابيع
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Buttons Section under the grid */}
          <div className="mt-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-right relative z-30">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg w-full sm:w-auto rounded-2xl shadow-md"
                >
                  <Calendar className="w-5 h-5 ml-2" />
                  احجز عبر النموذج
                </Button>
              </Link>
              <a
                href="https://wa.me/962797377131?text=أريد حجز موعد لعلاج الشخير للبالغين"
                target="_blank"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10 px-8 py-4 text-lg w-full sm:w-auto rounded-2xl shadow-md"
                >
                  <MessageCircle className="w-5 h-5 ml-2" />
                  احجز عبر واتساب
                </Button>
              </a>
              <Link href="#assessment">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary/10 px-8 py-4 text-lg w-full sm:w-auto rounded-2xl shadow-md"
                >
                  <CheckCircle className="w-5 h-5 ml-2" />
                  ابدأ التقييم الذاتي
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Problems and Risks Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 animate-fade-in-down">
                مخاطر الشخير عند البالغين - لا تتجاهل التحذيرات
                <span className="block w-28 h-1 bg-primary mx-auto mt-3 rounded-full opacity-90"></span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed tracking-wide">
                الشخير ليس مجرد إزعاج ليلي - إنه مؤشر على مشاكل صحية خطيرة قد
                تهدد حياتك
              </p>
            </div>

            <div className="space-y-12 mb-16">
              <div className="flex flex-col md:flex-row items-start gap-8 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/20 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-2xl font-bold text-secondary mb-2 relative">
                    توقف التنفس أثناء النوم
                    <span className="block w-16 h-0.5 bg-secondary mt-2 rounded-full"></span>
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    انقطاع متكرر في التنفس يؤثر على مستويات الأكسجين في الدم
                  </p>
                  <div className="bg-secondary/10 rounded-lg p-3 mt-3">
                    <p className="text-secondary font-semibold text-sm">
                      خطر حقيقي على الحياة
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-8 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-2xl font-bold text-primary mb-2 relative">
                    تأثيره على الطاقة والتركيز
                    <span className="block w-16 h-0.5 bg-primary mt-2 rounded-full"></span>
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    إرهاق دائم، ضعف في الذاكرة، وصعوبة في التركيز والانتباه
                  </p>
                  <div className="bg-primary/10 rounded-lg p-3 mt-3">
                    <p className="text-primary font-semibold text-sm">
                      يؤثر على الإنتاجية
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-8 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/20 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-2xl font-bold text-accent mb-2 relative">
                    ارتباطه بأمراض القلب
                    <span className="block w-16 h-0.5 bg-accent mt-2 rounded-full"></span>
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    زيادة خطر الإصابة بارتفاع ضغط الدم وأمراض القلب والسكتات
                  </p>
                  <div className="bg-accent/10 rounded-lg p-3 mt-3">
                    <p className="text-accent font-semibold text-sm">
                      مضاعفات خطيرة
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-5 shadow-lg max-w-3xl mx-auto transform hover:scale-102 transition-transform duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mx-auto sm:mx-0" />
                <div className="flex-1 text-center sm:text-right">
                  <h3 className="text-lg font-bold text-amber-800 mb-2">
                    ⚠️ تحذير طبي عاجل
                  </h3>
                  <p className="text-amber-700 text-base leading-relaxed">
                    إذا كنت تعاني من الشخير الشديد أو توقف التنفس أثناء النوم،
                    فأنت في خطر حقيقي
                  </p>
                </div>
                <a
                  href="https://wa.me/962797377131?text=أعاني من شخير شديد وأحتاج استشارة عاجلة"
                  target="_blank"
                  className="w-full sm:w-auto"
                >
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 text-base rounded-full flex items-center justify-center gap-2 shadow-md w-full sm:w-auto">
                    <MessageCircle className="w-5 h-5" />
                    احجز استشارة عاجلة
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Treatment Methods Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                علاج البالغين: ليزر، أجهزة فموية، تمارين وجه، تغيير أسلوب الحياة
              </h2>
              <p className="text-lg text-gray-700">
                نستخدم أحدث التقنيات العالمية لضمان نتائج فعالة وآمنة
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 mb-12">
              <Card className="bg-white hover:shadow-xl transition-shadow rounded-2xl border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-accent mb-4">
                    العلاج بالليزر
                  </h3>
                  <p className="text-gray-700 mb-4">
                    جلسات ليزر مخصصة لتقليص الأنسجة الرخوة في الحلق وتحسين تدفق
                    الهواء
                  </p>
                  <ul className="text-base text-gray-700 space-y-2 mb-6 text-right">
                    <li>✓ بدون جراحة أو ألم</li>
                    <li>✓ عدد جلسات مناسب للحالة</li>
                    <li>✓ تحسين فوري للتنفس</li>
                    <li>✓ نتائج فعالة ومستمرة</li>
                  </ul>
                  <a
                    href="https://wa.me/962797377131?text=أريد معرفة المزيد عن العلاج بالليزر"
                    target="_blank"
                  >
                    <Button className="bg-accent hover:bg-accent/90 text-white w-full rounded-xl shadow-md">
                      اعرف المزيد
                    </Button>
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-white hover:shadow-xl transition-shadow rounded-2xl border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Stethoscope className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    الأجهزة الفموية
                  </h3>
                  <p className="text-gray-700 mb-4">
                    أجهزة فموية مخصصة لفتح مجرى الهواء أثناء النوم
                  </p>
                  <ul className="text-base text-gray-700 space-y-2 mb-6 text-right">
                    <li>✓ كسر عادة التنفس الفموي وتحفيز التنفس الأنفي</li>
                    <li>✓ تحسين التنفس في الشهر الأول</li>
                    <li>✓ مريحة وسهلة الاستخدام</li>
                    <li>✓ بديل آمن للجراحة</li>
                  </ul>
                  <a
                    href="https://wa.me/962797377131?text=أريد معرفة المزيد عن الأجهزة الفموية"
                    target="_blank"
                  >
                    <Button className="bg-primary hover:bg-primary/90 text-white w-full rounded-xl shadow-md">
                      احجز الآن
                    </Button>
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-white hover:shadow-xl transition-shadow rounded-2xl border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-accent mb-4">
                    تمارين الوجه وتغيير أسلوب الحياة
                  </h3>
                  <p className="text-gray-700 mb-4">
                    تمارين لتقوية عضلات الوجه مع نصائح لتحسين نمط الحياة
                  </p>
                  <ul className="text-base text-gray-700 space-y-2 mb-6 text-right">
                    <li>✓ تقوية عضلات الفم والحلق</li>
                    <li>✓ تقليل التنفس الفموي</li>
                    <li>✓ نصائح يومية للوقاية</li>
                    <li>✓ نتائج طويلة الأمد</li>
                  </ul>
                  <a
                    href="https://wa.me/962797377131?text=أريد معرفة المزيد عن تمارين عضلات الوجه والفكين ونصائح تغيير أسلوب الحياة"
                    target="_blank"
                  >
                    <Button className="bg-accent hover:bg-accent/90 text-white w-full rounded-xl shadow-md">
                      ابدأ التمارين
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                البروتوكول العلاجي في Dental Snore Clinic
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                ندرك في Dental Snore Clinic أهمية اتباع طرق العلاج التي توصل لها
                العلم الحديث في علاج الشخير المتعلق بمجال طب الأسنان والتنفس
                الفموي. نقدم لك بروتوكول علاجي متكامل وفعال للتخلص من هذه
                المشكلة المزعجة، بدءًا من التشخيص الدقيق مع الدكتور مهند
                باستخدام أحدث التقنيات وصولًا إلى خطط علاجية مخصصة تناسب
                احتياجاتك الفردية.
              </p>
            </div>
            <div className="space-y-16">
              {/* الأشعة والصور الطبقية */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    الأشعة والصور الطبقية لتشخيص دقيق
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    الخطوة الأولى في رحلتك العلاجية هي الحصول على صورة واضحة
                    وشاملة لمجرى الهواء لديك. باستخدام أحدث تقنيات الأشعة والصور
                    الطبقية ثلاثية الأبعاد (CBCT)، مما يساعدنا على فهم أسباب
                    المشكلة التي قد لا تكون ظاهرة من الخارج.
                  </p>
                </div>
                <div className="md:w-1/2 ">
                  <Image
                    src="/b1.JPG"
                    alt="الأشعة الطبقية"
                    width={300}
                    height={200}
                    className="w-full h-auto rounded-xl shadow-md object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* قياس ضغط الدم */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-secondary mb-4">
                    قياس ضغط الدم
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    هذا الإجراء الحيوي يساعدنا على تقييم صحتك العامة، خاصة وأن
                    اضطرابات التنفس أثناء النوم غالبًا ما تكون مرتبطة بارتفاع
                    ضغط الدم.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/b2.JPG"
                    alt="قياس ضغط الدم"
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-xl shadow-md object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-accent mb-4">
                    الفحص السريري مع جهاز Oral ID
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    خلال الفحص السريري مع الدكتورة عايدة، نقوم بمعاينة الحجرة
                    الفموية والأنسجة الرخوة في سقف الحلق. ونستخدم جهاز Oral ID
                    المتطور، الذي يساعدنا في فحص الأنسجة باستخدام ضوء خاص، مما
                    يضمن أننا لا نغفل أي تغيرات دقيقة قد تكون مؤثراً في خطة
                    العلاج.
                  </p>
                </div>
                <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Image
                    src="/b3-1.JPG"
                    alt="الفحص السريري مع جهاز Oral ID"
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-xl shadow-md object-cover"
                    loading="lazy"
                  />
                  <Image
                    src="/b3-2.JPG"
                    alt="الفحص السريري مع جهاز Oral ID"
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-xl shadow-md object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-secondary mb-4">
                    دراسة صور الطبقية للجيوب الأنفية
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    نعلم أن انسداد الجيوب الأنفية قد يكون سبباً رئيسياً للتنفس
                    الفموي والشخير، هذا الإجراء ضروري لضمان أن خطتنا العلاجية
                    تشمل كل العوامل المسببة للمشكلة، وتقدم لك حلاً شاملاً
                    بالتعاون مع طبيب الأنف والأذن والحنجرة.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/b4.JPG"
                    alt="صور الجيوب الأنفية"
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-xl shadow-md object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* وضع الخطة العلاجية */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    وضع الخطة العلاجية
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    بعد جمع كل هذه المعلومات من الدكتورة عايدة ودراستها مع
                    الدكتور مهند الكسواني، نقوم بوضع خطة علاجية مصممة خصيصاً
                    لحالتك، ويتم شرحها لك بالتفصيل، لكي نصل معًا إلى أفضل قرار
                    يناسب احتياجاتك.
                  </p>
                </div>
                <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Image
                    src="/b5.JPG"
                    alt="وضع الخطة العلاجية"
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-xl shadow-md object-cover"
                    loading="lazy"
                  />
                  <Image
                    src="/doctor.JPG"
                    alt="وضع الخطة العلاجية"
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-xl shadow-md object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* خطة العلاج للبالغين */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-accent mb-4">
                    خطة العلاج للبالغين المتاحة
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    بناءً على الخطة العلاجية، نقدم مجموعة من الحلول الفعالة
                    للبالغين، والتي قد تشمل:
                  </p>
                  <ul className="text-base text-gray-700 space-y-2 mt-4 text-right">
                    <li>
                      ✓ الليزر: يساعد الليزر على شد الأنسجة المرتخية في سقف
                      الحلق، مما يقلل من اهتزازها ويخفف من صوت الشخير. هذا
                      الإجراء يتم بجلسات قصيرة بدون جراحة وبدون ألم يذكر.
                    </li>
                    <li>
                      ✓ الأجهزة الفموية: هي أجهزة مصممة خصيصاً لك، وتساعد على
                      إبقاء مجرى الهواء مفتوحاً أثناء النوم عن طريق تعديل وضعية
                      الفك السفلي واللسان.
                    </li>
                    <li>
                      ✓ تمارين الوجه: نعلمك مجموعة من التمارين البسيطة التي
                      تساعد على تقوية العضلات المسؤولة عن التنفس والبلع، مما
                      يساهم في تقليل الشخير على المدى الطويل.
                    </li>
                    <li>
                      ✓ تغيير أسلوب الحياة: سنقدم لك نصائح عملية حول تغيير نمط
                      حياتك وسلوكياتك، مثل تحسين وضعية النوم أو التحكم بالوزن.
                      هذه التغييرات هي مفتاحك الأساسي للحصول على نتائج دائمة
                      والتحكم في الشخير.
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Image
                    src="/b7.JPG"
                    alt="العلاج بالليزر"
                    width={300}
                    height={200}
                    className="w-full h-auto rounded-xl shadow-md object-cover"
                    loading="lazy"
                  />
                  <Image
                    src="/b6.JPG"
                    alt="الأجهزة الفموية"
                    width={300}
                    height={200}
                    className="w-full h-auto rounded-xl shadow-md object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Laser Treatment Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                طريقة عمل جهاز الليزر لشد عضلات سقف الحلق
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                شاهد كيف يعمل العلاج بالليزر لتقليص الأنسجة الرخوة وتحسين تدفق
                الهواء بطريقة آمنة وفعالة
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-primary/10 max-w-4xl mx-auto">
              <video
                src="/v4.mov" // Replace with your actual video path or URL
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[700px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Assessment Section */}
      <section
        className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50 border-t-4 border-yellow-400"
        id="assessment"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                🔍 تقييم مخصص للبالغين - اكتشف مدى خطورة شخيرك
              </h2>{" "}
              <p className="text-xl text-gray-700 mb-6">
                استبيان علمي معتمد يعتمد على مقياس Epworth Sleepiness Scale
                ومعايير طبية دقيقة
              </p>
            </div>

            <AdultSnoringAssessment />

            <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-yellow-200">
              <h3 className="text-xl font-bold text-primary mb-4">
                ما الذي ستحصل عليه من التقييم؟
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
                  <h4 className="font-semibold text-primary mb-2">خطة علاج</h4>{" "}
                  <p className="text-sm text-gray-600">برنامج علاج مخصص لك</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Certificates Section */}
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            لا تدع الشخير يدمر صحتك وحياتك
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            احجز استشارتك اليوم واكتشف العلاج المناسب لحالتك مع أفضل طبيب متخصص
            في الأردن
          </p>{" "}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                <Calendar className="w-5 h-5 ml-2" />
                احجز عبر النموذج
              </Button>
            </Link>{" "}
            <a
              href="https://wa.me/962797377131?text=أريد حجز استشارة لعلاج الشخير للبالغين"
              target="_blank"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary/70 hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                احجز عبر واتساب
              </Button>
            </a>
          </div>
        </div>
      </section>{" "}
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
