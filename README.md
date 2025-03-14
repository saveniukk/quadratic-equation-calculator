# Quadratic Equation Solver

## Короткий опис

Цей консольний застосунок призначений для розв’язання квадратних рівнянь виду:

**ax² + bx + c = 0**

Застосунок підтримує два режими роботи:
- **Інтерактивний режим** — користувач вводить коефіцієнти рівняння вручну через консоль.
- **Неінтерактивний режим** — застосунок обробляє вхідні дані, передані у вигляді текстового файлу.

---

## Інструкція із запуску

### 1. Клонування репозиторію

Склонуйте репозиторій на ваш комп'ютер за допомогою команди:

```bash
 git clone https://github.com/saveniukk/quadratic-equation-calculator.git
```

Перейдіть у каталог проекту:

```bash
 cd quadratic-equation-calculator
```

---

### 2. Запуск у інтерактивному режимі

Щоб запустити програму в інтерактивному режимі, виконайте команду:

```bash
 node equation.js
```

Після запуску програма попросить ввести коефіцієнти **a, b, c**.

---

### 3. Запуск у неінтерактивному режимі

1. Створіть текстовий файл із вхідними даними у форматі:
   
   ```
   a b c
   ```
   
   де **a, b, c** — це коефіцієнти квадратного рівняння.

2. Наприклад, файл **input.txt** може містити:
   
   ```
   1 -3 2
   ```

3. Запустіть програму, передавши файл як аргумент командного рядка:

   ```bash
   node equation.js input.txt
   ```

Програма автоматично зчитає вміст файлу та виведе розв’язок квадратного рівняння.

---

### Посилання на revert commit
[Переглянути приклад](https://github.com/saveniukk/quadratic-equation-calculator/commit/6f00fad95f437e04c02bcf5afce27cbf93c3d623)


