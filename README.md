# HarmonyHR
![зрщту](https://github.com/user-attachments/assets/9fc7322e-85a3-475e-ad99-8ed8c3131206)
![wide](https://github.com/user-attachments/assets/1ae61a24-138e-47fc-b9f7-c39b2f80dd87)

Тестовое задания на вакансию Intern Frontend developer выполненное Мухиным Владимиром.

[Ссылка на сайт](https://harmony-hr.vercel.app/info/timeoff) (Актуальная ссылка всегда находится в описании проекта).

## Зависимости
- Typescript (5): типизированный расширенный набор JavaScript, который компилируется в простой JavaScript.
- React (18): JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.
- Apollo GraphQL (3.11.8): библиотека для работы с GraphQL API.
- ShadCN UI: коллекция переиспользуемых компонентов, основанная на Radix UI.
- Zustand (4.5.5): библиотека для управления состоянием приложения.
- Next js (14.2.10): открытый фреймворк JavaScript, созданный на базе React.js для разработки веб-приложений.
- Tailwind CSS (3.4.1): CSS-фреймворк с открытым исходным кодом.

## Локальный запуск
1. Для начала необходимо установить зависимости проекта.
```bash
npm install
# or
yarn install
# or
pnpm install
```
2. После установки зависимостей можно запускать проект.
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
3. Если запуск произошел успешно, то перейдите по адресу http://localhost:3000 в браузере.

## Примечания
Для аутентификации использую middleware. Из-за ограниченного стека технологий работу с jwt написал сам, не используя Next Auth, в результате чего некоторые случаи не проработаны, а сама логика достаточно простая. 

Все данные хранятся в Store, даже запеченные в макете. Это сделано для максимального приближения к обычному опыту разработки, где они приходят с сервера. ID тоже решил получать с сервера, там в макете есть специальное место для него. Отрисовка данных происходит после инициализации store из-за отсутствия информации по поводу динамических данных, соответственно расчет идет на тот вариант, что все - динамика. В ином случае я бы производил рендер данных сразу на сервере, что в разы ускоряет полную загрузку страницы.

Вместо api routes для получения данных о пользователе использую server actions. Это позволяет запрашивать данные на сервере, а значит полностью убрать подгрузку данных на клиенте, поскольку данные приходят вместе с страницей.

В "Upcoming Time Off" секции не добавлял точку рядом с описанием, так как не ясна логика ее появления. 

В этот раз не формировал палитру ради скорости, но обычно я заношу цвета в переменные.

Дата, показывающая сколько прошло с момента Hire Date запечена, но все остальные данные, включая Direct Reports, полностью динамичны. 

Декомпозиция выполнена минимально, так как неизвестно, что будет использовано повторно в перспективе проекта и, разумеется, для ускорения производства.

Многое было упущено во благо скорости. Если результат вас не устроит, я готов доработать проект в оставшееся время, выделенное на реализацию (по тз - 7 дней, задание выполнено за 2).
