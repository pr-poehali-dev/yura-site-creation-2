
import Icon from "@/components/ui/icon";
import { type IconName } from "@/types/icon";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  name: IconName;
  href: string;
}

interface ContactInfo {
  icon: IconName;
  text: string;
}

/**
 * Компонент футера сайта
 */
const Footer = () => {
  // Массивы данных для футера
  const socialLinks: SocialLink[] = [
    { name: "Twitter", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Linkedin", href: "#" }
  ];

  const productLinks: FooterLink[] = [
    { label: "Лендинги", href: "#" },
    { label: "Интернет-магазины", href: "#" },
    { label: "Сайты-визитки", href: "#" },
    { label: "Порталы", href: "#" }
  ];

  const companyLinks: FooterLink[] = [
    { label: "О нас", href: "#" },
    { label: "Команда", href: "#" },
    { label: "Карьера", href: "#" },
    { label: "Блог", href: "#" },
    { label: "Контакты", href: "#" }
  ];

  const contactInfo: ContactInfo[] = [
    { icon: "MapPin", text: "Москва, ул. Примерная, 123" },
    { icon: "Phone", text: "+7 (999) 123-45-67" },
    { icon: "Mail", text: "info@poehali.dev" }
  ];

  const legalLinks: FooterLink[] = [
    { label: "Политика конфиденциальности", href: "#" },
    { label: "Условия использования", href: "#" }
  ];

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Поехали!</h3>
            <p className="mb-4">
              Инновационная платформа для быстрой и качественной веб-разработки.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <Icon name={social.name} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Продукты</h4>
            <ul className="space-y-2">
              {productLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Компания</h4>
            <ul className="space-y-2">
              {companyLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Связаться</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Icon name={item.icon} className="h-5 w-5 mr-2 mt-0.5" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Поехали! Все права защищены.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalLinks.map((item, index) => (
              <a key={index} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
