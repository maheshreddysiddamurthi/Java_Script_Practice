//Example1:
let arr = [1, 2, 3, 4, 5];
console.log(arr); // Outputs: [1, 2, 3, 3, 5]
console.log(arr[0]); // Outputs: 1
console.log(arr[1]); // Outputs: 2
console.log(arr[2]); // Outputs: 3


// Array with predefined size
// Note: JavaScript arrays are dynamic, so you can add or remove elements as needed.
// Example2:
let arr1 = new Array(5);

arr1[0] = 'a';
arr1[1] = 'b';
arr1[2] = 'c';
arr1[3] = 'd';
arr1[4] = 'e';

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]); // Outputs: a, b, c, d, e
}
// Or
for (let item of arr1) {
    console.log(item); // Outputs: a, b, c, d, e
}

// Array built in Methods
// push() - Adds one or more elements to the end of an array and returns the new length of the array.
let arr2 = [1, 2, 3, 4, 5];
arr2.push(6); // Adds 6 to the end
console.log("push:", arr2); // Outputs: [1, 2, 3, 4, 5, 6]

// pop() - Removes the last element from an array and returns that element.
arr2.pop(); // Removes the last element
console.log("pop:", arr2); // Outputs: [1, 2, 3, 4, 5]

// shift() - Removes the first element from an array and returns that element.
arr2.shift(); // Removes the first element
console.log("shift:", arr2); // Outputs: [2, 3, 4, 5]

// unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
arr2.unshift(1); // Adds 1 to the beginning
console.log("unshift:", arr2); // Outputs: [1, 2, 3, 4, 5]

//splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// Syntax arr2.splice(start, deleteCount, item1, item2, ...)
arr2.splice(0, 0, 9)
console.log("splice:", arr2)


function calculate(a, b, operation) {
    return operation(a, b); // callback decides the operation
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(calculate(5, 3, add));      // 8
console.log(calculate(5, 3, multiply)); // 15
