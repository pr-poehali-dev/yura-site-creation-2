
import Icon from "@/components/ui/icon";
import { type IconName } from "@/types/icon";

// Типы данных для фичей
interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

/**
 * Секция с преимуществами сервиса
 */
const Features = () => {
  // Массив преимуществ сервиса
  const features: Feature[] = [
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
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
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
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:bg-white group"
            >
              <div className="w-14 h-14 rounded-lg mb-6 flex items-center justify-center bg-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                <Icon name={feature.icon} className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
