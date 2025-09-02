let userInput = "Hello, World! Welcome to JavaScript programming.";

// Convert to uppercase
let upperCaseInput = userInput.toUpperCase();
console.log(upperCaseInput); // Outputs: "HELLO, WORLD! WELCOME TO JAVASCRIPT PROGRAMMING."

// Convert to lowercase
let lowerCaseInput = userInput.toLowerCase();
console.log(lowerCaseInput); // Outputs: "hello, world! welcome to javascript programming."

// Find the index of a substring
let indexOfWelcome = userInput.indexOf("Welcome");
console.log(indexOfWelcome); // Outputs: 13

// Extract a substring
let extractedSubstring = userInput.substring(7, 12);
console.log(extractedSubstring); // Outputs: "World"

// Replace a substring
let replacedString = userInput.replace("JavaScript", "JS");
console.log(replacedString); // Outputs: "Hello, World! Welcome to JS programming."

// Split the string into an array of words
let wordsArray = userInput.split(" ");
console.log(wordsArray);
// Outputs: ["Hello,", "World!", "Welcome", "to", "JavaScript", "programming."]     
// Trim whitespace from both ends
let stringWithWhitespace = "   Hello, World!   ";
let trimmedString = stringWithWhitespace.trim();
console.log(trimmedString); // Outputs: "Hello, World!"

// Check if the string includes a substring
let includesJS = userInput.includes("JavaScript");
console.log(includesJS); // Outputs: true

// Repeat the string multiple times
let repeatedString = "Ha! ".repeat(3);
console.log(repeatedString); // Outputs: "Ha! Ha! Ha! "
