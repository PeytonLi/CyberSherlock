import type { Metadata } from "next";
import Link from "next/link";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "كيف يمكن للذكاء الاصطناعي أن يتسبب في انهيار البنية التحتية الحيوية — CyberSherlock",
  description:
    "كيف يقلّص الذكاء الاصطناعي الحاجة إلى الخبرة والوقت في الهجمات السيبرانية على البنية التحتية الحيوية.",
};

export default function AIInfrastructureCollapseLesson() {
  return (
    <>
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-16" dir="rtl" lang="ar">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-slate-500" dir="ltr">
        <Link href="/" className="hover:text-red-600 transition-colors">
          CyberSherlock
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">كيف يمكن للذكاء الاصطناعي أن ينهار البنية التحتية</span>
      </nav>

      {/* Category tag */}
      <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
        الأمن السيبراني · مقال تحليلي · BlueDot Impact
      </p>

      {/* Title */}
      <h1 className="mt-3 text-2xl sm:text-4xl font-bold leading-tight tracking-tight">
        كيف يمكن للذكاء الاصطناعي أن يتسبب في انهيار البنية التحتية الحيوية
      </h1>

      {/* Source */}
      <p className="mt-3 text-sm text-slate-500">
        مقتبس من{" "}
        <a
          href="https://blog.bluedot.org/p/how-ai-could-enable-critical-infrastructure-collapse?utm_source=bluedot-impact"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 underline hover:text-red-800"
        >
          BlueDot Impact
        </a>
        {" "}· بقلم: لي ليان آنغ (Li-Lian Ang)
      </p>

      {/* Intro */}
      <p className="mt-8 text-lg leading-relaxed text-slate-700">
        يعتمد مجتمعنا على بنية تحتية حيوية توفر المياه النظيفة، وتنقل الغذاء من
        المزارع إلى المتاجر، وتزوّد المنازل والمستشفيات بالكهرباء. وأي انقطاع
        مؤقت في هذه الخدمات قد يؤدي إلى خسائر بشرية أو اقتصادية جسيمة.
      </p>

      {/* Section: هجمات سيبرانية سابقة */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        هجمات سيبرانية سابقة على البنية التحتية
      </h2>

      <div className="mt-6 space-y-5">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
              ١
            </span>
            <h3 className="text-lg font-semibold text-slate-900">
              هجوم الفدية على كولونيال بايبلاين
            </h3>
          </div>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            أجبر الشركة على إيقاف إمدادات الوقود ودفع فدية قدرها ٤.٤ مليون دولار.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
              ٢
            </span>
            <h3 className="text-lg font-semibold text-slate-900">
              فيروس نوت بيتيا (NotPetya)
            </h3>
          </div>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            استغل ثغرات في أنظمة ويندوز غي؅حدَّثة، وأدى إلى توقف شركة
            &quot;ميرسك&quot; (المسؤولة عن خُمس الشحن العالمي) لمدة أسبوع، بخسائر
            تجاوزت ١٠ مليارات دولار.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
              ٣
            </span>
            <h3 className="text-lg font-semibold text-slate-900">
              هجمات روسيا على شبكة الكهرباء الأوكرانية
            </h3>
          </div>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            هجمات إلكترونية روسية على شبكة الكهرباء الأوكرانية تسببت في انقطاعات
            واسعة للكهرباء.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
              ٤
            </span>
            <h3 className="text-lg font-semibold text-slate-900">
              هجوم فدية على مستشفى ألماني
            </h3>
          </div>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            أجبر المستشفى على رفض استقبال حالات الطوارئ، ما أدى إلى وفاة مريض بسبب
            تأخر العلاج.
          </p>
        </div>
      </div>

      {/* Section: لماذا الهجمات السيبرانية */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        لماذا الهجمات السيبرانية؟
      </h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        الهجمات المادية (كتفجير محطة طاقة) واضحة وسهلة النسب لمصدرها، وتُعد
        إعلان حرب مباشرًا. أما الهجمات السيبرانية فتوفر ثلاث مزايا:
      </p>

      <ul className="mt-4 space-y-3 text-lg leading-relaxed text-slate-700">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>إمكانية الإنكار:</strong> يصعب إثبات الجهة المسؤولة عن الهجوم.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>تكلفة منخفضة جدًا:</strong> لا تحتاج سوى حاسوب واتصال بالإنترنت ووقت.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>القدرة على التحكم بحجم الضرر:</strong> من تعطيل مؤقت إلى دمار دائم.
          </span>
        </li>
      </ul>

      {/* Section: لماذا لا تنهار البنية التحتية يوميًا */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        لماذا لا تنهار البنية التحتية يوميًا؟
      </h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        لأن اختراق البنية التحتية الحيوية صعب جدًا بسبب طبقات الحماية المتعددة
        (تقسيم الشبكات، ضوابط الوصول، أنظمة أمان تفشل بأمان). حتى الدول الكبرى
        تحتاج سنوات لتنفيذ هجوم ناجح؛ فبرمجية &quot;ترايتون&quot; الخبيثة استغرق
        تطويرها سنتين، والهجوم الروسي على الشبكة الأوكرانية استغرق أكثر من ستة
        أشهر من التحضير.
      </p>

      {/* Image placeholder */}
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
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-slate-600">
          [الصورة ١] رسم توضيحي: طبقات الحماية في البنية التحتية الحيوية
        </p>
        <p className="mt-1 text-xs text-slate-400">
          مكان مخصص لإدراج رسم يُظهر طبقات الأمان المتعددة ونقاط الضعف المحتملة
        </p>
      </div>

      {/* Section: الذكاء الاصطناعي يقلّص الحاجة إلى الخبرة */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        الذكاء الاصطناعي يقلّص الحاجة إلى الخبرة
      </h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        تعتمد أغلب البنية التحتية على برمجيات مفتوحة المصدر (٩٧٪ من التطبيقات)،
        و٨١٪ منها تحتوي ثغرات أات أمنية خطيرة. ومعظم هذه الثغرات لا تُصلح لأن المصادر
        المفتوحة يديرها عدد قليل من المتطوعين (٩١٪ من المشاريع لم تُحدَّث منذ
        أكثر من سنتين).
      </p>

      <div className="my-8 rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-4">
        <p className="text-2xl font-bold text-red-700">٩٧٪</p>
        <p className="mt-1 text-sm text-red-800">
          من التطبيقات تعتمد على برمجيات مفتوحة المصدر — و٨١٪ منها تحتوي ثغرات
          أمنية خطيرة
        </p>
      </div>

      <p className="text-lg leading-relaxed text-slate-700">
        كان تحويل هذه الثغرات إلى &quot;سلاح&quot; فعلي أمرًا صعبًا يتطلب فهمًا
        عميقًا للنظام المستهدف. لكن الذكاء الاصطناعي أصبح قادرًا على:
      </p>

      <ul className="mt-4 space-y-3 text-lg leading-relaxed text-slate-700">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>أتمتة عملية اكتشاف الثغرات</strong> عبر ملايين الأسطر البرمجية.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>تطوير رسائل تصيّد إلكتروني (spearphishing)</strong> مخصصة
            وشديدة الإقناع باستخدام بيانات مسروقة عن الموظفين المستهدفين.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>تسميم بيانات تدريب النماذج</strong> بعدد قليل من الوثائق فقط
            (٢٥٠ وثيقة)، ما قد يمنح المهاجمين أبوابًا خلفية داخل أنظمة الذكاء
            الاصطناعي التي تستخدمها الجهات المشغِّلة للبنية التحتية.
          </span>
        </li>
      </ul>

      {/* Section: الذكاء الاصطناعي يقلّص الحاجة إلى الوقت */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        الذكاء الاصطناعي يقلّص الحاجة إلى الوقت
      </h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        العمليات السيبرانية التقليدية تستغرق سنوات للتخطيط، ما يمنح المدافعين
        فرصة لاكتشاف الهجوم قبل وقوع الضرر. لكن الذكاء الاصطناعي يختصر هذه
        العمليات من سنوات إلى أشهر: فقد استخدمت جهات صينية نموذج Claude لأتمتة
        هجوم استمر ٩ أشهر على البنية التحتية الفيتنامية، أضرّ بالاتصالات وقواعد
        البيانات الحكومية وأنظمة الزراعة.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        كما أظهر باحثون من Anthropic وجامعة كارنيغي ميلون، باستخدام إطار عمل
        يُدعى &quot;إنكالمو&quot; (Incalmo)، إمكانية اختراق ٥٠٪ من شبكات الشركات
        (٢٥-٥٠ جهازًا) بتكلفة أقل من دولار واحد وخلال ١٢ إلى ٧٠ دقيقة فقط. كذلك
        طوّر فريق من جامعة نيويورك برمجية فدية ذاتية التطور بتكلفة ٧٠ سنتًا فقط
        باستخدام نماذج مفتوحة الوزن وأجهزة عادية.
      </p>

      <div className="my-8 rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-4">
        <p className="text-2xl font-bold text-red-700">٧٠ سنتًا</p>
        <p className="mt-1 text-sm text-red-800">
          تكلفة تطوير برمجية فدية ذاتية التطور باستخدام نماذج ذكاء اصطناعي مفتوحة
          الوزن
        </p>
      </div>

      <p className="text-lg leading-relaxed text-slate-700">
        كلما تسارع تنفيذ الهجوم، قلّ الوقت المتاح لأنظمة الأمان للتدخل أو لمشغلي
        البنية التحتية لاتخاذ القرار الصحيح — وهو أمر بالغ الخطورة في حالات مثل
        شبكات الكهرباء أو المستشفيات حيث قد لا يكون هناك سوى ثوانٍ للتصرف. وهذا قد
        يدفع البشر للاعتماد أكثر فأكثر على أنظمة ذكاء اصطناعي دفاعية لاتخاذ
        قرارات حاسمة — وهو اعتماد يحمل مخاطره الخاصة، إذ يمكن لهجمات &quot;تسميم
        البيانات&quot; أن تحوّل هذه الأنظمة الدفاعية نفسها إلى نقطة ضعف يستغلها
        المهاجم.
      </p>

      {/* Image placeholder */}
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
              d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-slate-600">
          [الصورة ٢] رسم بياني: تقلّص زمن الهجمات السيبرانية بفعل الذكاء الاصطناعي
        </p>
        <p className="mt-1 text-xs text-slate-400">
          مكان مخصص لإدراج رسم بياني يُظهر مقارنة بين زمن الهجمات التقليدية
          والهجمات المدعومة بالذكاء الاصطناعي
        </p>
      </div>

      {/* Section: قدرات الذكاء الاصطناعي الهجومية تتحسن بسرعة */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        قدرات الذكاء الاصطناعي الهجومية تتحسن بسرعة
      </h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        لأول مرة، تُثير نماذج متقدمة مثل Claude 4.5 Sonnet وGemini 2.5 Pro قلقًا
        أمنيًا موثقًا رسميًا بشأن قدراتها في المهام الهجومية السيبرانية. ورغم أن
        النماذج الحالية لا تستطيع بعد تنفيذ عملية سيبرانية كاملة بشكل مستقل من
        الاستطلاع إلى الهجوم، فإن الفجوة تتقلص بسرعة، خاصة مع تقنيات مثل
        &quot;السقالات البرمجية&quot; (scaffolding) التي تربط النماذج بأدوات خارجية
        وترفع من قدراتها الهجومية بشكل كبير حتى قبل صدور إصدارات أحدث.
      </p>

      {/* Section: الخلاصة */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        الخلاصة
      </h2>

      <div className="my-8 rounded-lg border border-red-200 bg-gradient-to-l from-red-50 to-white px-6 py-5">
        <p className="text-lg leading-relaxed text-slate-700">
          التوازن الدقيق بين الهجوم والدفاع السيبراني بدأ يميل لصالح المهاجمين.
          وبالنسبة للبنية التحتية الحيوية، حيث تُحسب الدقائق وتُودي الأخطاء
          بالأرواح، لم يعد هذا سؤالًا نظريًا، بل سؤالًا حقيقيًا: هل يمكن لمشغلي
          الشبكات الكهربائية والمستشفيات ومحطات معالجة المياه الدفاع عن أنفسهم ضد
          هجمات تتحرك أسرع مما يستطيع البشر التفاعل معه؟
        </p>
      </div>

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
    <MapSection topic="critical-infrastructure" />
    </>
  );
}