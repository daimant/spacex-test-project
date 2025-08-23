'use client'

import { motion } from 'framer-motion'
import styles from './Footer.module.scss'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Press', href: '#press' },
        { name: 'Blog', href: '#blog' }
      ]
    },
    {
      title: 'Missions',
      links: [
        { name: 'Falcon 9', href: '#falcon9' },
        { name: 'Falcon Heavy', href: '#falcon-heavy' },
        { name: 'Starship', href: '#starship' },
        { name: 'Dragon', href: '#dragon' }
      ]
    },
    {
      title: 'Technology',
      links: [
        { name: 'Rocket Engines', href: '#engines' },
        { name: 'Spacecraft', href: '#spacecraft' },
        { name: 'Launch Sites', href: '#launch-sites' },
        { name: 'Innovation', href: '#innovation' }
      ]
    },
    {
      title: 'Contact',
      links: [
        { name: 'Support', href: '#support' },
        { name: 'Media Inquiries', href: '#media' },
        { name: 'Partnerships', href: '#partnerships' },
        { name: 'General Info', href: '#info' }
      ]
    }
  ]

  return (
    <footer className={styles.footer}>
      <div className="container">
        <motion.div
          className={styles.footerContent}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.footerMain}>
            <motion.div
              className={styles.footerBrand}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>SPACEX</h3>
              <p>Making humanity multiplanetary</p>
              <div className={styles.socialLinks}>
                <a href="#twitter" aria-label="Twitter">𝕏</a>
                <a href="#instagram" aria-label="Instagram">📷</a>
                <a href="#youtube" aria-label="YouTube">▶️</a>
                <a href="#linkedin" aria-label="LinkedIn">💼</a>
              </div>
            </motion.div>

            <div className={styles.footerLinks}>
              {footerLinks.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  className={styles.linkSection}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4>{section.title}</h4>
                  <ul>
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className={styles.footerBottom}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.footerBottomContent}>
              <p>&copy; {currentYear} SpaceX. All rights reserved.</p>
              <div className={styles.legalLinks}>
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#cookies">Cookie Policy</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
