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
      title: "مستقبل التصيّد الاحتيالي — CyberSherlock",
      description: "كيف يزيد الذكاء الاصطناعي من حجم وتعقيد هجمات التصيّد الاحتيالي عبر البريد الإلكتروني.",
    };
  }
  return {
    title: "The Future of Phishing — CyberSherlock",
    description: "How AI is increasing the scale and sophistication of email phishing while driving down the cost of attacks.",
  };
}

function PhishingEn({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-16">
      <nav className="mb-8 text-sm text-slate-500">
        <Link href={`/${locale}`} className="hover:text-red-600 transition-colors">
          CyberSherlock
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">The Future of Phishing</span>
      </nav>

      <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
        Cybersecurity · Lesson 2
      </p>

      <h1 className="mt-3 text-2xl sm:text-4xl font-bold leading-tight tracking-tight">
        The Future of Phishing
      </h1>

      <p className="mt-3 text-sm text-slate-500">
        {dict.lesson.adaptedFrom}{" "}
        <a
          href="https://civai.org/p/email-phishing?utm_source=bluedot-impact"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 underline hover:text-red-800"
        >
          civai.org
        </a>
      </p>

      <p className="mt-8 text-lg leading-relaxed text-slate-700">
        AI is increasing the scale and sophistication of email phishing attacks while dramatically lowering the cost of carrying them out.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Email phishing—sending someone a deceptive email that tricks them into sharing sensitive information—is as old as the internet itself. Historically, this looked like either generic messages sent en masse, or highly personalized messages tailored to a small number of VIP targets. But due to advances in AI, creating targeted phishing attacks is easier, cheaper, and quicker than ever—meaning cybercriminals can treat everyone like a VIP.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Since AI systems can trawl through huge amounts of publicly available information, they can near-instantly learn who you are, what you&apos;re interested in, and what psychological vulnerabilities could be exploited. Using this information, they can then draft highly personalized emails that would appear authentic and trustworthy to an unsuspecting eye. This makes it much harder to tell what is legitimate and what is dangerous.
      </p>

      <figure className="my-10">
        <img
          src="/phishing-1.png"
          alt="Illustration: how AI personalizes phishing messages by target category"
          className="w-full rounded-xl border border-slate-200 shadow-sm"
        />
        <figcaption className="mt-3 text-center text-sm text-slate-500">
          AI personalization of phishing strategies by target category
        </figcaption>
      </figure>

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">
        Notice how the generated emails vary
      </h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Notice how the generated emails vary not just in their content but in the strategy used to hook you. The fake name of the sender, as well as the tone and style of the email, vary per target. For example:
      </p>

      <ul className="mt-4 space-y-3 text-lg leading-relaxed text-slate-700">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>Emails to a famous athlete</strong> may highlight a brand partnership relevant to their region.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>Emails to a professor</strong> may contain an invitation to a niche conference in their field.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>Emails to a business owner</strong> may present a salient partnership opportunity.
          </span>
        </li>
      </ul>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Also notice that each email ends with an authentic-seeming link to the sender&apos;s LinkedIn profile. Clicking on this link takes you to a fake sign-in page inviting you to enter your LinkedIn password, which attackers will be able to see.
      </p>

      <figure className="my-10">
        <img
          src="/phishing-2.png"
          alt="Chart: global surge in phishing attacks after ChatGPT's launch"
          className="w-full rounded-xl border border-slate-200 shadow-sm"
        />
        <figcaption className="mt-3 text-center text-sm text-slate-500">
          Global phishing attacks more than doubled after ChatGPT&apos;s launch
        </figcaption>
      </figure>

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">Phishing at Scale</h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Phishing is by far the most common type of cybercrime, according to the FBI&apos;s Internet Crime Complaint Center. While it&apos;s been on the rise for years, data from Statista shows that, across the globe, the number of phishing attacks more than doubled in the year following ChatGPT&apos;s release. Data also suggests that 91% of all cyberattacks start with email.
      </p>

      <div className="my-8 rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-4">
        <p className="text-2xl font-bold text-red-700">91%</p>
        <p className="mt-1 text-sm text-red-800">of all cyberattacks start with email</p>
      </div>

      <p className="text-lg leading-relaxed text-slate-700">
        AI is increasing not only the quality of cyber-attacks, but also the number of them. This will lead to a significant amplification in cybersecurity losses. Recent research has shown that it is already possible to fully automate the entire phishing process, and that today&apos;s best AI models perform on par with human experts at this task.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">What Lies Ahead</h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Billions of people open emails every day. Previously, most of them were not worth phishing because the effort for criminals outweighed the payoff they could gain. But now, sophisticated scams can be crafted in minutes rather than hours, which changes the calculus and puts everyone at risk.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        There is some evidence that AI can also be used to defend against phishing by proactively identifying ill-intent; but with AI systems improving monthly, attacks remain easier than defense.
      </p>

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

function PhishingAr({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-16" dir="rtl" lang="ar">
      <nav className="mb-8 text-sm text-slate-500" dir="ltr">
        <Link href={`/${locale}`} className="hover:text-red-600 transition-colors">
          CyberSherlock
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">مستقبل التصيّد الاحتيالي</span>
      </nav>

      <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
        الأمن السيبراني · الدرس ٢
      </p>

      <h1 className="mt-3 text-2xl sm:text-4xl font-bold leading-tight tracking-tight">
        مستقبل التصيّد الاحتيالي
      </h1>

      <p className="mt-3 text-sm text-slate-500">
        {dict.lesson.adaptedFrom}{" "}
        <a
          href="https://civai.org/p/email-phishing?utm_source=bluedot-impact"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 underline hover:text-red-800"
        >
          civai.org
        </a>
      </p>

      <p className="mt-8 text-lg leading-relaxed text-slate-700">
        يعمل الذكاء الاصطناعي على زيادة حجم وتعقيد هجمات التصيّد الاحتيالي عبر البريد الإلكتروني، بينما يخفّض بشكل كبير تكلفة تنفيذها.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        التصيّد عبر البريد الإلكتروني — وهو إرسال رسالة مخادعة لخداع الشخص ودفعه لمشاركة معلومات حساسة — قديم قِدَم الإنترنت نفسه. تقليديًا، كان هذا النوع من الهجمات يأخذ شكلين: إما رسائل عامة تُرسَل بأعداد ضخمة، أو رسائل شديدة التخصيص تستهدف عددًا صغيرًا من الأشخاص المهمين (VIP). لكن بفضل تطور الذكاء الاصطناعي، أصبح إنشاء هجمات تصيّد مستهدفة أسهل وأرخص وأسرع من أي وقت مضى — ما يعني أن المجرمين الإلكترونيين يمكنهم معاملة كل شخص وكأنه هدف مهم.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        بما أن أنظمة الذكاء الاصطناعي قادرة على مسح كميات هائلة من المعلومات المتاحة للعامة، فبإمكانها أن تتعرّف بسرعة كبيرة على هوية الشخص، واهتماماته، ونقاط الضعف النفسية التي يمكن استغلالها. وباستخدام هذه المعلومات، يمكنها صياغة رسائل بريد إلكتروني شديدة التخصيص تبدو موثوقة وحقيقية لعين غير متيقظة، ما يجعل التمييز بين الرسالة المشروعة والخطيرة أصعب بكثير.
      </p>

      <figure className="my-10">
        <img
          src="/phishing-1.png"
          alt="رسم توضيحي: كيف يخصص الذكاء الاصطناعي رسائل التصيّد حسب الفئة المستهدفة"
          className="w-full rounded-xl border border-slate-200 shadow-sm"
        />
        <figcaption className="mt-3 text-center text-sm text-slate-500">
          تخصيص الذكاء الاصطناعي لاستراتيجيات التصيّد حسب الفئة المستهدفة
        </figcaption>
      </figure>

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">لاحظ كيف تتفاوت الرسائل المولَّدة</h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        لاحظ كيف لا تختلف الرسائل المُولَّدة في محتواها فقط، بل أيضًا في الاستراتيجية المستخدمة لجذب الضحية. فاسم المرسل المزيّف، ونبرة الرسالة وأسلوبها، تتغيّر بحسب الهدف. على سبيل المثال:
      </p>

      <ul className="mt-4 space-y-3 text-lg leading-relaxed text-slate-700">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>الرسائل الموجهة لرياضي مشهور</strong> قد تُبرز شراكة تجارية ذات صلة بمنطقته.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>الرسائل الموجهة لأستاذ جامعي</strong> قد تتضمن دعوة لمؤتمر متخصص في مجاله.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>الرسائل الموجهة لصاحب عمل</strong> قد تعرض فرصة شراكة تبدو ذات قيمة.
          </span>
        </li>
      </ul>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        كما يُلاحظ أن كل رسالة تنتهي برابط يبدو حقيقيًا لملف &quot;لينكدإن&quot; الخاص بالمرسل. لكن الضغط على هذا الرابط يقود الضحية إلى صفحة تسجيل دخول مزيّفة تطلب منه إدخال كلمة مرور حسابه على لينكدإن، والتي يستطيع المهاجمون رؤيتها والاستيلاء عليها.
      </p>

      <figure className="my-10">
        <img
          src="/phishing-2.png"
          alt="رسم بياني: ارتفاع هجمات التصيّد عالميًا بعد إطلاق ChatGPT"
          className="w-full rounded-xl border border-slate-200 shadow-sm"
        />
        <figcaption className="mt-3 text-center text-sm text-slate-500">
          تضاعف هجمات التصيّد عالمياً بعد إطلاق ChatGPT
        </figcaption>
      </figure>

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">التصيّد الاحتيالي على نطاق واسع</h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        يُعد التصيّد الاحتيالي، وفقًا لمركز شكاوى جرائم الإنترنت التابع لمكتب التحقيقات الفيدرالي الأمريكي (FBI)، النوع الأكثر شيوعًا من الجرائم الإلكترونية على الإطلاق. ورغم أنه في تصاعد مستمر منذ سنوات، تشير بيانات موقع &quot;ستاتيستا&quot; (Statista) إلى أن عدد هجمات التصيّد على مستوى العالم تضاعف أكثر من مرة خلال العام الذي تلا إطلاق &quot;تشات جي بي تي&quot;. كما تشير البيانات إلى أن 91% من جميع الهجمات الإلكترونية تبدأ عبر البريد الإلكتروني.
      </p>

      <div className="my-8 rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-4">
        <p className="text-2xl font-bold text-red-700">91%</p>
        <p className="mt-1 text-sm text-red-800">من جميع الهجمات الإلكترونية تبدأ عبر البريد الإلكتروني</p>
      </div>

      <p className="text-lg leading-relaxed text-slate-700">
        لا يقتصر أثر الذكاء الاصطناعي على تحسين جودة الهجمات الإلكترونية فحسب، بل يزيد أيضًا من عددها، ما سيؤدي إلى تضخم كبير في الخسائر المتعلقة بالأمن السيبراني. وقد أظهرت أبحاث حديثة أن من الممكن اليوم أتمتة عملية التصيّد الاحتيالي بالكامل، وأن أفضل نماذج الذكاء الاصطناعي الحالية تُضاهي أداء الخبراء البشريين في هذه المهمة.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">ما الذي ينتظرنا</h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        يفتح مليارات الأشخاص رسائل بريدهم الإلكتروني يوميًا. في السابق، لم يكن معظمهم أهدافًا &quot;مجدية&quot; للتصيّد لأن الجهد المطلوب من المجرمين كان يفوق العائد المحتمل. لكن الآن، أصبح بالإمكان صياغة عمليات احتيال معقدة خلال دقائق بدلًا من ساعات، وهو ما يغيّر هذه المعادلة ويجعل الجميع عرضة للخطر.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        هناك بعض الأدلة على أن الذكاء الاصطناعي يمكن استخدامه أيضًا للدفاع ضد التصيّد الاحتيالي، من خلال الكشف الاستباقي عن النوايا الخبيثة؛ إلا أنه ومع تطور أنظمة الذكاء الاصطناعي شهريًا، لا تزال عمليات الهجوم أسهل بكثير من عمليات الدفاع.
      </p>

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

export default async function EmailPhishingLesson({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return (
    <>
      {locale === "ar" ? <PhishingAr locale={locale} /> : <PhishingEn locale={locale} />}
      <MapSection topic="email-phishing" />
    </>
  );
}
