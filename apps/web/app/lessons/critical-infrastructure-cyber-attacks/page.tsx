import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "الهجمات الإلكترونية على البنية التحتية الحيوية — CyberSherlock",
  description: "تحليل مخاطر الهجمات الإلكترونية على البنية التحتية الحيوية: الطاقة، المياه، النقل، والإنترنت العالمي.",
};

export default function CriticalInfrastructureLesson() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16" dir="rtl" lang="ar">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-slate-500" dir="ltr">
        <Link href="/" className="hover:text-red-600 transition-colors">
          CyberSherlock
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">الهجمات الإلكترونية على البنية التحتية الحيوية</span>
      </nav>

      {/* Category tag */}
      <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
        الأمن السيبراني · مقال خبراء المخاطر · أبريل ٢٠٢٦
      </p>

      {/* Title */}
      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight">
        الهجمات الإلكترونية على البنية التحتية الحيوية
      </h1>

      {/* Source */}
      <p className="mt-3 text-sm text-slate-500">
        مقتبس من{" "}
        <a
          href="https://commercial.allianz.com/news-and-insights/expert-risk-articles/cyber-attacks-on-critical-infrastructure.html?utm_source=bluedot-impact"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 underline hover:text-red-800"
        >
          Allianz Commercial
        </a>
      </p>

      {/* Intro: تعقيد البنية التحتية الحيوية */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        تعقيد البنية التحتية الحيوية
      </h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        أصبحت البنية التحتية الحيوية — مثل توليد الكهرباء وتوزيعها ومعالجة المياه،
        إضافة إلى البنية التحتية الرقمية — أكثر تعقيدًا واعتمادًا على شبكات من
        الأجهزة المترابطة. فقبل عقود قليلة، كانت شبكات الكهرباء وغيرها من البنى
        التحتية الحيوية تعمل بمعزل عن بعضها، أما اليوم فأصبحت مترابطة بشكل أكبر
        جغرافيًا وعبر القطاعات المختلفة، ما يعني أن تعطّل بنية تحتية واحدة قد
        يتسبب في سلسلة من الانهيارات المتتالية المدمرة.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        ولا عجب أن تصبح هشاشة البنية التحتية أمام الهجمات الإلكترونية والأعطال
        التقنية مصدر قلق كبير، خاصة في ظل أحداث حقيقية عززت هذه المخاوف.
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
          [الصورة ١] رسم توضيحي: ترابط البنى التحتية الحيوية وانتشار التأثير
        </p>
        <p className="mt-1 text-xs text-slate-400">
          مكان مخصص لإدراج صورة تُظهر الترابط بين قطاعات الطاقة والمياه والاتصالات
          والنقل
        </p>
      </div>

      {/* Section: أمثلة على حوادث سابقة */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        أمثلة على حوادث سابقة
      </h2>

      <div className="mt-6 space-y-6">
        {/* Incident 1: Ukraine 2015 */}
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
              ١
            </span>
            <h3 className="text-lg font-semibold text-slate-900">
              انقطاع الكهرباء في أوكرانيا (ديسمبر ٢٠١٥)
            </h3>
          </div>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            شهد العالم أول انقطاع كهربائي معروف ناتج عن هجوم إلكتروني متعمد، حيث
            تعرضت ثلاث شركات مرافق في أوكرانيا لبرمجية خبيثة تُدعى &quot;بلاك
            إنرجي&quot;، ما ترك مئات آلاف المنازل بلا كهرباء لمدة ست ساعات. ومنذ
            اندلاع الحرب في أوكرانيا عام ٢٠٢٢، سُجّلت هجمات مشابهة على شبكات
            الكهرباء.
          </p>
        </div>

        {/* Incident 2: Colonial Pipeline */}
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
              ٢
            </span>
            <h3 className="text-lg font-semibold text-slate-900">
              هجوم كولونيال بايبلاين (مايو ٢٠٢١)
            </h3>
          </div>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            شنّت مجموعة القرصنة &quot;دارك سايد&quot; هجوم فدية استهدف شركة
            &quot;كولونيال بايبلاين&quot; لخطوط أنابيب الوقود الرئيسية في الولايات
            المتحدة، ما أدى إلى اضطراب إمدادات الوقود على الساحل الشرقي وموجة شراء
            ذعري ونقص في الوقود.
          </p>
        </div>

        {/* Incident 3: Oldsmar water */}
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
              ٣
            </span>
            <h3 className="text-lg font-semibold text-slate-900">
              محاولة تسميم المياه في أولدسمار (٢٠٢١)
            </h3>
          </div>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            تمكن قرصان من الوصول إلى نظام المياه في مدينة أولدسمار بولاية فلوريدا،
            وزاد كمية مادة هيدروكسيد الصوديوم (الصودا الكاوية) في نظام معالجة
            المياه، لكن أحد العمال لاحظ ذلك في الوقت المناسب وتمكن من التراجع عن
            الفعل.
          </p>
        </div>
      </div>

      {/* Section: القطاعات الأكثر عرضة للهجمات */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        القطاعات الأكثر عرضة للهجمات
      </h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        يُعد قطاع الطاقة من أبرز أهداف الهجمات الإلكترونية على البنية التحتية
        الحيوية، لكنه ليس الوحيد؛ إذ يشمل ذلك أيضًا قطاعات النقل، والخدمات
        الحكومية، والاتصالات، والصناعات التحويلية الحيوية.
      </p>

      {/* Jaguar Land Rover callout */}
      <div className="my-8 rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-4">
        <p className="text-lg font-bold text-red-700">
          هجوم جاغوار لاند روفر (٢٠٢٥)
        </p>
        <p className="mt-2 text-base leading-relaxed text-red-800">
          هجوم فدية أوقف الإنتاج في شركة &quot;جاغوار لاند روفر&quot; البريطانية
          لصناعة السيارات الفاخرة، وأثّر على أكثر من ٥٠٠٠ مؤسسة ضمن سلسلة التوريد
          والتوزيع. قُدّرت تكلفة الهجوم بنحو ٢.١ مليار جنيه إسترليني (٢.٨ مليار
          دولار أمريكي)، ما يجعله من أكثر الحوادث الإلكترونية كلفة في تاريخ المملكة
          المتحدة.
        </p>
      </div>

      <p className="text-lg leading-relaxed text-slate-700">
        ساهم الهجوم في تراجع إنتاج السيارات البريطاني بنسبة ٣٠٪ خلال أكتوبر، وفي
        الانخفاض غير المتوقع للناتج المحلي الإجمالي البريطاني في الشهر ذاته.
      </p>

      {/* Section: انقطاع الإنترنت العالمي */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        انقطاع الإنترنت العالمي: أحد أكبر المخاوف
      </h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        وفقًا لتحليل حديث من &quot;مؤشر أليانز للمخاطر&quot;، الذي استطلع آراء
        أكثر من ٣٠٠٠ خبير في إدارة المخاطر من نحو ١٠٠ دولة، يُعد سيناريو انقطاع
        الإنترنت العالمي — الناتج عن هجوم إلكتروني كبير أو عطل تقني يعطّل العمليات
        الرقمية والاتصالات عالميًا — ثاني أكثر سيناريوهات &quot;البجعة
        السوداء&quot; المحتملة للأعمال على مستوى العالم خلال السنوات الخمس المقبلة
        (٤٧٪ من المستجيبين).
      </p>

      <div className="my-8 rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-4">
        <p className="text-2xl font-bold text-red-700">٤٧٪</p>
        <p className="mt-1 text-sm text-red-800">
          من خبراء المخاطر حول العالم يرون انقطاع الإنترنت العالمي ثاني أكثر
          سيناريوهات &quot;البجعة السوداء&quot; احتمالاً خلال ٥ سنوات
        </p>
      </div>

      <p className="text-lg leading-relaxed text-slate-700">
        يأتي هذا السيناريو بعد سيناريو شلل سلاسل التوريد العالمية بسبب صراع
        جيوسياسي. ويحتل المرتبة الأولى كأكثر الأحداث المخيفة في مناطق الأمريكتين
        وأفريقيا والشرق الأوسط، وكذلك في المملكة المتحدة والبرازيل وكولومبيا والهند
        وأستراليا.
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
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-slate-600">
          [الصورة ٢] خريطة المناطق الأكثر تأثرًا بسيناريو انقطاع الإنترنت العالمي
        </p>
        <p className="mt-1 text-xs text-slate-400">
          مكان مخصص لإدراج خريطة تُظهر ترتيب المناطق حسب القلق من انقطاع الإنترنت
        </p>
      </div>

      {/* Section: الاعتماد الرقمي يغذّي القلق */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        الاعتماد الرقمي يغذّي القلق
      </h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        يعكس القلق المتزايد من انقطاع الإنترنت العالمي وعيًا متناميًا بمخاطر
        الفضاء السيبراني والترابط الرقمي، وهو أمر تسارع منذ جائحة كوفيد-١٩. فقد
        شهدت السنوات الأخيرة عدة حوادث &quot;كادت أن تكون كارثية&quot;:
      </p>

      <ul className="mt-4 space-y-3 text-lg leading-relaxed text-slate-700">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>حادثة كراودسترايك (٢٠٢٤):</strong> تحديث خاطئ لبرمجية
            &quot;كراودسترايك&quot; أثر على ملايين الأنظمة العاملة بنظام ويندوز.
            قُدّرت تكلفة الحادثة بمليارات الدولارات.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>حادثة أمازون ويب سيرفيسز (أكتوبر ٢٠٢٥):</strong> خطأ في
            أنظمة AWS تسبب في انقطاع واسع للإنترنت أثر على أكثر من ١٠٠٠ شركة
            وملايين المستخدمين.
          </span>
        </li>
      </ul>

      {/* Economic impact callout */}
      <div className="my-8 rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-4">
        <p className="text-2xl font-bold text-red-700">٣.٥ تريليون دولار</p>
        <p className="mt-1 text-sm text-red-800">
          خسائر الاقتصاد العالمي المحتملة من هجوم إلكتروني عالمي كبير خلال ٥ سنوات
          (تقدير لويدز)
        </p>
      </div>

      <p className="text-lg leading-relaxed text-slate-700">
        قدّرت شركة &quot;لويدز&quot; أن الاقتصاد العالمي قد يتعرض لخسائر تصل إلى
        ٢.٤ تريليون دولار خلال خمس سنوات نتيجة عاصفة شمسية افتراضية، بينما قدّرت
        قبل ذلك بعامين أن هجومًا إلكترونيًا عالميًا كبيرًا قد يتسبب في خسائر تصل
        إلى ٣.٥ تريليون دولار خلال فترة مماثلة. كما رصدت شركة التقنية
        &quot;كلاودفلير&quot; أكثر من ١٨٠ حالة اضطراب في الإنترنت حول العالم خلال
        عام ٢٠٢٥، استمر بعضها لعدة أيام، ونتجت عن أسباب متنوعة شملت انقطاع
        الكهرباء، وتلف كابلات الاتصالات تحت البحر، وأعطالًا تقنية.
      </p>

      {/* Section: مخاطر الاحتكار التقني */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        مخاطر &quot;الاحتكار&quot; التقني
      </h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        يزداد خطر الانقطاع العالمي أيضًا مع تنامي الاعتماد على عدد محدود من شركات
        التقنية. وفي هذا السياق، يقول مايكل بروخ، الرئيس العالمي لخدمات استشارات
        إدارة المخاطر في &quot;أليانز كوميرشال&quot;، إن العالم يواجه نوعًا
        جديدًا من &quot;مخاطر الاحتكار&quot;، حيث تتركز البنية التحتية الرقمية
        الحيوية لدى عدد قليل من مزودي الخدمة، ما يعني أن نقطة فشل واحدة — سواء
        كانت تقنية أو سيبرانية — يمكن أن تُحدث تداعيات عالمية.
      </p>

      {/* Quote */}
      <blockquote className="my-8 rounded-lg border border-red-200 bg-gradient-to-l from-red-50 to-white px-6 py-5">
        <svg
          className="mb-3 h-6 w-6 text-red-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-lg leading-relaxed text-slate-700">
          العالم يواجه نوعًا جديدًا من &quot;مخاطر الاحتكار&quot;، حيث تتركز
          البنية التحتية الرقمية الحيوية لدى عدد قليل من مزودي الخدمة... بناء
          المرونة في مواجهة هذه المخاطر الشاملة يجب أن يكون أولوية لكل مؤسسة.
        </p>
        <footer className="mt-3 text-sm text-slate-500">
          — مايكل بروخ، الرئيس العالمي لخدمات استشارات إدارة المخاطر، أليانز
          كوميرشال
        </footer>
      </blockquote>

      <p className="text-lg leading-relaxed text-slate-700">
        ويشدد بروخ على أن بناء المرونة في مواجهة هذه المخاطر الشاملة يجب أن يكون
        أولوية لكل مؤسسة، في عالم أصبحت فيه نقطة الفشل الواحدة قادرة على إحداث
        تداعيات عالمية غير مسبوقة.
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
  );
}