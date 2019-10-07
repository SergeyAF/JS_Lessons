//Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
//Если нет ни одного аргумента, вернуть ноль: multiply() // 0


function multiply() {
    let value = 1;
    if (arguments.length === 0) {
        return 0;
    }
    for (let i = 0; i < arguments.length; i++) {
        value *= arguments[i];        
    }
    return value
}

console.log(multiply(2, 4, 5));
console.log(multiply(3, 7, 5, 2));
console.log(multiply());

//2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
function reversString(string) {
    if (string === '' || arguments.length === 0) {
        return 'Строка не введена';
    }
    let outputString = ''
    for (let i = string.length - 1; i >= 0; i--) {
        outputString += string[i];   
    }
    return outputString;
}
console.log(reversString('TesOvoYa Stroka'))


//3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: 
//getCodeStringFromText(‘hello’) // “104 101 108 108 111” 
function getUnicodeString (string) {
    let outputString = '';
    for (let i = 0; i < string.length; i++) {
        if (i === 0) {
            outputString +=string.charCodeAt(i)   
        } else {
            outputString +=' ' + string.charCodeAt(i);
        }
    }
    return outputString;
}
console.log(getUnicodeString('hello'))

// 4 Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

function compareNumbers(num) {
    randomNum = 0;
    if (num >= 0 && num <= 10) {
        randomNum = Math.round(Math.random() * 10);
            if (num === randomNum) {
                return 'Вы выиграли'
            } else {
                return `Вы не угадали ваше число ${num} а выпало число ${randomNum}`;
            }
    } else {
    return 'Число не в диапазоне от 0 до 10';
    }
}
console.log(compareNumbers(2));

// 5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

function getArrayFromNumber(num) {
    let array = [];
    for (let i = 1; i <= num; i++) {
        array.push(i);    
    }
    return array;    
}
console.log(getArrayFromNumber(7));

// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]

function dubleArray(array) {
    let length = array.length
    for (let i = 0; i < length; i++) {
        array.push(array[i]);
    }
    return array;
}
console.log(dubleArray([1, 2, 5]));

//7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений: 
//changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection() {
    let outputArray = [];
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].shift();
        outputArray.push(arguments[i]);    
    }
    return outputArray
}

console.log(changeCollection([1, 2 ,5], ['z', 'y', 's', 'f']))

//8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

//funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

function checkUserParam(array, param, value) {
    let outputArray = [];
    if (array === undefined || param === undefined || value === undefined) {
        return 'Недостаточно аргументов. Введите массив пользователей, параметр отбора и значение отбора';
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i][param] === value) {
            outputArray.push(array[i]);
        }
    }
    return outputArray;
}
console.log(checkUserParam([{name: 'Denis', age: 29, gender: 'male'}, {name: 'Ivan', age: 20, gender: 'male'}, {name: 'Inna', age: 20, gender: 'female'}], 'age', 20));

//1. Исходный массив [-2, 3, 4, -5, -6, 2, 4, -56]. Найдите количество отрицательных и положительных элементов

function countPosAndNegNumbers(array) {
    let zerro = 0;
    let posCounter = 0;
    let negCounter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            posCounter++;
        } else if (array[i] < 0){
            negCounter++;
        } else {
            zerro++;
        }
    }
    
    return `В массиве ${posCounter} положительных числа(ел) и ${negCounter} отрицательных числа(ел). Нулей ${zerro}`;
}
console.log(countPosAndNegNumbers([-2, 3, -6, 4, -5, 0, -6, 2, 4, -56]));

//2. На основе массива [1,2,3,5,8,9,10] сформировать новый массив, каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

function getParityOfArrayDigits (array) {
    let outputArray = [];
    let tempObj = {}
    for (let i = 0; i < array.length; i++) {
        tempObj.digit = array[i];
        if (array[i] % 2 === 0) {
            tempObj.odd = false;
        } else {
            tempObj.odd = true;
        }
        outputArray.push(Object.assign({}, tempObj))
    }
    return outputArray;
}
console.log(getParityOfArrayDigits([1,2,3,5,8,9,10]));