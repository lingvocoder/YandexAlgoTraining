# Подготовка к собеседованию

Юра решил подготовиться к собеседованию в Яндекс. Он выбрал на сайте leetcode **N** задач. В первый день Юра решил **K**
задач,
а в каждый следующий день Юра решал на одну задачу больше, чем в предыдущий день. Определите, сколько дней уйдет у Юры
на подготовку к собеседованию.

# Решение

Будем искать минимальное количество дней, достаточное для решения не менее **N** задач, бинарным поиском. Нам понадобится
формула арифметической прогрессии L = 0, R = N (K, K + 1, ..., K + M - 1) = (2K + M - 1) * M / 2