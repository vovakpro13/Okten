
const func=(number)=>{
    let arr=number.toString().split("").reverse();
    for (let i = 0; i < arr.length; i++) {
        arr[i]=arr[i]*Math.pow(10,i);
    }
    let result=arr.reverse().join(" + ");
    return result;
}

console.time('Adriy')
console.log(func(32756));
console.timeEnd('Adriy')




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
console.time('Vova');
console.log(numerToString(32756));
console.timeEnd('Vova');


const numbers = num => {
    let numStr = num.toString(),
        numArr = [];
    for (let i = 0; i < numStr.length; i++) {
        numArr.push(numStr[i]);
        for (let j = numArr.length - 2; j >= 0 ;j--) {
            numArr[j] += 0;
        }
    }
    return numArr.join(' + ');
}

console.time('Max');
console.log(numbers(32756));
console.timeEnd('Max');
