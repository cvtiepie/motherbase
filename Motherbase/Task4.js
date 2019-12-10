/*1.4. Условные операторы. Конструкция switch*/

finalFantasy = prompt('Как зовут создателя Final Fantasy?', '');

if (finalFantasy === 'Хиронобу Сакагути') {
    alert('Респект!');
}
else if (finalFantasy === 'Хидео Кодзима') {
    alert('Гений');
}
else {
        alert('Соси...');
}

//это было простое задание. а теперь нам нужно переписать некий код с "if...else" в код с оператором "?"
//я его модернизировал, чтобы можно было вывести в браузере

someA = prompt ('Назови плз число от 1 до 10', '1');
someB = prompt ('Назови плз число от 1 до 10', '1');
someNumber = (someA + someB < 8) ? 'Мало' : 'Много';
alert(someNumber);

//теперь свич. прежде чем выполнять задание, поиграюсь с конструкцией

let eightGenConsole = prompt ('Какая ваша любимая консоль 8-го поколения');
switch (eightGenConsole) {
    case 'Switch':
        alert('Пидорский мариобой, подбери слюни и начни играть в игры для взрослых');
        break;
    case 'Playstation 4':
        alert('О, киноёб, такие как ты обожают подбирать мыло в душе');
        break;
    case 'Xbox One':
        alert('Ой, маленький мальчик Игорь утонул((');
        break;
    default:
        alert('Вы додик?');
}

//тут я переписываю "switch" в "else if". чтобы было понятно, перепишу ка свой свич

if (eightGenConsole === 'Switch') {
    alert('Пидорский мариобой, подбери слюни и начни играть в игры для взрослых');
}
else if (eightGenConsole === 'Playstation 4') {
    alert('О, киноёб, такие как ты обожают подбирать мыло в душе');
}
else if (eightGenConsole === 'Xbox One') {
    alert('Ой, маленький мальчик Игорь утонул((');
}
else {
    alert('Вы додик?');
}

//а теперь наоборот. я перепишу какой-то предлагаемый код с "else if" в свич

const number = +prompt('Введите число от 0 до 3', '');
switch (number){
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}
