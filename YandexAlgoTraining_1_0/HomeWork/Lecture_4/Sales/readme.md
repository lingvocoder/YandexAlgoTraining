## F. Продажи

| Ограничение времени |            1 секунда             |
|---------------------|:--------------------------------:|
| Ограничение памяти  |              256Mb               |
| Ввод                |  стандартный ввод или input.txt  |
| Вывод               | стандартный вывод или output.txt |

Дана база данных о продажах некоторого интернет-магазина. Каждая строка входного файла представляет собой запись вида
Покупатель товар количество,
где Покупатель — имя покупателя (строка без пробелов), товар — название товара (строка без пробелов), количество —
количество приобретенных единиц товара.
Создайте список всех покупателей, а для каждого покупателя подсчитайте количество приобретенных им единиц каждого вида
товаров.

### Формат ввода

Вводятся сведения о покупках в указанном формате.

### Формат вывода

Выведите список всех покупателей в лексикографическом порядке, после имени каждого покупателя выведите двоеточие, затем
выведите список названий
всех приобретенных данным покупателем товаров в лексикографическом порядке, после названия каждого товара выведите
количество единиц товара,
приобретенных данным покупателем. Информация о каждом товаре выводится в отдельной строке.

### Примеры

| Ввод                                                                                                                                                                                                                    |                                                                   Вывод                                                                   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------:|
| Ivanov paper 10<br>Petrov pens 5<br>Ivanov marker 3<br>Ivanov paper 7<br>Petrov envelope 20<br>Ivanov envelope 5                                                                                                        | **Ivanov**:<br>envelope 5<br>marker 3<br>paper 17<br>**Petrov**:<br>envelope 20<br>pens 5                                                 | 
| Ivanov aaa 1<br>Petrov aaa 2<br>Sidorov aaa 3<br>Ivanov aaa 6<br>Petrov aaa 7<br>Sidorov aaa 8<br>Ivanov bbb 3<br>Petrov bbb 7<br>Sidorov aaa 345<br>Ivanov ccc 45<br>Petrov ddd 34<br>Ziborov eee 234<br>Ivanov aaa 45 | **Ivanov**:<br>aaa 52<br>bbb 3<br>ccc 45<br>**Petrov**:<br>aaa 9<br>bbb 7<br>ddd 34<br>**Sidorov**:<br>aaa 356<br>**Ziborov**:<br>eee 234 |





 

               

