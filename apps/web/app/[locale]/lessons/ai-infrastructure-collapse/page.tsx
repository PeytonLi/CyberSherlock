import type { Metadata } from "next";
import Link from "next/link";
import MapSection from "@/components/MapSection";
import { getDictionary } from "@/lib/dictionary";
import { isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  if (raw === "ar") {
    return {
      title: "كيف يمكن للذكاء الاصطناعي أن يتسبب في انهيار البنية التحتية الحيوية — CyberSherlock",
      description: "كيف يقلّص الذكاء الاصطناعي الحاجة إلى الخبرة والوقت في الهجمات السيبرانية على البنية التحتية الحيوية.",
    };
  }
  return {
    title: "How AI could enable critical infrastructure collapse — CyberSherlock",
    description: "How AI lowers the expertise and time barriers to cyberattacks on critical infrastructure.",
  };
}

function Placeholder({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="my-10 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
      <p className="text-sm font-medium text-slate-600">{title}</p>
      <p className="mt-1 text-xs text-slate-400">{hint}</p>
    </div>
  );
}

function InfraEn({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-16">
      <nav className="mb-8 text-sm text-slate-500">
        <Link href={`/${locale}`} className="hover:text-red-600 transition-colors">
          CyberSherlock
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">How AI could enable critical infrastructure collapse</span>
      </nav>

      <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
        Cybersecurity · Analysis · BlueDot Impact
      </p>

      <h1 className="mt-3 text-2xl sm:text-4xl font-bold leading-tight tracking-tight">
        How AI could enable critical infrastructure collapse
      </h1>

      <p className="mt-3 text-sm text-slate-500">
        {dict.lesson.adaptedFrom}{" "}
        <a
          href="https://blog.bluedot.org/p/how-ai-could-enable-critical-infrastructure-collapse?utm_source=bluedot-impact"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 underline hover:text-red-800"
        >
          BlueDot Impact
        </a>
        {" "}· {dict.lesson.authorBy}: Li-Lian Ang
      </p>

      <p className="mt-8 text-lg leading-relaxed text-slate-700">
        Our society rests on critical infrastructure providing clean water for drinking, transport links that bring food from farm to store and electricity to power homes and hospitals. Even temporary loss of access could lead to loss of life or severe economic damage.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        Past cyberattacks on infrastructure
      </h2>

      <div className="mt-6 space-y-5">
        {[
          { n: "1", t: "Colonial Pipeline ransomware", b: "Forced the company to shut down fuel supply lines and pay a $4.4 million ransom." },
          { n: "2", t: "NotPetya", b: "Exploited unpatched Windows vulnerabilities and halted Maersk (about 1/5 of world shipping) for a week, with >$10 billion in damages." },
          { n: "3", t: "Russia's attacks on Ukraine's power grid", b: "Russian cyberattacks on Ukraine's electrical grid caused widespread blackouts." },
          { n: "4", t: "Ransomware on a German hospital", b: "Forced the hospital to turn away emergency patients; one patient died from treatment delay." },
        ].map((item) => (
          <div key={item.n} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                {item.n}
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{item.t}</h3>
            </div>
            <p className="mt-3 text-base leading-relaxed text-slate-700">{item.b}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">Why cyberattacks?</h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Physical attacks (like bombing a power station) are clear and easy to attribute — an unambiguous declaration of war. Cyberattacks offer three advantages:
      </p>
      <ul className="mt-4 space-y-3 text-lg leading-relaxed text-slate-700">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span><strong>Deniability:</strong> attribution is hard and slow.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span><strong>Very low cost:</strong> laptops, internet access, and time.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span><strong>Escalation control:</strong> from temporary disruption to permanent damage.</span>
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        Why isn&apos;t critical infrastructure collapsing daily?
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Because attacks on critical infrastructure are hard. Layers of defence — network segmentation, access controls, fail-safe systems — mean even nation-states take years. Triton malware took two years; Ukraine&apos;s grid attack took more than six months of preparation.
      </p>

      <Placeholder
        title="[Image 1] Illustration: layers of defence in critical infrastructure"
        hint="Placeholder for a diagram of multi-layer security and potential weak points"
      />

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        AI lowers the expertise barrier
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Most critical infrastructure runs on open-source software (97% of applications), and 81% have critical vulnerabilities. Most go unpatched because open-source projects are maintained by a handful of volunteers (91% of codebases have had no updates in over two years).
      </p>
      <div className="my-8 rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-4">
        <p className="text-2xl font-bold text-red-700">97%</p>
        <p className="mt-1 text-sm text-red-800">
          of applications rely on open-source software — and 81% have critical security vulnerabilities
        </p>
      </div>
      <p className="text-lg leading-relaxed text-slate-700">
        Weaponising those flaws used to require deep target knowledge. AI can now:
      </p>
      <ul className="mt-4 space-y-3 text-lg leading-relaxed text-slate-700">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span><strong>Automate vulnerability discovery</strong> across millions of lines of code.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span><strong>Craft hyper-personalised spearphishing</strong> using scraped data on target employees.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span><strong>Poison training data</strong> with as few as 250 documents, creating backdoors in AI tools operators may deploy.</span>
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">AI lowers the time barrier</h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Traditional cyberoperations take years to plan, giving defenders a chance to respond. AI shortens full operations from years to months: Chinese actors used Claude to automate a 9-month attack on Vietnam&apos;s infrastructure, damaging telecoms, government databases, and agricultural systems.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Researchers from Anthropic and Carnegie Mellon, using a framework called Incalmo, compromised 50% of enterprise networks (25–50 hosts) for less than $1 in 12–70 minutes. An NYU team built polymorphic ransomware for $0.70 using open-weight models and commodity hardware.
      </p>
      <div className="my-8 rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-4">
        <p className="text-2xl font-bold text-red-700">$0.70</p>
        <p className="mt-1 text-sm text-red-800">
          Cost to develop polymorphic ransomware with open-weight AI models
        </p>
      </div>
      <p className="text-lg leading-relaxed text-slate-700">
        The faster an attack executes, the less time operators have to react — especially dangerous for grids and hospitals. That may push reliance on defensive AI, which brings its own risks if those systems can be poisoned or disabled.
      </p>

      <Placeholder
        title="[Image 2] Chart: shrinking cyberattack timelines with AI"
        hint="Placeholder for a chart comparing traditional vs AI-accelerated attack timelines"
      />

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        AI&apos;s cyber offence is improving rapidly
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Frontier models such as Claude 4.5 Sonnet and Gemini 2.5 Pro now trigger elevated security monitoring for offensive cyber tasks. Current models cannot yet run full cyberoperations autonomously from reconnaissance to attack — but the gap is narrowing, especially with scaffolding that chains models to tools and boosts offensive capability before the next model release.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">Conclusion</h2>
      <div className="my-8 rounded-lg border border-red-200 bg-gradient-to-r from-red-50 to-white px-6 py-5">
        <p className="text-lg leading-relaxed text-slate-700">
          The precarious balance between cyber offence and defence is tilting. For critical infrastructure, where minutes matter and failures kill, this isn&apos;t an abstract security problem. It&apos;s a question of whether grid operators, hospital systems, and water treatment plants can defend against attacks that move faster than humans can react.
        </p>
      </div>

      <div className="mt-16 border-t border-slate-200 pt-8">
        <Link
          href={`/${locale}/curriculum`}
          className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
        >
          ← {dict.lesson.backToList}
        </Link>
      </div>
    </article>
  );
}

function InfraAr({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-16" dir="rtl" lang="ar">
      <nav className="mb-8 text-sm text-slate-500" dir="ltr">
        <Link href={`/${locale}`} className="hover:text-red-600 transition-colors">
          CyberSherlock
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">كيف يمكن للذكاء الاصطناعي أن ينهار البنية التحتية</span>
      </nav>

      <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
        الأمن السيبراني · مقال تحليلي · BlueDot Impact
      </p>

      <h1 className="mt-3 text-2xl sm:text-4xl font-bold leading-tight tracking-tight">
        كيف يمكن للذكاء الاصطناعي أن يتسبب في انهيار البنية التحتية الحيوية
      </h1>

      <p className="mt-3 text-sm text-slate-500">
        {dict.lesson.adaptedFrom}{" "}
        <a
          href="https://blog.bluedot.org/p/how-ai-could-enable-critical-infrastructure-collapse?utm_source=bluedot-impact"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 underline hover:text-red-800"
        >
          BlueDot Impact
        </a>
        {" "}· {dict.lesson.authorBy}: لي ليان آنغ (Li-Lian Ang)
      </p>

      <p className="mt-8 text-lg leading-relaxed text-slate-700">
        يعتمد مجتمعنا على بنية تحتية حيوية توفر المياه النظيفة، وتنقل الغذاء من المزارع إلى المتاجر، وتزوّد المنازل والمستشفيات بالكهرباء. وأي انقطاع مؤقت في هذه الخدمات قد يؤدي إلى خسائر بشرية أو اقتصادية جسيمة.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">هجمات سيبرانية سابقة على البنية التحتية</h2>
      <div className="mt-6 space-y-5">
        {[
          { n: "١", t: "هجوم الفدية على كولونيال بايبلاين", b: "أجبر الشركة على إيقاف إمدادات الوقود ودفع فدية قدرها ٤.٤ مليون دولار." },
          { n: "٢", t: "فيروس نوت بيتيا (NotPetya)", b: "استغل ثغرات في أنظمة ويندوز غير محدَّثة، وأدى إلى توقف شركة \"ميرسك\" (المسؤولة عن خُمس الشحن العالمي) لمدة أسبوع، بخسائر تجاوزت ١٠ مليارات دولار." },
          { n: "٣", t: "هجمات روسيا على شبكة الكهرباء الأوكرانية", b: "هجمات إلكترونية روسية على شبكة الكهرباء الأوكرانية تسببت في انقطاعات واسعة للكهرباء." },
          { n: "٤", t: "هجوم فدية على مستشفى ألماني", b: "أجبر المستشفى على رفض استقبال حالات الطوارئ، ما أدى إلى وفاة مريض بسبب تأخر العلاج." },
        ].map((item) => (
          <div key={item.n} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                {item.n}
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{item.t}</h3>
            </div>
            <p className="mt-3 text-base leading-relaxed text-slate-700">{item.b}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">لماذا الهجمات السيبرانية؟</h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        الهجمات المادية (كتفجير محطة طاقة) واضحة وسهلة النسب لمصدرها، وتُعد إعلان حرب مباشرًا. أما الهجمات السيبرانية فتوفر ثلاث مزايا:
      </p>
      <ul className="mt-4 space-y-3 text-lg leading-relaxed text-slate-700">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span><strong>إمكانية الإنكار:</strong> يصعب إثبات الجهة المسؤولة عن الهجوم.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span><strong>تكلفة منخفضة جدًا:</strong> لا تحتاج سوى حاسوب واتصال بالإنترنت ووقت.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span><strong>القدرة على التحكم بحجم الضرر:</strong> من تعطيل مؤقت إلى دمار دائم.</span>
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">لماذا لا تنهار البنية التحتية يوميًا؟</h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        لأن اختراق البنية التحتية الحيوية صعب جدًا بسبب طبقات الحماية المتعددة (تقسيم الشبكات، ضوابط الوصول، أنظمة أمان تفشل بأمان). حتى الدول الكبرى تحتاج سنوات لتنفيذ هجوم ناجح؛ فبرمجية &quot;ترايتون&quot; الخبيثة استغرق تطويرها سنتين، والهجوم الروسي على الشبكة الأوكرانية استغرق أكثر من ستة أشهر من التحضير.
      </p>

      <Placeholder
        title="[الصورة ١] رسم توضيحي: طبقات الحماية في البنية التحتية الحيوية"
        hint="مكان مخصص لإدراج رسم يُظهر طبقات الأمان المتعددة ونقاط الضعف المحتملة"
      />

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">الذكاء الاصطناعي يقلّص الحاجة إلى الخبرة</h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        تعتمد أغلب البنية التحتية على برمجيات مفتوحة المصدر (٩٧٪ من التطبيقات)، و٨١٪ منها تحتوي ثغرات أمنية خطيرة. ومعظم هذه الثغرات لا تُصلح لأن المصادر المفتوحة يديرها عدد قليل من المتطوعين (٩١٪ من المشاريع لم تُحدَّث منذ أكثر من سنتين).
      </p>
      <div className="my-8 rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-4">
        <p className="text-2xl font-bold text-red-700">٩٧٪</p>
        <p className="mt-1 text-sm text-red-800">
          من التطبيقات تعتمد على برمجيات مفتوحة المصدر — و٨١٪ منها تحتوي ثغرات أمنية خطيرة
        </p>
      </div>
      <p className="text-lg leading-relaxed text-slate-700">
        كان تحويل هذه الثغرات إلى &quot;سلاح&quot; فعلي أمرًا صعبًا يتطلب فهمًا عميقًا للنظام المستهدف. لكن الذكاء الاصطناعي أصبح قادرًا على:
      </p>
      <ul className="mt-4 space-y-3 text-lg leading-relaxed text-slate-700">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span><strong>أتمتة عملية اكتشاف الثغرات</strong> عبر ملايين الأسطر البرمجية.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span><strong>تطوير رسائل تصيّد إلكتروني (spearphishing)</strong> مخصصة وشديدة الإقناع باستخدام بيانات مسروقة عن الموظفين المستهدفين.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span><strong>تسميم بيانات تدريب النماذج</strong> بعدد قليل من الوثائق فقط (٢٥٠ وثيقة)، ما قد يمنح المهاجمين أبوابًا خلفية داخل أنظمة الذكاء الاصطناعي التي تستخدمها الجهات المشغِّلة للبنية التحتية.</span>
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">الذكاء الاصطناعي يقلّص الحاجة إلى الوقت</h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        العمليات السيبرانية التقليدية تستغرق سنوات للتخطيط، ما يمنح المدافعين فرصة لاكتشاف الهجوم قبل وقوع الضرر. لكن الذكاء الاصطناعي يختصر هذه العمليات من سنوات إلى أشهر: فقد استخدمت جهات صينية نموذج Claude لأتمتة هجوم استمر ٩ أشهر على البنية التحتية الفيتنامية، أضرّ بالاتصالات وقواعد البيانات الحكومية وأنظمة الزراعة.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        كما أظهر باحثون من Anthropic وجامعة كارنيغي ميلون، باستخدام إطار عمل يُدعى &quot;إنكالمو&quot; (Incalmo)، إمكانية اختراق ٥٠٪ من شبكات الشركات (٢٥-٥٠ جهازًا) بتكلفة أقل من دولار واحد وخلال ١٢ إلى ٧٠ دقيقة فقط. كذلك طوّر فريق من جامعة نيويورك برمجية فدية ذاتية التطور بتكلفة ٧٠ سنتًا فقط باستخدام نماذج مفتوحة الوزن وأجهزة عادية.
      </p>
      <div className="my-8 rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-4">
        <p className="text-2xl font-bold text-red-700">٧٠ سنتًا</p>
        <p className="mt-1 text-sm text-red-800">
          تكلفة تطوير برمجية فدية ذاتية التطور باستخدام نماذج ذكاء اصطناعي مفتوحة الوزن
        </p>
      </div>
      <p className="text-lg leading-relaxed text-slate-700">
        كلما تسارع تنفيذ الهجوم، قلّ الوقت المتاح لأنظمة الأمان للتدخل أو لمشغلي البنية التحتية لاتخاذ القرار الصحيح — وهو أمر بالغ الخطورة في حالات مثل شبكات الكهرباء أو المستشفيات حيث قد لا يكون هناك سوى ثوانٍ للتصرف. وهذا قد يدفع البشر للاعتماد أكثر فأكثر على أنظمة ذكاء اصطناعي دفاعية لاتخاذ قرارات حاسمة — وهو اعتماد يحمل مخاطره الخاصة، إذ يمكن لهجمات &quot;تسميم البيانات&quot; أن تحوّل هذه الأنظمة الدفاعية نفسها إلى نقطة ضعف يستغلها المهاجم.
      </p>

      <Placeholder
        title="[الصورة ٢] رسم بياني: تقلّص زمن الهجمات السيبرانية بفعل الذكاء الاصطناعي"
        hint="مكان مخصص لإدراج رسم بياني يُظهر مقارنة بين زمن الهجمات التقليدية والهجمات المدعومة بالذكاء الاصطناعي"
      />

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">قدرات الذكاء الاصطناعي الهجومية تتحسن بسرعة</h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        لأول مرة، تُثير نماذج متقدمة مثل Claude 4.5 Sonnet وGemini 2.5 Pro قلقًا أمنيًا موثقًا رسميًا بشأن قدراتها في المهام الهجومية السيبرانية. ورغم أن النماذج الحالية لا تستطيع بعد تنفيذ عملية سيبرانية كاملة بشكل مستقل من الاستطلاع إلى الهجوم، فإن الفجوة تتقلص بسرعة، خاصة مع تقنيات مثل &quot;السقالات البرمجية&quot; (scaffolding) التي تربط النماذج بأدوات خارجية وترفع من قدراتها الهجومية بشكل كبير حتى قبل صدور إصدارات أحدث.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">الخلاصة</h2>
      <div className="my-8 rounded-lg border border-red-200 bg-gradient-to-l from-red-50 to-white px-6 py-5">
        <p className="text-lg leading-relaxed text-slate-700">
          التوازن الدقيق بين الهجوم والدفاع السيبراني بدأ يميل لصالح المهاجمين. وبالنسبة للبنية التحتية الحيوية، حيث تُحسب الدقائق وتُودي الأخطاء بالأرواح، لم يعد هذا سؤالًا نظريًا، بل سؤالًا حقيقيًا: هل يمكن لمشغلي الشبكات الكهربائية والمستشفيات ومحطات معالجة المياه الدفاع عن أنفسهم ضد هجمات تتحرك أسرع مما يستطيع البشر التفاعل معه؟
        </p>
      </div>

      <div className="mt-16 border-t border-slate-200 pt-8">
        <Link
          href={`/${locale}/curriculum`}
          className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
        >
          {dict.lesson.backToList}
        </Link>
      </div>
    </article>
  );
}

export default async function AIInfrastructureCollapseLesson({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return (
    <>
      {locale === "ar" ? <InfraAr locale={locale} /> : <InfraEn locale={locale} />}
      <MapSection topic="critical-infrastructure" />
    </>
  );
}
