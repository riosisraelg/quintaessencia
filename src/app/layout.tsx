import type { Metadata } from "next";
import { Archivo_Black, Lora, Space_Mono } from "next/font/google";
import BottomNav from "@/components/BottomNav";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QUINTESSENCIA",
  description: "Conferencia Magistral",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${archivoBlack.variable} ${lora.variable} ${spaceMono.variable} h-full antialiased selection:bg-primary selection:text-white`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-body bg-background text-on-surface">
        {/* TopAppBar */}
        <header className="fixed top-0 w-full z-50 flex items-center px-margin-mobile py-unit bg-background border-b-4 border-on-surface transition-colors duration-100 justify-center">
          <div className="flex items-center gap-4">
            <h1 className="font-headline-md text-primary tracking-tighter text-center">QUINTESSENCIA</h1>
          </div>
        </header>

        <main className="pt-[60px] flex-grow">
          {children}
        </main>

        <BottomNav />
      </body>
    </html>
  );
}
