'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './Hero.module.scss'
import { HeroContent } from './types'

const defaultContent: HeroContent = {
  title: 'ПУТЕШЕСТВИЯ',
  subtitle: 'на красную планету',
  buttonText: 'Начать путешествие',
  logoAlt: 'SpaceX Logo'
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
            <motion.div 
              className={styles.logo}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Image
                src="/assets/logo.png"
                alt={defaultContent.logoAlt}
                width={200}
                height={80}
                priority
              />
            </motion.div>
            
            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {defaultContent.title}
            </motion.h1>
            
            <motion.p 
              className={styles.subtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {defaultContent.subtitle}
            </motion.p>
            
            <motion.button 
              className={styles.ctaButton}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {defaultContent.buttonText}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
