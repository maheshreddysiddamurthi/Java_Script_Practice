// Function as Object
// Functions in JavaScript are first-class objects, meaning they can be treated like any other object.
// first class obects rules:
// 1. They can be assigned to variables.
// 2. They can be passed as arguments to other functions.
// 3. They can be returned from other functions.
// 4. They can have properties and methods.

function greet(name) {
    return `Hello, ${name}!`;
}

// Assigning function to a variable
const sayHello = greet;

// Passing function as an argument
function executeFunction(fn, arg) {
    return fn(arg);
}

console.log(executeFunction(sayHello, 'Alice')); // Outputs: Hello, Alice!

// Returning a function from another function
function createMultiplier(multiplier) {
    return function (x) {
        return x * multiplier;
    };
}

const double = createMultiplier(2);
console.log(double(5)); // Outputs: 10

// Functions can also have properties and methods
function counter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        getCount: function () {
            return count;
        }
    };
}

const myCounter = counter();
console.log(myCounter.increment()); // Outputs: 1
console.log(myCounter.increment()); // Outputs: 2
console.log(myCounter.getCount()); // Outputs: 2
console.log(myCounter.decrement()); // Outputs: 1

// Functions can also be used as constructors
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    return `Hello, my name is ${this.name}.`;
};

const person1 = new Person('Bob');
console.log(person1.greet()); // Outputs: Hello, my name is Bob.

// Functions can be used as methods in objects
const obj = {
    name: 'Charlie',
    greet: function () {
        return `Hello, my name is ${this.name}.`;
    }
};

console.log(obj.greet()); // Outputs: Hello, my name is Charlie.                         

function exam(fun) {
    fun(100, 200);
}

console.log(exam(() => 'This is an exam function!')); // Outputs: This is an exam function!