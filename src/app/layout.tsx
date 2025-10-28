import "./globals.css";
import { Header } from "@/components/header";
import { Inter } from "next/font/google";
import { SidebarProvider } from "@/components/sidebar";
import { Sidebar } from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <html lang="en" className={inter.className}>
        <body className="light">
          {/* Header - always on top */}
          <Sidebar />

          {/* Main content area: sidebar + page content */}
          <div className="flex min-h-screen flex-col w-full">
            <Header />
            {children}
          </div>
        </body>
      </html>
    </SidebarProvider>
  );
}
