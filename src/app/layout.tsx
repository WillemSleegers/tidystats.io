import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";
import { cn } from "@/utils/utils";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "tidystats",
  description:
    "The website of tidystats: A software tool to reproducibly report statistics.",
  icons: {
    icon: "/assets/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "flex min-h-screen flex-col justify-between antialiased",
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
