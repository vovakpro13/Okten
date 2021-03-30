// Task 1

// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

const numArray = [2, 4, 65, 100, 1];
const stringArray = ['hi', 'hello', 'wats up', 'good morning', 'hey'];
const differentTypesArray = [0, 'cool', true, false, 94];

for (const num of numArray) {
    console.log(num);
}

for (let i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i]);
}

for (const diffElement of differentTypesArray) {
    console.log(diffElement);
}
console.log("---------------------");

// Task 2
// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

const languages = [];
languages[0] = 'C++';
languages[1] = 'Python';
languages[2] = 'JS';
languages[3] = 'Java';

for (const language of languages) {
    console.log(language);
}
console.log("---------------------");

// Task 3
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write('<div>i love js</div>');
}

// Task 4
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>${i} errors</div>`);
}

// Task 5
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let counter = 0;
while (counter < 20) {
    document.write('<h1>Task 5</h1>');
    counter++;
}

// Task 6
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

counter = 0;
while (counter < 20) {
    document.write(`<h1>H ${counter}</h1>`);
    counter++;
}

// Task 7
// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

const tenElms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (const tenElm of tenElms) {
    console.log(tenElm);
}
console.log("---------------------");

// Task 8
// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

const tenStringElms = ['one', 'two', '3', '4', '5', '6', 'seven', '8', 'nine', '10)'];
for (const tenStringElm of tenStringElms) {
    console.log(tenStringElm);
}
console.log("---------------------");

// Task 9
// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

const tenAnyTypeElms = [true, 2, '3', '4', 57, '6', false, '8', 11, 'yes'];
for (const tenAnyTypeElm of tenAnyTypeElms) {
    console.log(tenAnyTypeElm);
}
console.log("---------------------");

// Task 10
// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

const simpleArray = [3434, 'cool', 42, 421, 423, true, false, '8', 'string', 10];

for (const arrayEl of simpleArray) {
    if (typeof arrayEl === "boolean") {
        console.log(arrayEl);
    }
}
console.log("---------------------");

// Task 11
// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (const arrayNumEl of simpleArray) {
    if (typeof arrayNumEl === "number") {
        console.log(arrayNumEl);
    }
}
console.log("---------------------");

// Task 12
// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (const arrayNumEl of simpleArray) {
    if (typeof arrayNumEl === "string") {
        console.log(arrayNumEl);
    }
}
console.log("---------------------");

// Task 13
// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

const Array13 = ['не', 'лізь поперед', 0, 'батька', 'в пекло', 'бо я', 'тобі його', 25, 'зараз влаштую', true];
for (let i = 0; i < Array13.length; i++) {
    console.log(Array13[i]);
}
console.log("---------------------");

// Task 14
// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(i)
    document.write(i + '<br>');
}
console.log("---------------------");

// Task 15

// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(i)
    document.write(i + '<br>');
}
console.log("---------------------");

// Task 16
// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i += 2) {
    console.log(i)
    document.write(i + '<br>');
}
console.log("---------------------");

// Task 17
// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
        document.write(i + '<br>');
    }
}
console.log("---------------------");

// Task 18  (таска така сама як 17)

// Task 19
// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
        document.write(i + '<br>');
    }
}
console.log("---------------------");

// Task 20
// Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

for (let minute = 1; minute <= 2; minute++) {
    for (let sec = 0; sec < 60; sec++) {
        console.log("Пройшло секунд: " + sec);
    }
    console.log("Хвилин: " + minute);
}
console.log("---------------------");

// Task 21
// Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

for (let hours = 1; hours <= 2; hours++) {
    for (let minute = 1; minute <= 60; minute++) {
        for (let sec = 1; sec <= 60; sec++) {
            console.log("Пройшло секунд: " + sec);
        }
        console.log("Хвилин: " + minute);
    }
    console.log("Години: " + hours);
}
console.log("---------------------");

// Bonus

// Дано масив: [ 'a', 'b', 'c'] .
// 1. За допомогою циклу for зібрати всі букви в слово.

const letters = ['a', 'b', 'c'];
let word = '';
for (let i = 0; i < letters.length; i++) {
    word = word + letters[i];
}
console.log(word);

// 2. За допомогою циклу while зібрати всі букви в слово.
word = '';
counter = 0;
while (counter < letters.length) {
    word = word + letters[counter++];
}
console.log(word);

// 3. За допомогою циклу for of зібрати всі букви в слово.

word = '';
for (const letter of letters) {
    word = word + letter;
}
console.log(word);
console.log("---------------------");

// 4. таке саме, як 3

// CLASS

// Task 1
// Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

let abc = ['a', 'b', 'c'];
let nums = 1;
for (let c = abc.length; c < abc.length + 3; c++) {
    abc[c] = nums++;
}
console.log(abc);

// Task 2
// Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

let ott = [1, 2, 3];
let ottNew = [];
for (let i = ott.length - 1; i >= 0; i--) {
    ottNew.push(ott[i]);
}
console.log(ottNew);

// Task 3
// Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

ott = [1, 2, 3];
for (let i = 4; i <= 6; i++) {
    ott.push(i);
}
console.log(ott);

// Task 4
// Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

ott = [1, 2, 3];
for (let i = 6; i >= 4; i--) {
    ott.unshift(i);
}
console.log(ott);
console.log("---------------------");

// Task 5
// Дан масив ['js', 'css', 'jq'].
// Виведіть на екран перший елемент за допомогою shift()

const skills = ['js', 'css', 'jq'];
document.write(skills.shift());

// Task 6
//  Виведіть на екран останній елемент за допомогою pop()

document.write(skills.pop());

// Task 7
// Дан масив [1, 2, 3, 4, 5].
// За допомогою методу/функції slice перетворіть масив в [4, 5].

let arrNums = [1, 2, 3, 4, 5];
arrNums = arrNums.slice(3, 5);
console.log(arrNums);

// Task 8
//  За допомогою методу/функції slice перетворіть масив в [1,2].

arrNums = [1, 2, 3, 4, 5];
arrNums = arrNums.slice(0, 2)
console.log(arrNums);

// Task 9
// За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

arrNums = [1, 2, 3, 4, 5];
arrNums.splice(1, 2)
console.log(arrNums);

// Task 10
// За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

arrNums = [1, 2, 3, 4, 5];
arrNums.splice(3, 0, 'a', 'b', 'c');
console.log(arrNums);

// Task 11
// За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
arrNums = [1, 2, 3, 4, 5];
arrNums.splice(1, 0, 'a', 'b');
arrNums.splice(6, 0, 'с');
arrNums.splice(8, 0, 'e');
console.log(arrNums);
console.log("---------------------");

// Task 12
//  Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

const tenNumbers = [1, 2, 3, 45, 63, 222, 101, 18, 43, 0];
for (const tenNumber of tenNumbers) {
    if (tenNumber % 2 === 0) {
        console.log(tenNumber);
    }
}
console.log("---------------------");

// Task 13
// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

const copyOfTenNumbers = [];
for (const tenNumber of tenNumbers) {
    copyOfTenNumbers.push(tenNumber);
}
console.log(copyOfTenNumbers);
console.log("---------------------");

// Task 14
// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

const copyOfTenNumbersSecond = [];
for (let i = 0; i < tenNumbers.length; i++) {
    copyOfTenNumbersSecond[i] = tenNumbers[i];

}
console.log(copyOfTenNumbers);
console.log("---------------------\nCLASS BONUS\n");
// CLASS BONUS

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//  1. перебрати його циклом while

let bonusNums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
ind = 0;
while (ind < bonusNums.length) {
    console.log(bonusNums[ind++]);
}
console.log("---------------------");

//  2. перебрати його циклом for

for (let i = 0; i < bonusNums.length; i++) {
    console.log(bonusNums[i]);
}
console.log("---------------------");

//  3. перебрати циклом while та вивести  числа тільки з непарним індексом

ind = 0;
while (ind < bonusNums.length) {
    if (ind % 2 !== 0) {
        console.log(bonusNums[ind]);
    }
    ind++;
}
console.log("---------------------");

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < bonusNums.length; i++) {
    if (i % 2 !== 0) {
        console.log(bonusNums[i]);
    }
}
console.log("---------------------");

// 5. перебрати циклом while та вивести  числа тільки парні  значення

ind = 0;
while (ind < bonusNums.length) {
    if (bonusNums[ind] % 2 === 0) {
        console.log(bonusNums[ind]);
    }
    ind++;
}
console.log("---------------------");

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < bonusNums.length; i++) {
    if (bonusNums[i] % 2 === 0) {
        console.log(bonusNums[i]);
    }
}
console.log("---------------------");

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < bonusNums.length; i++) {
    if (bonusNums[i] % 3 === 0) {
        bonusNums[i] = 'okten';
    }
}
console.log(bonusNums);
console.log("---------------------");

// 8. вивести масив в зворотньому порядку.

for (let i = bonusNums.length - 1; i >= 0; i--) {
    console.log(bonusNums[i]);

}
console.log("-----------0---------");

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
bonusNums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//  1
const arrLen = bonusNums.length;
ind = arrLen - 1;
while (ind >= 0) {
    console.log(bonusNums[ind--]);
}
console.log("---------------------");

//  2
for (let i = arrLen - 1; i >= 0; i--) {
    console.log(bonusNums[i]);
}
console.log("---------------------");

//  3
ind = arrLen - 1;
while (ind >= 0) {
    if (ind % 2 !== 0) {
        console.log(bonusNums[ind]);
    }
    ind--;
}
console.log("---------------------");

//  4
for (let i = arrLen - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(bonusNums[i]);
    }
}
console.log("---------------------");

//  5
ind = arrLen - 1;
while (ind >= 0) {
    if (bonusNums[ind] % 2 === 0) {
        console.log(bonusNums[ind]);
    }
    ind--;
}
console.log("---------------------");

//  6
for (let i = arrLen - 1; i >= 0; i--) {
    if (bonusNums[i] % 2 === 0) {
        console.log(bonusNums[i]);
    }
}
console.log("---------------------");

//  7
for (let i = arrLen - 1; i >= 0; i--) {
    if (bonusNums[i] % 3 === 0) {
        bonusNums[i] = 'okten';
    }
}
console.log(bonusNums);
console.log("---------------------");

// 10.
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

let EvenArr = [];
let value = 0;
let index = 0;
while (EvenArr.length < 50) {
    EvenArr[index++] = value;
    value += 2;
}
console.log(EvenArr);

let notEvenArr = [];
value = 1;
index = 0;
while (notEvenArr.length < 50) {
    notEvenArr[index++] = value;
    value += 2;
}
console.log(notEvenArr);
console.log("---------Next bonus------");

// Next bonus
//нумерація якась незрозуміла(

//  3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

let randArray = [];
for (let i = 0; i < 20; i++) {
    randArray[i] = parseInt(Math.random() * (733 - 8) + 8);
}
console.log(randArray);

// вывести на консоль  каждый третий елемент

for (let i = 2; i < randArray.length; i += 3) {
    console.log(randArray[i]);
}
console.log("---------------------");

// вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.

for (let i = 2; i < randArray.length; i += 3) {
    if (randArray[i] % 2 === 0) {
        console.log(randArray[i]);
    }
}
console.log("---------------------");

// вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.

let anotherArr = [];
for (let i = 2; i < randArray.length; i += 3) {
    if (randArray[i] % 2 === 0) {
        console.log(randArray[i]);
        anotherArr.push(randArray[i]);
    }
}
console.log(anotherArr)
console.log("---------------------");

// Вывести каждый елемент массива у которого соседний с права элемент - парный

for (let i = 2; i < randArray.length; i++) {
    if (randArray[i + 1] % 2 === 0) {
        console.log(randArray[i]);
    }
}
console.log("---------------------");

// масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

const buy = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (const price of buy) {
    sum += price;
}
const middleChek = sum / buy.length;
console.log(middleChek);
console.log("---------------------");

// створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

randArray = [];
let x5Array = [];
for (let i = 0; i < 10; i++) {
    randArray[i] = parseInt(Math.random() * (100 - 1) + 1);
    x5Array.push(randArray[i] * 5);
}
console.log(randArray);
console.log(x5Array);

// створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.

let lastArrayForToday = ['omg', 'code has more than', 600, 'lines', true, 10, false];
let numbersArray = [];
for (let el of lastArrayForToday) {
    if (typeof el == 'number'){
        numbersArray.push(el);
    }
}

console.log(lastArrayForToday);
console.log(numbersArray);