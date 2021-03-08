// let rlSync = require('readline-sync');
// let number = rlSync.question('What is your number\n')
// evenOrOdd(number);

// function evenOrOdd (number) {
//   if ((number % 2) === 0){
//     console.log('Even Number')
//   } else {
//     console.log('Odd Number')
//   }
// }

// VALIDATION VERSION


// WHY DOESNT THIS WORK

let rlSync = require('readline-sync');
let reply = rlSync.question('What is your number\n')
console.log(reply)

evenOrOdd(reply)

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

