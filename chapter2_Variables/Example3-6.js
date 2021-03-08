Example3-6.js

#3: foo is out of global scope

#4:
(Tried to change a constant so throws error)

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

#5:
The 'qux' initialized foo is out of scope for the console.log, which prints bar 

#6
Nope. Despite 2 const named FOO with diff values, they are in different scopes. No error.