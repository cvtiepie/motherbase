/*Районы, кварталы, объекты, массивы*/

'use strict';

//код, который в каждой строке
// создаёт объект users
// добавляет свойство name со значением john
// добавляет свойство surname со значением smith
// изменияет значение свойства name на pete
// удаляет свойство name из объекта

let user = {};

user.name = 'john';
user.surname = 'smith';
user.name = 'pete';
delete user.name;

console.log(user);

//функция isEmpty(obj) возвращает true, если у объекта нет свойств и наоборот

function isEmpty(obj) {
    for (let key in obj) {
    return false;
    }
    return true;
}

console.log(isEmpty(user));

//в объекте хранятся зп команыд, надо их сплюсовать

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function getSalariesSum() {
    return salaries.John + salaries.Ann + salaries.Pete
};

let sum = getSalariesSum();

console.log(sum);

//создаём функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(salaries);

console.log(salaries);


//производим пять операций с массивом
//создаём массив "styles" с жанрами музыки
//добавляем туда ещё один жанр
//заменяем значение в середине на Классика
//удаляем первый элемент массива

let emoSubgenres = ['midwest emo', 'twinkle emo'];
console.log(emoSubgenres);

emoSubgenres.push('emo violence');
console.log(emoSubgenres);

emoSubgenres[1] = 'math pop';
console.log(emoSubgenres);

console.log ( emoSubgenres.shift() );
console.log(emoSubgenres);

emoSubgenres.unshift ('screamo', 'skramz');
console.log(emoSubgenres);

//фукнция sumInput()
//просит пользователя ввести цифру, которую сохраняет в массив
//больше не спрашивает, если пользователь не число, ничего, либо нажал отмену
//считает и возвращает сумму элементов массива

function sumInput() {
    let inputNumbers = [];
    while (true) {
        let value = prompt('Введите число','');
        if (value === '' || value === null) break;

        inputNumbers.push(+value);
    }
    let summary = 0;

    for (let inputNumber of inputNumbers) {
        summary += inputNumber;
    }
    return summary;
}

console.log(sumInput());
