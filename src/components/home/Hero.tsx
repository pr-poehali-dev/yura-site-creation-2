
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

/**
 * Героическая секция для главной страницы
 */
const Hero = () => {
  return (
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
  );
};

export default Hero;
