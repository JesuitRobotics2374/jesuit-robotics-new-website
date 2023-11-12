import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jesuit Team 2374",
  description:
    "Team 2374 Crusaderbots is a FIRST Robotics Competition Team based out of Jesuit High School, in Portland, Oregon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full overflow-x-hidden`}>
        <Navbar />
        <main className="min-h-[85vh] w-full overflow-clip p-10">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
