

//The conditional operator allows us to write something similar to an if / else 
// statement all in one line. This operator is an expression because it will output a value. 

const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') : 
console.log('I like to drink water 💦');

//An opertor always produces a value and so it is an expression, because we have a
//value, we can then assign that value to a variable. 

//Because we have a value we can conditionally assign a value to a variable. 

const drink = age >= 18 ? 'wine 🍷' : 'water 💦';
console.log(drink);

//The ternary operator allows us to write cleaner code below is an example of how we 
//would have to write this if we didn't have the ternary conditional operator. 

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 🌊'
}
console.log(drink2);

//because this is an expression and the template literal can take expressions it will 
//work with template literal string. 

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💦'}`);

//The ternary operator is perfect for a quick decision and doesn't really replace the 
//if/else statement, the if / else statement is still needed for larger blocks of code 
//that need to be executed. 