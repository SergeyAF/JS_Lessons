// 1. Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
    width: 20,
    height: 30,
    getSquare() {
        return this.width * this.height;
    }
}
console.log(rectangle.getSquare());

// 2. Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:
// const price = { price: 10,discount: '15%', ... };

const price = {
    price: 10,
    discount: '15%',
    getPrice() {
        return this.price;
    },
    getPriceWithDiscount() {
        return (this.price * (1 - parseInt(this.discount) / 100));
    }
}

console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

//3. Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту:
//object.height = 10;
//object.inc(); // придумать свое название для метода
//object.height; // 11;

const heightObj = {
    height: 10,
    incHeight() {
        this.height ++
    },
}

console.log(heightObj.height);
heightObj.incHeight();
console.log(heightObj.height);

// 4. 4. Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:

const numerator = {
    value: 1,
    double() {
        this.value *= 2;
        return this;
    },
    plusOne() {
        this.value ++;
        return this;
    },
    minusOne() {
        this.value --;
        return this;
    },
}
console.log(numerator.value);
numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);


// --- Конструкотры --- //

//Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
//
//read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//sum() возвращает сумму введённых свойств.
//mul() возвращает произведение введённых свойств. 

function Calculator() {
    this.value1 = 0;
    this.value2 = 0;
    this.read = function() {
        this.value1 = parseInt(prompt('Введите первое число', 0));
        this.value2 = parseInt(prompt('Введите второе число', 0));
    };
    this.sum = function() {
        return this.value1 + this.value2;
    };
    this.mul = function() {
        return this.value1 * this.value2;
    };
}

calc = new Calculator;
calc.read();
console.log(calc)
console.log(calc.sum());
console.log(calc.mul());