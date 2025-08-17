//Example1:
let arr = [a, b, c, d, e];
console.log(arr); // Outputs: [a, b, c, d, e]
console.log(arr[0]); // Outputs: a
console.log(arr[1]); // Outputs: b
console.log(arr[2]); // Outputs: c
console.log(arr[3]); // Outputs: d
console.log(arr[4]); // Outputs: e

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