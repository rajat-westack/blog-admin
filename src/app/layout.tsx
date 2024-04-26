import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import RouterValidation from "./auth/RouterValidation/page";
import Providers from "./Redux/providers";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Article",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <RouterValidation>{children}</RouterValidation>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
