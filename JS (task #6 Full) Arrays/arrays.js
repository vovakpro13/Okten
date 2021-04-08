// 1) Створити масив з 20 чисел та:
// a) відсортувати його від меншого до більшого.

const numbers = [456, 7887, 135, 79, 3, 57, 8221, 366, 5445, 31, 450, 8, 632, 11, 243, 5.8, 3454, 566, 5454, 7];
const sortedToBig = numbers.sort((second, first) => second - first);
console.log(sortedToBig);

// b) відсортувати його від більшого до меншого.

const sortedToSmall = numbers.sort((second, first) => first - second);
console.log(sortedToSmall);
//numbers мутував..

// c) Відфілтрувати числа які є кратними 3.

const multiplesOf3 = numbers.filter(number => !(number % 3));
console.log(multiplesOf3)


// d) Відфілтрувати числа які є більшими за 10.

const moreThan10 = numbers.filter(number => number >= 10);
console.log(moreThan10)

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

numbers.forEach((value) => document.write(`${value} <br>`));

// f) За допомогою map збільшити кожен елемент в масиві в три рази.

const multipliedBy3 = numbers.map(number => number * 3);
console.log(multipliedBy3)

// g) Порахувати загальну суму всіх елментів у масиві (reduce)

const sumOfNumbers = numbers.reduce((acc, cur, index) => acc += cur, 0);
console.log(sumOfNumbers)


// 2) Створити масив з 20 стрічок та:
// a) Відсортувати його в алфавітному порядку

const names = ['Petro', 'Vasya', 'Olena', 'Katya', 'Vova', 'Asasdas', 'Galyna', 'Slavik', 'Nastya', 'Iryna', 'Stas',
    'Alex', 'Jane', 'Vitya', 'Nusa', 'Karina', 'Oksana', 'Karpo', 'Lavrin', 'Ostap'];
names.sort();
console.log(names);

// b) Відсортувати в зворотньому порядку

names.sort(() => {
    return -1
});
console.log(names);

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

const lenghtMoreThan4 = names.filter((name) => name.length > 4);
console.log(lenghtMoreThan4);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
names.forEach((name, index, arr) => arr[index] = `Sam speaks with ${name}`);
console.log(names);

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)

users.sort((sec, first) => sec.age - first.age);
console.log(JSON.parse(JSON.stringify(users)));  //json, бо консоль чогось лагає якшо просто users логати

users.sort((sec, first) => first.age - sec.age);
console.log(JSON.parse(JSON.stringify(users)));

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

users.sort((sec, first) => first.name.length - sec.name.length);
console.log(JSON.parse(JSON.stringify(users)));

users.sort((sec, first) => sec.name.length - first.name.length);
console.log(JSON.parse(JSON.stringify(users)));

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)

const usersWithId = users.map((user) => {
    return {id: Math.round(Date.now() * Math.random()), name: user.name, age: user.age, isMarried: user.isMarried};
});
console.log(JSON.parse(JSON.stringify(usersWithId)));

// d) відсортувати його за індентифікатором
usersWithId.sort((nextUser, preUser) => nextUser.id - preUser.id);
console.log(JSON.parse(JSON.stringify(usersWithId)));

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

const married = usersWithId.reduce((arrayMarried, user) => {
    if (user.isMarried) {
        user.flat = true;   //usersWithId мутує
        arrayMarried.push(user);
    }

    return arrayMarried;
}, []);

console.log(married);

//
// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
const cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }
];

//
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
const engineMoreThan3liters = cars.filter((car) => car.volume > 3);
console.log(engineMoreThan3liters);

// - двигун = 2л
const engine2liters = cars.filter((car) => car.volume === 2);
console.log(engine2liters);

// - виробник мерс
const mercedes = cars.filter((car) => car.producer === "mercedes");
console.log(mercedes);

