# דניאל שיפוצים

אתר תדמית לחברת שיפוצים ישראלית. עברית מלאה, RTL, רספונסיבי.

## הרצה

```bash
npm install
npm run dev      # http://localhost:3000
```

פקודות נוספות:

```bash
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run build      # build ייצור
```

## מבנה

```
src/
  app/
    layout.tsx        # dir="rtl", lang="he", מטא-דאטה, פונט Heebo
    page.tsx          # הרכבת הסקשנים
    globals.css       # פלטת צבעים, RTL, סגנון בסיס
    icon.svg          # favicon
  components/
    Navbar.tsx        # ניווט דביק + תפריט נייד
    Hero.tsx
    Services.tsx
    Projects.tsx
    About.tsx
    QuoteSection.tsx  # עטיפת סקשן הצעת המחיר
    Footer.tsx
    quote/
      QuoteForm.tsx   # הטופס עצמו
      FormField.tsx   # שדה טופס לשימוש חוזר
    ui/
      Button.tsx
      SectionHeading.tsx
      ServiceIcon.tsx
  data/site.ts        # ניווט, שירותים, פרויקטים, אפשרויות הטופס
  lib/
    motion.ts         # וריאנטים משותפים ל-Framer Motion
    scroll.ts         # גלילה חלקה עם התחשבות בגובה הניווט
    quote-form.ts     # ולידציה + מטפל השליחה
  types/index.ts
```

## תוכן זמני

מוחלף בשלב הבא, בלי שינוי בעיצוב:

- `PROJECTS` ב-[src/data/site.ts](src/data/site.ts) — 4 פרויקטים לדוגמה. יוחלפו בעבודות אמיתיות, כולל תמונות לפני/אחרי.
- הטקסט ב-[src/components/About.tsx](src/components/About.tsx) — סיפור החברה הסופי.
- `SITE.phoneDisplay` / `SITE.phoneHref` — מספר טלפון אמיתי.
- התמונות נטענות כרגע מ-Unsplash (מוגדר ב-[next.config.ts](next.config.ts)).

## טופס הצעת המחיר

**כרגע דמו מקומי בלבד.** אין API, אין דאטהבייס, אין שירות חיצוני, אין אחסון מקומי. הפרטים נשארים ב-state של הקומפוננטה ונמחקים מיד אחרי הצגת מסך ההצלחה.

הזרימה: ולידציה → מצב טעינה → מסך הצלחה → איפוס הטופס.

## חיבור עתידי ל-LeadFlow

נקודת החיבור היחידה היא `submitQuoteRequest` ב-[src/lib/quote-form.ts](src/lib/quote-form.ts):

```ts
export async function submitQuoteRequest(values: QuoteFormValues): Promise<void>
```

כרגע הפונקציה רק ממתינה 900ms. כדי לחבר ל-LeadFlow צריך להחליף את גוף הפונקציה בלבד — החתימה נשארת זהה, ולכן [QuoteForm.tsx](src/components/quote/QuoteForm.tsx) לא משתנה כלל.

שני דברים שיצטרכו להתווסף אז: טיפול בשגיאות (מצב `"error"` ב-`SubmissionStatus`), והגנה מפני שליחות אוטומטיות.
