import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./context/themeContext";

import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Zachary Sturman - Full Stack Front End Developer",
  description:
    "Full stack front end developer specializing in JavaScript and Python frameworks, building modern and responsive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      
      <html lang="en">
       \<GoogleTagManager gtmId="G-Z3ZJYGM3EM" />

        <body className={`min-w-screen min-h-screen`}>
          <main className="">
            {children}
          </main>
        </body>
      </html>
    </ThemeProvider>
  );
}
