

///////////////LOGICAL OPERATORS////////////////

const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const isTired = true; // C

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

//The below set of if/else statements uses single logical operators. Uncomment to test.
// if(hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive.');
// } else {
//     console.log('Someone else should drive.');
// }

if(hasDriversLicense && hasGoodVision && !isTired) { //The !isTired is the not logical operator and it inverts the variable from truth to false. 
    console.log('Sarah is able to drive.');
} else {
     console.log('Someone else should drive.');
}