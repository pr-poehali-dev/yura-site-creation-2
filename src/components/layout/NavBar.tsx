
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Навигационная панель сайта с эффектом при прокрутке
 */
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-violet-600">
          Поехали!
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-slate-600 hover:text-violet-600 transition-colors"
          >
            Главная
          </Link>
          <Link
            to="/#services"
            className="text-slate-600 hover:text-violet-600 transition-colors"
          >
            Услуги
          </Link>
          <Link
            to="/#about"
            className="text-slate-600 hover:text-violet-600 transition-colors"
          >
            О нас
          </Link>
          <Link
            to="/#contact"
            className="text-slate-600 hover:text-violet-600 transition-colors"
          >
            Контакты
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="hidden md:flex hover:bg-violet-50 hover:text-violet-600"
          >
            Войти
          </Button>
          <Button className="bg-violet-600 hover:bg-violet-700">
            Связаться
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Меню"
          >
            <Icon name="Menu" className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
