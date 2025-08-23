'use client'

import { motion } from 'framer-motion'
import styles from './InfoPanels.module.scss'
import { InfoPanel } from './types'

export default function InfoPanels() {
  const panels: InfoPanel[] = [
    {
      id: 'left-top',
      text: 'мы',
      subtext: 'на рынке',
      value: '1',
      delay: 0.2
    },
    {
      id: 'left-bottom',
      text: 'календари за',
      subtext: 'в подарок',
      value: '2001',
      valueSmall: 'г.',
      delay: 0.4
    },
    {
      id: 'right-top',
      text: 'гарантируем',
      subtext: 'безопасность',
      value: '50%',
      delay: 0.6
    },
    {
      id: 'right-bottom',
      text: 'путешествие',
      subtext: 'дней',
      value: '597',
      delay: 0.8
    }
  ]

  return (
    <div className={styles.infoPanels}>
      <div className={styles.panelsGrid}>
        {panels.map((panel) => (
          <motion.div
            key={panel.id}
            className={`${styles.panel} ${styles[panel.id]}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: panel.delay }}
          >
            <span className={styles.label}>{panel.text}</span>
            <span className={styles.valueContainer}>
              <strong className={styles.value}>{panel.value}</strong>
              <strong className={styles.valueSmall}>{panel.valueSmall}</strong>
            </span>
            <small className={styles.label}>{panel.subtext}</small>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
