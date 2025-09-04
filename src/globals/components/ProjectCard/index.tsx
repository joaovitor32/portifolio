'use client'

interface Project {
  title: string
  type: string
  technologies: string[]
  image?: string
  link?: string
  description?: string
}

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 max-w-sm mx-auto hover:-translate-y-1 transform">
      {/* Imagem */}
      <div className="relative">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover object-top rounded-t-xl"
          />
        )}
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
          {project.type}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {project.title}
        </h3>
        {project.description && (
          <p className="text-sm text-gray-700 mb-3">{project.description}</p>
        )}
        <p className="text-sm text-gray-600 mb-3">
          <span className="font-semibold">Tecnologias usadas:</span>{' '}
          {project.technologies.join(', ')}
        </p>
        {project.link && (
          <a
            href={project.link}
            className="inline-flex items-center text-blue-500 text-sm font-medium hover:underline"
          >
            Saiba mais
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}

export type { Project }
