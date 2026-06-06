import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ConvexClientProvider } from "@/components/onvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expense Splitter",
  description: "smartest way to split expenses with your friends",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en">
      
    
      <head>
      <link rel="icon" href="/logos/finiopay_logo.svg" sizes="any" />
      </head>
      <body className={`${inter.className}` }>
        <ClerkProvider>
        <ConvexClientProvider>
        <Header />
      <main className="min-h-screen"> {children}</main>
      </ConvexClientProvider>
      </ClerkProvider>
        </body>
    </html>
  );
}