// - двигун більше 3х літрів + виробник мерседес
const mercedesAndEngine3 = cars.filter((car) => car.producer === "mercedes" && car.volume > 3);
console.log(mercedesAndEngine3);

// - двигун більше 3х літрів + виробник субару
const subaruAndEngine3 = cars.filter((car) => car.producer === "subaru" && car.volume > 3);
console.log(subaruAndEngine3);

// - сили більше ніж 300
const power300 = cars.filter((car) => car.power > 300);
console.log(power300);

// - сили більше ніж 300 + виробник субару
const power300Subaru = cars.filter((car) => car.producer === "subaru" && car.power > 300);
console.log(power300Subaru);

// - мотор серіі ej
const engineEJ = cars.filter((car) => car.engine.startsWith('ej'));
console.log(engineEJ);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
const subaryPower300EngineEJ = cars.filter((car) => car.producer === "subaru" && car.power > 300 && car.engine.startsWith('ej'));
console.log(subaryPower300EngineEJ);

// - двигун меньше 3х літрів + виробник мерседес
const mercedesEngineless3 = cars.filter((car) => car.producer === "mercedes" && car.volume < 3);
console.log(mercedesEngineless3);

// - двигун більше 2л + сили більше 250
const volume2Power250 = cars.filter((car) => car.volume > 2 && car.power > 250);
console.log(volume2Power250);

// - сили більше 250  + виробник бмв
const bmwPower250 = cars.filter((car) => car.producer === "bmw" && car.power > 250);
console.log(bmwPower250);


// - взять слдующий массив
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

// -- Відсортувати їх по ID
usersWithAddress.sort((nextUser, thisUser) => nextUser.id - thisUser.id);
console.log(JSON.parse(JSON.stringify(usersWithAddress)));

// -- Відсортувати їх по ID в зворотньому порядку
usersWithAddress.sort((nextUser, thisUser) => thisUser.id - nextUser.id);
console.log(JSON.parse(JSON.stringify(usersWithAddress)));

// -- Відсортувати по віку
usersWithAddress.sort((nextUser, thisUser) => nextUser.age - thisUser.age);
console.log(JSON.parse(JSON.stringify(usersWithAddress)));

// -- Відсортувати по віку в зворотньому порядку
usersWithAddress.sort((nextUser, thisUser) => thisUser.age - nextUser.age);
console.log(JSON.parse(JSON.stringify(usersWithAddress)));

// -- Відсорутвати по імені
usersWithAddress.sort((nextUser, thisUser) => nextUser.name > thisUser.name ? 1 : -1);
console.log(JSON.parse(JSON.stringify(usersWithAddress)));

// -- Відсорутвати по назві вулиці
usersWithAddress.sort((nextUser, thisUser) => nextUser.address.street > thisUser.address.street ? 1 : -1);
console.log(JSON.parse(JSON.stringify(usersWithAddress)));

// -- Відсорутвати по номеру будинку
usersWithAddress.sort((nextUser, thisUser) => nextUser.address.number - thisUser.address.number);
console.log(JSON.parse(JSON.stringify(usersWithAddress)));

// -- Залигити тільки тих, хто молодший ніж 30 (filter)
const less30 = usersWithAddress.filter((user) => user.age < 30);
console.log(less30);

// -- Залишити тільки одружених
const onlyMarried = usersWithAddress.filter((user) => user.isMarried);
console.log(onlyMarried);

// -- Залишити тільки одружених, які молодні за 30
const onlyMarriedLess30 = usersWithAddress.filter((user) => user.isMarried && user.age < 30);
console.log(onlyMarriedLess30);

// -- Залишити лише тих, в кого парні номери будинків.
const evenHouseNumbers = usersWithAddress.filter((user) => !(user.address.number % 2));
console.log(evenHouseNumbers);

// -- Порахувати загальний вік всіх людей. (reduce)

const allAges = usersWithAddress.reduce((allAge, user) => allAge += user.age, 0);
console.log(allAges);

// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)

