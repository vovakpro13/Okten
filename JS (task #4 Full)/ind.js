// 1) створити функцію яка приймає масив та виводить його

function showArray(arr) {
    for (const el of arr) {
        console.log(el);
    }
}

showArray([null, 12, true, 'coool', undefined]);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

function fillArray(emptyArr, length) {
    for (let i = 0; i < length; i++) {
        emptyArr[i] = Math.random();
    }

    showArray(emptyArr)
}

fillArray([], 5)

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minValue(a, b, c) {
    let min = a;
    for (let i = 0; i < arguments.length; i++) {
        min = (min > arguments[i]) ? arguments[i] : min;
    }
    console.log(min);
}

minValue(-8, -4, 5);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxValue(a, b, c) {
    let max = a;
    for (let i = 0; i < arguments.length; i++) {
        max = (max < arguments[i]) ? arguments[i] : max;
    }
    console.log(max);
}

maxValue(-8, -4, 5);

// 5) створити функцію яка повертає найбільше число з масиву

function maxElementOfArray(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        max = (max < array[i]) ? array[i] : max;
    }
    return max;
}

console.log(maxElementOfArray([-8, 5, 5, 60]));

// 6) створити функцію яка повертає найменьше число з масиву

function minElementOfArray(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        min = (min > array[i]) ? array[i] : min;
    }
    return min;
}

console.log(minElementOfArray([-8, -4, 5]));

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

function sumOf(numArray) {
    let sum = 0;
    for (const num of numArray) {
        sum += num;
    }
    return sum;
}

console.log(sumOf([0, 6, 45, 334, 4, 56, 2]));

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function middleOf(numArray) {
    let sum = sumOf(numArray);
    return sum / numArray.length;
}

console.log(middleOf([10, 9, 8, 11, 12, 7]));

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function getAllKeys(objectArray) {
    let allKeys = [];
    for (const object of objectArray) {
        const keysOfObject = Object.keys(object);
        for (const key of keysOfObject) {
            allKeys.push(key);
        }
    }
    return allKeys;
}

const arrObjects = [{name: "Vova", age: 17}, {car: null, model: undefined}, {skills: ['html', 'js']}];
console.log(getAllKeys(arrObjects));

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function getAllValues(objectArray) {
    let allValues = [];
    for (const object of objectArray) {
        const valuesOfObject = Object.values(object);
        for (const value of valuesOfObject) {
            allValues.push(value);
        }
    }
    return allValues;
}

console.log(getAllValues(arrObjects));

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]

function addValuesWithSameIndex(topArray, bottomArray) {
    const topLen = topArray.length;
    const botLen = bottomArray.length;
    let minLength = (topLen < botLen) ? topLen : botLen;

    const resultArray = [];
    for (let i = 0; i < minLength; i++) {
        resultArray.push(topArray[i] + bottomArray[i]);
    }

    return resultArray;
}

console.log(addValuesWithSameIndex([7, 3, 87, 1, 0, 32], [54, 78, 2, 90, 2]));

// ============================================================================================
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function minMaxValue() {
    console.log(maxElementOfArray(arguments));
    return minElementOfArray(arguments);
}

console.log(minMaxValue(0, 1, 2));

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.


function getKeysOrValues(arrOfObjects, returnType = 'keys') {
    if (returnType === 'keys') {
        return getAllKeys(arrOfObjects);
    } else if (returnType === 'values') {
        return getAllValues(arrOfObjects);
    } else {
        return false;
    }
}

console.log(getKeysOrValues(arrObjects));   //return keys
console.log(getKeysOrValues(arrObjects, 'values'));  // return values

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"


function swapI(array, i) {
    array[i] = i + 1;
    return array;
}

const arrForI = [5, 87, 64, 24, 7];
console.log(arrForI);
console.log(swapI(arrForI, 5));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


function zeroToEnd(arr) {
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i--, 1);
            zeroCount++
        }
    }

    for (let i = 0; i < zeroCount; i++) {
        arr.push(0);
    }

    return arr;
}

