

////////////STRING CONCATENTAION EXAMPLE/////////////

//concatenation is what allows you to use multiple variables and calculation with strings and they will readout the answer with console.log
//Java script uses type conversion that will change the numbers to a string so that it can be concatenated. 

//Template literals will allow you to use a string or sentance in a more formal manner without having to mangage the spaces and is an eaiser way to add varibles 
//to the string output.


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037; 

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old teacher.';
console.log(jonas);


////////////TEMPLATE LITERALS (AKA template string)EXAMPLE///////////////

//Template strings or Template Literals are recognized by javascript but using the `` forward tic marks. The string can be written and the varible inserted with a $ and curly brackets {}. 
//Template strings are able to recognize a new line and no special character like /n is needed. 


const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;
console.log(jonasNew);

console.log(`This
demonstrates
new line
recognition`)
    