'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './InteractiveElements.module.scss'
import { InteractiveItem, InteractiveElementsState } from './types'

export default function InteractiveElements() {
  const [isVisible, setIsVisible] = useState<InteractiveElementsState['isVisible']>(false)
  const [activeElement, setActiveElement] = useState<InteractiveElementsState['activeElement']>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const interactiveItems: InteractiveItem[] = [
    {
      id: 'rocket',
      title: 'Rocket Launch',
      description: 'Interactive rocket animation',
      icon: '🚀'
    },
    {
      id: 'satellite',
      title: 'Satellite Orbit',
      description: 'Real-time satellite tracking',
      icon: '🛰️'
    },
    {
      id: 'planet',
      title: 'Planet Explorer',
      description: 'Explore distant worlds',
      icon: '🪐'
    },
    {
      id: 'starship',
      title: 'Starship Mission',
      description: 'Future of space travel',
      icon: '🛸'
    }
  ]

  const handleElementClick = (id: string) => {
    setActiveElement(activeElement === id ? null : id)
  }

  return (
    <section className={styles.interactiveSection} ref={containerRef}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Interactive Space Elements</h2>
          <p>Click on elements to explore interactive features</p>
        </motion.div>

        <div className={styles.interactiveGrid}>
          {interactiveItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`${styles.interactiveItem} ${activeElement === item.id ? styles.active : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleElementClick(item.id)}
            >
              <div className={styles.itemIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              
              <AnimatePresence>
                {activeElement === item.id && (
                  <motion.div
                    className={styles.itemDetails}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.detailContent}>
                      <h4>Details for {item.title}</h4>
                      <p>This is an interactive element that demonstrates the capabilities of our space exploration platform.</p>
                      <button className="btn btn--primary">Learn More</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.floatingElements}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={styles.floatingElement} style={{ animationDelay: '0s' }}>⭐</div>
          <div className={styles.floatingElement} style={{ animationDelay: '1s' }}>🌍</div>
          <div className={styles.floatingElement} style={{ animationDelay: '2s' }}>🌙</div>
          <div className={styles.floatingElement} style={{ animationDelay: '3s' }}>☄️</div>
        </motion.div>
      </div>
    </section>
  )
}
