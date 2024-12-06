import "./globals.css";
import { mabryPro, roboto } from "./fonts";

export const metadata = {
  title: "Hirebuddy - Land your next opportunity",
  description: "Let AI find and apply to your next job opportunity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mabryPro.variable} ${roboto.variable}`}>
      <body className="font-roboto">{children}</body>
    </html>
  );
}
