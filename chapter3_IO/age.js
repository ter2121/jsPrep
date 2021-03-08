let rlSync = require('readline-sync');
let age = Number(rlSync.question("What is your age\n"));
decade = 10

console.log(`You are ${age} years old.`)
console.log(`In ${decade} years, you will be ${age+decade} years old`)
console.log(`In ${2*decade} years, you will be ${age+(2*decade)} years old`)
console.log(`In ${3*decade} years, you will be ${age+(3*decade)} years old`)
console.log(`In ${4*decade} years, you will be ${age+(4*decade)} years old`)