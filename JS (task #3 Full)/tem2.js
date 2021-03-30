//
// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)

const mainHeader = document.getElementById('main_header');
mainHeader.style.color = 'seagreen';
mainHeader.innerText = 'FEB-2021';

// b) робить шириниу елементу ul 400px

const ul = document.getElementsByTagName('ul');
for (const ulElement of ul) {
    ulElement.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

const linkListItems = document.getElementsByClassName('linkList');
for (const Item of linkListItems) {
    Item.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

const listElement2Text = document.getElementsByClassName('listElement2')[0].innerText;
console.log(listElement2Text);

// e) отримує всі елементи li та змінює ім колір фону на сірий

const liElements = document.getElementsByTagName('li');
for (const li of liElements) {
    li.style.backgroundColor = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

const aEls = document.getElementsByTagName('a');
for (const a of aEls) {
    a.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (const a of aEls) {
    if (a.innerText === 'link3'){
        a.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (const a of aEls) {
    a.classList.add(`element_${a.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

const bgColor = prompt('Color, please..');
const subHeaders = document.getElementsByClassName('sub-header');
for (const subHeader of subHeaders) {
    subHeader.style.backgroundColor = bgColor;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

const textColor = prompt('Text color, please...');
for (const subHeader of subHeaders) {
    if (subHeader.innerText === 'content 2 segment'){
        subHeader.style.color = textColor;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

document.getElementsByClassName('content_1')[0].innerText = prompt('Some text, please...');

// l) отримати елементи p та змінити їм padding на 20px

const pItems = document.getElementsByTagName('p');
for (const p of pItems) {
    p.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

const text2Elms = document.getElementsByClassName('text2');
for (const item of text2Elms) {
    item.innerText = 'FEB-2021';
}

// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

const divContent = document.createElement('div');
divContent.classList.add('content');

const h1 = document.createElement('h1');
h1.innerText = 'Правила бойцовского клуба';

const wrap = document.createElement('div');
wrap.classList.add('wrap');

for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];

    const divRule = document.createElement('div');
    divRule.classList.add('rules', `rule${i+1}`);

    const h2 = document.createElement('h2');
    h2.innerText = rule.title;

    const p = document.createElement('p');
    p.innerText = rule.body;

    divRule.appendChild(h2);
    divRule.appendChild(p);
    wrap.appendChild(divRule);
    
}

divContent.appendChild(h1);
divContent.appendChild(wrap);
document.body.appendChild(divContent);

// ===========================================================================

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

const usersFull = [];

for (let i = 0; i < usersWithId.length; i++) {

    usersFull[i] = usersWithId[i];

    for (const city of citiesWithId) {
        if (city.user_id === usersFull[i].id){
            usersFull[i].adress = city;
        }
    }

}

console.log(usersFull);