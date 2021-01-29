
/////////////////TRUTHY AND FALSY VALUES///////////////////
//Falsy values are not entirely false until they are converted to boolean.
//Everything else is considered truthy. 
//Javascript has 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); //falsy
console.log(Boolean(1)); //truthy
console.log(Boolean(undefined)); //falsy
console.log(Boolean('Jared')); //truthy
console.log(Boolean({})); //truthy

const money = 100;
if (money) {                                //because money has not been defined it will be considered undefined and this is a falsy value thus triggering the else block.
    console.log("Don't spend it all!");
} else {
    console.lot('You should get a job');
}

let height = 0;
if (height) {
    console.log('Yay! Height is defined!'); //Here the 0 is considered a falsy value and thus triggers the else block.
} else {
    console.log('Height is UNDEFINED'); 
}