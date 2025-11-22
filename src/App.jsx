import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TopSelling from "./components/TopSelling.jsx";
import Reviews from "./components/Reviews.jsx";
import BestOf from "./components/O2Plant.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen text-white bg-[#1B2316] bg-flora-bg bg-leaf-gradient">
      <Navbar />
      <main>
        <Hero />
        <TopSelling />
        <Reviews />
        <BestOf />
      </main>
      <Footer />
    </div>
  );
}
