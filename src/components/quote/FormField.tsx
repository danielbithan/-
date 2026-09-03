import type { ReactNode } from "react";

type FormFieldProps = {
  /** ה-id של הפקד שהתווית מצביעה עליו */
  htmlFor: string;
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
};

export function FormField({
  htmlFor,
  label,
  error,
  required = false,
  className = "",
  children,
}: FormFieldProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium text-ink-700"
      >
        {label}
        {required ? (
          <span className="ms-1 text-ink-400">
            <span aria-hidden>*</span>
            <span className="sr-only">(שדה חובה)</span>
          </span>
        ) : null}
      </label>

      {children}

      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** מחלקות משותפות לכל פקדי הקלט, כדי לשמור על מראה אחיד */
export const controlClasses = (hasError: boolean) =>
  `min-h-12 w-full border bg-sand-50 px-4 text-base text-ink-900 transition-colors duration-200 placeholder:text-ink-400 focus:border-ink-800 focus:outline-none ${
    hasError ? "border-red-700/60" : "border-ink-800/20"
  }`;
