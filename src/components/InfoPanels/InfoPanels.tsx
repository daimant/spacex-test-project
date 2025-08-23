'use client'

import { motion } from 'framer-motion'
import styles from './InfoPanels.module.scss'

export default function InfoPanels() {
  const panels = [
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
      {panels.map((panel) => (
        <motion.div
          key={panel.id}
          className={`${styles.panel} ${styles[panel.id]}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: panel.delay }}
          whileHover={{ scale: 1.05 }}
        >
          <span className={styles.text}>{panel.text}</span>
          <small className={styles.subtext}>{panel.subtext}</small>
          <strong className={styles.value}>{panel.value}</strong>
        </motion.div>
      ))}
    </div>
  )
}
