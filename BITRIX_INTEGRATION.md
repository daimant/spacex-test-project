# Интеграция с Bitrix CMS

## Обзор

Данный проект включает готовую интеграцию с CMS Bitrix для редактирования контента в реальном времени. Компонент `BitrixIntegration` позволяет администраторам изменять текстовый контент прямо на сайте.

## Компоненты интеграции

### 1. BitrixIntegration Component

Расположен в `src/components/BitrixIntegration/BitrixIntegration.tsx`

**Функциональность:**
- Редактирование заголовков и подзаголовков
- Изменение текста кнопок
- Редактирование alt-текстов для изображений
- Автоматическое сохранение изменений в Bitrix

**Режимы работы:**
- **Просмотр**: Обычный режим для посетителей
- **Редактирование**: Административный режим с панелью редактирования

### 2. Конфигурация контента

```typescript
const defaultContent = {
  title: 'Welcome to the Future of Space Exploration',
  subtitle: 'Discover the next generation of space technology and innovation',
  primaryButtonText: 'Explore Missions',
  secondaryButtonText: 'Learn More',
  logoAlt: 'SpaceX Logo'
}
```

## Установка в Bitrix

### 1. Создание компонента Bitrix

Создайте компонент `spacex:content` в Bitrix:

```php
<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

use Bitrix\Main\Engine\Contract\Controllerable;

class SpaceXContentComponent extends CBitrixComponent implements Controllerable
{
    public function configureActions()
    {
        return [
            'update' => [
                'prefilters' => [],
                'postfilters' => []
            ]
        ];
    }

    public function updateAction($contentId, $content)
    {
        // Логика сохранения контента
        // Например, в инфоблок или базу данных
        
        return [
            'success' => true,
            'message' => 'Content updated successfully'
        ];
    }

    public function executeComponent()
    {
        $this->includeComponentTemplate();
    }
}
```

### 2. Интеграция в шаблон

Добавьте в шаблон Bitrix:

```php
<?$APPLICATION->IncludeComponent(
    "spacex:content",
    "",
    Array(
        "CONTENT_ID" => "hero-content"
    )
);?>
```

## API методы

### Обновление контента

```javascript
BX.ajax.runComponentAction('spacex:content', 'update', {
    mode: 'class',
    data: {
        contentId: 'hero-content',
        content: {
            title: 'New Title',
            subtitle: 'New Subtitle',
            primaryButtonText: 'New Button Text',
            secondaryButtonText: 'New Secondary Button',
            logoAlt: 'New Alt Text'
        }
    }
}).then(function(response) {
    console.log('Content updated:', response);
});
```

## События

### OnContentChange

```javascript
BX.addCustomEvent('OnContentChange', function(id, newContent) {
    if (id === 'hero-content') {
        // Обновление UI с новым контентом
        updateHeroContent(newContent);
    }
});
```

## Безопасность

- Все изменения проходят через Bitrix API
- Проверка прав доступа на уровне Bitrix
- Валидация данных на сервере
- CSRF защита

## Кастомизация

### Добавление новых полей

1. Обновите интерфейс `BitrixContent` в компоненте
2. Добавьте соответствующие поля в форму редактирования
3. Обновите логику сохранения в Bitrix

### Стилизация панели редактирования

Панель редактирования использует CSS модули:
- `src/components/BitrixIntegration/BitrixIntegration.module.scss`
- Адаптивный дизайн для всех устройств
- Темная тема в стиле космического сайта

## Поддержка

Для технической поддержки интеграции обращайтесь к команде разработки.

## Версии

- **v1.0** - Базовая интеграция с редактированием контента
- **Планы** - Интеграция с инфоблоками, пользовательскими полями
