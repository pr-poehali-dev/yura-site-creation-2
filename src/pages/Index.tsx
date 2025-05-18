import NavBar from "@/components/layout/NavBar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import About from "@/components/home/About";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/layout/Footer";

/**
 * Главная страница сайта
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <NavBar />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
