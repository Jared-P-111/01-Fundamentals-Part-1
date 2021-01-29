
//////////////////Code Challenge 3/////////////////

const dolphinsAverage = (96 + 108 + 89) / 3; //This is dolphins average
const koalasAverage = (88 + 91 + 110) / 3; //This is koalas average


if (dolphinsAverage > koalasAverage) {
    console.log(`Dolphins get the trophy 🏆 their average of ${dolphinsAverage} beats Koalas average of ${koalasAverage}`);
}
else if (koalasAverage > dolphinsAverage){
    console.log(`Koalas win 🏆! Their average is ${koalasAverage} and beats Dolphins ${dolphinsAverage}`);
}
else if (koalasAverage === dolphinsAverage){
    console.log(`Both teams win! Its a draw! 🏆🏆`)
}