//напевно можна простіше..?
console.log(zeroToEnd([0, 0, 87, 7, 0, 7, 0, 33, 56, 4]));

// - Дано список імен.
let n1 = '    Harry       Potter      ';
let n2 = '    Ron       Whisley      ';
let n3 = '    Hermione       Granger      ';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

function magicForString(invalidName) {
    let name = invalidName.trim();

    const firstSpace = name.indexOf(' ');
    const lastSpace = name.lastIndexOf(' ');

    const spaces = name.slice(firstSpace, lastSpace + 1);

    name = name.replace(spaces, ' ');

    return name;
}

console.log(magicForString(n1));
console.log(magicForString(n2));
console.log(magicForString(n3));

// ============================================================================================
//
//
//
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

function addHello() {
    const helloDiv = document.createElement('div');
    helloDiv.innerText = 'Hello owu';
    document.body.appendChild(helloDiv);
}

addHello();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

function addElement(type = 'div', text = 'Hello') {
    const someDiv = document.createElement(type);
    someDiv.innerText = text;
    document.body.appendChild(someDiv);
}

addElement('p', 'hohohohohohohohohohohohoho!');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

const cars = [
    {id: 1, model: 'bmw', country: 'Germany', owner: 'Petro', year: 2011},
    {id: 2, model: 'Opel', country: 'France', owner: 'Aleks', year: 2016},
    {id: 3, model: 'Toyota', country: 'Japan', owner: 'Iryna', year: 2005}
];

function addCarsToPage(cars, idElement) {
    const fatherDiv = document.getElementById(idElement);

    for (const car of cars) {
        const carDiv = document.createElement('div');
        carDiv.innerHTML = `
            ID: ${car.id} <br>
            Model: ${car.model} <br>
            Country: ${car.country} <br>
            Owner: ${car.owner} <br>
            Year: ${car.year} 
        `;
        carDiv.style.margin = '20px';
        fatherDiv.appendChild(carDiv);
    }


}
addCarsToPage(cars, 'carsDiv')

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

function addCarsToPage2(cars, idElement) {
    const fatherDiv = document.getElementById(idElement);

    for (const car of cars) {
        const carDiv = document.createElement('div');

        const keys = Object.keys(car);

        for (let i = 0; i < keys.length; i++) {
            const propDiv = document.createElement('div');
            propDiv.innerHTML = `${keys[i]}: ${car[keys[i]]} <br>`;
            carDiv.appendChild(propDiv);
        }

        carDiv.style.margin = '20px';
        fatherDiv.appendChild(carDiv);
    }


}
addCarsToPage2(cars, 'carsDiv2')

// // ******************* НАЗАД В МИНУЛЕ *********************** //
//
//
//
// ============================================================================================
//                              ЗАДАЧІ ПІДВИЩЕНОГО РІВНЯ СКЛАДНОСТІ
// ============================================================================================
//
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

function stepen(N) {
    let psevdoN = 2;
    for (let i = 1; i < 100000000; i++) {
        if (psevdoN === N){
            console.log(`2^${i} = ${N}`);
            return 'YES';
        }
        psevdoN *= 2;
    }
    return 'NO';
}

console.log(stepen(32))

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

const me = {
    name: 'Volodymyr',
    age: 17,
    status: false,
    skills: ['html', 'js'],
    school: 'oktenweb'
}
//без рекурсії хіба(..
function copyObject(object) {
    const obj = {};

    for (const key in object) {
       obj[key] = object[key];
    }

    return obj;
}
const myCopy = copyObject(me);


console.log(me.name);
myCopy.name = 'ffff';
console.log(me.name);
console.log(myCopy.name);

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]

// а тут зміг рекурсивно

function flat(arr) {
    let arrOne = []
    for (const el of arr) {
        if (Array.isArray(el)){
            let arrSecond = flat(el);
            for (const second of arrSecond) {
                arrOne.push(second);
            }
        }else {
            arrOne.push(el);
        }
    }
    return arrOne
}

const arr = [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9];

console.log(flat(arr));