// var returnedValue = Math.max(2, 3, 5, 7, 9, 1);
// console.log(returnedValue);

// var myObj = {};

// Object.assign(myObj, {a:1, b:2, c:3 }, { z:9, y:8, x:7 });
// console.log(myObj);

function sumOne(a, b) {
    return a + b;
 }

 var myA = [5, 4];
// console.log(sumOne(...myA));//spread op

// function sumTwo(...args) {
//     let sum = 0;
//     for (const arg of args) {
//         sum = sum + arg;
//     }
//     return sum;
// }

// console.log(sumTwo(2, 3, 4, 5,  6));

function sumTwo(a, b,  ...args) {
    let multi = a * b;
    let sum = 0;
    for (const arg of args) {
        sum = sum + arg;
    }
    return [multi, sum];
}

console.log(sumTwo(2, 3, 4, 5,  6));