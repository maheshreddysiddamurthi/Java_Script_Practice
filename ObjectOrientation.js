let myobect = {
    name: "BMW",
    colour: "Black",
    Cost: 100000,
    millage: 6.6,
    type: "Car",
    model: "X5",
    // Array as a property of the object
    features: ["Sunroof", "Leather seats", "Navigation system", "Bluetooth connectivity"],
    // Nested object
    owner: {
        name: "Mahesh Reddy",
        age: 27,
        address: {
            street: "123 Main St",
            city: "Hyderabad",
            country: "India"
        }
    },

    // Defin Function also as key value pair. function name is key and function body is value
    start: function () {
        console.log("Car started");
    },
    stop: function () {
        console.log("Car stopped");
    }
};

// Accessing object properties
console.log(myobect.name); // Accessing using dot notation
console.log(myobect["colour"]); // Accessing using bracket notation

// Accessing array within object
console.log(myobect.features[0]); // Accessing array within object

// Accessing nested object properties
console.log(myobect.owner.name); // Accessing nested object property
console.log(myobect.owner.address.city); // Accessing nested object property

// Calling object methods
myobect.start(); // Output: Car started
myobect.stop(); // Output: Car stopped