'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './Hero.module.scss'
import { HeroContent } from './types'

const defaultContent: HeroContent = {
  title: 'ПУТЕШЕСТВИЯ',
  subtitle: 'на красную планету',
  buttonText: 'Начать путешествие'
}

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {defaultContent.title}
            </motion.h1>
            
            <motion.p 
              className={styles.subtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {defaultContent.subtitle}
            </motion.p>
            
            <div className={styles.buttonContainer}>
              <motion.button 
                className={styles.ctaButton}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {defaultContent.buttonText}
              </motion.button>
              <motion.div
                className={styles.lineImage}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Image
                  src="/assets/line.png"
                  alt="Decorative Line"
                  width={406}
                  height={58}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
