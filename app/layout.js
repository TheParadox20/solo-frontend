import {  Montserrat } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import ContextProvider from "@/app/lib/ContextProvider";
import Footer from "@/app/UI/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Solobet",
  description: "Kenya\'s first etting exchange",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="large-scroll">
      <Suspense>
        <body className={`${montserrat.className} bg-primary-dark text-LightGray lg:text-xs 2xl:text-base`}>
          <ContextProvider>
          {children}
          <Footer/>
          </ContextProvider>
        </body>
      </Suspense>
    </html>
  );
}
