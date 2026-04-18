import Image from "@/components/Image";

export default function AidaPage() {
  return (
    <div className="container mx-auto py-16 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        {/* First Image and Header */}
        <div className="text-center mb-8">
          <Image
            src="/aida.jpg"
            alt="د. عايدة أبو سالم - صورة رئيسية"
            width={200}
            height={200}
            className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-primary/10"
            priority
          />
          <h1 className="text-3xl font-extrabold text-primary mt-6 mb-2">د. عايدة أبو سالم</h1>
          <p className="text-lg text-gray-600 mb-4"> Airway dentist <br/>
Snoring and mouth breathing physician</p>
          <p className="text-primary/80 text-base leading-relaxed">
            طبيبة أسنان وأخصائية علاج الشخير والتنفس الفموي
          </p>
        </div>

        <div className="space-y-10 text-gray-700 text-right">
          {/* About Section with Second Image */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">نبذة عن الدكتورة عايدة</h2>
              <p className="text-base leading-relaxed text-gray-700">
                الدكتورة عايدة أبو سالم طبيبة أسنان ماهرة وذات خبرة واسعة في علاج اضطرابات النوم والتنفس واضطرابات المفصل الفكي الصدغي (TMJ)، وذلك باستخدام العلاج العضلي الوظيفي كجزء أساسي من نهجها العلاجي الشامل. كما أنها متخصصة في طب الأسنان بالليزر باستخدام أحدث التقنيات.
              </p>
            </div>
            <Image
              src="/aida2.jpg"
              alt="د. عايدة أبو سالم - صورة إضافية"
              width={160}
              height={160}
              className="w-40 h-40 rounded-2xl object-cover shadow-md md:w-48 md:h-48"
            />
          </div>

          {/* Academic Qualifications Section with Certificate Image */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">المؤهلات الأكاديمية</h2>
            <p className="text-base leading-relaxed text-gray-700 mb-6">
              تحمل شهادة بكالوريوس في جراحة الأسنان (BDS)، ومعتمدة في استخدام جهاز Myosa، أحد أشهر الأجهزة العالمية المستخدمة في العلاج العضلي الوظيفي.
            </p>
            <div className="flex justify-center">
              <Image
                src="/sartafica7.png"
                alt="شهادة د. عايدة أبو سالم الأكاديمية"
                width={300}
                height={200}
                className="w-full max-w-sm rounded-2xl object-cover shadow-md"
              />
            </div>
          </div>

          {/* Technical Expertise Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">الخبرة التقنية</h2>
            <p className="text-base leading-relaxed text-gray-700">
              تتمتع الدكتورة عايدة بخبرة عملية كبيرة في استخدام أجهزة الليزر المتقدمة مثل Fotona وDoctor Smile وElexxion AG Snore 3، مما يمكّنها من تقديم علاجات دقيقة وفعالة مصممة وفقًا لاحتياجات كل مريض.
            </p>
          </div>

          {/* Treatment Approach Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">نهجها العلاجي</h2>
            <p className="text-base leading-relaxed text-gray-700">
              بفضل خلفيتها الأكاديمية القوية ونهجها العلاجي المتكامل، تكرّس الدكتورة عايدة جهودها لتوفير أعلى مستويات الرعاية وتحسين جودة حياة مرضاها من خلال معالجة الأسباب الجذرية للمشكلات، وليس فقط الأعراض. تجربتها السريرية المتنوعة والتزامها المستمر بالتطوير والتميز يجعل منها طبيبة موثوقة في تقديم الرعاية الشاملة للأسنان والصحة الوظيفية.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}