import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainmono = JetBrains_Mono({ subsets: ["latin"],weight:["100","200","300","400","500","600",
  "700","800"],
  variable:'--font-jetbrainsMono'
 });

export const metadata = {
  title: "Abdou Portfolio",
  description: "Professional Computer Science Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainmono.variable}>
        <Header/>
        <StairTransition/>
        <PageTransition>
        {children}
        </PageTransition>
        </body>
    </html>
  );
}
