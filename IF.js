// Basic if Condition

let myage = 20;

if (myage >= 21) {
  console.log("You are an adult");
}

// // if-else Condition
// age = 16;

// if (age >= 18) {
//   console.log("You are an adult");
// } else {
//   console.log("You are a minor");
// }

// // if-else if-else Condition
// let score = 85;

// if (score >= 90) {
//   console.log("Grade A");
// } else if (score >= 75) {
//   console.log("Grade B");
// } else if (score >= 50) {
//   console.log("Grade C");
// } else {
//   console.log("Fail");
// }

// // Nested if Condition
// let username = "admin";
// let passwordCorrect = true;

// if (username === "admin") {
//   if (passwordCorrect) {
//     console.log("Welcome, Admin!");
//   } else {
//     console.log("Wrong password");
//   }
// } else {
//   console.log("User not found");
// }

// // if with Logical Operators
// let isLoggedIn = true;
// let isAdmin = false;

// if (isLoggedIn && isAdmin) {
//   console.log("Welcome Admin");
// } else if (isLoggedIn && !isAdmin) {
//   console.log("Welcome User");
// } else {
//   console.log("Please log in");
// }

// // shorthand if (ternary operator)
// age = 20;
// let message = age >= 18 ? "Adult" : "Minor";
// console.log(message); // Adult

// // if with equality && strict equality
// let x = "10";

// if (x == 10) {
//   console.log("x == 10 (loose equality)");
// }

// if (x === 10) {
//   console.log("x === 10 (strict equality)");
// } else {
//   console.log("Types are different");
// }

// // if with multiple conditions
// let day = "Sunday";

// if (day === "Saturday" || day === "Sunday") {
//   console.log("Weekend");
// } else {
//   console.log("Weekday");
// }

// if with nagation (!)
let isOnline = false;

if (!isOnline) {
  console.log("User is offline");
}

// // using if condition with functions
// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(4)); // true
// console.log(isEven(5)); // false

// // if with switch case (alternative)
// let color = "red";

// switch (color) {
//   case "red":
//     console.log("Color is Red");
//     break;
//   case "blue":
//     console.log("Color is Blue");
//     break;
//   case "green":
//     console.log("Color is Green");
//     break;
//   default:
//     console.log("Unknown Color");
// }

// // if with arrays and objects
// let user = {
//   name: "Alice",
//   age: 25,
// };

// if (user.age >= 18) {
//   console.log(`${user.name} is an adult`);
// } else {
//   console.log(`${user.name} is a minor`);
// }

// let numbers = [1, 2, 3, 4, 5];

// if (numbers.length > 0) {
//   console.log("Array is not empty");
// } else {
//   console.log("Array is empty");
// }                   