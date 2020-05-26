# galery

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Задание

 1. Gallery is accessible via login + password
 2.  Image  takes all available space of block
 3.  Images are changed when user clicks  on them
 4. An element, that represents current position of image in the gallery, should be placed at the bottom of page


### Виденье решения
## Реализовать следующие страницы:
	Страница входа SignIn
	Страница привествия Greetings
	Страница просмотра изображений Gallery

# Страница входа SignIn
Реализована путем верификации email и пароля по нескольким правилам.
Посл авторизации, данные записываться в LocalStorageи выставляешься признак в Vuex о корректной авторизации.

# Страница привествия Greetings
Простая страница с выводом простого теста приветствия и ссылкой перехода на следующую страница 

# Страница просмотра изображений Gallery
Реализована с использованием flex стилей
Так как было устно получено визуальное определения здания, а именно реализация так как на Розетке, то первоначальный вариант не был растянут на все экран, что выглядело значительно лучше. 


### Общая информация
Переход между страниц проверяет middleware путем проверки признака в Vuex store о том что пользователя прошел амортизацию
Подключен Vuetify, но стили аге используются

### Реализованы E2E тесты 


