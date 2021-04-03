// Cоздать функцию которая принимает число и возвращает  текст как в примере:
//     3275  —>  "3000 + 200 + 70 +5"

const numerToString = (num) => {
    const number = num.toString();
    let result = '';
    let zerous = '';

    for (let i = number.length - 1; i >= 0; i--) {
        result = `${number[i]}${zerous} ${(result !== '') ? `+ ${result}` : result}`;
        zerous += '0';
    }
    return result;
}
console.log(numerToString(398760654));

// Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.Всегда будет только одно целое число, которое встречается нечетное количество раз
//     [1,2,3,4,5,2,4,1,3] -> 5

const nums = [1, 2, 3, 4, 5, 5, 5, 1, 4, 3, 2];

const findNumber = (arr) =>{
    let numObj = {};

    for (const el of arr) {
        numObj[el] = (el in numObj) ? numObj[el] + 1  : numObj[el] = 1;
    }

    for (const number in numObj) {
        if (numObj[number] % 2 !== 0){
            return number;
        }
    }

    return false;
}

console.log(findNumber(nums));


//Знайти анаграму.
// Перевірити чи слово має в собі такі самі літери як і поеперднє слово.
//
// ANAGRAM | MGANRAA -> true
// EXIT | AXET -> false
// GOOD | DOGO -> true

function anagram(firstWord, secondWord) {
    for (const letterInFirst of firstWord) {
        for (const letterInSecond of secondWord) {
            if (letterInFirst === letterInSecond){letter = true; break;}
            letter = false;
        }
        if (!letter){
            return false;
        }
    }
    return true
}

console.log(anagram('ANAGRAM', 'MGANRAA'));
console.log(anagram('EXIT', 'AXET'));
console.log(anagram('GOOD', 'DOGO'));

// Точная степень двойки
// Дано натуральное число N.
//     Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
//     Операцией возведения в степень пользоваться нельзя!

//раніше робив вже
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
    
//Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки,
// списки, массивы ну и циклы, разумеется.
// Рекурсія)

function iDontLikeRecursion(N) {
    N = (typeof N !== "string") ?  N.toString(): N;
    return (N.length) ?  +N.slice(0,1) + +iDontLikeRecursion(N.substring(1)) :  0;
}

console.log(iDontLikeRecursion(120345))


//Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
// При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.

function isPolindrom(word) {
    if (word.length < 2){
        return "YES";
    }else {
        return (word[0].toLowerCase() === word[word.length - 1].toLowerCase()) ? isPolindrom(word.slice(1,word.length-1)) : 'NO';
    }
}

console.log(isPolindrom('Anna'));
console.log(isPolindrom('Level'));
console.log(isPolindrom('okten'));

//Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите,
// сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.
//
// 2176491947586100 -> 3

function countOfOnes(str) {
    let ones = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0' && str[i + 1] === '0'){
            return ones;
        }else {
            ones = (str[i] === '1') ? ones + 1 : ones;
        }
    }
    return 'string doesn`t have `00` (';
}

console.log(countOfOnes('112311006771111111115'));   //4 одинички

//Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// flat використовувати заборонено.

//тоже раніше робив
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

//Знайти набільший елемент в масиві за допомогою reduce
// [1,6,9,0,17,88,4,7] -> 88

function maxReduce(arr) {
    return arr.reduce((acc, cur) => (cur > acc) ? cur : acc , 0);
}
console.log(maxReduce([1,6,9,0,17,88,4,7]));

//Знайти найблільше число поліндром яке утворюється завдяки добутку двох простих пятизначних чисел.

function simple(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0){
            return false;
        }
    }
    return true;
}


function findAllSimples(start, end) {
    let num = start;
    const simleArray = [];
    while (num < end){
        while (!simple(num)){
            num++;
        }
        simleArray.push(num++);
    }
    return simleArray;
}


function maxPolindrom() {
    let simples = findAllSimples(10000, 99999);
    let maxP = 0;

    for (let i = 0; i < simples.length; i++) {
        for (let j = 0; j < simples.length; j++) {
            const value = simples[i] * simples[j];
            if (isPolindrom(value.toString()) === 'YES'){
                maxP = value;
                console.log(maxP);
            }
        }
    }
    return maxP
}



console.log(maxPolindrom());
//Реалізувати друкарську машинку.
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"
// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)


function print(symbol, time) {
    const thisTime = Math.random()*1000 + time;
    setTimeout(() => document.write(symbol), thisTime);
    return thisTime;
}
function writeText(text) {
    let lastTime = 0;
    for (let i = 0; i < text.length; i++) {
        lastTime = print(text[i], lastTime);
    }
}

writeText('Hello, my favorite world');
