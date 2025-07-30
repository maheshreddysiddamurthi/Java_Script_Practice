// function syntax 
function functionName(parameter) {
    // function body
    return value;
};
// or
const functionName1 = function (parameters) {
    // function body
    return value;
};

// Ex1:

const square = function (x) {
    return x * x;
};

console.log(square(12)); // → 144

// Without function 
let x = 10;
test = x * x;
console.log(test);

// Ex2:
const makeNoise = function () {
    console.log("Pling!");
};
makeNoise();

//Ex3:
const roundTo = (n, step) => {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(27, 10)); // → 20

// EX4:  
function sayHello(name) {
    let greeting = "Hello " + name;
    console.log(greeting);
}
// 'greeting' and 'name' exist only inside the function
sayHello("John");

//Ex5:
let m = 10;   // global
if (true) {
    let y = 20; // local to block
    const u = 40; // local to block
    var z = 30; // also global
}
//Variables declared with let or const are limited to the block {}
console.log(z);

//Ex6: 
// const hummus = function (factor) {
//     const ingredient = function (amount, unit, name) {
//         let ingredientAmount = amount * factor;
//         if (ingredientAmount > 1) {
//             unit += "s";
//         }
//         console.log(`${ingredientAmount} ${unit} ${name}`);
//     };
//     ingredient(1, "can", "chickpeas");
//     ingredient(0.25, "cup", "tahini");
//     ingredient(0.25, "cup", "lemon juice");
//     ingredient(1, "clove", "garlic");
//     ingredient(2, "tablespoon", "olive oil");
//     ingredient(0.5, "teaspoon", "cumin");
// };
// console.log(ingredient(1, "can", "chickpeas"));


// Arrow function syntax
// Instead of the function keyword, it uses an arrow (=>)
const functionName2 = (parameters) => {
    // function body
    return value;
}

const greet = (nnnnn) => "Hello!";

console.log(greet()); // → Hello!

const divide = (a, b) => {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
};
console.log(divide(10, 2)); // → 5
console.log(divide(10, 0)); // → Cannot divide by zero

console.log('Print');

// jdsh

/**
 * let, var, const
 * string, number, array, boolean, object
 */

// EX:
function getFirstName(text) {
    const spitArr = text.trim().split(' ');
    console.log(spitArr);
    
    return spitArr[0];
}

console.log(getFirstName(' Mahesh Kumar Reddy'));
console.log(getFirstName('Krishnas Kanth'));

const first = getFirstName('Krishnas Kanth');

const myName = 'Mahesh Kumar Reddy';
const myNameArr = myName.split('');

let newName = '';
for (let index = myNameArr.length - 1; index >= 0; index--) {
    console.log(myNameArr[index]);
    newName = newName + myNameArr[index];
}

console.log('Reverse NAme=> ', newName);


// for (let index = 9; index > 0; index--) {
//     console.log(index);
    
// }
// spli