//- Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

const textarea = document.getElementById('text');

textarea.onchange = ev =>{
    localStorage.setItem('textarea', ev.target.value);
};

const valueOfTextarea = localStorage.getItem('textarea');
if (valueOfTextarea){
    textarea.value = valueOfTextarea;
    document.getElementById('textLabel').innerText = 'Your text was:';
}

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

const form = document.forms.questionnaire;

const getFromStorage = localStorage.getItem('form');    //підгружаю дані з localstorage
const storage = (getFromStorage) ? JSON.parse(getFromStorage): {};   // якшо їх нема, то беру пустий об'єкт, якшо є - парсю

// load from localstorage
function loadDataFromLoacalStorage(stor) {

    for (const nameInput in stor) {

        const dataForCurrentInput = stor[nameInput];
        let input = form[nameInput];

        if (input.length){

            if (input[0].type === 'checkbox'){
                input.forEach((checkbox) => checkbox.checked = (dataForCurrentInput.filter((itemData) => itemData === checkbox.id)[0]));
            }

            if (input[0].type === 'radio'){
                input.forEach((radio) => radio.checked = (radio.id === dataForCurrentInput));
            }

            if (input.type === 'select-one'){
                input.value = dataForCurrentInput;
            }

        }else{
            input.value = dataForCurrentInput;
        }
    }

}

//write to lacalstorage
function setParametr(stor, ev) {

    let nameInput = ev.target.name;
    const dataForCurrentInput= ev.target.id;

    if (ev.target.type === 'checkbox'){

        if (!stor[nameInput]) {    //якшо ше нема skills в localstorage, то створюємо
            stor[nameInput] = [dataForCurrentInput];

        }else{
            if (stor[nameInput].filter((item) => item === dataForCurrentInput)[0]){   //якшо скіл вже є - то видалити, якшо нема - то додати
                stor[nameInput] = stor[nameInput].filter((item) => item !== dataForCurrentInput);
            }else{
                stor[nameInput].push(dataForCurrentInput);
            }
        }

    }else if(ev.target.type === 'radio') {
        stor[nameInput] = dataForCurrentInput;


    }else {
        stor[nameInput] = ev.target.value;
    }

    localStorage.setItem('form', JSON.stringify(stor));
}

loadDataFromLoacalStorage(storage);

const simpleInputs = [form.userName, form.userAge, form.aboutUser, form.genderUser];
simpleInputs.forEach(input => input.onchange = ev => setParametr(storage, ev));

form.skills.forEach(checkBox => checkBox.onchange = ev => setParametr(storage, ev));
form.platform.forEach(radio => radio.onchange = ev => setParametr(storage, ev));


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться
// по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

const btnSave = document.getElementById('saveNote');
const btnBack = document.getElementById('back');
const btnForward = document.getElementById('forward');
const textareaNote = document.getElementById('note');

const versionText = document.getElementById('version');
const editBtn = document.getElementById('edit');


const NOTE_BOOK = 'NOTE_BOOK';
const CURRENT_VERSION = 'CURRENT_VERSION';

let currentNoteVersion = (localStorage.getItem(CURRENT_VERSION)) ? +localStorage.getItem(CURRENT_VERSION): 0 ;

const notes = (localStorage.getItem(NOTE_BOOK)) ? JSON.parse(localStorage.getItem(NOTE_BOOK)) : null;
textareaNote.value = (notes) ? notes[currentNoteVersion] : '';

function setTextArea(version, len , edit = false) {
    versionText.innerText = `Version #${version+1} / ${len}`;
    textareaNote.value = JSON.parse(localStorage.getItem(NOTE_BOOK))[version];

    if (!edit && version + 1 !== len){
        textareaNote.setAttribute('readonly', true);
        return 0;
    }

    textareaNote.removeAttribute('readonly');


}

function setBtns(curentVersion, versionLength, needSwipe, edit) {

    if (needSwipe){
        setTextArea(curentVersion, versionLength, edit);
        document.getElementById('editInput').checked = false;
    }

    if (curentVersion + 1 === versionLength){   //тільки назад
        btnBack.style.display = 'block';
        btnForward.style.display = 'none';
        editBtn.style.display = 'none';
        return 0 ;
    }

    if (!curentVersion){                //тільки вперед
        btnBack.style.display = 'none';
        btnForward.style.display = 'block';
        editBtn.style.display = 'block';
        return 0 ;
    }

    editBtn.style.display = 'block';
    btnBack.style.display = 'block';
    btnForward.style.display = 'block';

}

if (notes && notes.length > 1) {
    setBtns(currentNoteVersion, notes.length, true);
}else{
    editBtn.style.display = 'none';
}

