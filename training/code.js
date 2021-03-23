


    let name = 'Ostap';

    console.log(name);      //виведення в консоль
    alert(name);            //модальне вікно
    document.write(name);   //погана штука)

    console.log(typeof name);   //string
    let pi = 3.14;
    console.log(typeof pi);     //number

    let variable;   // декларація змінної
    variable = 'hello'; // ініціалізація
    let age = 30;   // деклар. і ініціал.

    let page = 'Сторінка';
    let num = 2;
    let del = 'видалена';
    //Сторінка видалена!
    console.log(page + ' ' + del + '!');
    console.log(`${page} ${del}!`);
    //Сторінка 2 - видалена!
    let s = page + ' ' + num + ' - ' + del + '!';
    let s2 = `${page} ${num} - ${del}!`;
    //String + number
    console.log(typeof (page + num)); //string Сторінка2
    console.log(typeof (page - num)); //NaN не число

    //              0      1       2
    let skills = ['html', 'js', 'react'];
    console.log(skills[1]) // js

    let developer = {name: 'Jane', exp: 2, skills: ['js','css']};
    console.log(developer.name) //Jane;
    console.log(developer.skills[0]) //js

    console.log(5 < 6);  //true
    console.log(5 > 6);  //false
    console.log(5 === '5');  //false
    console.log(!!NaN);  //false
    console.log(!!'string)');  //true










