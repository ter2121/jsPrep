
multiply();
function multiply (){
    let rlSync = require('readline-sync');
    firstNum = Number(rlSync.question('What is the first number?\n'));
    secondNum = Number(rlSync.question('What is the second number?\n'));
    console.log(firstNum * secondNum)
}
