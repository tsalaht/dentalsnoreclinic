import Image from "@/components/Image";

export default function MajdPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
        <Image src="/majd.png" alt="د. مجد" className="w-48 h-auto mx-auto mb-4 rounded-xl" />
        <h1 className="text-2xl font-bold mb-2">د. مجد المدني</h1>
        <p className="text-gray-600 mb-4">Airway dentist <br/>
Snoring and mouth breathing physician</p>
        <p className="text-gray-700 mb-4">
          طبيبة أسنان وأخصائية علاج الشخير والتنفس الفموي
        </p>

        <div className="text-gray-700 text-right">
          <div className="flex flex-col md:flex-row gap-6 items-start">
  <div className=" flex-1">
   <h2 className="text-xl font-semibold mb-3">نبذة عن الدكتورة مجد</h2>
          <p className="mb-4">
            الدكتورة مجد ماهرة في مجال طب الأسنان، حاصلة على درجة دكتور في جراحة الأسنان (DDS) من الجامعة الأردنية. بفضل خلفيتها التعليمية القوية وشغفها برعاية الأسنان، تكرس الدكتورة مجد جهودها لتقديم أعلى جودة علاج لمرضاها.
          </p>

          </div>
            <Image
                        src="/iman2.jpg"
                        alt="د. إيمان نزال - صورة إضافية"
                        width={160}
                        height={160}
                        className="w-40 h-40 rounded-2xl object-cover shadow-md md:w-48 md:h-48"
                      />
          </div>
        
       

          <h2 className="text-xl font-semibold mb-3">المؤهلات الأكاديمية</h2>
          <p className="mb-4">
            تحمل الدكتورة مجد دبلوم عضوية كلية جراحة الأسنان (MFD)، مما يبرز التزامها بالتميز والتعلم المستمر.
          </p>

          <h2 className="text-xl font-semibold mb-3">التدريب المتخصص</h2>
          <p className="mb-4">
            انطلاقاً من شغفها وإيمانها العميق بأهمية دورها كطبيبة أسنان في علاج الشخير، عملت الدكتورة مجد في عيادة الشخير تحت إشراف وتدريب مباشر من الدكتور مهند الكسواني. كما تلقت تدريبًا مكثفًا مع الدكتور الأسترالي العالمي ديفيد ماكنتوش، وذلك أثناء زيارته لمركزنا، مما أضاف لخبرتها بعداً عالمياً في هذا التخصص الدقيق.
          </p>

          <h2 className="text-xl font-semibold mb-3">الخبرة التقنية</h2>
          <p>
            تتمتع بخبرة عملية كبيرة في استخدام أجهزة الليزر المتقدمة مثل Fotona وElexxion AG Snore 3، مما يمكّنها من تقديم علاجات دقيقة وفعالة مصممة وفقًا لاحتياجات كل مريض. مع خبرة الدكتورة مجد، يمكنك أن تكون مطمئنًا بأنك في أيدٍ قادرة على تلبية جميع احتياجاتك السنية.
          </p>
        </div>
      </div>
    </div>
  );
}