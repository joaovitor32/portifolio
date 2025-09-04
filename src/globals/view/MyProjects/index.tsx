'use client'

import { Project, ProjectCard } from '@/globals/components'

import { useInView } from '@/globals/hooks/useInView'
import { motion } from 'framer-motion'

export default function MyProjects() {
  const projects: Project[] = [
    {
      title: 'ClassBox',
      type: 'Aplicativo',
      technologies: ['React Native', 'Redux', 'Firebase', 'API Rest'],
      image: '/classbox.png',
      link: '#',
      description:
        'ClassBox é um aplicativo educacional que organiza conteúdos de cursos, permite acompanhamento de tarefas e envia notificações de atividades importantes para os estudantes.',
    },
  ]

  const {
    ref: inViewRef,
    isInView,
    animationProps,
  } = useInView({
    threshold: 0.3,
    preferredDirection: 'left',
  })

  return (
    <section className="w-full py-16 px-6">
      <motion.div
        ref={inViewRef}
        {...animationProps}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12">
            <span className="block text-sm text-gray-500 mb-2">
              Conheça meus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Projetos
            </h2>
          </div>

          {/* Container de projetos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
