import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary opacity-10 clip-path-polygon-[0_0,_100%_0,_100%_80%,_0_100%]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-secondary leading-tight mb-4"
            variants={itemVariants}
          >
            Construímos o futuro, <span className="text-primary">hoje.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-secondary/80 max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Excelência e inovação em cada projeto de construção. Transformamos
            sonhos em realidade com construção de qualidade.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-light font-bold rounded-lg shadow-lg hover:bg-secondary transition-all duration-300 transform hover:scale-105"
            >
              Fale com um especialista
              <MoveRight className="ml-3 h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <a href="#about" aria-label="Rolar para baixo">
          <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center items-start p-1">
            <motion.div
              className="w-1 h-3 bg-secondary rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            ></motion.div>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
