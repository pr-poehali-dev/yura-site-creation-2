
import { Button } from "@/components/ui/button";

/**
 * Секция призыва к действию
 */
const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
