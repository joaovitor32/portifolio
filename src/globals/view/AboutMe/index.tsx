'use client'

import { useInView } from '@/globals/hooks/useInView'
import { motion } from 'framer-motion'

export default function AboutMe() {
  const { ref, animationProps } = useInView({
    threshold: 0.4,
    preferredDirection: 'right',
  })

  return (
    <motion.section
      id="sobre"
      ref={ref}
      {...animationProps}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-3xl mx-auto text-center py-4 px-6"
    >
      <p className="text-gray-500 mb-2">Quem sou eu</p>
      <h2 className="text-3xl font-bold text-gray-700 mb-6">Minha história</h2>
      <p className="text-gray-600 leading-relaxed">
        Desenvolvedor Fullstack, com mais de 3 anos de experiência, atuando em
        <span className="font-medium text-gray-700"> Frontend e Backend</span>.
        Tenho paixão por resolver problemas complexos através da tecnologia,
        criando soluções escaláveis e eficientes. Entre minhas conquistas,
        destaque para a criação de um sistema de checkout utilizado por mais de
        80 empresas, que aumentou as vendas em 15%. Adoro explorar novas
        tecnologias, otimizar processos e transformar ideias em produtos
        funcionais e impactantes.
      </p>
    </motion.section>
  )
}
