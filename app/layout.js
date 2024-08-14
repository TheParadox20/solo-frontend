import {  Montserrat } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import ContextProvider from "@/app/lib/ContextProvider";
import Footer from "@/app/UI/body/Footer";
import Popup from "@/app/UI/body/Popup";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Solobet",
  description: "Kenya\'s first betting exchange",
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
          <Popup/>
        </body>
      </Suspense>
    </html>
  );
}
