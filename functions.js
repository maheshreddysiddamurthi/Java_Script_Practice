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
const roundTo = function (n, step) {
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
const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};
console.log(ingredient(1, "can", "chickpeas"));