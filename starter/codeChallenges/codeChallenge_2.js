
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

/*
let markMass = 95;
let markHeight = 1.88;
let johnMass = 85;
let johnHeight = 1.76;
*/


const johnBMI = johnMass / johnHeight ** 2;
const markBMI = markMass / markHeight ** 2;

if(johnBMI > markBMI){
    console.log(`John's BMI is greater then Marks at ${johnBMI} over Marks ${markBMI}`)
} else {
    console.log(`Mark's BMI is greater then John's at ${markBMI} over John's ${johnBMI}`)
}