//1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
//isParent(parent, child);
//isParent(document.body.children[0], document.querySelector('mark'));
// true так как первый див является родительским элементом для mark
//isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так ul НЕ является родительским элементом для mark
//Функция принимает только DOM объекты.

const element1 = document.querySelector('mark');
const element2 = document.querySelector('article');

console.log(element1);
console.log(element2);

function isParent(parent, children) {
    return children.closest(parent.tagName) === parent;
}

console.log(isParent(element2, element1));

//2. Получить список всех ссылок, которые не находятся внутри списка ul
const arrayOfLinks = document.querySelectorAll('a');
const ulNode = document.querySelector('ul');
const filtredLinks = [];
arrayOfLinks.forEach(el => {
    if (el.closest(ulNode.tagName) !== ulNode) {
        filtredLinks.push(el);
    }     
});
console.log(filtredLinks);

//3. Найти элемент, который находится перед и после списка ul 

console.log(ulNode.previousElementSibling);
console.log(ulNode.nextElementSibling);