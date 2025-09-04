// hooks/useInView.ts
import { useCallback, useEffect, useRef, useState } from 'react'

export type Direction = 'top' | 'bottom' | 'left' | 'right' | 'auto' | 'none'

interface UseInViewOptions {
  threshold?: number
  triggerOnce?: boolean
  preferredDirection?: Direction // Nova prop para direção preferencial
}

interface UseInViewResult {
  ref: (node: HTMLElement | null) => void
  isInView: boolean
  direction: Direction
  animationProps: {
    initial: object
    animate: object
  }
}

export function useInView({
  threshold = 0.2,
  triggerOnce = true,
  preferredDirection = 'auto', // Valor padrão: detecta automaticamente
}: UseInViewOptions = {}): UseInViewResult {
  const [isInView, setIsInView] = useState(false)
  const [detectedDirection, setDetectedDirection] = useState<Direction>('none')
  const [node, setNode] = useState<HTMLElement | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)

  const ref = useCallback((node: HTMLElement | null) => {
    setNode(node)
  }, [])

  // Função para obter as propriedades de animação
  const getAnimationProps = useCallback((): {
    initial: object
    animate: object
  } => {
    // Usa a direção preferencial se especificada, caso contrário usa a detectada
    const directionToUse =
      preferredDirection !== 'auto' ? preferredDirection : detectedDirection

    switch (directionToUse) {
      case 'left':
        return {
          initial: { opacity: 0, x: -100 },
          animate: isInView ? { opacity: 1, x: 0 } : {},
        }
      case 'right':
        return {
          initial: { opacity: 0, x: 100 },
          animate: isInView ? { opacity: 1, x: 0 } : {},
        }
      case 'top':
        return {
          initial: { opacity: 0, y: -100 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
        }
      case 'bottom':
        return {
          initial: { opacity: 0, y: 100 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
        }
      default:
        return {
          initial: { opacity: 0 },
          animate: isInView ? { opacity: 1 } : {},
        }
    }
  }, [preferredDirection, detectedDirection, isInView])

  useEffect(() => {
    if (!node) return

    if (observer.current) {
      observer.current.disconnect()
    }

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const entryDirection = getEntryDirection(entry)
          setIsInView(true)
          setDetectedDirection(entryDirection)

          if (triggerOnce && observer.current) {
            observer.current.unobserve(entry.target)
          }
        } else if (!triggerOnce) {
          setIsInView(false)
          setDetectedDirection('none')
        }
      },
      { threshold },
    )

    observer.current.observe(node)

    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [node, threshold, triggerOnce])

  const animationProps = getAnimationProps()

  return {
    ref,
    isInView,
    direction:
      preferredDirection !== 'auto' ? preferredDirection : detectedDirection,
    animationProps,
  }
}

function getEntryDirection(entry: IntersectionObserverEntry): Direction {
  const rootBounds = entry.rootBounds
  const boundingRect = entry.boundingClientRect

  if (!rootBounds) return 'none'

  // Calcula de qual direção o elemento está entrando
  const isEnteringFromLeft =
    boundingRect.left < rootBounds.left && boundingRect.right > rootBounds.left
  const isEnteringFromRight =
    boundingRect.right > rootBounds.right &&
    boundingRect.left < rootBounds.right
  const isEnteringFromTop =
    boundingRect.top < rootBounds.top && boundingRect.bottom > rootBounds.top
  const isEnteringFromBottom =
    boundingRect.bottom > rootBounds.bottom &&
    boundingRect.top < rootBounds.bottom

  if (isEnteringFromLeft) return 'left'
  if (isEnteringFromRight) return 'right'
  if (isEnteringFromTop) return 'top'
  if (isEnteringFromBottom) return 'bottom'

  return 'none'
}
