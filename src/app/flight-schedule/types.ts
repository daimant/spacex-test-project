export interface Mission {
  id: number
  name: string
  date: string
  time: string
  rocket: string
  status: 'Запланирован' | 'В процессе' | 'Завершен' | 'Отменен'
  destination: string
  payload: string
}

export type MissionStatus = 'Запланирован' | 'В процессе' | 'Завершен' | 'Отменен'
