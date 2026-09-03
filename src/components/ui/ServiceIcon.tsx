import type { ServiceIconName } from "@/types";

type ServiceIconProps = {
  name: ServiceIconName;
  className?: string;
};

/** אייקוני קו מינימליים, מצוירים על רשת 24×24 */
const PATHS: Record<ServiceIconName, React.ReactNode> = {
  apartment: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V6l7-3 7 3v15" />
      <path d="M9.5 21v-5h5v5" />
      <path d="M9 9.5h1.5M13.5 9.5H15M9 12.75h1.5M13.5 12.75H15" />
    </>
  ),
  kitchen: (
    <>
      <path d="M3.5 3.5h17v17h-17z" />
      <path d="M3.5 9.5h17" />
      <path d="M8 6.5h4" />
      <path d="M12.25 13.5v3.5" />
      <path d="M7 13.5h1.75" />
    </>
  ),
  bathroom: (
    <>
      <path d="M3 12.5h18" />
      <path d="M4.5 12.5v3.5a4 4 0 0 0 4 4h7a4 4 0 0 0 4-4v-3.5" />
      <path d="M6.5 12.5V5.75A2.25 2.25 0 0 1 8.75 3.5a2.25 2.25 0 0 1 2.25 2.25" />
      <path d="M9.25 6.25h3.5" />
    </>
  ),
  flooring: (
    <>
      <path d="M3 3.5h18v17H3z" />
      <path d="M3 9.25h18M3 15h18" />
      <path d="M9 3.5v5.75M15 9.25V15M9 15v5.5" />
    </>
  ),
  paint: (
    <>
      <path d="M4 3.5h11.5v6H4z" />
      <path d="M15.5 6.5H19a1 1 0 0 1 1 1v3.25a1 1 0 0 1-1 1h-6.5" />
      <path d="M12.5 11.75v2.5" />
      <path d="M10.75 14.25h3.5v6.25h-3.5z" />
    </>
  ),
  finishing: (
    <>
      <path d="M3 20.5h18" />
      <path d="M6.5 20.5V9.25l5.5-4.75 5.5 4.75V20.5" />
      <path d="M12 20.5v-5.25" />
      <path d="M14.5 12.5h.01" />
    </>
  ),
};

export function ServiceIcon({ name, className = "" }: ServiceIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}
