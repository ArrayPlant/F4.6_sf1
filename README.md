# 🟢Запуск бекэнда
1. Активируйте venv. <br>
2. Перейдите в ```cd backend``` и установите ```pip install -r requirements.txt```

### Применение миграций, если надо
```python manage.py makemigrations recipes``` <br>
```python manage.py migrate``` <br>
```python manage.py loaddata initial_data``` <br>

## Запуск сервера
```python manage.py runserver``` <br>
После запуска доступен сваггер по ```http://127.0.0.1:8000/api/docs/```

Оставляете сервер бэка запущенным!!!

# ⚪Запуск фронтенда
```npm install``` - установка зависимостей <br>
```npm start``` - запуск приложения реакт <br>
Доступ по ```http://localhost:3000/```



