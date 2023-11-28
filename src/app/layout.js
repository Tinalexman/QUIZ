import { Work_Sans } from "next/font/google";
import "./globals.css";

const worksans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-work-sans',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Quizz",
  description: "How smart are you?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={worksans.className}>{children}</body>
    </html>
  );
}
