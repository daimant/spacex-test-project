'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './Navigation.module.scss'
import { MenuItem, NavigationState } from './types'
import { useClickOutside, usePreventScroll } from '@/hooks'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState<NavigationState['isMenuOpen']>(false)
  const pathname = usePathname()
  
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Используем хук useClickOutside для закрытия мобильного меню
  useClickOutside(mobileMenuRef, closeMenu, [mobileMenuButtonRef])

  // Обработка нажатия клавиши Escape
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [isMenuOpen])

  // Блокируем прокрутку при открытом мобильном меню
  usePreventScroll(isMenuOpen)

  const menuItems: MenuItem[] = [
    { name: 'Главная', href: '/', key: 'home' },
    { name: 'Технологии', href: '/technologies', key: 'technologies' },
    { name: 'График полетов', href: '/flight-schedule', key: 'flight-schedule' },
    { name: 'Гарантии', href: '/guarantees', key: 'guarantees' },
    { name: 'О компании', href: '/about', key: 'about' },
    { name: 'Контакты', href: '/contacts', key: 'contacts' }
  ].map(item => ({
    ...item,
    isActive: pathname === item.href
  }))

  return (
    <nav className={styles.navigation}>
      <div className="container">
        <div className={styles.navContent}>
          <motion.div
            className={styles.logo}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.edgeCorner} style={{ top: 0, left: 0 }}>
              <Image
                src="/assets/edge1.png"
                alt="Edge Corner 1"
                width={7}
                height={7}
              />
            </div>
            <div className={styles.edgeCorner} style={{ top: 0, right: 0 }}>
              <Image
                src="/assets/edge2.png"
                alt="Edge Corner 2"
                width={7}
                height={7}
              />
            </div>
            <div className={styles.edgeCorner} style={{ bottom: 0, left: 0 }}>
              <Image
                src="/assets/edge3.png"
                alt="Edge Corner 3"
                width={7}
                height={7}
              />
            </div>
            <div className={styles.edgeCorner} style={{ bottom: 0, right: 0 }}>
              <Image
                src="/assets/edge4.png"
                alt="Edge Corner 4"
                width={7}
                height={7}
              />
            </div>
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="SpaceX Logo"
                width={274}
                height={34}
                priority
              />
            </Link>
          </motion.div>

          <div className={styles.desktopMenu}>
            {menuItems.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Link 
                  href={item.href} 
                  className={`${styles.menuItem} ${item.isActive ? styles.active : ''}`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button
            ref={mobileMenuButtonRef}
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </motion.button>
        </div>

        {isMenuOpen && (
          <AnimatePresence>
            <motion.div
              ref={mobileMenuRef}
              className={styles.mobileMenu}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`${styles.mobileMenuItem} ${item.isActive ? styles.active : ''}`}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </nav>
  )
}
