'use client'

import { Experience, TimelineItem } from '@/globals/components'
import { useEffect, useRef, useState } from 'react'

import { useInView } from '@/globals/hooks/useInView'
import { motion } from 'framer-motion'

const experiences: Experience[] = [
  {
    company: 'Mundiale',
    role: 'Software Developer Júnior',
    period: 'Set 2021 – Jan 2022 (5 meses)',
    description:
      'Iniciei minha trajetória na Hackatona de 2021 e fui efetivado para atuar em projetos de software, desenvolvendo aplicações web com foco em performance e boas práticas de desenvolvimento.',
    website: 'https://www.mundiale.com.br',
  },
  {
    company: 'Mundiale',
    role: 'Software Developer Pleno',
    period: 'Fev 2022 – Jan 2023 (1 ano)',
    description:
      'Responsável pelo desenvolvimento e manutenção de um fluxo de checkout utilizado por mais de 80 empresas...',
    website: 'https://www.mundiale.com.br',
  },
  {
    company: 'Klooks Alegre',
    role: 'IT Solutions Architect',
    period: 'Dez 2023 – Ago 2024 (9 meses)',
    description:
      'Expansão da extração de dados via Golang, criação de arquiteturas escaláveis...',
    website: 'https://www.klooks.com.br',
  },
  {
    company: 'Trustee',
    role: 'Desenvolvedor Frontend Pleno',
    period: 'Ago 2024 – Jan 2025 (6 meses)',
    description:
      'Atuação no desenho de soluções de software utilizando Golang, criando arquiteturas escaláveis...',
    website: 'https://www.trusteebr.com/',
  },
  {
    company: 'Ubistart',
    role: 'Desenvolvedor Frontend Pleno',
    period: 'Jun 2025 – Presente',
    description:
      'Desenvolvimento de aplicações em um ambiente Microfrontend, utilizando module-federation...',
    website: 'https://www.ubistart.com',
  },
]

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextItem = () => {
    setActiveIndex(prev => (prev + 1) % experiences.length)
  }

  const prevItem = () => {
    setActiveIndex(prev => (prev - 1 + experiences.length) % experiences.length)
  }

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.clientWidth * activeIndex,
        behavior: 'smooth',
      })
    }
  }, [activeIndex])

  const {
    ref: inViewRef,
    isInView,
    animationProps,
  } = useInView({
    threshold: 0.3,
    preferredDirection: 'left',
  })

  return (
    <motion.div
      ref={inViewRef}
      {...animationProps}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full py-12 px-4 relative"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-700">
        Minha <span className="text-blue-400">Jornada Profissional</span>
      </h2>

      {/* Linha horizontal com pontos */}
      <div className="relative h-16 mb-8 mx-12">
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-blue-200"></div>

        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-2">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-blue-500 scale-125' : 'bg-blue-300'
              }`}
            >
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-500 whitespace-nowrap">
                {exp.period.split(' – ')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Setas de navegação */}
        <button
          onClick={prevItem}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-10 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200 transition-colors"
          aria-label="Experiência anterior"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button
          onClick={nextItem}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-10 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200 transition-colors"
          aria-label="Próxima experiência"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Container de cards */}
      <div className="relative">
        <div
          ref={containerRef}
          className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth"
        >
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              experience={exp}
              index={index}
              isActive={index === activeIndex}
              isParentInView={true}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
