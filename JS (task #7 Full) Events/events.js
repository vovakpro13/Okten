// - Создать произвольный елемент с id = text. Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

const btnClose1 = document.getElementById('closeText');
btnClose1.onclick = () => {
    document.getElementById('text').style.display = 'none';
};

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
const btnCloseSelf = document.getElementById('closeMyself');
btnCloseSelf.onclick = (ev) =>{
    ev.target.style.display = 'none';

};
// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const btnAge = document.getElementById('takeAge');
btnAge.onclick = () => {
    const age = document.getElementById('age');
    const info = document.getElementById('info');
    info.innerHTML = (age.value < 18) ? '<span class="error">You aren`t adult!</span>' : '<h2>Welcome!</h2>';
};

// - Создайте меню, которое раскрывается/сворачивается при клике

const ul = document.getElementById('ul');
ul.onclick = (ev) => {
    const h = ul.style.height;
    ul.style.height = (h === '20px') ? '100%':'20px';
};

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.


class Comment{
    constructor(title = '', body = '') {
        this.title = title;
        this.body = body;
    }
    createButtonForFolding(){
        const disableId = (this.body.slice(0,5) + Math.round(Math.random() * 100000)).replace(' ', '');

        const button = document.createElement('button');
        button.id = disableId;
        button.innerText = `Disable`;
        button.onclick = () => {
            const anyBody = document.getElementById(disableId);
            anyBody.style.display = (anyBody.style.display === 'none') ? 'block' : 'none';
        };

        return {disableId, button};
    }

}

const comments = [
    new Comment('Artur', 'So bad..'),
    new Comment('Olena', 'Powerful'),
    new Comment('Petro', 'Can better'),
    new Comment('Lilia', 'Its bad'),
    new Comment('Vasya', 'Lorem100'),
    new Comment('Sasha', 'Not shure')
];

const commetsWraper = document.getElementById('comments');

comments.forEach((comment) =>{
    const commentDiv = document.createElement('div');

    const title = document.createElement('h4');
    title.innerText = comment.title;

    const btnForBody = comment.createButtonForFolding();

    const body = document.createElement('div');
    body.innerText = comment.body;
    body.id = btnForBody.disableId;


    commentDiv.appendChild(title);
    commentDiv.appendChild(body);
    commentDiv.appendChild(btnForBody.button);

    commetsWraper.appendChild(commentDiv);

});



// - Створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

const btnPrint = document.getElementById('printConsole');

btnPrint.onclick = () => {
    const boy = document.forms.boy;
    console.log(`
        Form 'Boy'
        name: ${boy.boyName.value} 
        age: ${boy.boyAge.value}
    `);

    const girl = document.forms.girl;
    console.log(`
        Form 'Girl'
        name: ${girl.girlName.value} 
        age: ${girl.girlAge.value}
    `);
};

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

const createTable = (rows, cols, addTo) => {
    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < cols; j++) {
            const col = document.createElement('td');
            col.innerText = `${i}${j}`;
            row.appendChild(col);
        }

        table.appendChild(row);
    }
    addTo.appendChild(table);
    return table;
};

createTable(9, 8, document.getElementById('forTableDiv'));

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

const imgs = document.getElementsByClassName('imgs');

imgs[0].style.display = 'block';

let currentImg = 0;

const btnLeft = document.getElementById('left');

btnLeft.onclick = () =>{
    imgs[currentImg].style.display = 'none';
    currentImg = (currentImg === 0) ? imgs.length - 1 : currentImg - 1;
    imgs[currentImg].style.display = 'block';
};

const btnRight = document.getElementById('right');

btnRight.onclick = () =>{
    imgs[currentImg].style.display = 'none';
    currentImg = (currentImg === imgs.length - 1) ? 0 : currentImg + 1;
    imgs[currentImg].style.display = 'block';
};

//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

const tabuWords = ['матюк', 'блін', 'тріндец'];

const btnOk = document.getElementById('control');
btnOk.onclick = () =>{
    const word = document.getElementById('word').value;

    for (const wordT of tabuWords) {
        if (wordT === word.replace(' ', '').toLowerCase()){
            alert('No no no...');
        }
    }
}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

const btnOk2 = document.getElementById('control2');
btnOk2.onclick = () =>{
    const words = document.getElementById('sentence').value.split(' ');

    for (const word of words) {
        for (const wordT of tabuWords) {
            if (wordT === word.toLowerCase()) {
                alert('No no no...');
            }
        }
    }
}


// -- взять массив пользователей

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
//
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


function printArray(arr) {
    const divResult = document.getElementById('divForResults');
    divResult.innerHTML = 'Результати';

    arr.forEach((user) => {
        const userDiv = document.createElement('div');

        userDiv.innerHTML = `
            <h3>${user.name} (${user.id})</h3>
            <div>Age: ${user.age}<br>
            isMarried: ${(user.isMarried) ? 'yes' : 'no'}<br>
            Address
                <ul>
                    <li>${user.address.city}</li>
                    <li>${user.address.street}</li>
                    <li>${user.address.number}</li>
                </ul>
            </div><hr>
        `;

        divResult.appendChild(userDiv);
    });
}

document.getElementById('open').onclick = (ev) =>{
    const checkBoxes = document.getElementsByClassName('filterInputs');
    let filterArray = usersWithAddress.map((u) => u);  //copy

    if (checkBoxes[0].checked){
        filterArray = filterArray.filter((user) => !user.isMarried);
    }

    if (checkBoxes[1].checked){
        filterArray = filterArray.filter((user) => user.age >= 29);
    }

    if (checkBoxes[2].checked){
        filterArray = filterArray.filter((user) => user.address.city === 'Kyiv');
    }

    printArray(filterArray);
}
