/*Методы массивов, доп. задания по циклам, доп. задания по функциям, доп. задания по объектам*/

let testArray = ['один', 'два', 'три', 'четыре', 'пять'];


for (let elementArray of testArray) {
    console.log(elementArray);
}

//преобразуем массив в строку, а затем обратно

let joinArray = testArray.join(',');
console.log(joinArray);

let splitString = joinArray.split('.');
console.log(splitString);

//добавляем к каждому элементу массива слово hello

let mapArrayOne = testArray.map(item => item + "hello");
console.log(mapArrayOne);

//преобразовываем числовой массив в boolean

let testArrayNumbers = [1, 2, 3, 4, 5];
let mapArrayTwo = testArrayNumbers.map(item => item > 0);
console.log(mapArrayTwo);

// цикл, который выводит a, пока оно не станет меньше 10

for (let a = 100; a > 10 ; a--) {
    console.log(a);
}

//функция складывает цифры

let sumNumbers = function(a, b) {
    return a + b;
}

console.log(sumNumbers(1, 2));

//фунцкия которая приветствует по имени

let hiByName = function(name) {
    return `Hi, ${name}!`;
};

console.log(hiByName('Eldar'));

//функция вычисления типа аргумента и вывода в консоль

let getDataType = function(data) {
    return typeof(data);
};

console.log(getDataType(123));

//функция выводит новый массив только с четными элементами старого

let evenNumbersFromArray = function(array) {
    let newArray = array.filter(function(number) {
        return number % 2 === 0
    });
    return newArray;
};

console.log(evenNumbersFromArray([1, 2, 3, 4 ,5, 6, 7, 8, 9, 10]));

// сделать элемент объекта функцией

let objectWithFunctionInside = {};

objectWithFunctionInside.func = function(a,b) {return a + b};

console.log(objectWithFunctionInside.func(1, 2));
