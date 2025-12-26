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
    <>
    <Header />
    <main >
        {children}
    </main>
    <Footer />
    </>
  )
}