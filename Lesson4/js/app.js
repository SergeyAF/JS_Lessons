function arrayModificator(array, fn) {
    return `New value: ${fn(array)}`;
};
//firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
function getUpeerCaseString(array) {
    let outputStr = '';
    for (let i = 0; i < array.length; i++) {
        outputStr += array[i][0].toUpperCase() + array[i].slice(1, array[i].length);   
    };
    return outputStr;
};

const nameArray = ['my', 'name', 'is', 'Trinity'];
console.log(arrayModificator(nameArray, getUpeerCaseString));

//firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”

function calcMultiplyToTen(array) {
    const outputArray = [];
    for (let i = 0; i < array.length; i++) {
        outputArray.push(array[i] * 10);
    };
    return outputArray;
};
const valueArray = [10, 20, 30];
console.log(arrayModificator(valueArray, calcMultiplyToTen));

//firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) → “New value: Jhon is 45, Aaron is 20,”

function writeAge(array) {
    const outputArray = [];
    for (let i = 0; i < array.length; i++) {
        outputArray.push(`${array[i].name} is ${array[i].age}`);
    };
    return outputArray;
};

const usersArray = [
    {
        age: 45,
        name: 'John',
    },
    {
        age: 20,
        name: 'Aaron',
    }
];

console.log(arrayModificator(usersArray, writeAge));

//firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

function reverseString(array) {
    let outputArray = [];
    for (let i = 0; i < array.length; i++) {
        let tempString = '';
        for (let j = array[i].length -1; j > -1; j--) {
            tempString += array[i][j];    
        }
        outputArray.push(tempString);
    }
    return outputArray;
}

const arrayToReverse = ['abc', '123'];

console.log(arrayModificator(arrayToReverse, reverseString));

//2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
//функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив.

const randomArray = [1, 6, 2, 9, 1, 0, 4, 6];
const randomArray2 = [6, 8, 9, 10, 12, 8, 6];

function likeEver(array, fnCallback) {
    if (Array.isArray(array) === true){
        if (typeof fnCallback === 'function'){
            const newArray = [];
            for (let i = 0; i < array.length; i++) {
                if (fnCallback(array[i]) === false) {
                    return false;
                };
            }
            return true;
        } else {
            return 'Передана не функция'
        }
    } else {
        return 'Передан не массив';
    }
}
moreThanFive = (value) => {
    return value > 5 ? true : false ;
}
console.log(likeEver(randomArray, moreThanFive));


//1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,каждый элемент которого будет хранить информацию о числе и его четности:
//[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

const arrayForMap = [1,2,3,5,8,9,10]

checkOddArray = (array => array.map((value) => {
    let oddValue = value % 2 === 0 ? 0 : 1;
    return {digit: value, odd: oddValue};
}));
console.log(checkOddArray(arrayForMap));

//2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.

const arrayForCheck = [12, 4, 50, 1, 0, 18, 40];

checkForZerro = (array => array.every(value => {
    return value !== 0;
}));
console.log(checkForZerro(arrayForCheck));

//3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true
const WordsArray = ['yes', 'hello', 'no', 'easycode', 'what'];

chechArrayLength = (array => array.some(value => {
    return value.length > 3;
}))
console.log(chechArrayLength(WordsArray));

//4/ Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

const randomIndexArray = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

//Напишите функцию, которая из элементов массива соберет и вернёт
//строку, основываясь на index каждой буквы. Например:
//[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

getStrinFromIdexArray = (array => {
    const sortedArray = array.sort((a,b) => {
        return a.index - b.index;
    })
    return (sortedArray.reduce((str, value) => {
        return str + value.char;
    }, ''))
});

console.log(getStrinFromIdexArray(randomIndexArray));


// 1.Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): 
const someArray = [  [14, 45],  [1],  ['a', 'c', 'd']  ];

arraySorter = (array => array.sort((a,b) => {
    return a.length - b.length;
}));
console.log(arraySorter(someArray));


// 2. Есть массив объектов:
const cpuArray =[
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
];
//Отсортировать их по возрастающему количеству ядер (cores).

sortByCores = (array => array.sort((a,b) => {
    return a.info.cores - b.info.cores;
}))
console.log(sortByCores(cpuArray));

//3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

getFilterByPrice = ((array, lowPrice, highPrice) => {
    const filteredArray = array.filter((item) => {
        return (item.price >= lowPrice && item.price <= highPrice)
    });
    return filteredArray.sort((a,b) => {
        return a.price - b.price;
    })
});

console.log(getFilterByPrice(products, 8, 40));
//filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]