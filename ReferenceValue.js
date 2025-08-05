// Reference Value Example
// In JavaScript, objects are reference values.
// When you assign an object to another variable, both variables point to the same object in memory.
// Modifying the object through one variable will affect the other variable as well.
// Example of an object 
let C1 = {
    name: 'BMW',
    model: 'X5',
    cost: 50000
};
console.log(C1);
console.log(C1.name); // → BMW 

// Variable assignment
let C2;
C2 = C1;

console.log(C2.model); // → X5
console.log(C2.cost); // → 50000

C2.name = 'Mercedes';

console.log(C2.name); // → Mercedes
console.log(C1.name); // → Mercedes