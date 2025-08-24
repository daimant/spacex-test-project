import { useEffect, RefObject } from 'react'

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
  excludeRefs?: RefObject<HTMLElement | null>[]
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node
      
      if (!ref.current || ref.current.contains(target)) {
        return
      }
      
      if (excludeRefs) {
        for (const excludeRef of excludeRefs) {
          if (excludeRef.current && excludeRef.current.contains(target)) {
            return
          }
        }
      }
      
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler, excludeRefs])
}
