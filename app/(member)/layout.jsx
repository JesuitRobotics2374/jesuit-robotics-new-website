import { Inter } from "next/font/google";
import MemberNavbar from "./member/MemberNavbar";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Robotics Member",
  description: "Team 2374 member's site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex h-screen w-full flex-col`}>
        <MemberNavbar />
        <main className=" flex-1 overflow-y-scroll p-5">{children}</main>
      </body>
    </html>
  );
}
