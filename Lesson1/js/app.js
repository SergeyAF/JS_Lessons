let string = "some test string";
let fnReturn = "";

// Занятие 1 слайд 10
console.log(string);
// 1. Получить первую и последнюю буквы строки
fnReturn = FnLLetters(string);

function FnLLetters(x) {
  let fnlLetter = "";
  fnlLetter = x[0] + x[x.length - 1];
  return fnlLetter;
}
console.log(fnReturn);

// 2.  Сделать первую и последнюю буквы в верхнем регистре

function bigFnLLetters(x) {
  bigString = x[0].toUpperCase() + x.slice(1, x.length - 1) + x[x.length - 1].toUpperCase();
  return bigString;
}
console.log(bigFnLLetters(string));

// 3. Найти положение слова ‘string’ в строке

console.log(string.indexOf('string'));

// 4. Найти положение второго пробела (“вручную” ничего не считать)

function sapceFinder (x = String, counter = 1 ) {
  let finder, lastIndex = 0;
  for (let index = 0; index < counter; index++) {
    finder = x.indexOf(' ', lastIndex);
    lastIndex = finder + 1;
  }
  return finder;
}

console.log(sapceFinder(string, 2));
console.log(sapceFinder(string));

// 5. Получить строку с 5-го символа длиной 4 буквы

function slicer1(x, start = Number, length = Number) {
  let slicedString = x;
  slicedString = slicedString.slice(start, start + length);
  return slicedString;
}
console.log(slicer1(string, 5, 4));

// 6. Получить строку с 5-го по 9-й символы

console.log(string.slice(5, 9));

// 7. Получить новую строку из исходной путем удаления последних 6-и символов 
// (то есть исходная строка без последних 6и символов)

console.log(string.slice(0, -6));

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016”

let a = 20;
let b = 16;
console.log(String(a) + b);

// Занятие 1 слайд 13
// 1. Получить число pi из Math и округлить его до 2-х знаков после точки

console.log(+Math.PI.toFixed(2));

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));

// 3. Работа с Math.random:
//    a. Получить случайное число и округлить его до двух цифр после запятой
console.log(+Math.random().toFixed(2));

//    b. Получить случайное целое число от 0 до X. X - любое произвольное число. 

let ranLimit = 10;
console.log(Math.round(ranLimit * Math.random()))

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
console.log((0.6 * 10 + 0.7 * 10)/ 10);
console.log(+(0.6 + 0.7).toFixed(1))

// 5. Получить число из строки ‘100$’

console.log(parseInt('100$'))

// Занятие 2. Слайд 12

a = 0 || 'string'; //string
a = 1 && 'string'; //string
a = null || 25; //25
a = null && 25; //null
a = null || 0 || 35; //35
a = null && 0 && 35; //null

/* Что отобразится в консоли. Почему?

12 + 14 + '12'  // 2612 string.  12+14=26 конкатенация со строкой '12' = '2612'
3 + 2 - '1' // 4 number. -'1' преобразовывается в число
'3' + 2 - 1  // 31 string. Ариметика 2-1=1. Конкатенация строки '3' + 1 (преобразование в строку)
true + 2  // 3 number. true =1  1+2=3
+'10' + 1  // 11 number. Проебразование строки '10' в число 10 и сложение с 1
undefined + 2  // NaN  undefined не являестя числом
null + 5  // 5 number. Null преобразвоывеся в 0. 0+5=5
true + undefined  // NaN undefined не являестя числом
 */

// Занятие 2. Слайд 16

// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let z = 'hidden';

if (z=='hidden') {
  z='visible';
} else { z='hidden';}
console.log(z);

//Используя if, записать условие:
// если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

a=-1;
if (a === 0) {
  a=1;
} else if (a < 0) {
  a='less then zhero';
} else {
  a*=10;
}
 
console.log(a);

//3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
//Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {name: 'Lexus', age: 6, create: 2008, needRepair: false };

if (car.age>5) {
  console.log('Need repair');
  car.needRepair = true;
} else {
  car.needRepair = false;
}

console.log (car);

// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
//Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль

let item = { name: 'Intel core i7', price: '100$', discount: '15%'};

if (item.discount !== undefined && item.discount !== '') {
  item['priceWidthDiscount'] = (parseFloat(item.price) * parseFloat(item.discount) / 100);
  console.log(item.priceWidthDiscount);
} else {
  console.log(parseFloat(item.price));
}


//Дан следующий код:

let product = {
  name: 'Яблоко',
  price: '20$'
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

//Написать условие если (цена товара больше или равна минимальной цене) и (меньше или равна максимальной цене) то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

if (parseFloat(product.price)>=min && parseFloat(product.price)<=max) {
  console.log(product.name);
} else {
  console.log('товаров не найдено');
}
