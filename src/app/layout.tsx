
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer2 from "@/components/Footer";
// import Container from "@/components/Container";
// import Headline from "@/components/Headline";
import Head from "./head";
// app/layout.tsx or app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
        {/* <Headline/> */}
         
          <Header />
          {children}
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
          <Footer2 />
      </body>
    </html>
  );
}
