// 5.
// if (foo()) {
//   return 'bar'
// } else {return qux()}

// 6. Empty Array not falsy

// 7. 
let rlSync = require('readline-sync');
let string = rlSync.question('Write a sentence.\n')
console.log(typeof string)
console.log(tenCaps(string))

function tenCaps (string) {
  if (string.length > 10){
    return string.toUpperCase()
  } else {
    return string;
  }
}

//8.

