// Зная структуру html, с помощью изученных методов получить (в консоль):
// 1. head
console.log(document.querySelector('head'));
// 2. body
console.log(document.querySelector('body'));
// 3. все дочерние элементы body и вывести их в консоль.
const bodyChildNodes = document.querySelectorAll('body *');
bodyChildNodes.forEach(el => console.log(el));

// 4. первый div и все его дочерние узлы 
const firstDiv = document.querySelector('div')
console.log(firstDiv);

// а) вывести все дочерние узлы в консоль
const firstDivChilds = firstDiv.children;

for (const el of firstDivChilds) {
    console.log(el); 
}
// б) вывести в консоль все дочерние узлы, кроме первого и последнего

for (let i = 1; i < firstDivChilds.length-1; i++) {
    console.log(firstDivChilds[i]); 
}

// Для навигации по DOM использовать методы, которые возвращают только элементы
