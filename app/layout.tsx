import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { MotionSystem } from "@/components/MotionSystem";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cedrs.org"),
  title: { default: "CeDrs | Cedars & Doctors", template: "%s | CeDrs" },
  description:
    "A global network connecting Lebanese medical students and future physicians through collaboration, mentorship, research, and professional development.",
  openGraph: {
    title: "CeDrs | Cedars & Doctors",
    description: "Connecting Lebanese medical minds across the world.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <MotionSystem><main>{children}</main></MotionSystem>
        <Footer />
      </body>
    </html>
  );
}
