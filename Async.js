// asyncronus code does not block the execution of other code
//. setTimeout and setInterval are examples of asyncronus code
//. they allow other code to execute while they are waiting to execute
//. this can lead to a more responsive UI and a better user experience
//. however, it can also lead to code that is harder to understand and debug
//. it is important to use asyncronus code judiciously and to understand its implications
// setTimeout delays the execution of a function by a specified number of milliseconds

console.log("This is from the main thread");
setTimeout(() => {
    console.log("This is from setTimeout");
}, 2000);

// setInterval repeatedly executes a function at a specified interval in milliseconds
// it continues to execute until it is stopped with clearInterval
// here, we are logging a message every 5 seconds
setInterval(() => {
    console.log("This is from setInterval");
}, 3000);
// clearInterval stops the execution of a function that was started with setInterval
// here, we are stopping the interval after 20 seconds
setTimeout(() => {
    clearInterval();
    console.log("Interval cleared");
}, 5000);


