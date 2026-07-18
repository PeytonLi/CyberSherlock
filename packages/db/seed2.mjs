import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const incidents = [
  { country: "United States of America", title: "التصيّد يتصدر الجرائم الإلكترونية في تقرير FBI لعام 2025", description: "سجل تقرير جرائم الإنترنت لعام 2025 الصادر عن FBI 191,561 شكوى تصيّد وانتحال — وهو أعلى رقم بين جميع فئات الجرائم الإلكترونية — مما يؤكد أن التصيّد هو أكثر الجرائم الإلكترونية شيوعاً وأن الذكاء الاصطناعي يضخم حجمه.", source: "FBI IC3 2025 Internet Crime Report", sourceDate: "2025", topic: "email-phishing" },
  { country: "United Kingdom", title: "أدوات تصيّد جاهزة تُباع في الأسواق المظلمة وتستهدف شركات بريطانية", description: "رصد محققون أدوات تصيّد مثل SpamGPT تُباع بآلاف الجنيهات في الأسواق المظلمة، وتُستخدم لشن حملات ضد شركات بريطانية خلال ساعات من الشراء، دون الحاجة إلى مهارات تقنية تتجاوز المعرفة الأساسية بالحاسوب — وهو تحويل التصيّد إلى سلعة كما يحذر المقال، مما يضع هجمات بمستوى الجهات المتقدمة في أيدي ضعاف المهارة.", source: "Security Boulevard", sourceDate: "نوفمبر 2025", topic: "email-phishing" },
  { country: "Saudi Arabia", title: "ارتفاع التصيّد المدعوم بالذكاء الاصطناعي في الشرق الأوسط بنسبة 21.5%", description: "أفادت كاسبرسكي بارتفاع التصيّد المدعوم بالذكاء الاصطناعي بنسبة 21.5% تقريباً في جميع أنحاء الشرق الأوسط، مع استهداف متزايد للبصمات الحيوية والتوقيعات الإلكترونية، واستغلال منصات موثوقة مثل تيليجرام وترجمة جوجل لتوصيل الطُعم.", source: "Kaspersky / The Arabian Stories", sourceDate: "أغسطس 2025", topic: "email-phishing" },
  { country: "United Arab Emirates", title: "ارتفاع التصيّد المدعوم بالذكاء الاصطناعي في الشرق الأوسط بنسبة 21.5%", description: "أفادت كاسبرسكي بارتفاع التصيّد المدعوم بالذكاء الاصطناعي بنسبة 21.5% تقريباً في جميع أنحاء الشرق الأوسط، مع استهداف متزايد للبصمات الحيوية والتوقيعات الإلكترونية.", source: "Kaspersky / The Arabian Stories", sourceDate: "أغسطس 2025", topic: "email-phishing" },
];

async function main() {
  console.log("Seeding more incidents...");
  for (const inc of incidents) {
    await prisma.incident.create({ data: inc });
  }
  console.log("Seeded", incidents.length, "more incidents");
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
