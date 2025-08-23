# Инструкции по развертыванию

## Требования

- Node.js 18+ 
- Yarn или npm
- Git

## Локальная разработка

### 1. Клонирование репозитория

```bash
git clone <repository-url>
cd spacex-test-project
```

### 2. Установка зависимостей

```bash
yarn install
```

### 3. Запуск в режиме разработки

```bash
yarn dev
```

Сайт будет доступен по адресу: http://localhost:3000

### 4. Сборка для продакшена

```bash
yarn build
```

### 5. Запуск продакшен версии

```bash
yarn start
```

## Развертывание на сервере

### 1. Подготовка сервера

```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Установка Yarn
npm install -g yarn

# Установка PM2 для управления процессами
npm install -g pm2
```

### 2. Клонирование и настройка

```bash
# Клонирование проекта
git clone <repository-url>
cd spacex-test-project

# Установка зависимостей
yarn install

# Сборка проекта
yarn build

# Создание файла конфигурации PM2
```

### 3. Конфигурация PM2

Создайте файл `ecosystem.config.js`:

```javascript
module.exports = {
  apps: [{
    name: 'spacex-project',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: './',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

### 4. Запуск с PM2

```bash
# Запуск приложения
pm2 start ecosystem.config.js

# Сохранение конфигурации
pm2 save

# Настройка автозапуска
pm2 startup
```

### 5. Настройка Nginx (опционально)

Создайте конфигурацию Nginx:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Переменные окружения

Создайте файл `.env.local`:

```env
# Next.js
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Bitrix (если используется)
BITRIX_API_KEY=your-api-key
BITRIX_SITE_ID=your-site-id
```

## Мониторинг и логи

### PM2 команды

```bash
# Просмотр статуса
pm2 status

# Просмотр логов
pm2 logs spacex-project

# Перезапуск
pm2 restart spacex-project

# Остановка
pm2 stop spacex-project
```

### Логи Next.js

Логи находятся в:
- `~/.pm2/logs/` (если используется PM2)
- `stdout` и `stderr` в PM2

## Обновление

### 1. Получение обновлений

```bash
git pull origin main
yarn install
yarn build
pm2 restart spacex-project
```

### 2. Откат изменений

```bash
git reset --hard HEAD~1
yarn install
yarn build
pm2 restart spacex-project
```

## Безопасность

### 1. Firewall

```bash
# Открытие только необходимых портов
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable
```

### 2. SSL сертификат

```bash
# Установка Certbot
sudo apt install certbot python3-certbot-nginx

# Получение сертификата
sudo certbot --nginx -d your-domain.com
```

## Производительность

### 1. Оптимизация Next.js

- Включен автоматический код-сплиттинг
- Оптимизация изображений через Next.js Image
- Статическая генерация страниц

### 2. Кэширование

```bash
# Очистка кэша Next.js
rm -rf .next
yarn build
```

## Резервное копирование

### 1. Автоматическое резервное копирование

Создайте скрипт `backup.sh`:

```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups/spacex-project"

# Создание директории
mkdir -p $BACKUP_DIR

# Резервное копирование кода
tar -czf $BACKUP_DIR/code_$DATE.tar.gz . --exclude=node_modules --exclude=.next

# Резервное копирование базы данных (если используется)
# mysqldump -u username -p database > $BACKUP_DIR/db_$DATE.sql

# Удаление старых резервных копий (старше 30 дней)
find $BACKUP_DIR -name "*.tar.gz" -mtime +30 -delete
```

### 2. Настройка cron

```bash
# Добавление в crontab
crontab -e

# Резервное копирование каждый день в 2:00
0 2 * * * /path/to/backup.sh
```

## Поддержка

При возникновении проблем:

1. Проверьте логи: `pm2 logs spacex-project`
2. Проверьте статус: `pm2 status`
3. Проверьте использование ресурсов: `pm2 monit`
4. Перезапустите приложение: `pm2 restart spacex-project`

## Полезные команды

```bash
# Просмотр использования памяти
pm2 monit

# Просмотр детальной информации
pm2 show spacex-project

# Очистка логов
pm2 flush

# Обновление PM2
pm2 update
```
