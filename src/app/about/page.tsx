'use client'

import { motion } from 'framer-motion'
import styles from './page.module.scss'
import { Milestone, CompanyValue } from './types'

export default function About() {
  const milestones: Milestone[] = [
    {
      year: '2002',
      title: 'Основание SpaceX',
      description: 'Илон Маск основал SpaceX с целью снизить стоимость космических полетов'
    },
    {
      year: '2006',
      title: 'Первый запуск Falcon 1',
      description: 'Первый запуск ракеты-носителя Falcon 1'
    },
    {
      year: '2008',
      title: 'Первый успешный запуск',
      description: 'Falcon 1 успешно вывел полезную нагрузку на орбиту'
    },
    {
      year: '2010',
      title: 'Первый запуск Falcon 9',
      description: 'Запуск более мощной ракеты-носителя Falcon 9'
    },
    {
      year: '2012',
      title: 'Dragon на МКС',
      description: 'Космический корабль Dragon впервые пристыковался к МКС'
    },
    {
      year: '2015',
      title: 'Первый успешный возврат ступени',
      description: 'Первая ступень Falcon 9 успешно приземлилась'
    },
    {
      year: '2020',
      title: 'Первый пилотируемый полет',
      description: 'Астронавты NASA отправились на МКС на корабле Dragon'
    },
    {
      year: '2023',
      title: 'Тестовый полет Starship',
      description: 'Первый орбитальный тестовый полет Starship'
    }
  ]

  const values: CompanyValue[] = [
    {
      icon: '🚀',
      title: 'Инновации',
      description: 'Постоянное развитие технологий и поиск новых решений'
    },
    {
      icon: '🌍',
      title: 'Устойчивое развитие',
      description: 'Снижение стоимости космических полетов для доступности'
    },
    {
      icon: '🛡️',
      title: 'Безопасность',
      description: 'Высочайшие стандарты безопасности для всех миссий'
    },
    {
      icon: '🌟',
      title: 'Вдохновение',
      description: 'Вдохновляем будущие поколения исследователей космоса'
    }
  ]

  return (
    <div className={styles.aboutPage}>
      <div className="container">
        <motion.div
          className={styles.pageHeader}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>О компании SpaceX</h1>
          <p>Пионеры в освоении космоса и снижении стоимости космических полетов</p>
        </motion.div>

        <motion.div
          className={styles.companyOverview}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.overviewContent}>
            <h2>Наша миссия</h2>
            <p>
              SpaceX была основана в 2002 году с целью революционизировать космическую 
              отрасль, сделав космические полеты более доступными и надежными. 
              Мы стремимся к тому, чтобы человечество стало многопланетным видом.
            </p>
            <p>
              Наша команда инженеров, техников и ученых работает над созданием 
              передовых технологий, которые позволят нам исследовать Солнечную систему 
              и за ее пределами.
            </p>
          </div>
          <div className={styles.overviewStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>200+</span>
              <span className={styles.statLabel}>Успешных запусков</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>22</span>
              <span className={styles.statLabel}>Года опыта</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>12,000+</span>
              <span className={styles.statLabel}>Сотрудников</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.valuesSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>Наши ценности</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className={styles.valueCard}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.timelineSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2>История компании</h2>
          <div className={styles.timeline}>
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              >
                <div className={styles.timelineContent}>
                  <div className={styles.year}>{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.futureSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2>Будущее SpaceX</h2>
          <div className={styles.futureContent}>
            <p>
              Мы продолжаем работать над амбициозными проектами, включая разработку 
              Starship - самого мощного космического корабля в истории, который 
              сможет доставить людей на Марс и другие планеты.
            </p>
            <p>
              Наша цель - сделать человечество многопланетным видом, создав 
              самодостаточные города на Марсе и других небесных телах.
            </p>
            <button className={styles.joinButton}>
              Присоединиться к команде
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
