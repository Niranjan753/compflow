import { Metadata } from "next";
import Header from "../../components/Landing/Header";
import Footer from "../../components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Compflow",
    template: "Compflow",
  },
  description: "Compflow is a UI library designed for Berlin",
}

export default function HomeLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="bg-[#121212]">
    <Header />
    <main className="min-h-screen text-white">
        {children}
    </main>
    <Footer />
    </div>
  )
}