class Chilld {
    constructor(name = 'Vova', age = 2.4, canWalk = false, parent = '') {
        this.name = name;
        this.age = age;
        this.canWalk = canWalk;
        this.parent = parent;
    }

    cry() {
        console.log(`${name} is crying!`);
    }
}

const withChild = usersWithAddress.reduce((usersWithChild, user) => {
    if (user.age > 30 && user.isMarried) {
        user.child = new Chilld(
            names[Math.floor(Math.random() * names.length)],
            Math.round(Math.random() * 16),
            Math.round(Math.random()),
            user.name
        );
        usersWithChild.push(user)
    }

    return usersWithChild;

}, []);
console.log(withChild);

// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.

class Car {
    constructor(brand, powerEngine, owner, price, year) {
        this.brand = brand;
        this.powerEngine = powerEngine;
        this.owner = owner;
        this.price = price;
        this.year = year;
    }

    engineRepair() {
        this.powerEngine += this.powerEngine * 0.1;
    }

    newOwner(owner) {
        this.owner = owner;
    }

    upPrice() {
        this.price += this.price * 0.05;
    }

}

class Driver {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }

    takeTrainigCourses() {
        this.experience++;
    }
}

//     Створити не менше 7 та не більше 20 машинок.

const Petro = new Driver('Petro', 26, 4);
const Alex = new Driver('Alex', 19, 1);
const Ira = new Driver('Ira', 35, 10.5);
const Stas = new Driver('Stas', 24, 3);
const Andriy = new Driver('Andriy', 30, 2.7);
const Pavlo = new Driver('Pavlo', 41, 20);
const Oleg = new Driver('Oleg', 27, 3.9);

const subaru400 = new Car('subaru', 400, Alex, 3000, 2010);
const toyota600 = new Car('toyota', 600, Andriy, 4000, 2011);
const bmw345 = new Car('bmw', 345, Pavlo, 1000, 2009);
const opel900 = new Car('opel', 900, Petro, 3500, 2012);
const opel780 = new Car('opel', 780, Ira, 2050, 2011);
const camry450 = new Car('camry', 450, Oleg, 6540, 2014);
const kia600 = new Car('kia', 600, Stas, 5400, 2013);
const mercedess670 = new Car('mercedess', 670, Andriy, 1500, 2006);

//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

subaru400.engineRepair();
subaru400.newOwner(Pavlo);

toyota600.engineRepair();
toyota600.newOwner(Ira);

bmw345.engineRepair();
bmw345.newOwner(Oleg);

opel900.engineRepair();
opel900.newOwner(Stas);

// Для початку вкладіть всі наші створені автомобілі в масив cars.

const allCars = [subaru400, toyota600, bmw345, opel900, opel780, camry450, kia600, mercedess670];

//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%

for (let i = 0; i < allCars.length; i += 2) {
    allCars[i].engineRepair();
    allCars[i].upPrice();
}

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

const drivers = [Petro, Alex, Ira, Stas, Andriy, Pavlo, Oleg];

drivers.forEach((driver) => {
    if (driver.age > 25 && driver.experience < 5) {
        driver.takeTrainigCourses();
    }
});

console.log(allCars);
console.log(drivers);
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

const price = allCars.reduce((price, car) => price += car.price, 0);
console.log(price);

// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

function indexesMinMax(arr = [], key = 0) {
    const inds =  arr.reduce((indexes, value, index, arr) => {
        if (value === key) {
            if (arr[index - 1] !== key) {
                indexes.minIndex = index;

            }
            if (arr[index + 1] !== key) {
                indexes.maxIndex = index;
            }
        }
        return indexes;

    }, {});

    return (Object.keys(inds).length) ? inds : -1;
}

const arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

console.log(indexesMinMax(arr, 4));
console.log(indexesMinMax(arr, 2));
console.log(indexesMinMax(arr, 7));
console.log(indexesMinMax(arr, 0));