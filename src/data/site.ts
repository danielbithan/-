import type { NavItem, Project, SelectOption, Service } from "@/types";

export const SITE = {
  name: "דניאל שיפוצים",
  tagline: "שיפוץ דירות, מטבחים, חדרי רחצה ועבודות גמר",
  phoneDisplay: "050-000-0000",
  phoneHref: "tel:050-000-0000",
} as const;

/** מזהי הסקשנים — משמשים גם לניווט וגם לעוגנים בדף */
export const SECTION_IDS = {
  hero: "hero",
  services: "services",
  projects: "projects",
  about: "about",
  quote: "quote",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "בית", sectionId: SECTION_IDS.hero },
  { label: "שירותים", sectionId: SECTION_IDS.services },
  { label: "עבודות", sectionId: SECTION_IDS.projects },
  { label: "אודות", sectionId: SECTION_IDS.about },
  { label: "הצעת מחיר", sectionId: SECTION_IDS.quote },
];

export const SERVICES: Service[] = [
  {
    id: "full-apartment",
    title: "שיפוץ דירה מלא",
    description:
      "ליווי מקצה לקצה — תכנון, הריסה, אינסטלציה, חשמל וגמר. דירה שלמה שמקבלת חזות חדשה בלוח זמנים ברור.",
    icon: "apartment",
  },
  {
    id: "kitchen",
    title: "שיפוץ מטבח",
    description:
      "תכנון מטבח שמתאים לאופן שבו אתם באמת מבשלים, כולל תשתיות, חיפוי, משטחים והתקנה מדויקת.",
    icon: "kitchen",
  },
  {
    id: "bathroom",
    title: "שיפוץ חדר רחצה",
    description:
      "החלפת תשתיות מים וביוב, איטום קפדני, ריצוף וחיפוי וכלים סניטריים — עם דגש על עמידות לאורך זמן.",
    icon: "bathroom",
  },
  {
    id: "flooring",
    title: "ריצוף",
    description:
      "פירוק ריצוף קיים או ריצוף על גבי ריצוף, יישור מדויק ועבודת פוגות נקייה בקרמיקה, גרניט פורצלן או פרקט.",
    icon: "flooring",
  },
  {
    id: "paint-drywall",
    title: "צבע וגבס",
    description:
      "עבודות גבס, ניסור תקרות, נישות ותאורה נסתרת, שפכטל וצבע בגימור אחיד ונקי.",
    icon: "paint",
  },
  {
    id: "finishing",
    title: "עבודות גמר",
    description:
      "הפרטים שקובעים איך השיפוץ נראה בסוף — פנלים, מלבנים, דלתות, ארונות, גופי תאורה ואביזרי גמר.",
    icon: "finishing",
  },
];

/**
 * פרויקטים זמניים להצגת מבנה הסקשן.
 * התוכן והתמונות יוחלפו בפרויקטים אמיתיים בשלב הבא.
 */
export const PROJECTS: Project[] = [
  {
    id: "project-1",
    type: "שיפוץ דירה מלא",
    city: "תל אביב",
    description:
      "דוגמה להצגת מבנה הסקשן — טקסט ותמונה יוחלפו בפרויקט אמיתי.",
    image: {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80",
      alt: "סלון מרווח בגוונים בהירים לאחר שיפוץ דירה",
    },
  },
  {
    id: "project-2",
    type: "שיפוץ מטבח",
    city: "רמת גן",
    description:
      "דוגמה להצגת מבנה הסקשן — טקסט ותמונה יוחלפו בפרויקט אמיתי.",
    image: {
      src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=80",
      alt: "מטבח מודרני עם ארונות בהירים ומשטח עבודה נקי",
    },
  },
  {
    id: "project-3",
    type: "שיפוץ חדר רחצה",
    city: "הרצליה",
    description:
      "דוגמה להצגת מבנה הסקשן — טקסט ותמונה יוחלפו בפרויקט אמיתי.",
    image: {
      src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=80",
      alt: "חדר רחצה בגווני אבן טבעית עם מקלחון זכוכית",
    },
  },
  {
    id: "project-4",
    type: "עבודות גמר",
    city: "ראשון לציון",
    description:
      "דוגמה להצגת מבנה הסקשן — טקסט ותמונה יוחלפו בפרויקט אמיתי.",
    image: {
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
      alt: "פינת עבודה עם קיר גבס ותאורה שקועה",
    },
  },
];

export const HERO_IMAGE = {
  src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
  alt: "סלון מרווח ומעוצב בדירה משופצת",
} as const;

export const ABOUT_IMAGE = {
  src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80",
  alt: "חלל פנים נקי בגווני עץ ולבן לאחר עבודות גמר",
} as const;

/** ערכי ברירת המחדל של שדות הבחירה — נשארים ריקים כדי לחייב בחירה */
export const RENOVATION_TYPE_OPTIONS: SelectOption[] = [
  { value: "full-apartment", label: "שיפוץ דירה מלא" },
  { value: "kitchen", label: "שיפוץ מטבח" },
  { value: "bathroom", label: "שיפוץ חדר רחצה" },
  { value: "flooring", label: "ריצוף" },
  { value: "paint-drywall", label: "צבע וגבס" },
  { value: "finishing", label: "עבודות גמר" },
  { value: "other", label: "אחר" },
];

export const BUDGET_OPTIONS: SelectOption[] = [
  { value: "under-20k", label: "עד 20,000 ₪" },
  { value: "20k-50k", label: "20,000 עד 50,000 ₪" },
  { value: "50k-100k", label: "50,000 עד 100,000 ₪" },
  { value: "100k-200k", label: "100,000 עד 200,000 ₪" },
  { value: "above-200k", label: "מעל 200,000 ₪" },
];

export const TIMELINE_OPTIONS: SelectOption[] = [
  { value: "asap", label: "בהקדם" },
  { value: "this-month", label: "בחודש הקרוב" },
  { value: "1-3-months", label: "1 עד 3 חודשים" },
  { value: "3-months-plus", label: "3 חודשים ומעלה" },
  { value: "researching", label: "עדיין בודק" },
];
