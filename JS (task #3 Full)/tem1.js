// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//      a) отримує текст з параграфа з id "content"

let content = document.getElementById('content');
let contentText = content.innerText;
console.log(contentText);

//      b) отримує текст з блоку з id "rules"

let rules = document.getElementById('rules');
let rulesText = rules.innerText;
console.log(rulesText);

//      c) замініть текст параграфа з id 'content' на будь-який інший

content.innerText = 'c) замініть текст параграфа з id \'content\' на будь-який інший';

//      d) замініть текст параграфа з id 'rules' на будь-який інший

rules.innerHTML = 'it\'s easy <hr>';

//      e) змініть кожному елементу колір фону на червоний

content.style.backgroundColor = 'red';
rules.style.backgroundColor = 'red';

let listItems = document.getElementsByClassName('fc_rules');
for (const listItem of listItems) {
    listItem.style.backgroundColor = 'red';
}

//      f) змініть кожному елементу колір тексту на синій

content.style.color = 'blue';
rules.style.color = 'blue';
for (const listItem of listItems) {
    listItem.style.color = 'blue';
}

//      g) отримати весь список класів елемента з id=rules і вивести їх в console.log
let classListOfRules = rules.classList;
for (const classItem of classListOfRules) {
    console.log(classItem);
}
//      h) отримати всі елементи з класом fc_rules

console.log(listItems);   //раніше отримав

//      i) поміняти колір тексту у всіх елементів fc_rules на червоний

for (const listItem of listItems) {
    listItem.style.color = 'red';
}


// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

for (const user of users) {
    let userDiv = document.createElement('div');
    userDiv.innerHTML = `
        Користувач ${user.name} <br>
        Вік: ${user.age} <br>
        Статус: ${user.status} <br>
        Адреса: ${user.address.country}, місто ${user.address.city}, вул. ${user.address.street} №${user.address.houseNumber}
        <hr>
    `;
    document.body.appendChild(userDiv);
}

// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості
console.log(users)
document.write('<br><h2>Next users</h2><br>');
for (const user of users) {

    let divAdress = document.createElement('div');
    divAdress.innerHTML = '<p>Адреса:</p>';

    const adressValues = Object.values(user.address);

    for (const value of adressValues) {
        let divAdressItem = document.createElement('div');
        divAdressItem.innerHTML = `${value}`;
        divAdress.appendChild(divAdressItem);
    }

    let userDiv = document.createElement('div');

    userDiv.innerHTML = `
        Користувач ${user.name} <br>
        Вік: ${user.age} <br>
        Статус: ${user.status} <br>`;

    userDiv.appendChild(divAdress);
    userDiv.innerHTML += '<hr>';

    document.body.appendChild(userDiv);
}

