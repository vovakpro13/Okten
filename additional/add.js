// Cоздать функцию которая принимает число и возвращает  текст как в примере:
//     3275  —>  "3000 + 200 + 70 +5"

console.time('T1');
const numerToString = (num) => {
    const number = num.toString();
    let result = '';
    let zerous = '';

    for (let i = number.length - 1; i >= 0 ; i--) {
        result = `${number[i]}${zerous} ${(result !== '') ? `+ ${result}` : result}` ;
        zerous += '0';
    }
    return result;
}
console.timeEnd('T1');
console.log(numerToString(3987654));