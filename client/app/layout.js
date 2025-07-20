"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const [lang, setLang] = useState('en');
  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="p-4 flex gap-4 border-b">
          <Link href="/">Home</Link>
          <Link href="/gigs">Gigs</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
          <button className="ml-auto" onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}>
            {lang === 'en' ? 'عربي' : 'English'}
          </button>
        </nav>
        {children}
      </body>
    </html>
  );
}
