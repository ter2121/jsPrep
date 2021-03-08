let array1 = [1, 2, undefined, 4];
console.log(array1.length);

let array2 = [1];
array2.length = 5;
// [1, Undefined, Undefined,Undefined,Undefined]
console.log(array2.length);

let array3 = [];
array3[-1] = [1];
//need non-neg integerfor index
console.log(array3.length);

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;
// [1,2,3]
console.log(array4.length);

let array5 = [];
array5[100] = 3;
// index 0 is 100, then 100 undefineds
console.log(array5.length);
