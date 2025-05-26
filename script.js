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
