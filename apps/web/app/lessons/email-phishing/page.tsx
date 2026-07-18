import type { Metadata } from "next";
import Link from "next/link";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "مستقبل التصيّد الاحتيالي — CyberSherlock",
  description:
    "كيف يزيد الذكاء الاصطناعي من حجم وتعقيد هجمات التصيّد الاحتيالي عبر البريد الإلكتروني.",
};

export default function EmailPhishingLesson() {
  return (
    <>
    <article className="mx-auto max-w-3xl px-6 py-16" dir="rtl" lang="ar">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-slate-500" dir="ltr">
        <Link href="/" className="hover:text-red-600 transition-colors">
          CyberSherlock
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">مستقبل التصيّد الاحتيالي</span>
      </nav>

      {/* Category tag */}
      <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
        الأمن السيبراني · الدرس ٢
      </p>

      {/* Title */}
      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight">
        مستقبل التصيّد الاحتيالي
      </h1>

      {/* Source */}
      <p className="mt-3 text-sm text-slate-500">
        مقتبس من{" "}
        <a
          href="https://civai.org/p/email-phishing?utm_source=bluedot-impact"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 underline hover:text-red-800"
        >
          civai.org
        </a>
      </p>

      {/* Intro */}
      <p className="mt-8 text-lg leading-relaxed text-slate-700">
        يعمل الذكاء الاصطناعي على زيادة حجم وتعقيد هجمات التصيّد الاحتيالي عبر
        البريد الإلكتروني، بينما يخفّض بشكل كبير تكلفة تنفيذها.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        التصيّد عبر البريد الإلكتروني — وهو إرسال رسالة مخادعة لخداع الشخص ودفعه
        لمشاركة معلومات حساسة — قديم قِدَم الإنترنت نفسه. تقليديًا، كان هذا النوع
        من الهجمات يأخذ شكلين: إما رسائل عامة تُرسَل بأعداد ضخمة، أو رسائل شديدة
        التخصيص تستهدف عددًا صغيرًا من الأشخاص المهمين (VIP). لكن بفضل تطور الذكاء
        الاصطناعي، أصبح إنشاء هجمات تصيّد مستهدفة أسهل وأرخص وأسرع من أي وقت مضى
        — ما يعني أن المجرمين الإلكترونيين يمكنهم معاملة كل شخص وكأنه هدف مهم.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        بما أن أنظمة الذكاء الاصطناعي قادرة على مسح كميات هائلة من المعلومات
        المتاحة للعامة، فبإمكانها أن تتعرّف بسرعة كبيرة على هوية الشخص، واهتماماته،
        ونقاط الضعف النفسية التي يمكن استغلالها. وباستخدام هذه المعلومات، يمكنها
        صياغة رسائل بريد إلكتروني شديدة التخصيص تبدو موثوقة وحقيقية لعين غير
        متيقظة، ما يجعل التمييز بين الرسالة المشروعة والخطيرة أصعب بكثير.
      </p>

      {/* Image placeholder 1 */}
      <div className="my-10 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Zm17.25-6.75H3"
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-slate-600">
          [الصورة ١] رسم توضيحي: كيف يخصص الذكاء الاصطناعي رسائل التصيّد حسب
          الفئة المستهدفة
        </p>
        <p className="mt-1 text-xs text-slate-400">
          مكان مخصص لإدراج صورة تُظهر تباين استراتيجيات التصيّد باختلاف الضحايا
        </p>
      </div>

      {/* Section: لاحظ كيف تتفاوت الرسائل المولَّدة */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        لاحظ كيف تتفاوت الرسائل المولَّدة
      </h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        لاحظ كيف لا تختلف الرسائل المُولَّدة في محتواها فقط، بل أيضًا في
        الاستراتيجية المستخدمة لجذب الضحية. فاسم المرسل المزيّف، ونبرة الرسالة
        وأسلوبها، تتغيّر بحسب الهدف. على سبيل المثال:
      </p>

      <ul className="mt-4 space-y-3 text-lg leading-relaxed text-slate-700">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>الرسائل الموجهة لرياضي مشهور</strong> قد تُبرز شراكة تجارية ذات
            صلة بمنطقته.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>الرسائل الموجهة لأستاذ جامعي</strong> قد تتضمن دعوة لمؤتمر
            متخصص في مجاله.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>الرسائل الموجهة لصاحب عمل</strong> قد تعرض فرصة شراكة تبدو ذات
            قيمة.
          </span>
        </li>
      </ul>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        كما يُلاحظ أن كل رسالة تنتهي برابط يبدو حقيقيًا لملف &quot;لينكدإن&quot;
        الخاص بالمرسل. لكن الضغط على هذا الرابط يقود الضحية إلى صفحة تسجيل دخول
        مزيّفة تطلب منه إدخال كلمة مرور حسابه على لينكدإن، والتي يستطيع المهاجمون
        رؤيتها والاستيلاء عليها.
      </p>

      {/* Image placeholder 2 */}
      <div className="my-10 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-slate-600">
          [الصورة ٢] رسم بياني: ارتفاع هجمات التصيّد عالميًا بعد إطلاق ChatGPT
        </p>
        <p className="mt-1 text-xs text-slate-400">
          مكان مخصص لإدراج صورة تُظهر بيانات Statista عن تضاعف هجمات التصيّد
        </p>
      </div>

      {/* Section: التصيّد الاحتيالي على نطاق واسع */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        التصيّد الاحتيالي على نطاق واسع
      </h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        يُعد التصيّد الاحتيالي، وفقًا لمركز شكاوى جرائم الإنترنت التابع لمكتب
        التحقيقات الفيدرالي الأمريكي (FBI)، النوع الأكثر شيوعًا من الجرائم
        الإلكترونية على الإطلاق. ورغم أنه في تصاعد مستمر منذ سنوات، تشير بيانات
        موقع &quot;ستاتيستا&quot; (Statista) إلى أن عدد هجمات التصيّد على مستوى
        العالم تضاعف أكثر من مرة خلال العام الذي تلا إطلاق &quot;تشات جي بي
        تي&quot;. كما تشير البيانات إلى أن 91% من جميع الهجمات الإلكترونية تبدأ
        عبر البريد الإلكتروني.
      </p>

      <div className="my-8 rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-4">
        <p className="text-2xl font-bold text-red-700">91%</p>
        <p className="mt-1 text-sm text-red-800">
          من جميع الهجمات الإلكترونية تبدأ عبر البريد الإلكتروني
        </p>
      </div>

      <p className="text-lg leading-relaxed text-slate-700">
        لا يقتصر أثر الذكاء الاصطناعي على تحسين جودة الهجمات الإلكترونية فحسب، بل
        يزيد أيضًا من عددها، ما سيؤدي إلى تضخم كبير في الخسائر المتعلقة بالأمن
        السيبراني. وقد أظهرت أبحاث حديثة أن من الممكن اليوم أتمتة عملية التصيّد
        الاحتيالي بالكامل، وأن أفضل نماذج الذكاء الاصطناعي الحالية تُضاهي أداء
        الخبراء البشريين في هذه المهمة.
      </p>

      {/* Section: ما الذي ينتظرنا */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        ما الذي ينتظرنا
      </h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        يفتح مليارات الأشخاص رسائل بريدهم الإلكتروني يوميًا. في السابق، لم يكن
        معظمهم أهدافًا &quot;مجدية&quot; للتصيّد لأن الجهد المطلوب من المجرمين كان
        يفوق العائد المحتمل. لكن الآن، أصبح بالإمكان صياغة عمليات احتيال معقدة
        خلال دقائق بدلًا من ساعات، وهو ما يغيّر هذه المعادلة ويجعل الجميع عرضة
        للخطر.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        هناك بعض الأدلة على أن الذكاء الاصطناعي يمكن استخدامه أيضًا للدفاع ضد
        التصيّد الاحتيالي، من خلال الكشف الاستباقي عن النوايا الخبيثة؛ إلا أنه ومع
        تطور أنظمة الذكاء الاصطناعي شهريًا، لا تزال عمليات الهجوم أسهل بكثير من
        عمليات الدفاع.
      </p>

      {/* Back to curriculum */}
      <div className="mt-16 border-t border-slate-200 pt-8">
        <Link
          href="/curriculum"
          className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          العودة إلى قائمة الدروس
        </Link>
      </div>
    </article>
    <MapSection topic="email-phishing" />
    </>
  );
}