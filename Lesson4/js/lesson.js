let users = [
    {
        name: 'Anastasia',
        age: 24,
        job: 'developer',
        gender: 'female',
        frontend: true,
    },
    {
        name: 'Bill',
        age: 16,
        job: 'qa',
        gender: 'male',
    },
    {
        name: 'John',
        age: 43,
        job: 'dev-ops',
        gender: 'male',
    },
];


users.forEach((user, index) => {
    console.log('user -', user.name,' index =', index);
})

const arrayOfJobs = users.map((user) => {
    return user.job;
})

console.log(users);
console.log(arrayOfJobs);

const users2 = users.map((user) => {
    return {...user, showStar: true}
});

console.log(users2);

const filteredUserList = users.filter((user) => {
    return user.gender === 'male';
})
console.log(filteredUserList);

const isShowAds = users.some((user) => {
    return parseInt(user.age) < 19;
})
console.log(isShowAds);

const isShowAds1 = users.every((user) => {
    return parseInt(user.age) < 19;
})
console.log(isShowAds1);

users.forEach((user) => {
    if(user.hasOwnProperty('frontend')){ //есть ли такое свойство в объекте.
        console.log('Есть такое')
    } else {
        console.log('Не найдено')
    }
})

const result = users.reduce((acc, user) => {
    return acc + user.age;
}, 0)
console.log(result);

const arrStr = ['i', 2, 3, 'l', 'o', 5, 'v', 'e','j','s']

const resultStr = arrStr.reduce((acc, item) => {
    if (typeof item === 'string') {
    return acc + item;
    } else {
        return acc;
    }
}, '')
console.log(resultStr);

const arr = [9, 1, 2, -34, 100, -3, 4, 5, 6];
// проверка на существование элемента -34 в массиве arr
const isNegative = arr.includes(-34);

// .includes работает только с простыми типами.

// проверка что переданные данные [1, 3, 5] это массив
Array.isArray([1, 3, 5])

//сортировка
console.log(arr.sort()); //сортирует как строки

console.log(arr.sort((a, b) =>{
    return a - b; // от меньшего к большему. b - a от большего к меньшему.
}));

function userSort(user1, user2) {
    return user1.age - user2.age;
}

users.sort(userSort);
console.log(users);

//-------------- Функции --------------

const numArray = [1, 2, 3, 4, 5];

function sum(array) {
    return array.reduce((acc, currentElement) => {return acc + currentElement}, 0);
}
console.log(sum(numArray));

function calc(array, customFunction) {
    return customFunction(array);
}

const result2 = calc(numArray, sum);
console.log(`result = ${result2}`);

function myMap(array, fn) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i]));    
    }    
    return newArray;
}
function duble(element) {
    return element * 2;
}

console.log(myMap(numArray, duble));
console.log(numArray.map(duble));
