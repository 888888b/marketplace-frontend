import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";

import NavigationBar from '@/components/molecules/navigationBar';
import Footer from '@/components/organisms/footer';
import { ToastContainer } from "react-toastify";
import { UserProvider } from "@/contexts/userContext";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800']
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ['latin-ext'],
  weight: ['500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "None",
  description: "None",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${raleway.variable} antialiased`}>
        <UserProvider>
          {children}
          <Footer/>
          <NavigationBar/>
          <ToastContainer/>
        </UserProvider>
      </body>
    </html>
  );
}
