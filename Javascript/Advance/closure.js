function doAddition(x) {
    return function (y) {
        return x + y;
    };
}

var add5 = doAddition(4);
console.log(add5(4));

console.log(doAddition(7)(5));