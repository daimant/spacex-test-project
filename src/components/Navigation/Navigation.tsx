'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import styles from './Navigation.module.scss'
import { MenuItem, NavigationState } from './types'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState<NavigationState['isMenuOpen']>(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems: MenuItem[] = [
    { name: 'Главная', href: '/', key: 'home' },
    { name: 'Технологии', href: '/technologies', key: 'technologies' },
    { name: 'График полетов', href: '/flight-schedule', key: 'flight-schedule' },
    { name: 'Гарантии', href: '/guarantees', key: 'guarantees' },
    { name: 'О компании', href: '/about', key: 'about' },
    { name: 'Контакты', href: '/contacts', key: 'contacts' }
  ]

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
            <Link href="/">SPACEX</Link>
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
                <Link href={item.href} className={styles.menuItem}>
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button
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

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={styles.mobileMenuItem}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
