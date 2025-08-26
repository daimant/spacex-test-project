'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './page.module.scss'
import { ContactFormData, ContactInfo, SocialLink } from './types'

export default function Contacts() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData)
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo: ContactInfo[] = [
    {
      icon: '📍',
      title: 'Адрес',
      content: '1 Rocket Road, Hawthorne, CA 90250, США'
    },
    {
      icon: '📧',
      title: 'Email',
      content: 'info@spacex.com'
    },
    {
      icon: '📞',
      title: 'Телефон',
      content: '+1 (310) 363-6000'
    },
    {
      icon: '🌐',
      title: 'Веб-сайт',
      content: 'www.spacex.com'
    }
  ]

  const socialLinks: SocialLink[] = [
    { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com/spacex' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/spacex' },
    { name: 'YouTube', icon: '▶️', url: 'https://youtube.com/spacex' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/spacex' }
  ]

  return (
    <div className={styles.contactsPage}>
      <div className="container">
        <motion.div
          className={styles.pageHeader}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Контакты</h1>
          <p>Свяжитесь с нами для получения дополнительной информации</p>
        </motion.div>

        <div className={styles.contactsContent}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Контактная информация</h2>
            
            <div className={styles.infoItems}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className={styles.infoItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className={styles.infoIcon}>{info.icon}</div>
                  <div className={styles.infoContent}>
                    <h3>{info.title}</h3>
                    {info.title === 'Email' ? (
                      <a href={`mailto:${info.content}`} className={styles.infoLink}>
                        {info.content}
                      </a>
                    ) : info.title === 'Телефон' ? (
                      <a href={`tel:${info.content.replace(/\s/g, '')}`} className={styles.infoLink}>
                        {info.content}
                      </a>
                    ) : info.title === 'Веб-сайт' ? (
                      <a href={`https://${info.content}`} target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                        {info.content}
                      </a>
                    ) : (
                      <p>{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className={styles.socialSection}>
              <h3>Мы в социальных сетях</h3>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className={styles.socialIcon}>{social.icon}</span>
                    <span className={styles.socialName}>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.contactForm}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>Отправить сообщение</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Имя *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Введите ваше имя"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Введите ваш email"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Тема</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Тема сообщения"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Сообщение *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Введите ваше сообщение"
                />
              </div>

              <motion.button
                type="submit"
                className={styles.submitButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Отправить сообщение
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className={styles.mapSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2>Наше местоположение</h2>
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapContent}>
              <span className={styles.mapIcon}>🗺️</span>
              <p>Карта будет загружена здесь</p>
              <p>Hawthorne, California, США</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
