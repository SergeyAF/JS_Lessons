//1. Найти параграф и получить его текстовое содержимое (только текст!)

const paragraph = document.querySelector('p');
console.log(paragraph.textContent);

//2. 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

const domNode = document.querySelector('article');

function getNodeInfo(node) {
    const nodeObj = {
        type: node.nodeType,
        name: node.tagName,
        numOfCildren: node.children.length,
    }
    return nodeObj;
}

console.log(getNodeInfo(domNode));

//3. 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

const ulNode = document.querySelector('ul');

function getTextFromUl(node) {
    const outputArray = [];
    const aNode = node.querySelectorAll('a');
    for (const el of aNode) {
        outputArray.push(el.textContent);
    }
    return outputArray;
};

console.log(getTextFromUl(ulNode));

//4. 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
//-text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

paragraph.childNodes.forEach(el => {
    if (el.nodeType === 3) {
        el.textContent = "-text-";
    }
});
console.log(paragraph)

//1. Найти в коде список ul и добавить класс “list”

ulNode.classList.add('list');

//2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
// ulNode.nextElementSibling.classList.add('')

let searchNode = ulNode;
while (searchNode.tagName !== 'A' && searchNode.nextElementSibling !== null) {
    searchNode = searchNode.nextElementSibling;
}

searchNode.id='link';
console.log(searchNode);

//3. На li через один (начиная с самого первого) установить класс “item”
for (i = 0; i < ulNode.children.length; i += 2) {
    ulNode.children[i].classList.add('item');
}

//4. На все ссылки в примере установить класс “custom-link”

const allLinkNodes = document.querySelectorAll('a');

for (const element of allLinkNodes) {
    element.classList.add('custom-link');
};

// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
/* <ul>
<li><a href="#">Link1</a></li>
...
<li class=”new-item”>item 5</li>
<li class=”new-item”>item 6</li>
</ul>
Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке. */

for (i = 0; i < 2; i++) {
    ulNode.insertAdjacentHTML('beforeend', `<li class="new-item">item ${ulNode.childElementCount + 1}</li>`);
}

//2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong). 

const linksNode = ulNode.querySelectorAll('a');
    for (const el of linksNode) {
        el.insertAdjacentHTML('beforeend', `<strong></strong>`);
    }

//3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 

let jsLogoImg = document.createElement('img');
jsLogoImg.src = "img/js-logo.png";
jsLogoImg.alt = "JavaScript Logo";
console.log(jsLogoImg);
document.body.prepend(jsLogoImg);

//4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
const markNode = document.querySelector('mark');
markNode.textContent += 'green';
markNode.classList.add('green');

//5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)

const arrayOfLi = Array.from(ulNode.children);

function liSort(li1, li2) {
    if (li1.textContent > li2.textContent) {
        return -1;
    }
    if (li1.textContent < li2.textContent) {
        return 1;
    }
    return 0;
}

ulNode.append(...arrayOfLi.sort(liSort));

//создать таблицу вида:
//Условия:
//- В конце таблицы обязательно последняя tr должна содержать total balance всех пользователей из таблицы при этом он должен быть всегда выровнен по правому краю. 
//- Количество пользователей может быть любым.
//- Таблица и все ее содержимое должно создаваться через js, в разметке у вас может быть только контейнер какой то.
//- В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков th которые будут выводиться в таблице. Что то типа { name: ‘Name’, email: ‘Email’... } соответственно ключ объекта это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок th.
const tableContainer = document.querySelector('div.container');

const th = {
    number: '#',
    name: 'Name',
    email: 'Email',
    balance: 'Balance',
}


const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
		"nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
		"nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
		"nestedField": { total: 200 }
  }
];

function renderUserToTable(array, tableContainer, colName) {
    let counter = 0;
    const table = document.createElement('table');
    table.classList.add('usr_table');
    table.cellSpacing = 0;
    table.cellPadding = 0;
    tableContainer.prepend(table);
    const tbody = document.createElement('tbody')
    tbody.insertAdjacentHTML('beforeend', `
        <tr>
            <td class="bold" witdh="20px" align="center">${colName.number}</td>
            <td class="bold">${colName.name}</td>
            <td class="bold">${colName.email}</td>
            <td class="bold">${colName.balance}</td>
        </tr>
        `);
    array.forEach((user, index) => {
        counter += user.balance;
        tbody.insertAdjacentHTML('beforeend', `
        <tr>
            <td witdh="20px" align="center">${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.balance}</td>
        </tr>
        `);
    });
    tbody.insertAdjacentHTML('beforeend', `
        <tr><td align="right" colspan="4">Total balance: <b>${counter}</b>`)
    table.append(tbody);
};

renderUserToTable(users, tableContainer, th);