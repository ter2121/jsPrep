let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);


Within the function, ${let bar = 2} is declaring and assigning a new local variable,
with a scope limited to inside the function.
# Without let, line 3 constitutes a reassignment of bar in line 1.