// Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//

function Attribute(attrTitle = '', attrAction = '') {
    this.attrTitle = attrTitle;
    this.attrAction = attrAction;

}

function Tag(tagTitle = 'div', action = '', attributes = [],) {
    this.tagTitle = tagTitle;
    this.action = action;
    this.attributes = attributes;
}

const dir = new Attribute('dir', 'Задает направление и отображение текста — слева направо или справа налево.');
const clas = new Attribute('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
const style = new Attribute('style', 'Применяется для определения стиля элемента с помощью правил CSS.');
const align = new Attribute('align', 'Определяет выравнивание содержимого тега');
const title = new Attribute('title', 'Добавляет всплывающую подсказку к содержимому.');
const href = new Attribute('href', 'Задает адрес документа, на который следует перейти.');
const download = new Attribute('download', 'Предлагает скачать указанный по ссылке файл.');
const checked = new Attribute('checked', 'Предварительно активированный переключатель или флажок.');
const disabled = new Attribute('disabled', 'Блокирует доступ и изменение элемента');
const formAttr = new Attribute('form', 'Связывает поле с формой по её идентификатору.');
const id = new Attribute('id', 'Указывает имя стилевого идентификатора.');
const method = new Attribute('method', 'Cообщает серверу о методе запроса.');
const selected = new Attribute('selected', 'Заранее устанавливает определенный пункт списка выделенным.');
const required = new Attribute('required', 'Список обязателен для выбора перед отправкой формы.');
// Таким чином описати теги

// -a
const a = new Tag('a', 'Тег <a> является одним из важных элементов HTML и предназначен для ' +
    'создания ссылок.', [href, download, style]);

// -div
const div = new Tag('div', 'Элемент <div> является блочным элементом и предназначен для выделения ' +
    'фрагмента документа с целью изменения вида содержимого.', [align, title]);

// -h1
const h1 = new Tag('h1', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня', [align, dir, clas]);

// -span
const span = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа.', [dir, clas, style]);

// -input
const input = new Tag('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет' +
    ' создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [checked, disabled, formAttr]);

// -form
const form = new Tag('form', 'Связывает поле с формой по её идентификатору. ', [id, method]);

// -option
const option = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', [disabled, selected]);

// -select
const select = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка', [disabled, formAttr, required]);


// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


//
// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


const car = {
    model: 'Opel Omega 3',
    maker: 'Germany',
    year: 1998,
    maxSpeed: 220,
    engineCapacity: 2,

    drive: function () {
        document.write(`їдемо зі швидкістю ${this.maxSpeed} на годину <br>`);
    },

    info: function () {
        const keys = Object.keys(this);
        for (let i = 0; i < 5; i++) {
            document.write(`${keys[i]}: ${this[keys[i]]} <br>`);
        }
    },

    increaseMaxSpeed: function (newSpeed) {
        this.maxSpeed = newSpeed;
    },

    changeYear: function (newValue) {
        this.year = newValue
    },

    addDriver: function (driver) {
        this.driver = driver;
    }


}

function Driver(name = '', hasRules = true, exp = 0, isHealthy = true) {
    this.name = name;
    this.hasRules = hasRules;
    this.exp = exp;
    this.isHealthy = isHealthy;
}

const Vova = new Driver('Volodymyr', false, 4);

car.addDriver(Vova);

console.log(car)

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Car(model = '', maker = '', year = 0, maxSpeed = 0, engineCapacity = 0) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function() {
        document.write(`їдемо зі швидкістю ${this.maxSpeed} на годину <br>`);
    }

    this.info = function () {
        const keys = Object.keys(this);
        for (let i = 0; i < 5; i++) {
            document.write(`${keys[i]}: ${this[keys[i]]} <br>`);
        }
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    }

    this.changeYear = function (newValue) {
        this.year = newValue
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}
const driver5 = new Driver('Oleg', true,20);
const car1 = new Car('Opel', 'Germany', 2000, 200, 2);
car1.drive();
car1.info();
car1.increaseMaxSpeed(240);
car1.changeYear(2003);
car1.addDriver(driver5);
console.log(car1);
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class CarClass {
    constructor(model = '', maker = '', year = 0, maxSpeed = 0, engineCapacity = 0) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        document.write(`їдемо зі швидкістю ${this.maxSpeed} на годину <br>`);
    }

    info() {
        const keys = Object.keys(this);
        for (let i = 0; i < 5; i++) {
            document.write(`${keys[i]}: ${this[keys[i]]} <br>`);
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue
    }

    addDriver(driver) {
        this.driver = driver;
    }

}
const carFromClass = new CarClass('Toyota', 'Some Country..', 2010, 250, 3);
carFromClass.drive();
carFromClass.info();
carFromClass.increaseMaxSpeed(300);
carFromClass.changeYear(2016);
carFromClass.addDriver(Vova);
console.log(carFromClass);

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

class Cinderella {
    constructor(name = '', age = 0, footSize = 0) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const iryna = new Cinderella('Iryna', 20, 35);
const olena = new Cinderella('Olena', 32, 33);
const katya = new Cinderella('Kateryna', 26, 32);
const vika = new Cinderella('Viktoria', 39, 37);
const kristi = new Cinderella('Kristina', 19, 34);
const c2 = new Cinderella('c2', 45, 36);
const c3 = new Cinderella('c3', 43, 31);
const c4 = new Cinderella('c4', 34, 38);
const c5 = new Cinderella('c5', 22, 40);
const c6 = new Cinderella('c6', 53, 37);

const cinds = [iryna, olena, katya, vika, kristi, c2, c3, c4, c5, c6];

class Prince {
    constructor(name = '', age = 0, sizeShoe = 0) {
        this.name = name;
        this.age = age;
        this.sizeShoe = sizeShoe;
    }
}

const prince = new Prince('Petro1', 30, 32);

for (const cinderella of cinds) {
    if (cinderella.footSize === prince.sizeShoe){
        document.write(`The cinderella ${cinderella.name} will be good wife for prince ${prince.name}`);
    }
}


