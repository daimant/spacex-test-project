'use client'

import { motion } from 'framer-motion'
import styles from './page.module.scss'
import { Technology } from './types'

export default function Technologies() {
  const technologies: Technology[] = [
    {
      id: 'falcon9',
      name: 'Falcon 9',
      description: 'Первая в мире ракета-носитель многоразового использования',
      features: ['Многоразовая первая ступень', 'Двигатели Merlin', 'Грузоподъемность до 22.8 тонн'],
      image: '/assets/falcon9.jpg'
    },
    {
      id: 'starship',
      name: 'Starship',
      description: 'Самый мощный космический корабль в истории',
      features: ['Полностью многоразовый', 'Двигатели Raptor', 'Грузоподъемность до 100 тонн'],
      image: '/assets/starship.jpg'
    },
    {
      id: 'dragon',
      name: 'Dragon',
      description: 'Космический корабль для доставки грузов и экипажа',
      features: ['Автоматическая стыковка', 'Возвращение на Землю', 'Безопасность экипажа'],
      image: '/assets/dragon.jpg'
    },
    {
      id: 'starlink',
      name: 'Starlink',
      description: 'Спутниковая система для глобального интернета',
      features: ['Низкая орбита', 'Высокая скорость', 'Глобальное покрытие'],
      image: '/assets/starlink.jpg'
    }
  ]

  return (
    <div className={styles.technologiesPage}>
      <div className="container">
        <motion.div
          className={styles.pageHeader}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Технологии SpaceX</h1>
          <p>Инновационные решения для освоения космоса</p>
        </motion.div>

        <div className={styles.technologiesGrid}>
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              className={styles.technologyCard}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.techImage}>
                <div className={styles.placeholderImage}>
                  {tech.name.charAt(0)}
                </div>
              </div>
              <div className={styles.techContent}>
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
                <ul>
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
