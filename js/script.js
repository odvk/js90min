function init() {

// ------ Переменные, типы
// переменная не может начинатся с цифры
// чувствительны к регистру

    var message; // a-z, A-Z, 0-9, $, _
    var myMessage;

    myMessage = "Сообщение";

    var myNumber = 10.484; // объявление и присвоение в одной строке.
    var myString = "";
    var myStringOne = "Привет, Вася!";
    var myBoolean = true; // false
    var myNull = null;
    var myUndefined = undefined;

    // ---- Объекты
    var myObject = {
        name: "Иван",
        age: 25
    };

//--------- Числа
    var result = 40 + 10;
    // alert(result);
    console.log(result);
    console.log(myNumber + result);

    myNumber = myNumber + 10;
    console.log(myNumber);

    myNumber += 10;
    console.log(myNumber);

    myNumber++;
    console.log(myNumber);

    console.log(Math.round(5.45));
    console.log(Math.ceil(5.45));
    console.log(Math.floor(5.9));

    var newNumber = 2.437;
    console.log(newNumber.toFixed(1)); //


    // ------------ Строки
    console.log("----Строки----");
    console.log("40 и " + newNumber);
    console.log(myStringOne + " Как дела?");
    console.log(myStringOne.toLowerCase());
    console.log(myStringOne.toUpperCase());


    // ----------- Массивы
    console.log("---- Массивы ----");
    var names = ["Вася", "Петя", "Женя"];
    console.log(names[1]);
    console.log(names[1].toUpperCase());

    names[0] = "Маша";
    console.log(names);

    names.push("Света")
    console.log(names);

    // ---------------- Условия
    console.log("---- Условия ----");
    if (10 > 5) {
        console.log("Условие выплолнилось")

    }
    ;

    // ------- Циклы
    console.log("----- Циклы -----")
    for (var i = 0; i < 10; i++) {
        if (i == 5) {
            break;
            // continue;
        }
        console.log(i);
    }

    for (var j = 0; j < names.length; j++) {
        console.log(names[j]);
    }

    i = 0;
    while (i < 10) {
        console.log(i);
        i++;
    }

    // ------ Функции
    console.log("----- Функции -----")

    function test() {
        console.log("Функция тест работает")

    };
    test();

    function sum(x, y) {
        console.log("Функция sum");
        console.log(x + y);

    };
    sum(10, 59);

    function sumOne(x, y) {
        return x + y;

    };
    var a = sumOne(10, 59);
    console.log("SumOne: " + a);

    // ------ Объекты
    console.log("----- Объекты -----")

    var myObjectOne = {
        name: "Иван",
        age: 25
    };
    console.log(myObjectOne.name)
    myObjectOne.name = "Петя";
    console.log(myObjectOne.name)

    var myObjectTwo = {
        name: "Иван",
        surname: "Иванов",
        age: 25,
        getFullName: function () {
            return this.name + " " + this.surname;
            
        }
    };

    console.log(myObjectTwo.getFullName());


};


$(document).ready(init);
