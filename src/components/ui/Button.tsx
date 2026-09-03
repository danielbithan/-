import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

const BASE_CLASSES =
  "inline-flex min-h-12 items-center justify-center gap-2 px-7 text-[0.95rem] font-medium tracking-tight transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-ink-800 text-sand-50 hover:bg-ink-900 focus-visible:outline-ink-800",
  secondary:
    "border border-ink-800/25 bg-transparent text-ink-800 hover:border-ink-800 hover:bg-ink-800/5",
  ghost: "text-ink-700 hover:text-ink-900",
};

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
