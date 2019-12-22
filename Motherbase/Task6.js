/*1.6. Итак, циклы
в первом задании мы выводим чётные числа от 2 до 10 с помочщью цикла for*/

'use strict';

for (let evenNumberFromTwoToTen = 2; evenNumberFromTwoToTen < 10; evenNumberFromTwoToTen++) {
    if (evenNumberFromTwoToTen % 2 === 1) continue;

    console.log(evenNumberFromTwoToTen);
}

//тут мы переписываем for на while

let replaceForWithWhile = 0;

while (replaceForWithWhile < 3) {
   console.log (replaceForWithWhile);
   ++replaceForWithWhile
}

//нам нужно попросить человека вессти число больше 100, пока он это число не введёт, или не нажмет "отмену"
let numberMoreThenHundered;

do {
    numberMoreThenHundered = prompt ('Введите число больше ста')
} while (numberMoreThenHundered <= 100 && numberMoreThenHundered);

// цикл ищет в рейндже натуральные числа

let n = 10;
cycle1:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
            if (i % j == 0) continue cycle1;
    }
        console.log(i);
    }