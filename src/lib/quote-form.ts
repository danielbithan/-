import type { QuoteFormErrors, QuoteFormValues } from "@/types";

export const EMPTY_QUOTE_FORM: QuoteFormValues = {
  fullName: "",
  phone: "",
  city: "",
  renovationType: "",
  budget: "",
  timeline: "",
  message: "",
};

/**
 * מספר טלפון ישראלי: קידומת 0 ואחריה 9 ספרות (נייד או קווי),
 * או פורמט בינלאומי 972+. מקפים, רווחים וסוגריים מותרים ומנוקים לפני הבדיקה.
 */
const PHONE_PATTERN = /^(?:0\d{8,9}|972\d{8,9})$/;

function normalizePhone(phone: string) {
  return phone.replace(/[\s\-().]/g, "").replace(/^\+/, "");
}

export function validateQuoteForm(values: QuoteFormValues): QuoteFormErrors {
  const errors: QuoteFormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "נא למלא שם מלא";
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = "השם קצר מדי";
  }

  const phone = normalizePhone(values.phone);
  if (!phone) {
    errors.phone = "נא למלא מספר טלפון";
  } else if (!PHONE_PATTERN.test(phone)) {
    errors.phone = "מספר הטלפון אינו תקין";
  }

  if (!values.city.trim()) {
    errors.city = "נא למלא עיר";
  }

  if (!values.renovationType) {
    errors.renovationType = "נא לבחור סוג שיפוץ";
  }

  if (!values.budget) {
    errors.budget = "נא לבחור תקציב משוער";
  }

  if (!values.timeline) {
    errors.timeline = "נא לבחור מועד התחלה";
  }

  return errors;
}

/**
 * מטפל השליחה של טופס הצעת המחיר.
 *
 * כרגע זו הדגמה מקומית בלבד: אין קריאת רשת, אין אחסון ואין שליחה
 * לשום שירות חיצוני. הפרטים נשארים ב-state של הקומפוננטה ונמחקים
 * מיד לאחר הצגת מסך ההצלחה.
 *
 * TODO(LeadFlow): בשלב הבא יוחלף גוף הפונקציה בקריאה למערכת ניהול
 * הלידים LeadFlow. החתימה נשארת זהה כדי שלא יידרש שינוי ב-UI.
 */
export async function submitQuoteRequest(
  _values: QuoteFormValues,
): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 900));
}
