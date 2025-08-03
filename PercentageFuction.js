// Type1 Percentage Calculation 
let scroredMarks = 80;
let totalMarks = 100;
let percentage = (scroredMarks / totalMarks) * 100;
console.log(`Percentage: ${percentage}%`);

// Type2 Percentage Calculation using function
function calculatePercentage(scored, total) {
    let percentage = (scored / total) * 100;
    return percentage;
    // console.log(`Percentage: ${percentage}%`);
}
let perc = calculatePercentage(80, 100);
console.log(`Percentage: ${perc}%`);

// Type3 Percentage Calculation using function with arrow function syntax
const calculatePercentageArrow = (scored, total) => {
    return (scored / total) * 100;
};
let percentArrow = calculatePercentageArrow(80, 100);
console.log(`Percentage: ${percentArrow}%`);

// Type4 Percentage Calculation using function with arrow function syntax and template literals
function calculatePercentage(scored, total) {
    return (scored / total) * 100;
}
let percent = calculatePercentage(80, 100);
console.log(`Percentage: ${percent}%`);