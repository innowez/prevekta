import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import localFont from "next/font/local";
import { StoreProvider } from "@/provider/store-provider";

const Duplet = localFont({
  src: "../../public/fonts/Duplet-Regular.otf",
  // variable: '--font-duplet'
});

const Atyp = localFont({
  src: "../../public/fonts/AtypDisplayTRIAL-Regular.otf",
  // variable: '--font-atyp'
});

const AtypBold = localFont({
  src: "../../public/fonts/AtypText-Bold.otf",
  // variable: '--font-atyp'
});

// const TestAtyp = localFont({
//   src: '../../public/fonts/AtypTEST-OTF.otf',
//   // variable: '--font-test'
// });

// console.log(AtypTest, "comman is this", Atyp);

// C:\Users\danip\Documents\WEZ-Product\prevekta\public\fonts\AtypTEST.ttf
// C:\Users\danip\Documents\Projects\prevekta-frontend\public\fonts\.otf
// C:\Users\danip\Documents\Projects\prevekta-frontend\public\fonts\Duplet-Regular.otf

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Prevekta",
  description: "Ayurveda for Modern Living",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${Atyp.className} ${AtypBold.className} ${Duplet.className}  `}
    >
      <body>
        <StoreProvider>
          <Header />
          {children}
          <div className=" p-3">
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
