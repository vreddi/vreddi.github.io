import "./globals.css";
import { Header } from "@/components/header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="light">
        <Header />
        {children}
      </body>
    </html>
  );
}
