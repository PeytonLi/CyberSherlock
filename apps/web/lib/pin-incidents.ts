export type PinIncident = {
  id: string;
  title: string;
  description: string;
  source: string;
  sourceDate: string;
  lat: number;
  lng: number;
  country: string;
  audioUrl?: string;
};

export const INCIDENTS_BY_TOPIC: Record<string, PinIncident[]> = {
  "critical-infrastructure": [
  { id: "ci-1", title: "هجوم بلاك إنرجي على شبكة الكهرباء الأوكرانية", country: "Ukraine", description: "برمجية بلاك إنرجي الخبيثة عطلت ثلاث شركات مرافق أوكرانية وأغرقت مئات الآلاف في الظلام لمدة 6 ساعات.", source: "أليانز كوميرشال", sourceDate: "ديسمبر ٢٠١٥", lat: 48.38, lng: 31.17 },
  { id: "ci-2", title: "هجوم فدية كولونيال بايبلاين", country: "United States of America", description: "مجموعة دارك سايد أوقفت أكبر خط أنابيب وقود أمريكي بهجوم فدية وتسبب في نقص وقود وموجة شراء ذعري.", source: "بي بي سي", sourceDate: "مايو ٢٠٢١", lat: 35.22, lng: -80.84 },
  { id: "ci-3", title: "محاولة تسميم مياه أولدسمار", country: "United States of America", description: "مخترق زاد مستويات هيدروكسيد الصوديوم في محطة معالجة مياه بفلوريدا. كاد أن يتسبب بكارثة لولا انتباه أحد العمال.", source: "رويترز", sourceDate: "فبراير ٢٠٢١", lat: 28.03, lng: -82.67 },
  { id: "ci-4", title: "هجوم فدية جاغوار لاند روفر", country: "United Kingdom", description: "هجوم فدية أوقف إنتاج السيارات الفاخرة وأثر على أكثر من ٥٠٠٠ شركة في سلسلة التوريد. قدرت التكلفة بـ ٢٫١ مليار جنيه إسترليني.", source: "فاينانشال تايمز", sourceDate: "أكتوبر ٢٠٢٥", lat: 52.49, lng: -1.89 },
  { id: "ci-5", title: "أول وفاة مرتبطة بهجمات الفدية", country: "Germany", description: "هجوم فدية على مستشفى جامعة دوسلدورف أجبر سيارات الإسعاف على التحويل لمستشفى آخر وتسبب في أول حالة وفاة معروفة مرتبطة بهجمات الفدية.", source: "زدينيت", sourceDate: "سبتمبر ٢٠٢٠", lat: 51.23, lng: 6.79 },
  { id: "ci-6", title: "هجوم سولارويندز على سلسلة التوريد", country: "United States of America", description: "جهاز الاستخبارات الروسي SVR اخترق برمجيات SolarWinds وتسلسل إلى وكالات الخزانة والخارجية والأمن الداخلي وهيئات أمريكية أخرى.", source: "نيويورك تايمز", sourceDate: "ديسمبر ٢٠٢٠", lat: 38.9, lng: -77.04 },
  { id: "ci-7", title: "هجوم إندستروير ٢ على شبكة الكهرباء الأوكرانية", country: "Ukraine", description: "مجموعة ساندوورم الروسية نشرت برمجية Industroyer2 لتعطيل شبكة الكهرباء الأوكرانية. تم إحباط الهجوم قبل ساعات من حصول انقطاع.", source: "وايرد", sourceDate: "أبريل ٢٠٢٢", lat: 50.45, lng: 30.52 },
  { id: "ci-8", title: "هجوم فدية على معهد AIIMS نيودلهي", country: "India", description: "هجوم فدية عطل أجهزة أكبر معهد طبي هندي لمدة أسبوعين وأجبر المستشفى على العمل اليدوي وتأخير رعاية المرضى.", source: "إنديان إكسبريس", sourceDate: "نوفمبر ٢٠٢٢", lat: 28.57, lng: 77.21 },
  { id: "ci-9", title: "اختراق شبكة الطاقة الكهرومائية النرويجية", country: "Norway", description: "اختراق سيبراني متطور استهدف أنظمة التحكم في محطات الطاقة الكهرومائية النرويجية. المهاجمون فحصوا شبكات SCADA التي تدير عمليات السدود في عدة منشآت بمنطقة تيليمارك.", source: "هيئة الأمن الوطني النرويجية", sourceDate: "أغسطس ٢٠٢٤", lat: 59.91, lng: 10.75, audioUrl: "/Norway Cyberattack Audio for Map.mp3" }
  ],
  "email-phishing": [
  { id: "ph-1", title: "اختراق حسابات تويتر لكبار الشخصيات", country: "United States of America", description: "هجوم تصيد احتيالي موجه لموظفي تويتر مكّن المخترقين من السيطرة على حسابات مشاهير ونشر تغريدة احتيال عملة بيتكوين.", source: "وايرد", sourceDate: "يوليو ٢٠٢٠", lat: 37.77, lng: -122.42 },
  { id: "ph-2", title: "هجوم التصيد على حملة بايدن الانتخابية", country: "United States of America", description: "قراصنة إيرانيون أرسلوا رسائل تصيد مخصصة لمسؤولي حملة بايدن الانتخابية تحتوي روابط خبيثة لسرقة بيانات الاعتماد.", source: "رويترز", sourceDate: "أغسطس ٢٠٢٤", lat: 38.9, lng: -77.04 },
  { id: "ph-3", title: "اختراق بيانات سنغ هيلث", country: "Singapore", description: "رسالة تصيد استهدفت أحد الموظفين أدت إلى سرقة بيانات ١٫٥ مليون مريض في سنغافورة من بينهم سجلات رئيس الوزراء.", source: "سي إن إيه", sourceDate: "يوليو ٢٠١٨", lat: 1.35, lng: 103.87 },
  { id: "ph-4", title: "دودة تصيد جوجل دوكس", country: "United States of America", description: "هجوم تصيد جماهيري استخدم تطبيق Google Docs مزيفا وخدع الملايين لمنح صلاحيات الوصول إلى حساباتهم.", source: "ذا فيرج", sourceDate: "مايو ٢٠١٧", lat: 37.42, lng: -122.08 },
  { id: "ph-5", title: "موجة تصيد كوفيد-١٩ لهيئة الصحة البريطانية", country: "United Kingdom", description: "موجة من رسائل التصيد الاحتيالي استهدفت موظفي هيئة الصحة البريطانية NHS أثناء الجائحة مستغلة الخوف لسرقة بيانات الدخول.", source: "بي بي سي", sourceDate: "مارس ٢٠٢٠", lat: 51.51, lng: -0.12 },
  { id: "ph-6", title: "احتيال انتحال شخصية المدراء التنفيذيين في اليابان", country: "Japan", description: "قراصنة استهدفوا موظفي شركات برسائل بريد إلكتروني تنتحل شخصية رؤسائهم التنفيذيين وتطلب تحويلات مالية عاجلة.", source: "نيكاي آسيا", sourceDate: "يونيو ٢٠٢٣", lat: 35.68, lng: 139.76 }
  ]
};
