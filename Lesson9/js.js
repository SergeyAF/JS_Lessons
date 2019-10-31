//1. Есть класс Planet
class Planet {
    constructor (name) {
    this.name = name;
    }
    getName() {
        return 'Planet name is ' + this.name;
    }
}
//Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
//принимать, кроме name, название спутника (satelliteName). Переопределите метод
//getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
//дополнительный текст 'The satellite is' + satelliteName.
//Например:
//var earth = new PlanetWithSatellite('earth', 'moon');
//earth.getName(); // 'Planet name is earth. The satellite is moon’

class PlanetWithSatellite extends Planet {
    constructor (name, satelliteName) {
        super(name);
        this.satelliteName = satelliteName;
    }
    getName() {
        return `Planet name is ${this.name}. The satellite is ${this.satelliteName}`;    
    };
}

const mars = new Planet('Mars');
console.log(mars.getName());

const earth = new PlanetWithSatellite('Earth', 'Moon');
console.log(earth.getName());

// 2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
//Создайте наследников этого класса:
//классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование 

//У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}

//У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов} 
//От каждого класса создать экземпляр (дом, торговый центр)

class Building {
    constructor(name) {
        this.name = name;
        this.floors = 0;
    }
    setFloors(floors) {
        return this.floors = floors;
    }
    getFloors() {
        return this.floors;
    }
}

const superMarket = new Building('Silpo');
superMarket.setFloors(2);
console.log(superMarket.getFloors());

class LiveHouse extends Building {
    constructor(name, apartments) {
        super(name);
        this.apartments = apartments;
    };
    getFloors() {
        return {'floors': this.floors,'totalApartments': this.floors * this.apartments};
    };
};

const florencia = new LiveHouse('Florencia', 4);
florencia.setFloors(3);
console.log(florencia.getFloors());

class TradeCenter extends Building {
    constructor(name, shops) {
        super(name);
        this.shops= shops;
    };
    getFloors() {
        return {'floors': this.floors,'totalShops': this.floors * this.shops};
    };
};

const karavan = new TradeCenter('Karavan', 34);
karavan.setFloors(2);
console.log(karavan.getFloors());

// 3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
//Задача на переопределение метода у экземпляров класса.

function Furniture (name, price) {
        this.name = name;
        this.price = price;
};

Furniture.prototype.getInformation = function() {
    return `мебель: ${this.name}, цена: ${this.price}`
};

const chear = new Furniture('стул', 150);

console.log(chear.getInformation());

function OfficeFurniture (name, price, options) {
    Furniture.call(this, name, price);
    this.options = options;
    this.getInformation = function() {
        return `мебель: ${this.name}, цена ${this.price}. Доп принадлежности: ${this.options}`;
    };
};

const officeOne = new OfficeFurniture('Рабочее место', 500, 'Тумбочка');
console.log(officeOne.getInformation())

function HomeFurniture (name, price, numberOfUnits) {
    Furniture.call(this, name, price);
    this.number = numberOfUnits;
    this.getInformation = function() {
        return `мебель: ${this.name}, цена ${this.price}. Количество предметов: ${this.number}`;
    };
};

const garniture = new HomeFurniture('Мебельный гарнитур', 1200, 12);
console.log(garniture.getInformation())

// 4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
//У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть true/false, должно быть скрытым). Свойства определяются в момент вызова конструктора.
//У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
//У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)

function User(name, regDate) {
    this.name = name;
    this.regDate = regDate;    
    this.getInfo = function() {
            return `Имя пользователя: ${this.name}, Дата регистрации: ${this.regDate}`;
        };
};

function Admin (name, regDate, superAdmin) {
    User.call(this, name, regDate);
    superAdmin = superAdmin;
    let parentGetInfo = this.getInfo();
    this.getInfo = function() {
            return (parentGetInfo +` Суперадми: ${superAdmin}`);
        };
}

function Guest (name, regDate, validDate) {
    User.call(this, name, regDate);
    this.validDate = validDate;
    let parentGetInfo = this.getInfo();
    this.getInfo = function() {
            return (parentGetInfo +` Аккаунт действителен до: ${regDate + validDate}`);
        };
}

const oneSuperAdmin = new Admin('Bob', 15, true);
console.log(oneSuperAdmin.getInfo());

const oneGuest = new Guest('Nikola', 15, 7);
console.log(oneGuest.getInfo());
