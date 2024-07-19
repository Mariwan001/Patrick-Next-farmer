import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-950">
      <body className={inter.className}>
        <div className=" mx-auto">
            <div className="leading-relaxed text-slate-200 antialiased selection:bg-teal-300 selection:text-teal-900">
              <div className="z-[-10] inset-0
               bg-[radial-gradient(circle_500px_at_50%_200px,#034a4391,transparent)]"></div>
              {children}
              <Footer />
            </div>
        </div>
        </body>
    </html>
  );
}
