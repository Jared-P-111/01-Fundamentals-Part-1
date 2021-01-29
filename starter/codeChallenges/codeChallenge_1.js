let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

const johnBMI = johnMass / johnHeight ** 2;
const markBMI = markMass / markHeight ** 2;

const johnHigherBMI = johnBMI > markBMI;

console.log("Johns BMI is " + johnBMI);
console.log("Marks BMI is " + markBMI);
console.log("Johns BMI is higher = " + johnHigherBMI)