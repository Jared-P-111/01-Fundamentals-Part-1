
///////////////TYPE CONVERSION///////////////

//Type conversion is usable when you need to convert to number from a string or vise versa. 

//This example demonstrates how js can't compute this correctly. 
const inputYear = '1991';
console.log(inputYear + 18);

//By using a built in function called Number() it will convert the string to a number. 

console.log(Number(inputYear) + 18);

//By using the built in function called String() it will convert a number to string. 

console.log(String(1991));

//Its important to not that both String() and Number() need to have a capital letter. 

///////////////TYPE COERCION////////////////

//Type coercion takes place due to certain operators. The + sign will convert numbers automatically to strings. 

console.log('I am ' + 23 + ' years old');

//The minus - sign will do the opposite of the + sign. 

console.log('23' - '10' - 3);

//Both the division / and multiplication * signs will convert strings to numbers. 

console.log('23' / '2');
console.log('23' * '2');

//The greater than and less thans will also convert string to number. 

console.log('23' > '18');
