
//////////////EQUALITY OPERATORS///////////////

///////////////EXAMPLE 1//////////////////////
const age = '18';
//Note you can ommit the {} brackets or block on an if statement if you only have one line of code. 
if (age === 18) console.log('You just became an adult (Strict)'); //<-- the triple === is strict and does not allow type conversion. 
//As a general rule we should avoid the double equality operator as much as possible.
if (age == 18) console.log('You just became an adult (Loose)') //<-- the double == is loose and will allow type conversion. 

//////////////EXAMPLE 2//////////////////////


//Below is wrapped in the Number() function which converts the input to number from string which allows the if statements and strict equality to work. 
const favorite = Number(prompt("What is your favorite number? (With Number()"));
console.log(favorite);
//The second prompt is not using the Number() function and thus the input is falsy because it is string input. 

if (favorite == 23) { // '23' is a string and so the == will allow for the answer to be truthy. Even if the number is not converted this is a bad practice. 
    console.log('Cool! 23 is an amazing number. (loose)');
}

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number. (strict)');
}
else if (favorite === 9) {
    console.log('Nice 9 is a great number too! (strict)');
}
else {
    console.log("Why not 9 or 23? You're number sucks!")
}

/////////////////EXAMPLE 3///////////////////
//This is for the not equal operator
//Below is 

if (favorite !== 23) console.log("You're number is not 23 (!== not equal)");
