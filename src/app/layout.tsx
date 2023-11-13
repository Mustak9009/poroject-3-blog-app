import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "./Components";
import AppContext from "@/context/appContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const dynamic = 'force-static'
export const revalidate = 3 * 60 * 60 * 1000
export const fetchCache  = 'force-cache'

export const metadata: Metadata = {
  title: "Learn more",
  description:
    "Explore insightful articles and broaden your knowledge with Learn More, your go-to source for diverse topics and expert insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContext>
          <NavBar />
          {children}
        </AppContext>
      </body>
    </html>
  );
}
