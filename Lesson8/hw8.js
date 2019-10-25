console.log('--------- Задача 1 ---------');
//1. Создайте функцию которая бы умела делать:
//minus(10)(6); // 4
//minus(5)(6); // -1
//minus(10)(); // 10
//minus()(6); // -6
//minus()(); // 0

function minus(valA = 0) {
    return function (valB = 0) {
        return valA -= valB;
    };
};

console.log(minus(10)(6));
console.log(minus(5)(6));
console.log(minus(10)());
console.log(minus()(6));
console.log(minus()());

console.log('--------- Задача 2 ---------');
//2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
//function multiplyMaker ...
//const multiply = multiplyMaker(2);
//multiply(2); // 4 (2 * 2)
//multiply(1); // 4 (4 * 1)
//multiply(3); // 12 (4 * 3)
//multiply(10); // 120 (12 * 10)

function multiplyMaker(initValue) {
    let result = initValue;
    console.log(result);
    return function (value) {
        return result *= value;
    }
}

const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));

console.log('--------- Задача 3 ---------');
//3. 3. Реализовать модуль, который работает со строкой и имеет методы:
//a. установить строку
//i. если передано пустое значение, то установить пустую строку
//ii. если передано число, число привести к строке
//b. получить строку
//c. получить длину строки
//d. получить строку-перевертыш
//Пример:
//модуль.установитьСтроку(‘abcde’);
//модуль.получитьСтроку(); // ‘abcde’
//модуль.получитьДлину(); // 5

class stringModifier {
    constructor () {
        this.ouputStr = '';
    };
    setString (stringValue) {
        if (stringValue === undefined) {
            this.ouputStr;
        } else {
            this.ouputStr = stringValue.toString();
        };
    };
    getString () {
        console.log(this.ouputStr);
    };
    getLength () {
        console.log(this.ouputStr.length);
    };
    reverseString() {
        let reverse = '';
        for (let i = this.ouputStr.length - 1; i > -1; i--) {
            reverse += this.ouputStr[i];
            };
        this.ouputStr = reverse;
    };
};

someString = new stringModifier ();
someString.setString('Hello MY Firend');
someString.getString();
someString.getLength();
someString.reverseString();
someString.getString();

console.log('--------- Задача 4 ---------');

//4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

//модуль.установитьЗначение(10); // значение = 10
//модуль.прибавить(5); // значение += 5
//модуль.умножить(2); // значение *= 2
//модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

//Также можно вызывать методы цепочкой:
//модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

calculator = function () {
    let result = 0;
    return {
        setValue: function(value) {
            result = value;
            return this;
        },
        reset: function() {
                result = 0;
                return this;
            },
        getResult: function() {
                console.log(result.toFixed(2));
                return this;
        },
        plus: function(value) {
            result += value;
            return this;
        },
        minus: function (value) {
            result -= value;
            return this;
        },
        multiply: function(value) {
            result *= value;
            return this;
        },
        pow: function(value) {
            result = Math.pow(result, value);
            return this;
        },
    };
};

calc = new calculator;
calc.getResult();
calc.plus(4.2345);
calc.minus(1);
calc.getResult();

calc.reset().plus(10).minus(2.832).multiply(3.2).getResult();
calc.setValue(10).pow(2).getResult();

