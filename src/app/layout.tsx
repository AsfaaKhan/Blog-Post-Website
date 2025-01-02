
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer2 from "@/components/Footer";
import Head from "./head";
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head/>
      <body
        className={`${montserrat.className} bg-light dark:bg-dark `}>
          <Header />
          {children}
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
          <Footer2 />
      </body>
    </html>
  );
}
