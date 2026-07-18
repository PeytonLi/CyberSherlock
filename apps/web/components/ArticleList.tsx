export default function ArticleList() {
  const articles = [
    {
      title: "How AI Is Changing the Phishing Landscape",
      author: "CivAI",
      source: "civai.org",
      href: "/lessons/email-phishing",
      summary: "AI is making phishing attacks faster, cheaper, and hyper-personalized. Global phishing attacks more than doubled after ChatGPT's launch — and 91% of all cyber attacks now start with an email.",
      local: true,
    },
    {
      title: "How AI could enable critical infrastructure collapse",
      author: "Li-Lian Ang",
      source: "BlueDot Impact",
      href: "https://blog.bluedot.org/p/how-ai-could-enable-critical-infrastructure-collapse",
      content: `يعتمد مجتمعنا على بنية تحتية حيوية توفر المياه النظيفة، وتنقل الغذاء من المزارع إلى المتاجر، وتزود المنازل والمستشفيات بالكهرباء. وأي انقطاع مؤقت في هذه الخدمات قد يؤدي إلى خسائر بشرية أو اقتصادية جسيمة.

هجمات سيبرانية سابقة على البنية التحتية:
- هجوم الفدية على خط أنابيب كولونيال بايبلاين: أجبر الشركة على إيقاف إمدادات الوقود ودفع فدية قدرها 4.4 مليون دولار.
- فيروس نوت بيتيا (NotPetya): استغل ثغرات في أنظمة ويندوز غير المحدثة، وأدى إلى توقف شركة ميرسك (المسؤولة عن خمس الشحن العالمي) لمدة أسبوع، بخسائر تجاوزت 10 مليارات دولار.
- هجمات روسيا الإلكترونية على شبكة الكهرباء الأوكرانية تسببت في انقطاعات واسعة.
- هجوم فدية على مستشفى ألماني أجبره على رفض استقبال حالات الطوارئ، ما أدى إلى وفاة مريض بسبب تأخر العلاج.

لماذا الهجمات السيبرانية؟
الهجمات المادية (كتفجير محطة طاقة) واضحة وسهلة النسب لمصدرها، وتعد إعلان حرب مباشرا. أما الهجمات السيبرانية فتوفر ثلاث مزايا:
- إمكانية الإنكار: يصعب إثبات الجهة المسؤولة.
- تكلفة منخفضة جدا: لا تحتاج سوى حاسوب واتصال بالإنترنت ووقت.
- القدرة على التحكم بحجم الضرر: من تعطيل مؤقت إلى دمار دائم.

لماذا لا تنهار البنية التحتية يوميا؟
لأن اختراق البنية التحتية الحيوية صعب جدا بسبب طبقات الحماية المتعددة (تقسيم الشبكات، ضوابط الوصول، أنظمة أمان تفشل بأمان). حتى الدول الكبرى تحتاج سنوات لتنفيذ هجوم ناجح؛ فبرمجية تريتون الخبيثة استغرق تطويرها سنتين، والهجوم الروسي على الشبكة الأوكرانية استغرق أكثر من ستة أشهر من التحضير.

الذكاء الاصطناعي يقلص الحاجة إلى الخبرة
تعتمد أغلب البنية التحتية على برمجيات مفتوحة المصدر (97% من التطبيقات)، و81% منها تحتوي ثغرات أمنية خطيرة. ومعظم هذه الثغرات لا تصلح لأن المصادر المفتوحة يديرها عدد قليل من المتطوعين (91% من المشاريع لم تحدث منذ أكثر من سنتين).

كان تحويل هذه الثغرات إلى سلاح فعلي أمرا صعبا يتطلب فهما عميقا للنظام المستهدف. لكن الذكاء الاصطناعي أصبح قادرا على:
- أتمتة عملية اكتشاف الثغرات عبر ملايين الأسطر البرمجية.
- تطوير رسائل تصيد إلكتروني (spearphishing) مخصصة وشديدة الإقناع باستخدام بيانات مسروقة عن الموظفين المستهدفين.
- تسميم بيانات تدريب النماذج بعدد قليل من الوثائق فقط (250 وثيقة)، ما قد يمنح المهاجمين أبوابا خلفية داخل أنظمة الذكاء الاصطناعي التي تستخدمها الجهات المشغلة.

الذكاء الاصطناعي يقلص الحاجة إلى الوقت
العمليات السيبرانية التقليدية تستغرق سنوات للتخطيط، ما يمنح المدافعين فرصة لاكتشاف الهجوم قبل وقوع الضرر. لكن الذكاء الاصطناعي يختصر هذه العمليات من سنوات إلى أشهر: فقد استخدمت جهات صينية نموذج Claude لأتمتة هجوم استمر 9 أشهر على البنية التحتية الفيتنامية، أضر بالاتصالات وقواعد البيانات الحكومية وأنظمة الزراعة.

كما أظهر باحثون من Anthropic وجامعة كارنيغي ميلون، باستخدام إطار عمل يدعى إنكالمو (Incalmo)، إمكانية اختراق 50% من شبكات الشركات (25-50 جهازا) بتكلفة أقل من دولار واحد وخلال 12 إلى 70 دقيقة فقط. كذلك طور فريق من جامعة نيويورك برمجية فدية ذاتية التطور بتكلفة 70 سنتا فقط باستخدام نماذج مفتوحة الوزن وأجهزة عادية.

الخلاصة
التوازن الدقيق بين الهجوم والدفاع السيبراني بدأ يميل لصالح المهاجمين. وبالنسبة للبنية التحتية الحيوية، حيث تحسب الدقائق وتودي الأخطاء بالأرواح، لم يعد هذا سؤالا نظريا، بل سؤالا حقيقيا: هل يمكن لمشغلي الشبكات الكهربائية والمستشفيات ومحطات معالجة المياه الدفاع عن أنفسهم ضد هجمات تتحرك أسرع مما يستطيع البشر التفاعل معه؟`,
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Articles</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Reading List</h1>
      <p className="mt-3 text-slate-600">Key readings on cybersecurity, AI risk, and critical infrastructure.</p>

      <div className="mt-10 space-y-12">
        {articles.map((article, i) => (
          <article key={i} className="border-b border-slate-200 pb-10 last:border-0">
            <h2 className="text-xl font-bold text-slate-900">{article.title}</h2>
            <p className="mt-1 text-sm text-slate-500">
              By {article.author} &middot;{" "}
              {article.local ? (
                <span className="text-blue-600">{article.source}</span>
              ) : (
                <a href={article.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {article.source}
                </a>
              )}
            </p>
            {article.content ? (
              <div className="mt-6 text-right leading-relaxed text-slate-700 space-y-3 whitespace-pre-line">
                {article.content}
              </div>
            ) : (
              <>
                <p className="mt-4 text-slate-700 leading-relaxed">{article.summary}</p>
                <a
                  href={article.href}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Read full article &rarr;
                </a>
              </>
            )}
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-500">
        <p className="font-medium text-slate-700 mb-1">More articles coming soon</p>
        <p>Additional readings on AI governance, biosecurity, and defense-in-depth strategies will be added here.</p>
      </div>
    </div>
  );
}
