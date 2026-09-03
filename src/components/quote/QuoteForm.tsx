"use client";

import { useId, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { controlClasses, FormField } from "@/components/quote/FormField";
import { Button } from "@/components/ui/Button";
import {
  BUDGET_OPTIONS,
  RENOVATION_TYPE_OPTIONS,
  SECTION_IDS,
  TIMELINE_OPTIONS,
} from "@/data/site";
import { EASE_OUT } from "@/lib/motion";
import { scrollToSection } from "@/lib/scroll";
import {
  EMPTY_QUOTE_FORM,
  submitQuoteRequest,
  validateQuoteForm,
} from "@/lib/quote-form";
import type {
  QuoteFormErrors,
  QuoteFormValues,
  SelectOption,
  SubmissionStatus,
} from "@/types";

export function QuoteForm() {
  const fieldId = useId();
  const [values, setValues] = useState<QuoteFormValues>(EMPTY_QUOTE_FORM);
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const idFor = (field: keyof QuoteFormValues) => `${fieldId}-${field}`;

  const setField = (field: keyof QuoteFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    // ניקוי שגיאת השדה ברגע שהמשתמש מתקן אותו
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    const validationErrors = validateQuoteForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstField = Object.keys(validationErrors)[0] as keyof QuoteFormValues;
      const field = document.getElementById(idFor(firstField));
      // preventScroll כדי שהניווט הדביק לא יחתוך את השדה, ואז גלילה מבוקרת
      field?.focus({ preventScroll: true });
      field?.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }

    setStatus("submitting");
    await submitQuoteRequest(values);
    // איפוס הפרטים מיד לאחר השליחה — שום מידע אישי לא נשמר
    setValues(EMPTY_QUOTE_FORM);
    setStatus("success");
    // החזרת המשתמש לראש הסקשן, שכרטיס ההצלחה נמוך מהטופס שהוחלף
    scrollToSection(SECTION_IDS.quote);
  };

  const describedBy = (field: keyof QuoteFormValues) =>
    errors[field] ? `${idFor(field)}-error` : undefined;

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
        role="status"
        aria-live="polite"
        className="flex min-h-100 flex-col items-center justify-center gap-5 border border-ink-800/15 bg-sand-50 px-6 py-16 text-center sm:px-10"
      >
        <span
          aria-hidden
          className="flex h-14 w-14 items-center justify-center rounded-full border border-ink-800/20"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-ink-800"
          >
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </span>

        <h3 className="text-2xl font-semibold tracking-tight text-ink-900">
          הבקשה התקבלה, נחזור אליך בהקדם
        </h3>

        <Button variant="secondary" onClick={() => setStatus("idle")}>
          שליחת בקשה נוספת
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="border border-ink-800/15 bg-sand-50 p-6 sm:p-8 lg:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <FormField
          htmlFor={idFor("fullName")}
          label="שם מלא"
          required
          error={errors.fullName}
        >
          <input
            id={idFor("fullName")}
            name="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={(event) => setField("fullName", event.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={describedBy("fullName")}
            className={controlClasses(Boolean(errors.fullName))}
          />
        </FormField>

        <FormField
          htmlFor={idFor("phone")}
          label="טלפון"
          required
          error={errors.phone}
        >
          <input
            id={idFor("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            dir="ltr"
            autoComplete="tel"
            placeholder="050-0000000"
            value={values.phone}
            onChange={(event) => setField("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy("phone")}
            className={`${controlClasses(Boolean(errors.phone))} text-start`}
          />
        </FormField>

        <FormField
          htmlFor={idFor("city")}
          label="עיר"
          required
          error={errors.city}
        >
          <input
            id={idFor("city")}
            name="city"
            type="text"
            autoComplete="address-level2"
            value={values.city}
            onChange={(event) => setField("city", event.target.value)}
            aria-invalid={Boolean(errors.city)}
            aria-describedby={describedBy("city")}
            className={controlClasses(Boolean(errors.city))}
          />
        </FormField>

        <SelectField
          id={idFor("renovationType")}
          name="renovationType"
          label="סוג השיפוץ"
          placeholder="בחרו סוג שיפוץ"
          options={RENOVATION_TYPE_OPTIONS}
          value={values.renovationType}
          error={errors.renovationType}
          describedBy={describedBy("renovationType")}
          onChange={(value) => setField("renovationType", value)}
        />

        <SelectField
          id={idFor("budget")}
          name="budget"
          label="תקציב משוער"
          placeholder="בחרו טווח תקציב"
          options={BUDGET_OPTIONS}
          value={values.budget}
          error={errors.budget}
          describedBy={describedBy("budget")}
          onChange={(value) => setField("budget", value)}
        />

        <SelectField
          id={idFor("timeline")}
          name="timeline"
          label="מתי תרצה להתחיל"
          placeholder="בחרו מועד"
          options={TIMELINE_OPTIONS}
          value={values.timeline}
          error={errors.timeline}
          describedBy={describedBy("timeline")}
          onChange={(value) => setField("timeline", value)}
        />

        <FormField
          htmlFor={idFor("message")}
          label="הודעה"
          className="sm:col-span-2"
        >
          <textarea
            id={idFor("message")}
            name="message"
            rows={4}
            value={values.message}
            onChange={(event) => setField("message", event.target.value)}
            placeholder="ספרו בקצרה על הפרויקט — גודל הדירה, מה כולל השיפוץ וכל דבר נוסף שחשוב שנדע."
            className={`${controlClasses(false)} resize-y py-3 leading-relaxed`}
          />
        </FormField>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          <AnimatePresence mode="wait" initial={false}>
            {status === "submitting" ? (
              <motion.span
                key="submitting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2.5"
              >
                <span
                  aria-hidden
                  className="h-4 w-4 animate-spin rounded-full border-2 border-sand-50/40 border-t-sand-50"
                />
                שולח...
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                קבל הצעת מחיר
              </motion.span>
            )}
          </AnimatePresence>
        </Button>

        <p className="text-sm text-ink-500">
          הפרטים משמשים אותנו רק כדי לחזור אליכם עם הצעת מחיר.
        </p>
      </div>
    </form>
  );
}

type SelectFieldProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  options: SelectOption[];
  value: string;
  error?: string;
  describedBy?: string;
  onChange: (value: string) => void;
};

function SelectField({
  id,
  name,
  label,
  placeholder,
  options,
  value,
  error,
  describedBy,
  onChange,
}: SelectFieldProps) {
  return (
    <FormField htmlFor={id} label={label} required error={error}>
      <select
        id={id}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className={`${controlClasses(Boolean(error))} select-field ${
          value ? "text-ink-900" : "text-ink-400"
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-ink-900">
            {option.label}
          </option>
        ))}
      </select>
    </FormField>
  );
}
