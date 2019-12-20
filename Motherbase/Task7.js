/*Function declaration, arrow functions*/

// Первое задание. Переписываем функцию с операторами "||" и "?"

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

// Это был оригинал. Теперь пробуем исползовать логический оператор

function checkAge2(age) {
   return age > 18 || confirm('Родители разрешили?');
}

//А теперь перепишем с условным оператором

function checkAge3(age) {
    return age > 18 ? true : confirm ('Родители разрешили?');
}

//Пишем функцию "min(a,b)", которая возвращается меньшее из чисел a и b

function min(a, b) {
    if (a < b) {
        return a;
    }
    else if (a === b) {
        return a, b;
    }
    else {
        return b;
    }
}

//пишем функцию, в которой второй параметр - это степень, в которую возводится первый параметр

function pow(x, n) {
    if (n < 0) {
        return 'not supported, use natural numbers';
    }
    else return x ** n
}

console.log(pow(2, -1))

//стрелочные функции. вот этот код переписываем с использований функций-стрелок

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);

//переписываем:

function ask (question, yes, no) {
    if (confirm(quiestion)) yes();
    else no()
};

ask ('Узнали? Согласны?'),
    () => { alert("Вы узнали и согласны"); },
    () => { alert("Вы не узнали и не согласны"); }
);


