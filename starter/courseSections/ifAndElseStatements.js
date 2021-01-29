

////////////IF STATEMENTS//////////////

const age = 16;
const isoldEnough = age >= 18;
const yearsLeft = 18 - age;

//Varible is inserted into the argument. 
if(isoldEnough) {
    console.log('Sarah can start her driving license 🚗')
}

//the condition ( ) can hold an expression so it can be written this way and this is more common. 

if(age >= 18) {
    console.log('Sarah can start her driving license 🚗')   
} else{   
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 🧭`);
}

const birthYear = 2012;

let century;//<-- in order to use a varible in a code block { } it must be declared outside first.

if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);