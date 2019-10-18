// const text = document.querySelector('div');  можно прописывать сложные селекторы
// к примеру 'div p span'  // <div><p><span></span></p></div>
// div.first первый див

// const text = document.querySelectorAll('div')  возвращает массив всех найденых элементов подходящих под условие.

//const text = document.getElementById('iAmID') // вытягивает ноду по id
//const text = document.getElementsByClassName('test_class'); //массмв нод по именам классаов
// const text = document.getElementsByName('bob')
// console.log(text);
//console.log(text.classList);


// const btn = document.querySelector('.btn-get-data');
//console.log(input);
// console.log(input.value);
// console.log(btn);
//console.log(span.innerText); //.innerHTML .textContent

// function handleClick() {
//     console.log('hello');
// };

// input.addEventListener('click', (event) => console.log('click click', event)); //click по клику, change по изменению
// const input1 = document.querySelector('.first_input');
// const input2 = document.querySelector('.second_input');
// const btn = document.querySelector('.btn-get-data');

// btn.addEventListener('click', () => {
//     console.log('Data', parseInt(input1.value)+parseInt(input2.value));
// })

const ul = document.querySelector('ul.first');
const lilist1 = document.querySelectorAll('ul.first li');

console.log('list of li ', lilist1);
console.log('list of li ', ul.childNodes);
console.log('list of li ', ul.children);
console.log('sib 1 nxt ', ul.previousElementSibling);
console.log('sib 1 nxtEl ', ul.nextElementSibling);
console.log('parent ', ul.parentElement);
console.log('first child ', ul.firstElementChild);
console.log('last child ', ul.lastElementChild);

console.log('closest', ul.closest('span'));
