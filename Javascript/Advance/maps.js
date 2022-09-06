var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap);

// for (let key of myMap.keys()) {
//     console.log(`Key is ${key}`);
// }

// for (let value of myMap.values()) {
//     console.log(`value is ${value}`);
// }

for (let [key, value] of myMap) {
    console.log(`The key is ${key} value is ${value}`);
}

myMap.forEach((v, k) => console.log(` the value is ${v} and the key is ${k}`));


myMap.delete(2);
console.log(myMap);