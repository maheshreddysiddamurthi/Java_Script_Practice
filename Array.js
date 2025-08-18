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
let arr2 = [1, 2, 3, 4, 5];
arr2.push(6); // Adds 6 to the end
console.log("push:", arr2); // Outputs: [1, 2, 3, 4, 5, 6]

arr2.pop(); // Removes the last element
console.log("pop:", arr2); // Outputs: [1, 2, 3, 4, 5]

arr2.shift(); // Removes the first element
console.log("shift:", arr2); // Outputs: [2, 3, 4, 5]

arr2.unshift(1); // Adds 1 to the beginning
console.log("unshift:", arr2); // Outputs: [1, 2, 3, 4, 5]

// splice(start index)
// using splice we can inter/remove data anywhere in the index. we can remove and insert at same time and vise versha 
arr2.splice(0,0,9)
console.log("splice:", arr2)
// Other methods
// Note: These methods can be used to manipulate arrays in various ways.
// Example of some common array methods:
// arr2.splice(start, deleteCount, item1, item2, ...)
// arr2.slice(start, end)
//push()
// pop()
// shift()
// unshift()
// splice()
// slice()
// concat()
// join()
// indexOf()
// lastIndexOf()
// forEach()
// map()