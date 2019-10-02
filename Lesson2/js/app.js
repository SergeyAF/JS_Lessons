//------------------------------------- Home Work Lesson 2 ------------------------------------- //
// Занятие 2. Слайд 8
//1. Создать объект с полем product, равным ‘iphone’
//2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
//3. Добавить поле details, которое будет содержать объект с полями model и color
let productItem = {
    product: 'iphone'
}
productItem.price = 1000;
productItem.currency = 'dollar';
productItem.details = {model: 'XS Max', color: 'Lunar Blue'};
console.log(productItem);

// Занятие 3. Слайд 4
//Записать в виде switch case следующее условие:
//if (a === ‘block’) {
//	console.log(‘block’)
//} else if (a === ‘none’) {
//	console.log(‘none’)
//} else if (a === ‘inline’) {
//console.log(‘inline’)
//} else {
//	console.log(‘other’)
//}
//Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
let a = 'none';

switch (a) {
    case 'block':
        console.log('block');
        break;
    case 'none':
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default:
        console.log('other');
        break;
}

// Задачи из блока if в виде тернарных операторов.
// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let visibilityParam = 'hidden';
visibilityParam = visibilityParam === 'hidden' ? 'visible' : 'hidden';
console.log(visibilityParam);

// 2. если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let number = 3;
console.log(number);
number = number === 0 ? 1 : number < 0 ? 'less then zero' : number * 10;
console.log(number);

//3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
//Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
let car = {name: 'Lexus', age: 3, create: 2008, needRepair: false };

console.log(car.age > 5 ? 'Need Repair' : 'No Problem');
car.needRepair = car.age > 5 ? true : false;
console.log (car);

// Занятие 3. Слайд 10
//1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
//будут в верхнем регистре. Использовать for или while.
const easycodeString = 'i am in the easycode';

function UpperCaseLetters(string) {
    let ouputString = '';
    if (string[0] !== undefined) {
        for (let i = 0; i < string.length; i++) {
            if (string[i] === ' ') {
                ouputString += string[i];
                if (string[i+1] !== undefined && string[i+1] !== ' ') {
                    ouputString += string[i+1].toUpperCase();
                    i++;
                }
            } else if (i !== 0) {
                ouputString += string[i];
            } else {
                ouputString += string[i].toUpperCase();  
            }
        }
    } else {
        console.log('Передана не строка')
    }
    return ouputString;
}
console.log(UpperCaseLetters(easycodeString));

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
const baseString = 'tseb eht ma i';
let reversedString = '';
for (let i = baseString.length-1; i >= 0 ; i--) {
    reversedString += baseString[i];
}
console.log(reversedString);

//3. Факториал числа - произведение всех натуральных чисел от 1 до n
//включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
function calcFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log (calcFactorial(10));

//4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
//где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
const string4 = 'JavaScript is a pretty good language';

function calcNoSpaceUpperCaseString (string) {
    let ouputString = '';
    if (string[0] !== undefined) {
        for (let i = 0; i < string.length; i++) {
            if (string[i] === ' ') {
                if (string[i+1] !== undefined && string[i+1] !== ' ') {
                    ouputString += string[i+1].toUpperCase();
                    i++;
                }
            } else if (i !== 0) {
                ouputString += string[i];
            } else {
                ouputString += string[i].toUpperCase();  
            }
        }
    } else {
        console.log('Передана не строка')
    }
    return ouputString;
}
console.log (calcNoSpaceUpperCaseString(string4));

//5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (const i of numberArray) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

//6. Дан объект:
// let list = {name: ‘denis’, work: ‘easycode’, age: 29}
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}

for (const i in list) {
    if (typeof list[i] === 'string') {
        list[i] = list[i].toUpperCase();
    }
}

console.log(list);