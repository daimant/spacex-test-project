'use client'

import { useEffect, useState } from 'react'
import styles from './BitrixIntegration.module.scss'

interface BitrixContent {
  title: string
  subtitle: string
  buttonText: string
  logoAlt: string
}

interface BitrixIntegrationProps {
  contentId: string
  defaultContent: BitrixContent
}

export default function BitrixIntegration({ 
  contentId, 
  defaultContent 
}: BitrixIntegrationProps) {
  const [content, setContent] = useState<BitrixContent>(defaultContent)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    // Инициализация Bitrix CMS
    if (typeof window !== 'undefined' && (window as any).BX) {
      const BX = (window as any).BX
      
      // Подписка на изменения контента
      BX.addCustomEvent('OnContentChange', (id: string, newContent: any) => {
        if (id === contentId) {
          setContent(newContent)
        }
      })
      
      // Включение режима редактирования
      if (BX.SiteMode === 'edit') {
        setIsEditing(true)
      }
    }
  }, [contentId])

  const handleContentEdit = (field: keyof BitrixContent, value: string) => {
    if (typeof window !== 'undefined' && (window as any).BX) {
      const BX = (window as any).BX
      
      const updatedContent = { ...content, [field]: value }
      setContent(updatedContent)
      
      // Отправка изменений в Bitrix
      BX.ajax.runComponentAction('spacex:content', 'update', {
        mode: 'class',
        data: {
          contentId,
          content: updatedContent
        }
      })
    }
  }

  if (isEditing) {
    return (
      <div className={styles.editor}>
        <div className={styles.editorField}>
          <label>Заголовок:</label>
          <input
            type="text"
            value={content.title}
            onChange={(e) => handleContentEdit('title', e.target.value)}
          />
        </div>
        <div className={styles.editorField}>
          <label>Подзаголовок:</label>
          <textarea
            value={content.subtitle}
            onChange={(e) => handleContentEdit('subtitle', e.target.value)}
          />
        </div>
        <div className={styles.editorField}>
          <label>Текст кнопки:</label>
          <input
            type="text"
            value={content.buttonText}
            onChange={(e) => handleContentEdit('buttonText', e.target.value)}
          />
        </div>
        <div className={styles.editorField}>
          <label>Alt для логотипа:</label>
          <input
            type="text"
            value={content.logoAlt}
            onChange={(e) => handleContentEdit('logoAlt', e.target.value)}
          />
        </div>
      </div>
    )
  }

  return null
}
