import { useEffect } from 'react'

export function usePreventScroll(isActive: boolean) {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden'

      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [isActive])
}
