function sayhello (name) {
    console.log("hello there zues");
    console.log("hello there", name);
}
sayhello ("marco");
sayhello ("pablo");

function sayhello (name) {
    console.log("hello there zues");
    console.log(`Hello there, ${name}.How are you?`);
}
sayhello ("sumesh");
sayhello ("mani");

function namestey() {
    return "hello in India"
}
var greetings = namestey();

console.log(greetings);
console.log(namestey());



function iseven (element) {
    if(element % 2 === 0) {
        return true;
    }
    return false;
};

console.log(isEven(3));


// or 

var isOdd = (element) => {
    return element % 1 === 0;
};

console.log(isOdd(3));