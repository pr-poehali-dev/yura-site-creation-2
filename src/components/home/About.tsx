
interface Stat {
  number: string;
  label: string;
}

/**
 * Секция о компании с описанием и статистикой
 */
const About = () => {
  // Массив статистических данных
  const stats: Stat[] = [
    { number: "1000+", label: "Реализованных проектов" },
    { number: "98%", label: "Довольных клиентов" },
    { number: "24/7", label: "Техническая поддержка" },
    { number: "30x", label: "Ускорение разработки" }
  ];

  return (
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
              {stats.map((stat, index) => (
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
  );
};

export default About;
