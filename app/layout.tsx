import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "./context/themeContext";

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
        <body
          className={`min-w-screen min-h-screen overflow-x-hidden`}
        >
          <div className="flex flex-col justify-center items-center">
            {children}
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
