// Types of Function 
// 1. Function Declaration
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Outputs: 8

// 2. Function Expression
const add1 = function (a, b) {
    return a + b;
};
console.log(add(5, 3)); // Outputs: 8

// 3. Arrow Function (Most frequently used in modern JavaScript)
const add2 = (a, b) => {
    return a + b;
};
console.log(add(5, 3)); // Outputs: 8

// If function has a single line body, you can omit the braces and write it in single line
const add3 = (a, b) => a + b;
console.log(add(5, 3)); // Outputs: 8

// 4. Immediately Invoked Function Expression (IIFE). It will execute immediately after it is defined.
(function () {
    console.log("This is an IIFE!");
})();

//5.callback function
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

greet("Alice", function () {
    console.log("This is a callback function!");
});