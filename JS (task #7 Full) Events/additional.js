// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

const heads = document.getElementsByClassName('rules');

const menu = document.createElement('ul');
menu.innerHTML = '<h3>Меню</h3>';

for (const head of heads) {
    head.id = head.classList[1];

    const li = document.createElement('li');
    li.innerHTML = `<a href="#${head.id}">${head.children[0].innerText}</a>`;

    menu.appendChild(li);
}
document.getElementById('content').appendChild(menu);

