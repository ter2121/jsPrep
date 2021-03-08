function greet (prompt) {
  let rlSync = require('readline-sync');
  reply = rlSync.question(prompt);
  return reply
}

let firstName = greet("What is your first name\n")
let lastName = greet("What is your last name\n")

console.log(`Hello ${firstName + ' ' + lastName}`);