import type { Transition, Variants } from "framer-motion";

/** עקומת האטה רכה שמשמשת את כל האנימציות באתר */
export const EASE_OUT: Transition["ease"] = [0.22, 1, 0.36, 1];

/** הופעה עדינה מלמטה — ברירת המחדל לכניסת אלמנטים */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
};

/** מיכל שמדרג את כניסת הילדים שלו */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

/** הגדרות ה-viewport לאנימציות כניסה — מופעל פעם אחת בלבד */
export const VIEWPORT_ONCE = { once: true, amount: 0.25 } as const;
