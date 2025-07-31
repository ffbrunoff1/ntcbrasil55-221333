import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      text: 'padre lebret 801 g05 bloco 03',
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      text: '+55 44 99104-0774',
      href: 'tel:+5544991040774',
    },
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      text: 'contato@ntcbrasil.com',
      href: 'mailto:contato@ntcbrasil.com',
    },
  ];

  return (
    <footer className="bg-secondary text-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="mb-4">
              <img
                className="h-14 w-auto bg-light p-2 rounded-md"
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754001024574_0.png"
                alt="NTC Brasil Logo"
              />
            </a>
            <p className="text-light/70 max-w-xs leading-relaxed">
              Construindo o futuro com inovação, qualidade e confiança.
            </p>
          </div>

          <div className="lg:col-start-3">
            <h3 className="text-lg font-semibold text-light mb-4 tracking-wider uppercase">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-light/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-light mb-4 tracking-wider uppercase">
              Contato
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center md:justify-start"
                >
                  <div className="flex-shrink-0">{item.icon}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="ml-3 text-light/70 hover:text-primary transition-colors duration-300"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="ml-3 text-light/70">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-light/50">
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
