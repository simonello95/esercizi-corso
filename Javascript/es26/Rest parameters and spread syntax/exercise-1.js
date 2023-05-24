// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }

// console.log(sum(1, 2, 3, 4, 5));


const sum = (num1, ...num) =>{
    return num.reduce((a,b) =>
    a+b,num1)
}

console.log(sum(1, 2, 3, 4, 5));



