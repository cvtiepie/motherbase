/*hello, ivan*/


/*1.1. Объявляем переменные и константы и выводим их в консоли*/

'use strict';
let faget = 'ivan';
const drobysh = 'gorshok';
console.log(DROBYSH, 'and', faget, 'are having fun');

/*1.2. Типы данных и их преобразование.
Хз как тут упражнятся, поэтому в логе вылезет просто анимешный прикол)))*/

console.log (true + false / 'six', 'i??');

/*1.3. Операторы, операторы сравнения.
Хз что значит "попрактиковаться с миллиардом операторов" */

let first = 'скрич' + 'гавно?'; //бинарный оператор "+" складывает два операнда-строки
let second = 1 + 'скрич'; //бинарный оператора "+" пытается сложить 1 и строку, но получится строка '1скрич'
let third = +'скрич'; //а тут унарный "+" попытается сделать из скрича число, но получится NaN
let fourth = 100 % 2; //не представляю где нужен будет остаток от деления
let fifth = 999999999999999999999999999999999999999999999999999999999999999 ** 9999999999999999999999999999999999999999999999999999;
//как называется третий биошок?

let sixth = 14; //в логах будет самый сок

console.log (first, second, third, fourth, fifth, ++sixth);

/*а теперь можно посравнивать*/

let compar1 = 'мой хуй' > 'больше твоего'; // логи врать не будут...
let compar2 = undefined === 'смысл жизни'; // а тут логи скажут, что смысл жизни есть...
let compar3 = 'Билли Корган' == null; // Билли Корган всем врал...


console.log(compar1, compar2, compar3);

