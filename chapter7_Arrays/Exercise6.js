let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths (inputString) {
  let lengths = inputString.map(item => item.length);
  let oddLengths = lengths.filter(item => item % 2 !== 0)
  //console.log(oddLengths)
  return oddLengths
}

console.log(oddLengths(arr))