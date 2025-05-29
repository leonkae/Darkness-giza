console.log("Hello, World!");

//example of a switch statement
//example of a switch statement that takes different types of arguments
function exampleSwitch(argument) {
    switch (typeof argument) {
        case 'string':
            console.log(`this is a string ${argument}`);
            break;
        case 'number':
            console.log("You passed a number: " + argument);
            break;
        case 'boolean':
            console.log("You passed a boolean: " + argument);
            break;
        default:
            console.log("Unknown type: " + argument);
    }
}

// Call the function with different types of arguments
exampleSwitch(true);

let name = "argtha"

console.log(`Hello, ${name}!`);

//example of a while loop
let i = 0;
while (i <= 5) {
    console.log(`Current value of i: ${i}`);
    i++;
}

//another example of a while loop
let j = 0;
while (j < 10) {
    console.log(`Current value of j: ${j}`);
    j += 2; // Increment by 2
}
//give me a real world scenario of a while loop
// Real-world scenario: Monitoring a system until a condition is met
let systemStatus = "running";
while (systemStatus === "running") {
    console.log("System is operational.");
    // Simulate a condition change
    systemStatus = Math.random() > 0.5 ? "stopped" : "running"; // Randomly change status
}
//example of a do while loop
let k = 0;
do {
    console.log(`Current value of k: ${k}`);
    k++;
}
while (k < 5);

//for loop example

for (let l = 0; l < 5; l++) {
    console.log(`Current value of l: ${l}`);
}

//example of a for loop that iterates over an array
let fruits = ["apple", "banana", "cherry"];
for (let m = 0; m < fruits.length; m++) {
    console.log(`Fruit at index ${m}: ${fruits[m]}`);
}

//example of a for in loop
let person = { 
    name: "John", 
    age: 30, 
    city: "New York" 
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
//example of a for of loop

//example of a for of loop that iterates over an array
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(`this : ${color}`);
}

//example of break in for loop
for (let n = 0; n < 10; n++) {
    if (n === 5) {
        console.log("Breaking the loop at n = 5");
        break; // Exit the loop when n is 5
    }
    console.log(`Current value of n: ${n}`);
}

//example of continue in for loop
for (let o = 0; o < 10; o++) {
    if (o % 2 === 0) {
        console.log(`Skipping even number: ${o}`);
        continue; // Skip the rest of the loop for even numbers
    }
    console.log(`Current value of o: ${o}`);
}


//examples of array methods
// Array of numbers
let numbers = [1, 2, 3, 4, 5];
// Using forEach to iterate over the array
numbers.forEach(function(num) {
    console.log(`Number: ${num}`);
});
// Using map to create a new array with each number squared
let squaredNumbers = numbers.map(function(num) {
    return num ** 2;
});
console.log(`Squared Numbers: ${squaredNumbers}`);

// Using filter to create a new array with only even numbers
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(`Even Numbers: ${evenNumbers}`);
// Using reduce to calculate the sum of all numbers
let sum = numbers.reduce(function(accumulator, num) {
    return accumulator + num;
}, 0);
console.log(`Sum of Numbers: ${sum}`);

// Using find to get the first number greater than 3
let firstGreaterThanThree = numbers.find(function(num) {
    return num > 3;
});
console.log(`First Number Greater Than 3: ${firstGreaterThanThree}`);

const object = new Object();
object.name = "John";
object.age = 30;
object.city = "New York";
console.log(`Object: ${object.name}, ${object.age}, ${object.city}`);

const personObject = {
    name: "Jane",
    age: 25,
    city: "Los Angeles"
};
personObject.maritalStatus = "single";
delete personObject.age; // Remove the age property

console.log(personObject);
