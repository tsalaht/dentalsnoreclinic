"use client";
import { useState } from "react";
import Image from "@/components/Image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  GamepadIcon,
  PlayCircle,
  Target,
  Trophy,
  Medal,
  MessageCircle,
  Gift,
  Timer,
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import InteractiveSleepChallenge from "@/components/InteractiveSleepChallenge";

export default function SleepChallengePage() {
  const [visibleTask, setVisibleTask] = useState(null);

  const toggleTask = (day: any) => {
    setVisibleTask(visibleTask === day ? null : day);
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-purple-50 to-pink-100 py-12  mt-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "تحدي النوم لمدة 14 يوم" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
                  🎮 تحدي النوم الصحي
                </Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-primary leading-10">
                  تحدي النوم لمدة 14 يوم: نوم أفضل، حياة أفضل! مع الدكتور مهند
                  الكسواني
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  انضم إلى تحدي النوم لمدة 14 يوماً لتحسين جودة نومك والتخلص من
                  الشخير مع خطة يومية بسيطة مع الدكتور مهند الكسواني
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#interactive-challenge">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full btn-hover-scale"
                  >
                    <GamepadIcon className="w-5 h-5 ml-2" />
                    فريقنا هنا لمساعدتك
                  </Button>
                </a>
                <Link href="#how-it-works">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-500 text-purple-600 hover:bg-purple-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full btn-hover-scale"
                  >
                    <PlayCircle className="w-5 h-5 ml-2" />
                    كيف يعمل التحدي؟
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/16.jpg"
                  alt="تحدي النوم لمدة 14 يوم"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-800">
                    نوم هادئ في 14 يوم
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Sleep Challenge */}
      <section className="py-16 bg-white" id="interactive-challenge">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              🎯 ابدأ تحدي النوم لمدة 14 يوم
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              اتبع خطة يومية بسيطة لتحسين جودة نومك والتخلص من الشخير
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">14</span>
                </div>
                <h3 className="text-blue-800 font-bold text-xl">
                  كيف يعمل التحدي؟
                </h3>
              </div>
              <p className="text-blue-800 text-base leading-relaxed mb-4">
                لمدة 14 يوماً، ستتلقى مهام يومية بسيطة عبر واتساب لتحسين عادات
                نومك وتقليل الشخير. المهام تشمل تمارين، نصائح غذائية، وتوصيات
                للتنفس الصحي.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="text-center">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="text-sm text-primary font-medium">
                    اتبع المهام اليومية
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="text-sm text-primary font-medium">اربح صحتك</p>
                </div>
              </div>
            </div>
          </div>
          <InteractiveSleepChallenge />
        </div>
      </section>

      {/* 14-Day Challenge Plan */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              خطة تحدي النوم لمدة 14 يوم
            </h2>
            <p className="text-lg text-gray-600">
              مهام يومية بسيطة لتحسين نومك وتقليل الشخير
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {[
              {
                day: 1,
                task: `<strong>نظرة عامة على المهام:</strong> مرحبًا بك في الليلة الأولى من تحدي الـ 14 ليلة لنوم أفضل. على مدار الـ 14 ليلة القادمة، سنقدم النصائح والتحديات التي نأمل أن تؤدي إلى نوم أفضل.<br /><hr class="my-2" /><strong>المهام:</strong><br />- انخرط في نشاط بدون شاشة مثل القراءة أو التأمل لمدة 10 دقائق قبل النوم. إن بناء روتين صحي قبل النوم يمكن أن يساعدك على النوم بسهولة أكبر والحصول على نوم أكثر راحة طوال الليل. يمكن للأجهزة التي ينبعث منها الضوء الأزرق أن تتداخل مع إنتاج الميلاتونين مما يسبب الأرق!<br /><hr class="my-2" />- قم بتقييم غرفة نومك بحثًا عن مصادر محتملة لاضطراب النوم، مثل الضوء أو الضوضاء. تلعب بيئة نومك دورًا كبيرًا في جودة نومك، بما في ذلك درجة الحرارة وكمية الضوء ونوع الفراش.<br /><hr class="my-2" />- ابدأ بممارسة التمارين الرياضية. اتباع نظام غذائي صحي وممارسة الرياضة بانتظام يمكن أن يكون لهما آثار إيجابية على نوعية نومك.<br /><hr class="my-2" />- توقف عن استهلاك الكافيين قبل 15 دقيقة من الموعد المعتاد. يؤثر الكافيين على النوم بعدة طرق، خاصة عند تناوله في وقت متأخر بعد الظهر أو في المساء. هذا لا يعني بالضرورة التوقف التام، ولكن يُنصح بتغيير الوقت وكمية الاستهلاك.`,
                color: "purple",
              },
              {
                day: 2,
                task: `<strong>نظرة عامة على المهام:</strong> صباح الخير! نأمل أن تكون الليلة الأولى من 14 ليلة لنوم أفضل قد مرت بسلاسة. إذا لم يكن الأمر كذلك، فلا تقلق - فمعظم الناس يحتاجون إلى ليلتين على الأقل قبل أن يتكيفوا بنجاح مع روتين نومهم الجديد.<br /><hr class="my-2" /><strong>المهام:</strong><br />- جدولة أوقات النوم والاستيقاظ. يعد الالتزام بأوقات نوم واستيقاظ ثابتة أمرًا مهمًا للحصول على نوم صحي، لذا نطلب منك الليلة التخطيط لأوقات محددة للذهاب إلى الفراش والاستيقاظ في الصباح. لا ينطبق هذا على أيام الأسبوع فحسب، بل يشمل عطلات نهاية الأسبوع وعندما تكون في إجازة. كن واقعيًا بشأن الوقت الذي يمكنك فيه النوم والاستيقاظ، وتأكد من تخصيص وقت كافٍ للنوم الموصى به وهو 7 إلى 9 ساعات.<br /><hr class="my-2" />- اضبط منظم حرارة غرفة نومك على درجة حرارة مريحة للنوم. في الليلة الأولى، قدمنا عناصر مهمة لمساحة نوم مريحة. تعد درجة حرارة الغرفة أحد أهم العوامل للحصول على نوم جيد، لذا نوصي بدرجة حرارة تتراوح بين 20 و25 درجة مئوية.<br /><hr class="my-2" />- التعرف على العلاقة بين النظام الغذائي والنوم. ما ومتى تأكل يمكن أن يكون له تأثير كبير على نومك بشكل عام. في تحدي الليلة، نود منك أن تقرأ عن كيفية تأثير نظامك الغذائي على جودة النوم ومدته، مع التركيز على أطعمة مثل الموز، الجبن، اللوز، الأطعمة الغنية بالأوميغا 3، الشوفان، البابونج واليانسون.<br /><hr class="my-2" />- قلل من استهلاكك الكافيين إلى مشروب واحد خلال النهار وابتعد عن ساعات المساء المتأخرة. ناقشنا بالأمس العلاقة بين الكافيين والنوم. بالنسبة لتحدي الليلة، نطلب منك أن تحاول استبدال الكافيين قبل النوم بالماء أو بالأعشاب.`,
                color: "pink",
              },
              {
                day: 3,
                task: `<strong>نظرة عامة على المهام:</strong> صباح الخير! إذا أكملت تحدي الأمس بنجاح، فتهانينا استمر في العمل الجيد! إذا لم يكن الأمر كذلك، فلا بأس، دعنا نبدأ بداية جديدة الليلة ونعيد نومك إلى المسار الصحيح.<br /><hr class="my-2" /><strong>المهام:</strong><br />- اقرأ كتابًا أو تأمل لمدة 20 دقيقة قبل النوم. في الليلة الأولى، طلبنا منك إبعاد شاشاتك والانخراط في نشاط مهدئ لمدة 10 دقائق، والليلة نطيلها إلى 20 دقيقة.<br /><hr class="my-2" />- قم بتغميق بيئة نومك. يلعب الضوء دورًا رئيسيًا في مساعدة جسمك على معرفة ما إذا كان وقت الاستيقاظ أو النوم. استخدم مصابيح خافتة، تجنب شاشات الإلكترونيات، ضع ستائر معتمة، أطفئ أضواء المدخل، واستخدم قناع نوم إذا لزم الأمر.<br /><hr class="my-2" />- استمر في استكشاف العلاقة بين النظام الغذائي والنوم. العناصر الغذائية مثل الكالسيوم والمغنيسيوم وفيتامينات A وC وD وE وK تدعم نومًا أفضل، جرب الأرز، الأسماك الدهنية، الخضروات الورقية، والمكسرات.<br /><hr class="my-2" />- توقف عن شرب الكافيين قبل 30 دقيقة من الموعد المعتاد. مدد من 15 دقيقة في الليلة الأولى إلى 30 دقيقة الليلة.`,
                color: "blue",
              },
              {
                day: 4,
                task: `<strong>نظرة عامة على المهام:</strong> صباح الخير! تهانينا على وصولك إلى الليلة الرابعة.<br /><hr class="my-2" /><strong>المهام:</strong><br />- أضف 5 دقائق من اليوغا أو تمارين التمدد قبل النوم. بناءً على الليالي السابقة، جرب تمارين تمدد خفيفة أو يوغا للاسترخاء، مع التركيز على التنفس.<br /><hr class="my-2" />- فكر في طرق لتقليل الضوضاء المزعجة في غرفة نومك. بعد تقييم الحرارة والإضاءة، ركز على الضوضاء الليلية، تحدث مع شريك النوم، استخدم آلات ضوضاء بيضاء أو سدادات أذن، أو فكر في عزل الصوت.<br /><hr class="my-2" />- قم بأداء 15 دقيقة من التمارين الإضافية. استمر في خطة التمارين الأسبوعية بإضافة 15 دقيقة مشي قبل النوم.<br /><hr class="my-2" />- توقف عن شرب المشروبات التي تحتوي على الكافيين قبل ساعة من موعد النوم. نأمل أن تكون الليالي الأربع الماضية قد عاملتك جيدًا، وما زال هناك وقت لضبط الروتين.`,
                color: "green",
              },
              {
                day: 5,
                task: `<strong>نظرة عامة على المهام:</strong> صباح الخير! نأمل أن تكون الليالي الأربع الماضية قد عاملتك جيدًا. لا تقلق إذا كنت لا تزال تعاني من جدول نومك الجديد، فلا يزال لديك متسع من الوقت لضبطه.<br /><hr class="my-2" /><strong>المهام:</strong><br />- قم بإزالة هاتفك قبل بدء روتين وقت النوم. كما ناقشنا، الضوء الأزرق من الشاشات يعطل النوم، لذا احفظه في درج أو خزانة.<br /><hr class="my-2" />- حدد الأجهزة الإلكترونية وأزلها من غرفة نومك. قم بإزالة التلفزيونات والأجهزة اللوحية قبل الروتين، واستبدلها بالقراءة أو التأمل.<br /><hr class="my-2" />- اشرب كمية ماء مناسبة أثناء التمرين. استمر في الـ 15 دقيقة مع شرب 1.5-2 لتر يوميًا قبل وبعد التمرين.<br /><hr class="my-2" />- قلل وقت استهلاك الكافيين بساعة. توقف عن الكافيين قبل ساعة من النوم، واستبدل القهوة الأخيرة بشاي أعشاب.`,
                color: "yellow",
              },
              {
                day: 6,
                task: `<strong>نظرة عامة على المهام:</strong> صباح الخير! مرحبًا بك في الليلة السادسة من 14 ليلة لنوم أفضل. هل لاحظت تحسنًا في نومك؟ أي تقدم جيد!<br /><hr class="my-2" /><strong>المهام:</strong><br />- قم بتقييم مدى نجاح وقت النوم والاستيقاظ بالنسبة لك. من الليلة الثانية، تحقق إذا كانت الأوقات مناسبة أم تحتاج تعديلًا.<br /><hr class="my-2" />- قم بتقييم مرتبتك للتأكد من توافقها مع احتياجات نومك. ركز على صلابة المرتبة ونوع النسيج، مع مراعاة احتياجات نومك حسب وضعيتك.<br /><hr class="my-2" />- مضاعفة عدد الوجبات الغنية بالعناصر الغذائية الإيجابية للنوم. زِد من وجبة إلى وجبتين مع مكسرات، أرز كامل، وأسماك دهنية.<br /><hr class="my-2" />- اشرب الاعشاب قبل النوم. استبدل المشروبات الكافيينية بشاي أعشاب مثل البابونج أو اليانسون.`,
                color: "red",
              },
              {
                day: 7,
                task: `<strong>نظرة عامة على المهام:</strong> صباح الخير! لقد وصلنا تقريبًا إلى منتصف الطريق خلال تحدي الـ 14 ليلة من أجل نوم أفضل. نأمل أن تبدأ في جني ثمار روتين وقت النوم الجديد.<br /><hr class="my-2" /><strong>المهام:</strong><br />- ضاعف روتينك من تمارين التمدد أو التأمل أو اليوجا إلى 10 دقائق قبل النوم. من الليلة الرابعة، امدد الوقت إلى 10 دقائق، مع إمكانية دمج الأنشطة.<br /><hr class="my-2" />- قم بتقييم مساحة نومك من حيث درجة الحرارة والضوء والضوضاء والتكنولوجيا. ركز على تحسين جانب واحد لضمان بيئة هادئة وباردة ومظلمة.<br /><hr class="my-2" />- قم بزيادة وقت التمرين إلى نصف ساعة. من 15 دقيقة في الليلة الرابعة، وصل إلى 30 دقيقة مع تعديل كمية الماء.<br /><hr class="my-2" />- قم بتقييم كمية الكافيين اليومية التي تتناولها. بعد أسبوع، تحقق من تقليل الاستهلاك، وقلل الساعة الأخيرة باستبدال القهوة بالشاي.`,
                color: "green",
              },
              {
                day: 8,
                task: `<strong>نظرة عامة على المهام:</strong> صباح الخير! لقد وصلت إلى الليلة الثامنة من 14 ليلة من أجل نوم أفضل. هل تلاحظ أي اختلافات؟ احتفل بتقدمك إذا استيقظت مرتاحًا!<br /><hr class="my-2" /><strong>المهام:</strong><br />- خذ حمامًا دافئًا قبل النوم. جرب شيئًا جديدًا للاسترخاء، وقم بالحمام قرب وقت النوم للحصول على أقصى استفادة.<br /><hr class="my-2" />- قم بتقييم ما إذا كان تصميم غرفة نومك يؤثر على جودة النوم. اختر ألوان هادئة مثل الرمادي أو الأزرق، وقلل الفوضى البصرية لتخفيف التوتر.<br /><hr class="my-2" />- ضع خطة لنظام غذائي صحي واقعي. فكر في تحسين مواعيد الوجبات، كمية السوائل، وإضافة أطعمة مغذية مثل الأسماك الدهنية.`,
                color: "purple",
              },
              {
                day: 9,
                task: `<strong>نظرة عامة على المهام:</strong> صباح الخير! لقد تجاوزنا منتصف الطريق لـ 14 ليلة من أجل نوم أفضل. يجب أن يتحسن نومك، وإلا فما زال هناك وقت للتعديل.<br /><hr class="my-2" /><strong>المهام:</strong><br />- حاول شرب شاي الأعشاب قبل النوم. شاي الأعشاب مثل البابونج واللافندر يعزز الاسترخاء بدون كافيين.<br /><hr class="my-2" />- تحسين مستويات الرطوبة في غرفة نومك. حافظ على 30-60% رطوبة باستخدام مكيف أو مزيل رطوبة.<br /><hr class="my-2" />- عزز طاقتك النهارية بنشاط بدني خفيف. جرب تمارين تمدد أو تأمل، ولاحظ تأثيره على نشاطك ونومك.`,
                color: "pink",
              },
              {
                day: 10,
                task: `<strong>نظرة عامة على المهام:</strong> صباح الخير! لقد وصلت إلى الليلة العاشرة من 14 ليلة لنوم أفضل. نثني على التزامك، فتغيير الروتين ليس سهلاً!<br /><hr class="my-2" /><strong>المهام:</strong><br />- زِد نشاط الاسترخاء قبل النوم من 10 إلى 30 دقيقة. امدد وقت القراءة أو اليوغا لتسهيل الدخول في النوم.<br /><hr class="my-2" />- قم بتقييم الفراش الخاص بك من حيث الراحة والتهوية. راجع الغطاء، واختر قطن للبرودة أو بوليستر للدفء.<br /><hr class="my-2" />- افحص تأثير التمارين والتغذية على نومك. راجع التغييرات الأسبوع الماضي، وحدد ما هو مستدام.<br /><hr class="my-2" />- توقف عن شرب الكافيين قبل ساعتين من النوم. مدد الفترة من الساعة الواحدة إلى ساعتين.`,
                color: "blue",
              },
              {
                day: 11,
                task: `<strong>نظرة عامة على المهام:</strong> صباح الخير. مع بقاء أربع ليال، نحن في 14 ليلة لنوم أفضل. نأمل أن تؤدي التغييرات إلى طاقة نهارية أفضل.<br /><hr class="my-2" /><strong>المهام:</strong><br />- حاول تدوين يومياتك قبل النوم. اكتب بقلم ومفكرة لتخفيف التوتر، مع تجنب الشاشات.<br /><hr class="my-2" />- قم بتقييم النجاحات المتعلقة بمساحة نومك ومجالات التحسين. سجل النجاحات وخطط لتحسين مجالين في الأيام القادمة.<br /><hr class="my-2" />- زِد روتين التمرين إلى 45 دقيقة. من التدرج السابق، وصل إلى 45 دقيقة أو قسمها إذا لزم الأمر.<br /><hr class="my-2" />- امتنع عن تناول الكافيين قبل النوم بـ 6 ساعات. استبدل بأعشاب، مع الأخذ في الاعتبار تأثيره لمدة 6 ساعات.`,
                color: "green",
              },
              {
                day: 12,
                task: `<strong>نظرة عامة على المهام:</strong> صباح الخير! مع اقترابك من نهاية 14 ليلة لنوم أفضل، نأمل أن تؤتي نصائحنا ثمارها.<br /><hr class="my-2" /><strong>المهام:</strong><br />- زِد مدة تمارين التمدد أو اليوجا من 5 إلى 15 دقيقة. اختر وضعيات مريحة للاسترخاء.<br /><hr class="my-2" />- فكر في كيفية تأثير المواد المسببة للحساسية على نومك. اغسل الفراش، نظف الغرفة، وابتعد عن الحيوانات الأليفة إذا لزم الأمر.<br /><hr class="my-2" />- ابدأ خطة النظام الغذائي الخاص بك. طبق الخطة مع أطعمة مثل الأسماك الدهنية والكرز.<br /><hr class="my-2" />- حاول شرب الماء أو المشروبات الخالية من الكافيين لتجنب العطش قبل النوم.`,
                color: "yellow",
              },
              {
                day: 13,
                task: `<strong>نظرة عامة على المهام:</strong> صباح الخير! نهاية 14 ليلة لنوم أفضل تلوح في الأفق. نأمل أن تكون نصائحنا مفيدة.<br /><hr class="my-2" /><strong>المهام:</strong><br />- اكتب قائمة المهام قبل النوم. استخدم قلم ومفكرة لتخفيف الضغط.<br /><hr class="my-2" />- فكر في كيفية تأثير الرائحة على نومك. جرب روائح مهدئة مثل اللافندر أو منشطة مثل القهوة.<br /><hr class="my-2" />- ضع خطة طويلة المدى للالتزام بممارسة الرياضة. اجعلها واقعية مع تمارين خفيفة إذا لزم الأمر.<br /><hr class="my-2" />- اكتفِ بفنجان واحد من القهوة يوميًا. استبدل الباقي بتمارين خفيفة أو شاي ساخن.`,
                color: "red",
              },
              {
                day: 14,
                task: `<strong>نظرة عامة على المهام:</strong> عمل عظيم! لقد وصلت إلى اليوم 14! فكر فيما نجح وما لم ينجح، وما الروتينات التي ستستمر بها.<br /><hr class="my-2" /><strong>المهام:</strong><br />- زِد نشاط الاسترخاء بدون شاشة إلى ساعة. اقرأ أو تأمل لساعة كاملة.<br /><hr class="my-2" />- ضع خطة لجعل غرفة نومك أكثر ملاءمة للنوم. حل مشكلة واحدة أسبوعيًا.<br /><hr class="my-2" />- راجع خطة نظامك الغذائي للتأكد من استدامتها. استمر بعد أي انقطاع.<br /><hr class="my-2" />- توقف عن شرب الكافيين قبل النوم بثلاث ساعات. التزم بهذا لنوم مريح.`,
                color: "green",
              },
            ].map(({ day, task, color }) => (
              <Card
                key={`day-${day}`}
                className={`bg-${color}-50 border-${color}-200 hover:shadow-xl transition-shadow cursor-pointer`}
                onClick={() => toggleTask(day)}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 bg-${color}-600 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-white font-bold">{day}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">
                    اليوم {day}
                  </h3>
                  {visibleTask === day && (
                    <div
                      className="text-gray-600 text-base leading-7"
                      dangerouslySetInnerHTML={{ __html: task }}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              كيف يعمل تحدي النوم؟
            </h2>
            <p className="text-lg text-gray-600">
              خطوات بسيطة لتحسين نومك في 14 يوم
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">
                المهام اليومية
              </h3>
              <p className="text-gray-600 text-sm">
                اتبع المهام اليومية البسيطة لتحسين نومك.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">
                تتبع التقدم
              </h3>
              <p className="text-gray-600 text-sm">
                سجل تقدمك يومياً وشاركنا نتائجك عبر واتساب.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Challenge CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            🚀 انضم لتحدي النوم وغيّر حياتك
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            انضم إلى أكثر من 5000 مشارك وابدأ رحلة تحسين نومك مع تحدي النوم لمدة
            14 يوم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
        </div>
      </section>

      {/* WhatsApp Button */}
    </div>
  );
}
