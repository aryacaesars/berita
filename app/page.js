import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import LatestArticles from "./components/LatestArticles"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="container py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <LatestArticles />
            </div>
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