btnSave.onclick = () =>{
    const noteText = document.getElementById('note').value;

    if (!localStorage.getItem(NOTE_BOOK)){
        localStorage.setItem(CURRENT_VERSION, currentNoteVersion);
        localStorage.setItem(NOTE_BOOK, JSON.stringify([noteText]));
        alert('Першу версію збережено, продовжуй!');
        return 0 ;
    }
    const allnotes = JSON.parse(localStorage.getItem(NOTE_BOOK));

    let needToSwipe, edit;

    if (currentNoteVersion + 1 === allnotes.length){
        //add to the end
        needToSwipe = true;
        edit = false;
        allnotes.push(noteText);
        alert(`Version #${++currentNoteVersion + 1} was saved like '${allnotes[currentNoteVersion]}'`)
    }else {
        //rewrite current version
        edit = true;
        if (document.getElementById('editInput').checked){
            alert(`Version #${currentNoteVersion + 1} was rewritting from ${allnotes[currentNoteVersion]} to ${noteText}`);
            allnotes[currentNoteVersion] = noteText;
            needToSwipe = false;
        }else{
            alert(`Version #${currentNoteVersion + 1} can't be rewritten. Check 'Edit' for it`)
        }

    }

    localStorage.setItem(CURRENT_VERSION, currentNoteVersion);
    localStorage.setItem(NOTE_BOOK, JSON.stringify(allnotes));

    setBtns(currentNoteVersion, allnotes.length, needToSwipe, edit);

}

btnBack.onclick = () =>{
    setBtns(--currentNoteVersion, JSON.parse(localStorage.getItem(NOTE_BOOK)).length , true);
    localStorage.setItem(CURRENT_VERSION, currentNoteVersion);
}
btnForward.onclick = () => {
    setBtns(++currentNoteVersion, JSON.parse(localStorage.getItem(NOTE_BOOK)).length, true);
    localStorage.setItem(CURRENT_VERSION, currentNoteVersion);
}

editBtn.onchange = ev =>{
    setTextArea(currentNoteVersion,  JSON.parse(localStorage.getItem(NOTE_BOOK)).length, ev.target.checked)
};


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
//
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется
// форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

const CONTACTS = 'CONTACTS';

const divContactsList = document.getElementById('list');
const allContacts = JSON.parse(localStorage.getItem(CONTACTS));
const editForm = document.getElementById('ed');

function deleteContact(id) {
    const contacts = JSON.parse(localStorage.getItem(CONTACTS));
    contacts.forEach((c, i) => {
        if (id === c.id){
            contacts.splice(i, 1);
            (document.getElementById(id))? document.getElementById('ed').innerHTML = '' :0;
        }
    })
    console.log(contacts)
    localStorage.setItem(CONTACTS, JSON.stringify(contacts))
}

function openEditForm(contact) {
    document.getElementById('ed').innerHTML = '';


    const h2 = document.createElement('h2');
    h2.classList.add('center');
    h2.innerText = `Edit ID: ${contact.id}`;

    const form = document.createElement('form');
    form.classList.add('col');
    form.id = contact.id;
    form.name = 'editForm';
    form.innerHTML = `
        <label><input type="text" name="fio" value="${contact.fio}"></label>
        <label><input type="text" name="number" value="${contact.number}"></label>
        <label><input type="text" name="mail" value="${contact.mail}"></label>
        <label> <input type="text" name="company" value="${contact.company}"></label>
        <label><input type="number" name="division" maxlength="1" value=" ${contact.division}"></label>
        <label><input type="datetime-local" name="birthday" value="${contact.birthday}"></label>
    
    `;

    const btnSave = document.createElement('button');
    btnSave.innerHTML = 'Save data';
    btnSave.onclick = () => {
        const contacts = JSON.parse(localStorage.getItem(CONTACTS));

        contacts.forEach((c) => {
            if (c.id === contact.id){
                for (const key in  c) {
                    c[key] = document.forms.editForm[key].value;
                }
                c.id = contact.id;
                openEditForm(c);
            }
        });

        localStorage.setItem(CONTACTS, JSON.stringify(contacts));

        printContactsList();

    };

    const close = document.createElement('button');
    close.innerText = 'Close';
    close.onclick = () => {
        document.getElementById('ed').innerHTML = '';
    };

    editForm.appendChild(h2);
    editForm.appendChild(form);
    editForm.appendChild(btnSave);
    editForm.appendChild(close);

}

function printContactsList() {
    document.getElementById('list').innerHTML = ``;
    const contacts = JSON.parse(localStorage.getItem(CONTACTS));

    contacts.forEach((contact, index) => {
        const divContact = document.createElement('div');
        divContact.classList.add('contact');


        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.onclick = () =>{
            deleteContact(contact.id);
            printContactsList();
        }

        const editBtn = document.createElement('button');
        editBtn.innerHTML = 'Edit';
        editBtn.onclick = () => openEditForm(contact);




        divContact.innerHTML = `
            <div class="col">
                <p>ID: ${contact.id}</p>
                 <b class="row">${contact.fio}</b>
                 <i>Phone: ${contact.number}</i><br>
                 <p><b>E-mail:</b> ${contact.mail}</p>
                 <p><b>Work:</b> ${contact.company} (${contact.division})</p>
                 <p><b>Birthday:</b> ${contact.birthday}</p>
            </div>
        `;

        divContact.appendChild(deleteBtn);
        divContact.appendChild(editBtn);

        divContactsList.appendChild(divContact);
    });

}
if (allContacts){
    printContactsList();
}





const btnAddContact = document.getElementById('addContact');
btnAddContact.onclick = () =>{
    const contact = {};

    for (const input of document.forms.contactForm) {
        contact[input.name] = input.value;
    }

    let contacts = JSON.parse(localStorage.getItem(CONTACTS));
    contact.id = Math.round(Math.random() * 1000 * Date.now());

    (contacts) ? contacts.push(contact) : contacts = [contact];
    localStorage.setItem(CONTACTS, JSON.stringify(contacts));

    printContactsList();

};

