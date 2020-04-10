/*
 * OPERATORS:
 *
 * 0. Operators essentially act on our data. They are used for:
 * 
 * > Assigning to a variable 
 * > Comparing
 * > Arithmetic Operations
 * 
 * 
 * 
 *
 * 1. Operators are classified by what they do and how many operands they require. 
 * (Operands are values that the operators act on.)
 
 
 
 *
 * 2. Arithmetic Operators are used in Javascript for simple math with numbers. They include:
 
 + // addition
 - // subtraction
 * // multiplication
 / // division
 % // modulo / remainder of division
 
(ex) */ var sum = 4 + 4; // declaring the variable sum and initializing it to a value or outcome using the addition operator. 

        console.log(sum); // prints 8;

/* 3. Comparison Operators compare two values and evaluate to either true or false. They include:


> // greater than
< // less than
>= // greater than or equal to 
<= // less than or equal to
=== // strict comparison
== // non-strict comparison
 
 
 (ex) */ var bed = 'comfy';
 
 var room = 'comfy';
 
 console.log(room === bed); // prints true;
 
 console.log(4 === 7); //prints false;
 
 
 /*  4. Unary Operators take a single operand and performs an operation. They include:
 
 
 typeOf // returns data type as a string. 
 (!)Bang Opeator // negates booleans value. The oppposite of actual value. 
 
 
 (Ex) */ 
 
 // console.log(typeOf 1); // prints 'number'
 
 console.log(4 !== 4); // prints false

 
 /*
 
 5. Ternary Operators are conditional based and take three operands. They are mainly used in place of if statements as they are
 quicker to structure. The structure of a Ternary Operator is:
 
 a. A conditional statement
 b. (?) 
 c. an expresion for if the condidtion is truthy
 d. (:)
 e. an expression for if the condition is falsy
 
 
 (Ex) */ 
  
  var a = 10, b = 20, c;
  
  c = (a > b) ? b : a; //falsy value
  
  console.log(c); // prints 10
  
  
  /* 
 
 6. Logical Operators consists of three operators which are used to print a boolean value.
    Logical Operators include:
    
 a. && - the AND operator: Both conditions must be true.
 
 b. || -- the OR operator: Only one condition must be true. 
 
 c. ! -- the BANG operator: Flips the result of value
 
 
 
 (EX) */ 
 
 console.log(5 < 7 && 2 > 0); // prints true
 
 console.log(3 === 3 || 3 > 1); // prints true
 
 console.log(!true); // prints false
 
 console.log(!false); // prints true
 
 /*
 
 Assignment Operators are Operators that used the = sign when using arithmetic. The = sign initializes the variablue to the
 output of arithmetic
 
 Assignment Operators consist of:
 = : assigns value
 
 += : adds then assigns
 
 -= : subracts then assigns
 
 *= : multiplies then assigns
 
 /= : divides then assigns
 
 
 (EX) */ 
 var x = 10;
 console.log(x += 5); // prints 15 : x = x + 5
 console.log(x -= 5); // prints 5 : x = x - 5
 console.log(x *= 5); // prints 50: x = x * 5
 console.log(x /= 2); // prints 5: x = x / 2
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
