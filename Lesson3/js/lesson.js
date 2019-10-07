function sayMyName(string) {
    console.log(arguments);
    return `My name is ${string}`;
}

console.log(sayMyName('Sergey'))

let num1 = 1 / 'qwerty';

function returnMin(num1, num2) {
    return 'Минимальное число: ' + Math.min(num1, num2);
}

console.log(returnMin(2, 3))

function getText(role) {
    return role === 'admin' ? 'Привет!' : 'hello';
}

function hiUser(name, role) {
    const text = getText(role);
    console.log(text + name);
}

function getFiveNumbers(string) {
    return string.slice(0, 5);
}
console.log(getFiveNumbers('9hs7H09jh'))

function checkDeveloper(developer) {
    if (developer.type === 'backend') {
        return 'Developer not good for us'
    } else if (developer.type === 'frontend') {
        return 'Developer is Ok'
    }
    return 'Not developer'
}

const developerIvan = {
    name: 'Ivan',
    type: 'backend',
    salary: 3500,
}
console.log(checkDeveloper(developerIvan));

function calcAvgVal(arrayOfNumbers) {
    let result = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        result +=arrayOfNumbers[i];        
    }
    result = result / arrayOfNumbers.length;
    return result;
}

const avg = calcAvgVal([1, 2, 3, 3, 2, 4]);
console.log('avg', avg);


const array = [1, 2, 3, 4, 5, 6];
console.log(array);
array.push(56);
// array.shift(2);
array.splice(2, 3); //вырезает элементы массива

console.log(array);

// array.pop();
// // array.unshift();
// console.log(array);

array.indexOf(4); // индекс искомого элемента 
array.lastIndexOf(4); // поиск с конца массива
array.reverse(); // переворот массива
array.join(' '); //перобразование всех элементов массива в строку

//array1.map  преобразование элементов массива и возврат полученого
const array1 = [1, 2, 3, 4, 5, 6];
console.log(array1.map((element) => {
    return element * 5;
}))

//array1.forEach перебор массива
array1.forEach((element) => {
    console.log('el =', element);
})