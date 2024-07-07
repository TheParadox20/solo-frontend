import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/app/lib/ContextProvider";
import Footer from "@/app/UI/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Solobet",
  description: "Betting exchange",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className={`${montserrat.className} bg-primary-dark text-LightGray`}>
          {children}
          <Footer/>
        </body>
      </ContextProvider>
    </html>
  );
}
