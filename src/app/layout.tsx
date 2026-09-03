import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "דניאל שיפוצים | שיפוץ דירות, מטבחים וחדרי רחצה",
  description:
    "דניאל שיפוצים — שיפוץ דירות, מטבחים, חדרי רחצה ועבודות גמר. תכנון מסודר, ביצוע נקי וליווי לאורך כל הפרויקט. השאירו פרטים לקבלת הצעת מחיר.",
  keywords: [
    "שיפוצים",
    "שיפוץ דירה",
    "שיפוץ מטבח",
    "שיפוץ חדר רחצה",
    "עבודות גמר",
    "ריצוף",
    "צבע וגבס",
  ],
  openGraph: {
    title: "דניאל שיפוצים | שיפוץ דירות, מטבחים וחדרי רחצה",
    description:
      "שיפוץ דירות, מטבחים, חדרי רחצה ועבודות גמר. תכנון מסודר, ביצוע נקי וליווי לאורך כל הפרויקט.",
    locale: "he_IL",
    type: "website",
    siteName: "דניאל שיפוצים",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
