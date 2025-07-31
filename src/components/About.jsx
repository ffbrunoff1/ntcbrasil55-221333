import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Leaf } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        when: 'beforeChildren',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: 'Inovação Construtiva',
      description:
        'Utilizamos as mais recentes tecnologias e métodos para garantir eficiência e qualidade superior.',
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Equipe Especializada',
      description:
        'Nossos profissionais são altamente qualificados e dedicados a entregar resultados excepcionais.',
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: 'Sustentabilidade',
      description:
        'Compromisso com práticas sustentáveis que respeitam o meio ambiente e a comunidade.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={imageVariants}>
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/pexels-photo-3153201.jpeg"
              alt="Equipe NTC Brasil em reunião de planejamento"
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Sobre a <span className="text-primary">NTC Brasil</span>
            </h2>
            <p className="text-secondary/80 mb-6 leading-relaxed">
              Na NTC Brasil, nossa dedicação é transformar visões em realidade
              através de soluções inovadoras e sustentáveis na construção civil.
              Com anos de experiência, solidificamos nossa reputação ao entregar
              projetos que não apenas atendem, mas superam as expectativas de
              nossos clientes.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  custom={index}
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 bg-primary/10 rounded-full p-3">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary">
                      {feature.title}
                    </h3>
                    <p className="text-secondary/70 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
