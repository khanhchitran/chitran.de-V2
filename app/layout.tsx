import type { Metadata } from "next";
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/navigation";
import "@/styles/globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Chi Tran - Personal Website",
  description:
    "Personal website and blog of Chi Tran, a Junior Software Engineer based in Berlin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-pink-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex flex-col min-h-screen'>
            <Navigation />
            <main className='flex-grow container mx-auto px-4 py-8 max-w-6xl'>
              {children}
            </main>
            <footer className='bg-pink-100 dark:bg-gray-800 py-4'>
              <div className='container mx-auto px-4'>
                <p className='text-pink-800 dark:text-pink-200'>
                  © 2024 Chi Tran
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import { ThemeProvider } from "next-themes";
