import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Montso | Personal Portfolio",
  description:
    "Montso Ernest is a Broadcasting Graphics Logic builder with 5 years expirience and a C#, JavaScript Full-stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div
          className="bg-[#CBC3E3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] 
         rounded-full blur-[10rem] sm:w-[68.75rem]"
        ></div>
        <div
          className="bg-[#D8BFD8] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] 
        rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "
        ></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="bottom-center" />
          <Footer />
        </ActiveSectionContextProvider>
        <div className="sm:hidden fixed bottom-5 right-5 bg-white/80 backdrop-blur-[0.5rem] rounded-full">
          <ThemeSwitch />
        </div>
      </body>
    </html>
  );
}
