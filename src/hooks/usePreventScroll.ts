import { useEffect } from 'react'

export function usePreventScroll(isActive: boolean) {
  useEffect(() => {
    if (isActive) {
      // Сохраняем текущую позицию прокрутки
      const scrollY = window.scrollY
      
      // Блокируем прокрутку
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      
      return () => {
        // Восстанавливаем прокрутку
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        
        // Восстанавливаем позицию прокрутки
        window.scrollTo(0, scrollY)
      }
    }
  }, [isActive])
}
