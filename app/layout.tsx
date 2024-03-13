import type { Metadata } from "next";
import "./globals.css";
import PlausibleProvider from "next-plausible";
import { Walter_Turncoat, Poppins } from 'next/font/google';

const poppins = Poppins({ weight: "400", subsets: ['latin'] });
const walterTurncoat = Walter_Turncoat({ weight: "400", subsets: ['latin'] });


export const metadata: Metadata = {
  title: "Zachary Sturman - Full Stack Front End Developer",
  description: "Full stack front end developer specializing in JavaScript and Python frameworks, building modern and responsive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="zsdynamics.com" trackLocalhost={true} enabled={true} taggedEvents={true}/>
      </head>
      <body className={`${walterTurncoat.className} min-w-screen overflow-x-hidden`}>{children}</body>
    </html>
  );
}
