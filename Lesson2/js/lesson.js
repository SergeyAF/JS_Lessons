const animal = {
    type: 'dog',
    name: 'Alex',
    color: 'black'
};

// type - dog

for (let key in animal) {
    console.log('>>> ', key, animal[key]);
}

// const key = 'type';

// console.log(animal.type);
// console.log(animal[key]);

// const animal2 = {...animal}; // деструктуризация
// animal2.type = animal.type;

const arrayNumbers = [1, 2, 3, 4, 5];

for (let i = 0; i < arrayNumbers.length; i++) {
    console.log(arrayNumbers[i] * 3);   
}

let i = 0;
while (arrayNumbers.length>i) {
    console.log(arrayNumbers[i] * 3);  
    i++;    
}

for (let value of arrayNumbers) {
    console.log('-----', value);
}

for (let i = 10; i >= 0; i--){
    console.log(i);
}

const user1 = {
    type: 'admin',
    name: 'Alex'
}
const user2 = {
    type: 'user',
    name: 'Anna'
}
const user3 = {
    type: 'user',
    name: 'Bill'
}

const userArray = [user1, user2, user3];

for (let index of userArray) {
    if (index.type === 'user') {
        console.log(index.name);        
    }
}

numArray = [2, 3, 34, 6767]
let summ = 0;
for (let i = 0; i < numArray.length; i++) {
    summ += numArray[i];
}
console.log(summ)

const differentNumbers = [2, 3, -4, 0, 23, -48]
summ = 0;
for (let i = 0; i < differentNumbers.length; i++) {
    if (differentNumbers[i]>0) {
        summ += differentNumbers[i];
    }
}
console.log(summ)