// Отображать список книг.
// Добавление книги
// Сортировка (по цене, по алф)
// Фильтрация (по стране, по автору)
// Валидация при добавлению книги
// Редактирование книги.
// Сохранение в Local Storage

// Название книги, цена, автор, страна,
// картинка(по умолчанию), рейтинг(select), жанр (строка)

const ARRAY_FIELDS = [
    {name: 'book_name', label: 'Название'},
    {name: 'price', label: 'Цена'},
    {name: 'autor', label: 'Автор'},
    {name: 'country', label: 'Страна'},
    {name: 'url', label: 'Картинка'},
    {
        name: 'rate', 
        label: 'Рейтинг',
        choices: [1, 2, 3, 4 , 5],
        type: 'select'},
    {name: 'genre', label: 'Жанр'},
    {name: 'ISBN', label: 'ISBN'}
];

const listOfBooks = [];

class Field {
    constructor({name, label}) {
        this.name = name;
        this.label = label;
    };
}

class InputField extends Field {
    render(){
        const html = `
        <label class="label d-f">
            <span>${this.label}</span>
            <input name=${this.name} value="">
        </label>`;
        return html;
    };
};

class SelectField extends Field {
    constructor (field) {
        super(field);
        const {choices} = field;
        this.choices = choices
    }
    render () {
        const html = `
        <label class="label d-f">
            <span>${this.label}</span>
            <select name=${this.name}>
                ${this.choices.map(choices =>`
                <option>${choices}</option>`)};
            </select>
        </label>`;
        return html;
    }
};

class Form {
    constructor (selector) {
        this.selector = selector;
        this.Init()
    };
    Init() {
        const form = document.createElement('form');
        const bookForm = document.querySelector(this.selector);
        ARRAY_FIELDS.forEach((field) => {
            const inputName = field.type === 'select' ? new SelectField(field) : new InputField(field);
            const html = inputName.render();
            form.insertAdjacentHTML('beforeend', html);
        });
        const btn = document.createElement('button')
        btn.textContent = 'Добавить Книгу';
        btn.classList.add('btn','order-btn');
        btn.addEventListener('click', this.addBook.bind(this))
        form.append(btn);
        bookForm.append(form);
    };

    resetFields() {
        ARRAY_FIELDS.forEach((field) => {
            const reset = document.querySelector(`[name=${field.name}]`);
            reset.value = field.type === 'select' ? 1 : '';
        });
    }

    addBook(event) {
        event.preventDefault();
        const book = ARRAY_FIELDS.reduce((acc, {name}) => {
            const input = document.querySelector(`[name=${name}]`).value;
            return {...acc, [name]: input}
        }, {});
        if (this.validateFields(book)) {
            this.resetFields();
            listOfBooks.push(book);
            const bookList = new ListBooks(book);
            bookList.updateListBooks();
        };
    };

    validateFields(book) {
        const notification = document.querySelector('.notification');
        notification.textContent = '';
        let validKey = 1;
        for (const key in book) {
            const warning = ARRAY_FIELDS.find(item => item.name === key);
            if (!book[key]) {
                notification.insertAdjacentHTML('beforeend', `<span>Не Заполненно поле ${warning.label}</span>`);
                notification.insertAdjacentHTML('beforeend', `<span>Все поля должын быть заполненны</span>`);
                return false;
            };
            if ((key === "book_name") && ((book[key].length < 5) || (book[key].length > 50))) {
                notification.insertAdjacentHTML('beforeend', `<span>${warning.label} должно быть не менее 5 и не более 50 символов</span>`);
                validKey = 0;
            };
            if ((key === "price") && (isNaN(book[key]))){
                notification.insertAdjacentHTML('beforeend', `<span>В поле ${warning.label} должно быть введено число</span>`);
                validKey = 0; 
            } 
            if (key === "url"){
                const expression = /.jpg|.gif|.bmp|.png|.svg/;
                if (!book[key].match(expression)) {
                notification.insertAdjacentHTML('beforeend', `<span>Укажите ссылку на картинку. Разрешенные форматы: jpg, png, svg, bmp, gif</span>`);
                validKey = 0; 
                };
            } 
            if (((key === "autor") || (key === "country") || (key === "genre")) && ((book[key].length < 3) || (book[key].length > 25) || (parseInt(book[key])))) {
                notification.insertAdjacentHTML('beforeend', `<span>Поле ${warning.label} не менее 3 и не более 25 символов и не должно быть числом</span>`);  
                validKey = 0;
            }
            if ((key === "ISBN") && (book[key].length !== 17)) {
                notification.insertAdjacentHTML('beforeend', `<span>Поле ${warning.label} должно содержать 14 числ записанных в формате xxx-xxxx-xxxx-xxx</span>`);  
                validKey = 0;
            }
        };
        if (validKey === 0) {
            return false};
        return true;
    };
};

class Book {
    constructor(book) {
        this.book = book;
    }
    render(){
        const html = `<div class="item-wrapper">
        <div class="item-holder">
            <a href="#" class="img-holder">
                <img src="img/${this.book.url}" alt="">
            </a>
            <div class="book-info">
                <a href="#" class="book-name">
                    ${this.book.book_name}
                </a>
                <span class="book-autor">${this.book.autor}</span>
            </div>
            <div class="book-social d-f fw-w jc-sb">
                <div class="rating-box">
                </div>
                <span class="rating">${this.book.rate}/5</span>
            </div>
            <div class="book-order-info d-f fw-w jc-sb">
                <span class="book-price">${this.book.price} грн</span>
                <button class="btn btn-add_to-backet">Купить</button>
            </div>
            <div class="additition-atributes">
                <table>
                    <tbody>
                        <tr>
                            <td><span class="name">Жанр</span></td>
                            <td><span class="val">${this.book.genre}</span></td>
                        </tr>
                        <tr>
                            <td><span class="name">Страна</span></td>
                            <td><span class="val">${this.book.country}</span></td>
                        </tr>
                        <tr>
                            <td><span class="name">ISBN</span></td>
                            <td><span class="val">${this.book.ISBN}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>`;
        return html;
    }
}

class ListBooks {
    constructor(book) {
        this.book = book;
    }
    updateListBooks() {
        const bookList = document.querySelector('#book-list');
        const oneBook = new Book(this.book);
        const html = oneBook.render();
        bookList.insertAdjacentHTML('beforeend', html);
    }
}

const form = new Form('#book-form');
