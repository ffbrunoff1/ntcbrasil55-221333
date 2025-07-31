import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building, Paintbrush, ClipboardCheck } from 'lucide-react';

export default function Services() {
  const servicesData = [
    {
      icon: <Home className="w-10 h-10 text-primary" />,
      title: 'Construção Residencial',
      description:
        'Criamos lares que combinam conforto, design moderno e funcionalidade para você e sua família.',
    },
    {
      icon: <Building className="w-10 h-10 text-primary" />,
      title: 'Construção Comercial',
      description:
        'Desenvolvemos espaços comerciais e corporativos que potencializam negócios e inspiram produtividade.',
    },
    {
      icon: <Paintbrush className="w-10 h-10 text-primary" />,
      title: 'Reformas e Renovações',
      description:
        'Transformamos e modernizamos ambientes, valorizando seu imóvel com qualidade e agilidade.',
    },
    {
      icon: <ClipboardCheck className="w-10 h-10 text-primary" />,
      title: 'Gerenciamento de Projetos',
      description:
        'Coordenamos todas as etapas da sua obra, garantindo o cumprimento de prazos e orçamentos.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
            Nossas Soluções
          </h2>
          <p className="mt-4 text-lg text-secondary/70 max-w-2xl mx-auto">
            Oferecemos um portfólio completo de serviços para atender a todas as
            suas necessidades no setor da construção.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-light p-8 rounded-xl shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col"
              variants={cardVariants}
            >
              <div className="flex-shrink-0 bg-primary/10 rounded-full p-4 w-fit mb-6">
                {service.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
