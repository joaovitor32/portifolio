'use client'

import { motion } from 'framer-motion'

export interface Experience {
  company: string
  role: string
  period: string
  description: string
  website?: string
}

interface TimelineItemProps {
  experience: Experience
  index: number
  isActive: boolean
  isParentInView: boolean
  preferredDirection?: 'top' | 'bottom' | 'left' | 'right' | 'auto'
}

export function TimelineItem({
  experience,
  index,
  isActive,
  isParentInView,
  preferredDirection = 'auto',
}: TimelineItemProps) {
  return (
    <motion.div
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      className="flex-shrink-0 w-full px-4 snap-start"
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 mx-auto max-w-md"
        whileHover={{ y: -5 }}
        animate={
          isActive && isParentInView
            ? { scale: 1.02, y: -5 }
            : { scale: 1, y: 0 }
        }
      >
        <div className="flex items-center mb-3 justify-center">
          <span className="text-xs font-medium px-3 py-1 bg-blue-100 text-blue-500 rounded-full">
            {experience.period}
          </span>
        </div>

        <div className="flex items-center justify-center mb-1">
          <h3 className="text-xl font-bold text-gray-800 mr-2">
            {experience.company}
          </h3>
          {experience.website && (
            <a
              href={experience.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition-colors"
              aria-label={`Visitar site da ${experience.company}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          )}
        </div>

        <span className="text-blue-400 font-medium block mb-3 text-sm text-center">
          {experience.role}
        </span>
        <p className="text-gray-600 leading-relaxed text-sm text-center">
          {experience.description}
        </p>
      </motion.div>
    </motion.div>
  )
}
