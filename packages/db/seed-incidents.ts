import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const incidents = [
  {
    country: "United Arab Emirates",
    title: "ارتفاع محاولات التصيّد في الإمارات بنسبة 21.2%",
    description: "سجلت كاسبرسكي ارتفاعاً بنسبة 21.2% في محاولات التصيّد في الإمارات خلال الربع الثاني من عام 2025، كجزء من موجة تصيّد أوسع في الشرق الأوسط مدعومة بالذكاء الاصطناعي. استخدم المهاجمون نماذج لغوية كبيرة لصياغة رسائل بريد إلكتروني ومواقع إلكترونية مقنعة تحاكي المصادر الشرعية وتزيل الأخطاء النحوية التي كانت تكشف عمليات الاحتيال سابقاً.",
    source: "Kaspersky / CXO Insight ME",
    sourceDate: "أغسطس 2025",
    topic: "email-phishing",
  },
  {
    country: "United Arab Emirates",
    title: "واحدة من كل خمس شركات إماراتية تعرضت لحادث سيبراني مرتبط بالذكاء الاصطناعي",
    description: "أصبح اختراق البريد الإلكتروني التجاري تهديداً رئيسياً: ينتحل المجرمون صفة الموردين والشركاء والتنفيذيين، ويستخدمون الذكاء الاصطناعي لإنشاء رسائل بريد إلكتروني وفواتير ووثائق داعمة مقنعة لخداع الموظفين للقيام بمدفوعات أو مشاركة بيانات الاعتماد. هذا تطبيق عملي لمبدأ \"معاملة الجميع كأهداف مهمة\" المذكور في المقال، ولكن في سياق الاحتيال المالي المؤسسي.",
    source: "Khaleej Times",
    sourceDate: "يونيو 2026",
    topic: "email-phishing",
  },
];

async function main() {
  console.log("Seeding incidents...");
  for (const inc of incidents) {
    await prisma.incident.upsert({
      where: { id: inc.country + "-" + inc.title.substring(0, 50) },
      create: inc,
      update: inc,
    });
  }
  console.log(`Seeded ${incidents.length} incidents.`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
