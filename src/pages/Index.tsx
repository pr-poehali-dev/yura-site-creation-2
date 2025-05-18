
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Навигационная панель */}
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

      {/* Главная героическая секция */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-800">
                Запустите свой сайт{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                  за минуту
                </span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 md:pr-12">
                Поехали! — это ваш личный программист, который создает
                современные сайты в 30 раз быстрее обычного.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-violet-600 hover:bg-violet-700 text-white font-bold"
                >
                  Начать бесплатно
                  <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-violet-600 text-violet-600 hover:bg-violet-50"
                >
                  Узнать больше
                </Button>
              </div>
              <div className="flex items-center text-slate-500 text-sm">
                <Icon name="ShieldCheck" className="mr-2 h-5 w-5 text-green-500" />
                <span>Более 1000+ проектов запущено</span>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 transform rotate-2"></div>
                <img
                  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=800&h=600"
                  alt="Запуск веб-проекта"
                  className="relative z-10 rounded-xl shadow-xl object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section
        id="services"
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Мы предлагаем комплексное решение для создания сайтов любой сложности,
              экономя ваше время и ресурсы.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Zap",
                title: "Молниеносная скорость",
                description:
                  "Создаем сайты в 30 раз быстрее обычной разработки благодаря ИИ-технологиям."
              },
              {
                icon: "Code",
                title: "Чистый код",
                description:
                  "Получаете качественный, оптимизированный код, который легко поддерживать."
              },
              {
                icon: "PaintBucket",
                title: "Уникальный дизайн",
                description:
                  "Разрабатываем индивидуальный дизайн, который выделит ваш бренд среди конкурентов."
              },
              {
                icon: "LayoutGrid",
                title: "Адаптивность",
                description:
                  "Все сайты идеально работают на любых устройствах от смартфонов до десктопов."
              },
              {
                icon: "Rocket",
                title: "Быстрый запуск",
                description:
                  "Помогаем быстро запустить проект и начать привлекать клиентов."
              },
              {
                icon: "HeartHandshake",
                title: "Поддержка 24/7",
                description:
                  "Наша команда всегда готова помочь с любыми вопросами по вашему проекту."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:bg-white group"
              >
                <div className="w-14 h-14 rounded-lg mb-6 flex items-center justify-center bg-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                  <Icon name={item.icon} className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Секция о нас */}
      <section id="about" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 transform -rotate-2"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600"
                  alt="Наша команда"
                  className="relative z-10 rounded-xl shadow-xl object-cover w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
                Мы создаем будущее веб-разработки
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Поехали! — это инновационная платформа, использующая передовые
                технологии искусственного интеллекта для создания
                высококачественных веб-сайтов с минимальными затратами времени.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Наша миссия — сделать процесс создания сайтов доступным для
                каждого, независимо от уровня технических знаний.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "1000+", label: "Реализованных проектов" },
                  { number: "98%", label: "Довольных клиентов" },
                  { number: "24/7", label: "Техническая поддержка" },
                  { number: "30x", label: "Ускорение разработки" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-violet-600 font-bold text-2xl">
                      {stat.number}
                    </div>
                    <div className="text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция призыва к действию */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы запустить свой проект?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Присоединяйтесь к тысячам довольных клиентов, которые уже оценили
            преимущества нашей платформы.
          </p>
          <Button
            size="lg"
            className="bg-white text-violet-600 hover:bg-slate-100 font-bold px-8"
          >
            Начать бесплатно
          </Button>
        </div>
      </section>

      {/* Футер */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Поехали!</h3>
              <p className="mb-4">
                Инновационная платформа для быстрой и качественной веб-разработки.
              </p>
              <div className="flex space-x-4">
                {["Twitter", "Facebook", "Instagram", "Linkedin"].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="hover:text-white transition-colors"
                    aria-label={social}
                  >
                    <Icon name={social} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2">
                {["Лендинги", "Интернет-магазины", "Сайты-визитки", "Порталы"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Компания</h4>
              <ul className="space-y-2">
                {["О нас", "Команда", "Карьера", "Блог", "Контакты"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Связаться</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Icon name="MapPin" className="h-5 w-5 mr-2 mt-0.5" />
                  <span>Москва, ул. Примерная, 123</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="h-5 w-5 mr-2" />
                  <span>info@poehali.dev</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Поехали! Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
