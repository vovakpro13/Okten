//Розклад дня, 7-10 дій
//через callback, promise, async await


//Прокинутись 
//Вмитись
//Поснідати
//Відсидіти пару
//Прогулятись
//Зробити дз
//Лягти спати


//callback

// function toWash(isWater, cb) {
//     setTimeout(() => {
//         console.log('Дія 2: вмитись');
//         (isWater) ? cb(null, 'Я вмився!') : cb('Нема води');
//     }, 1400);
// }
//
// function lunch(withFamily = true, cb) {
//     setTimeout(() => {
//         console.log('Дія 3: поснідати');
//         (withFamily) ? cb(null, 'Ми з сім`єю поснідали') : cb('Не снідаю, чекаю всіх');
//     }, 2400);
// }
//
// function lesson(teacherIsHere, cb) {
//     setTimeout(() => {
//         console.log('Дія 4: відсидіти пару');
//         (teacherIsHere) ? cb(null, 5) : cb('Викладач не прийшов..');
//     }, 3000);
// }
//
// function goWalk(place, cb) {
//     setTimeout(() => {
//         console.log('Дія 5: прогулятись');
//         (place) ? cb(null, `Я прогулявся до ${place}`) : cb('Я не знаю де мені гуляти');
//     }, 2300)
// }
//
// function doHomework(tasks, cb) {
//     setTimeout(() => {
//         console.log('Дія 6: зробити дз');
//         if (tasks){
//             let result = 'Я зробив такі таски: ';
//             tasks.forEach((task) => result += ', ' + task.toString());
//             cb(null, result);
//         }else {
//             cb('Нема тасок!');
//         }
//     }, 6000);
// }
//
// function sleep(timeNow, timeForSleeping, cb) {
//     setTimeout(() => {
//         console.log('Дія 7: лягти спати');
//         (timeNow > 23) ? cb(null, 'Всьо, сплю..') : cb('Ше трошки рано..');
//     }, timeForSleeping * 1000);
// }

// function toWakeUp(timeNow, cb) {
//     setTimeout(() => {
//         console.log('Дія 1: прокинутись');
//         if (timeNow > 8){
//             cb(null, 'Ура, я прокинувся!');
//
//             toWash(true, (err, data) => {
//                 if (err) {
//                     console.warn(err)
//                 }else{
//                     console.log(data);
//
//                     lunch(true, (err, data) => {
//                         if (err) {
//                             console.warn(err);
//                         }else {
//                             console.log(data);
//
//                             lesson(true,  (err, mark) => {
//                                 if (err){
//                                     console.warn(err);
//                                 }else{
//                                     console.log(`Ура, я отримав ${mark}!`);
//
//                                     goWalk('річки', (err, data) => {
//                                         if (err) {
//                                             console.warn(err);
//                                         } else{
//                                             console.log(data);
//                                             doHomework([2,5,3,9], (err, done) => {
//                                                 if (err){
//                                                     console.warn(err);
//                                                 }else{
//                                                     console.log(done);
//
//                                                     sleep(20, 7, (err, data) => {
//                                                         (err) ? console.warn(err) :  console.log(data);
//                                                     });
//                                                 }
//                                             });
//                                         }
//                                     });
//                                 }
//                             });
//                         }
//                     });
//                 }
//             });
//         }else {
//             cb('Ше рано, спи далі');
//         }
//
//     }, 4000);
// }
//
// toWakeUp(8.4,(err, data) => (!err) ?  console.log(data) : console.warn(err));


//promise

function toWakeUpPromise(timeNow) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Дія 1: прокинутись');
            if (timeNow > 8) {
                resolve('Ура, я прокинувся!');
            } else {
                reject('Ше рано, сплю далі');
            }
        });
    });
}

function toWashPromise(isWater) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Дія 2: вмитись');
            (isWater) ? resolve('Я вмився!') : reject('Нема води');
        }, 1400);
    });

}

function lunchPromise(withFamily = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Дія 3: поснідати');
            (withFamily) ? resolve('Ми з сім`єю поснідали') : reject('Не снідаю, чекаю всіх');
        }, 2400);
    });
}

function lessonPromise(teacherIsHere) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Дія 4: відсидіти пару');
            (teacherIsHere) ? resolve(5) : reject('Викладач не прийшов..');
        }, 3000);
    });
}

function goWalkPromise(place) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Дія 5: прогулятись');
            (place) ? resolve(`Я прогулявся до ${place}`) : reject('Я не знаю де мені гуляти');
        }, 2300);
    });
}

function doHomeworkPromise(tasks) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Дія 6: зробити дз');
            if (tasks) {
                let result = 'Я зробив такі таски: ';
                tasks.forEach((task) => result += ', ' + task.toString());
                resolve(result);
            } else {
                reject('Нема тасок!');
            }
        }, 6000);
    });
}

function sleepPromise(timeNow, timeForSleeping) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Дія 7: лягти спати');
            (timeNow > 23) ? resolve('Всьо, сплю..') : reject('Ше трошки рано..');
        }, timeForSleeping * 1000);
    });
}

// toWakeUpPromise(10)
//     .then(sleepString =>{
//         console.log(sleepString);
//         return toWashPromise(true);
//     })
//     .then(wash => {
//         console.log(wash);
//         return lunchPromise();
//     })
//     .then(lunch => {
//         console.log(lunch);
//         return lessonPromise(true);
//     })
//     .then(mark => {
//         console.log(`Я отримав ${mark}`);
//         return goWalkPromise('магазину');
//     })
//     .then(walk =>{
//         console.log(walk);
//         return doHomeworkPromise([1,2,3,4,5]);
//     })
//     .then(doneHw => {
//         console.log(doneHw);
//         return sleepPromise(24, 6);
//     })
//     .then(sleep => console.log(sleep))
//     .catch(err => console.warn(err))
//     .finally(() => console.log('Кінець розкладу'))

//async await

async function doTaskTable() {
    console.log(await toWakeUpPromise(10));
    console.log(await toWashPromise(true));
    console.log(await lunchPromise());
    console.log('Я отримав ' +  await lessonPromise(true));
    console.log(await goWalkPromise('АТБ'));
    console.log(await doHomeworkPromise([7, 9, 12]));
    console.log(await sleepPromise(24, 5));
}

doTaskTable();