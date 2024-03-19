import type { Metadata } from "next";
import "./globals.css";
import { Walter_Turncoat, Poppins } from "next/font/google";
import { ThemeProvider } from "./context/themeContext";


const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const walterTurncoat = Walter_Turncoat({ weight: "400", subsets: ["latin"] });

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
          className={`${walterTurncoat.className} min-w-screen min-h-screen overflow-x-hidden`}
        >
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
