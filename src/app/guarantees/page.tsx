'use client'

import { motion } from 'framer-motion'
import styles from './page.module.scss'
import { Guarantee } from './types'

export default function Guarantees() {
  const guarantees: Guarantee[] = [
    {
      id: 'safety',
      title: 'Безопасность',
      description: 'Высочайшие стандарты безопасности для всех миссий',
      percentage: '99.9%',
      details: [
        'Многоуровневая система безопасности',
        'Автоматические системы аварийного спасения',
        'Строгие протоколы проверки',
        'Непрерывный мониторинг всех систем'
      ],
      icon: '🛡️'
    },
    {
      id: 'reliability',
      title: 'Надежность',
      description: 'Проверенные технологии и многолетний опыт',
      percentage: '98.5%',
      details: [
        'Успешные запуски с 2006 года',
        'Многоразовые ракеты-носители',
        'Современные двигательные установки',
        'Инновационные системы управления'
      ],
      icon: '🚀'
    },
    {
      id: 'quality',
      title: 'Качество',
      description: 'Лучшие материалы и передовые технологии',
      percentage: '100%',
      details: [
        'Сертифицированные компоненты',
        'Контроль качества на всех этапах',
        'Тестирование в экстремальных условиях',
        'Соответствие международным стандартам'
      ],
      icon: '⭐'
    },
    {
      id: 'support',
      title: 'Поддержка',
      description: 'Круглосуточная техническая поддержка',
      percentage: '24/7',
      details: [
        'Технические специалисты всегда на связи',
        'Быстрое реагирование на запросы',
        'Подробная документация',
        'Обучение персонала'
      ],
      icon: '📞'
    }
  ]

  return (
    <div className={styles.guaranteesPage}>
      <div className="container">
        <motion.div
          className={styles.pageHeader}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Гарантии SpaceX</h1>
          <p>Наша приверженность безопасности, надежности и качеству</p>
        </motion.div>

        <div className={styles.guaranteesGrid}>
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.id}
              className={styles.guaranteeCard}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.guaranteeHeader}>
                <div className={styles.icon}>{guarantee.icon}</div>
                <div className={styles.titleSection}>
                  <h3>{guarantee.title}</h3>
                  <span className={styles.percentage}>{guarantee.percentage}</span>
                </div>
              </div>
              
              <p className={styles.description}>{guarantee.description}</p>
              
              <ul className={styles.detailsList}>
                {guarantee.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
              
              <div className={styles.guaranteeFooter}>
                <button className={styles.learnMoreButton}>
                  Узнать больше
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.commitmentSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2>Наши обязательства</h2>
          <div className={styles.commitmentContent}>
            <div className={styles.commitmentText}>
              <p>
                SpaceX привержена обеспечению высочайших стандартов безопасности и надежности 
                во всех аспектах нашей деятельности. Мы понимаем важность каждой миссии и 
                делаем все возможное для их успешного выполнения.
              </p>
              <p>
                Наша команда инженеров, техников и специалистов по безопасности работает 
                круглосуточно, чтобы гарантировать, что каждый запуск соответствует 
                самым строгим требованиям.
              </p>
            </div>
            <div className={styles.commitmentStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>200+</span>
                <span className={styles.statLabel}>Успешных запусков</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>18</span>
                <span className={styles.statLabel}>Лет опыта</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>0</span>
                <span className={styles.statLabel}>Потерянных экипажей</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
