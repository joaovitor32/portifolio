'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { CONTACT } from '@/globals/constants'
import { useInView } from '@/globals/hooks/useInView'
import { motion } from 'framer-motion'

export default function ProfileCard() {
  const { ref, animationProps } = useInView({
    threshold: 0.4,
    preferredDirection: 'bottom',
  })

  return (
    <motion.div
      id="inicio"
      ref={ref}
      {...animationProps}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-lg mx-auto"
    >
      {/* Informação principal - 60% */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-3/5">
        <img
          src="/perfil.png"
          alt="João Vitor"
          className="w-44 h-44 rounded-full object-cover"
        />
        <h2 className="text-2xl font-bold">João Vitor Muniz Lopes</h2>
        <p className="text-gray-500">Desenvolvedor Web e Mobile</p>
        <p className="text-gray-400 text-sm">
          Typescript | React Native | React Next.js | Node.js | Golang | AWS |
          Docker | PostgreSQL | Prisma | Next-Auth | React Query | Cypress |
          Jest | Estudando Java
        </p>

        {/* Redes sociais */}
        <div className="flex space-x-4 mt-2">
          <a
            href={CONTACT.linkedin}
            className="text-gray-700 hover:text-blue-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={CONTACT.github}
            className="text-gray-700 hover:text-blue-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      {/* Estatísticas e ações - 40% */}
      <div className="flex flex-col items-center md:items-end space-y-4 mt-6 md:mt-0 md:w-2/5">
        <div className="flex space-x-6 text-center">
          <div>
            <span className="block text-xl font-bold">+5</span>
            <span className="text-gray-500 text-sm">Projetos realizados</span>
          </div>
          <div>
            <span className="block text-xl font-bold">3</span>
            <span className="text-gray-500 text-sm">Anos de Experiência</span>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="flex space-x-4 mt-4">
          <a
            href={`https://wa.me/${CONTACT.whatsappNumber}?text=Olá%20João%20Vitor!`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
          >
            Contato
          </a>
          <a
            href={CONTACT.resume}
            download
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Download do Currículo
          </a>
        </div>
      </div>
    </motion.div>
  )
}
