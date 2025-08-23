'use client'

import { motion } from 'framer-motion'
import styles from './page.module.scss'

export default function FlightSchedule() {
  const missions = [
    {
      id: 1,
      name: 'Starlink Group 6-45',
      date: '15 декабря 2024',
      time: '14:30 UTC',
      rocket: 'Falcon 9',
      status: 'Запланирован',
      destination: 'Низкая околоземная орбита',
      payload: '22 спутника Starlink'
    },
    {
      id: 2,
      name: 'CRS-29',
      date: '20 декабря 2024',
      time: '18:00 UTC',
      rocket: 'Falcon 9',
      status: 'Запланирован',
      destination: 'Международная космическая станция',
      payload: 'Грузовой корабль Dragon'
    },
    {
      id: 3,
      name: 'Starship Test Flight 3',
      date: '25 декабря 2024',
      time: '12:00 UTC',
      rocket: 'Starship',
      status: 'Запланирован',
      destination: 'Орбита Земли',
      payload: 'Тестовый полет'
    },
    {
      id: 4,
      name: 'GPS III SV06',
      date: '30 декабря 2024',
      time: '16:45 UTC',
      rocket: 'Falcon 9',
      status: 'Запланирован',
      destination: 'Средняя околоземная орбита',
      payload: 'GPS спутник'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Запланирован':
        return '#ff4500'
      case 'В процессе':
        return '#ffa500'
      case 'Завершен':
        return '#32cd32'
      case 'Отменен':
        return '#dc143c'
      default:
        return '#ffffff'
    }
  }

  return (
    <div className={styles.flightSchedulePage}>
      <div className="container">
        <motion.div
          className={styles.pageHeader}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>График полетов</h1>
          <p>Расписание предстоящих миссий SpaceX</p>
        </motion.div>

        <div className={styles.missionsList}>
          {missions.map((mission, index) => (
            <motion.div
              key={mission.id}
              className={styles.missionCard}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ x: 10 }}
            >
              <div className={styles.missionHeader}>
                <h3>{mission.name}</h3>
                <span 
                  className={styles.status}
                  style={{ color: getStatusColor(mission.status) }}
                >
                  {mission.status}
                </span>
              </div>
              
              <div className={styles.missionDetails}>
                <div className={styles.detailRow}>
                  <span className={styles.label}>Дата:</span>
                  <span className={styles.value}>{mission.date}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>Время:</span>
                  <span className={styles.value}>{mission.time}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>Ракета:</span>
                  <span className={styles.value}>{mission.rocket}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>Назначение:</span>
                  <span className={styles.value}>{mission.destination}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>Полезная нагрузка:</span>
                  <span className={styles.value}>{mission.payload}</span>
                </div>
              </div>
              
              <div className={styles.missionActions}>
                <button className={styles.watchButton}>
                  Смотреть запуск
                </button>
                <button className={styles.infoButton}>
                  Подробнее
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.scheduleInfo}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2>Информация о запусках</h2>
          <p>
            Все запуски SpaceX транслируются в прямом эфире на официальном YouTube канале. 
            Время указано в UTC (всемирное координированное время).
          </p>
        </motion.div>
      </div>
    </div>
  )
}
