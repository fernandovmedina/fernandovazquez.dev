import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Geist_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "@fernandovmedina  - Full Stack Software Engineer",
  description: "Full Stack Software Engineer with a passion for building scalable and efficient applications. Experienced in both frontend and backend development, with a strong focus on JavaScript and TypeScript. Always eager to learn new technologies and improve my skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
