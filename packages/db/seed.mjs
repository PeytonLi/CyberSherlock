import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const incidents = [
  { country: "United Arab Emirates", title: "ارتفاع محاولات التصيّد في الإمارات بنسبة 21.2%", description: "سجلت كاسبرسكي ارتفاعاً بنسبة 21.2% في محاولات التصيّد في الإمارات خلال الربع الثاني من عام 2025، كجزء من موجة تصيّد أوسع في الشرق الأوسط مدعومة بالذكاء الاصطناعي. استخدم المهاجمون نماذج لغوية كبيرة لصياغة رسائل بريد إلكتروني ومواقع إلكترونية مقنعة تحاكي المصادر الشرعية وتزيل الأخطاء النحوية التي كانت تكشف عمليات الاحتيال سابقاً.", source: "Kaspersky / CXO Insight ME", sourceDate: "أغسطس 2025", topic: "email-phishing" },
  { country: "United Arab Emirates", title: "واحدة من كل خمس شركات إماراتية تعرضت لحادث سيبراني", description: "أصبح اختراق البريد الإلكتروني التجاري تهديداً رئيسياً: ينتحل المجرمون صفة الموردين والشركاء والتنفيذيين، ويستخدمون الذكاء الاصطناعي لإنشاء رسائل بريد إلكتروني وفواتير ووثائق داعمة مقنعة لخداع الموظفين للقيام بمدفوعات أو مشاركة بيانات الاعتماد.", source: "Khaleej Times", sourceDate: "يونيو 2026", topic: "email-phishing" },
  { country: "United Arab Emirates", title: "موجة تصيّد بعد إطلاق iPhone 17 في الإمارات والسعودية", description: "أدى إطلاق iPhone 17 في سبتمبر 2025 إلى موجة تصيّد مدعومة بالذكاء الاصطناعي في الإمارات والسعودية، حيث استغل المجرمون حماس المستهلكين الخليجيين للوصول المبكر والحصرية لصياغة عروض مغرية لكنها احتيالية، مع تحذيرات من اختطاف الهوية الذي يسمح للمهاجمين بالاستيلاء على الحياة الرقمية للضحايا.", source: "Arabian Business", sourceDate: "سبتمبر 2025", topic: "email-phishing" },
  { country: "Saudi Arabia", title: "موجة تصيّد بعد إطلاق iPhone 17 في الإمارات والسعودية", description: "أدى إطلاق iPhone 17 إلى موجة تصيّد مدعومة بالذكاء الاصطناعي في السعودية، حيث استغل المجرمون حماس المستهلكين لصياغة عروض احتيالية مغرية، مع تحذيرات من اختطاف الهوية الرقمية.", source: "Arabian Business", sourceDate: "سبتمبر 2025", topic: "email-phishing" },
  { country: "Saudi Arabia", title: "ارتفاع التصيّد باستخدام الذكاء الاصطناعي التوليدي ضد أهداف سعودية", description: "أفاد باحثون أمنيون بزيادة حادة في التصيّد ضد أهداف سعودية، مشيرين إلى أن نماذج الذكاء الاصطناعي التوليدي تسمح للمهاجمين بإنتاج رسائل تصيّد مكتوبة جيداً وجديرة بالثقة بلغات متعددة بضغطة زر — مما يزيل عائق الترجمة الرديئة الذي كان يساعد غير الناطقين بالإنجليزية في اكتشاف الاحتيال.", source: "Arab News / Group-IB", sourceDate: "", topic: "email-phishing" },
];

async function main() {
  console.log("Seeding incidents...");
  for (const inc of incidents) {
    await prisma.incident.create({ data: inc });
  }
  console.log("Seeded", incidents.length, "incidents");
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
