IF / ELSE Statement
    You don't need a block when the if or else clause contains a single statement or expression. 
    You need braces for a block when you want to execute multiple statements or expressions in a clause. 
        Otherwise, you can omit them. However, this practice can cause problems. 
            if (x === 3)                            // Example 4
            console.log("x is 3");

            if (x === 3)                            // Example 5
            console.log("x is 3");
            else
            console.log("x is NOT 3");

    Else if is one place where omitting the block is preferable. It's easier to read and maintain example 7 since you don't have the syntactic clutter of extra braces and indentation.

Comparison Operators                    

    (! takes only one operand; others multiple)

Short-Circuits
    && and || operators short circuit out of expression if they hit a value that triggers a return 

    When using && and ||, the return value is always the value of the operand evaluated last:
        These operators work with truthy and falsy values too.
        They can also return truthy values instead of boolean values. 
                For && if first value is False/Falsy then returns that value
                For || if second value is False/Falsy then returns that value 

Truthiness/Boolean Coercion
    JS treats the following as false:
        1. false
        2. The number 0. This includes all 3 variations of zero in JavaScript:
            0: The ordinary zero value.
            -0: A negative zero. That's mathematical nonsense, but a real thing in JavaScript.
            0n: The BigInt version of zero.
        3. An empty string ('')        // THIS IS COERCED TO ZERO in Nonstrict Comparison as  '' == 0
            ## NOTE THAT EMPTY ARRAY AND EMPTY OBJECT ARE NOT FALSY (SEE EXERCISE 6)
        4. undefined
        5. null
        6. NaN
            ## Everything else evaluates as true.
                This means that in the following, {x=5} is not tested; instead, 5 is assigned to x,
                and then the return value (5) is treated as a boolean, therefore True.  Hi 

When comparing strings, the comparison is character-by-character. 
    JavaScript moves from left-to-right in the strings looking for the first character that is different from its counterpart in the other string. 
        Once it finds a character that differs, it compares that character with its counterpart, and makes a decision based on that. 
            If both strings are equal up to the length of the shorter string as in the next to last example, then the shorter string is considered less than the longer string.
            > "4" < "5"                "4" > "5"
            = true                     true

            > "42" < "420"             "42" > "402"           Compares two strings char by char 
            = true                      true 

            > "42" < "402"      cf.    "42" > "420"           "42" > 420
            = false                     false                 false (it's coerced)

NON-STRICT Comparison
    == is non-strict

    That said, there are some edge cases that you need to be aware of with the loose operators. 
        For that reason, the style we use at Launch School insists that you always use the strict operators. 
            Doing so won't prevent you from having to fix bad code, but at this stage of your journey, it's less confusing to use the strict operators

    != is non-strict inequality operator    Coerces one of operands before compares them.
    When operands have different 

    !!a = !(!a)
        This inner ! makes inside the parentheses False if truthy, or True if falsy.
        The outer ! makes (true) False and (false) True.

Operator Precedence
    JavaScript has a set of precedence rules it uses to evaluate expressions that use multiple operators and sub-expressions. The following is a list of the comparison operations from the highest precedence (top) to lowest (bottom).
        <=, <, >, >= - Comparison
        ===, !==, ==, != - Equality
        && - Logical AND
        || - Logical OR
    
        JavaScript evaluates parentheses in the usual algebraic order. 
        That is, it evaluates the expression in the innermost set of parentheses first, then works its way out to the outermost part of the expression. 
        When multiple parenthesized subexpressions appear at the same depth, it evaluates them from left to right. Once it evaluates the parenthesized expressions, it evaluates the final expression value.

Ternary Operator
    The chief advantage that the ternary operator has over an if/else statement is that the entire structure is an expression. 
        What that means is that we can treat the ternary expression as a value: 
            we can assign it to a variable, pass it as an argument, and so on. 
    Since if/else is a statement, we can't capture its result to a variable.

Switch Statement 
    A switch statement is similar to an if statement, but it has a different interface. 
    It compares a single value against multiple values for strict equality (as with the === operator), 
            whereas if can test multiple expressions with any condition.



        