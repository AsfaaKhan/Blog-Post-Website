
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer2 from "@/components/Footer";
import Container from "@/components/Container";
import Headline from "@/components/Headline";
import Head from "./head";

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
        <Headline/>
          <Container>
          <Header />
          {children}
          </Container>
          <Footer2 />
      </body>
    </html>
  );
}
