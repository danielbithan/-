/** פריט ניווט בתפריט הראשי */
export type NavItem = {
  label: string;
  /** מזהה הסקשן שאליו הקישור גולל */
  sectionId: string;
};

/** שירות שיפוץ שהחברה מציעה */
export type Service = {
  id: string;
  title: string;
  description: string;
  /** שם האייקון בתוך ServiceIcon */
  icon: ServiceIconName;
};

export type ServiceIconName =
  | "apartment"
  | "kitchen"
  | "bathroom"
  | "flooring"
  | "paint"
  | "finishing";

/** פרויקט שיפוץ להצגה בגלריית העבודות */
export type Project = {
  id: string;
  /** סוג השיפוץ, למשל "שיפוץ דירה מלא" */
  type: string;
  city: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

/** אפשרות בשדה בחירה בטופס */
export type SelectOption = {
  value: string;
  label: string;
};

/** הערכים שהמשתמש ממלא בטופס הצעת המחיר */
export type QuoteFormValues = {
  fullName: string;
  phone: string;
  city: string;
  renovationType: string;
  budget: string;
  timeline: string;
  message: string;
};

/** שגיאות ולידציה לפי שדה */
export type QuoteFormErrors = Partial<Record<keyof QuoteFormValues, string>>;

/** מצב תהליך השליחה של הטופס */
export type SubmissionStatus = "idle" | "submitting" | "success";
