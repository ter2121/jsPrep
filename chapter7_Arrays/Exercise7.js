let array = [3, 5, 7];
let reducedArray = array.reduce((acc, element) => (element*element) + acc, 0)
console.log(reducedArray)

//What happens if you forget to provide an initial value of 0 for the accumulator? Take a look at the MDN Documentation for reduce and see if you can determine what sumOfSquares would return if you omitted the initial accumulator value.

//Did that at first, it gave 77. That's because it starts from index 1, not index 0 if no initialValue is provided. Meaning it would add 3 + 25 + 49 = 77

//reduce takes two arguments: a callback function and a value that initializes something called the accumulator. The callback function takes two arguments as well: an element from the array and the current value of the accumulator. It returns a value that will be used as the accumulator in the next invocation of the callback. That sounds more complicated than it is, so let's take a look at two simple uses of reduce:
