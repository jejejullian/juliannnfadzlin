import localFont from "next/font/local";
import "./globals.css";

const nicoMoji = localFont({
  src: "../../public/fonts/Nico-Moji.woff",
  variable: "--font-nico-moji",
  display: "swap",
});

export const metadata = {
  title: "Julian Nur Fadzlin — Portfolio",
  description: "Portfolio Julian Nur Fadzlin, front-end & full-stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nicoMoji.variable} h-full antialiased`}>
      <body className="min-h-screen bg-light">{children}</body>
    </html>
  );
}