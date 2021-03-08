let rlSync = require('readline-sync');
let age = Number(rlSync.question("What is your age\n"));
// let decade =10

// ageWhileLoop(age);
function ageWhileLoop () {
       let decade =10
    while (decade < 100) {
        console.log(`In ${decade} years, you will be ${age+decade} years old`)
        decade = decade + 10
    }
}

// Initially made index increment {decade+10} not {decade+=10}
function ageForLoop(age) {
    for(let decade = 10; decade<=150; decade+=10) {
        console.log(`In ${decade} years, you will be ${age+decade} years old`)
    }
}
ageForLoop(age);




