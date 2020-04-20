/*
 * FUNCTIONS:
 *
 * Functions allow us to encapsulate a block of code and execute that block of code wherever we want and how
 * ever many tims we would like. 
 * 
 * Two phases of using functions are:
 * 
 * 1. Creating the function: (definition/declaration)
 * 
 * 2. Using the function: (Invocation/calling)
 * 
 * Before you can use your function, you must define your function. This is the process of designing some code you want to 
 * execute when your Function is called.
 *
 * To use a function, we have to call it. Calling a function will run the code within the body or code block of the Funciton. 
 * Executing, invoking, applying, running are all synonymous with calling a function. 
 *
 * 3. Arguments Vs. Parameters
 
 
 * Arguments are the values passed to a Function when we execute the Function.To call a Function, you must reference
 * its name or the variable name to which its assigned, then pass any values expected.
 
 
 
  (EX)*/
  
  const subtract = function(num1,num2){// our paramaters are num1 and num 2
    
    return num2 - num1;
 }
 
 const sum = subtract(2,2); //our arguments are 2 and 2 
 
 console.log(sum); // prints 0
 
 
 
/* 4. Named Functions look exactly like the example below. Named Function definitions are hoisted to the top of their scope, 
 * so they can be used in the program before they appear to be sequentially defined. */
 
 function add(num1,num2){ // starting with function keyword the the name of the function.
   return num2 + num1;
 }
 
 console.log(add(2,2)); // prints 4
 
 
 
 /* A Function Expression is formed when an anonymous Function is assigned to a variable or constant. */
 
 
 
 
 const split = function(num1,num2){ // function expression
   return num2 / num1;
 }
 
 const divide = split(4,2); // assigning divide to a function call
 
 console.log(divide); // prints 2
 
 
 
 /*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 
 *
 *
 *
 *
 *
 *
 
 
 */
 
 













// The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by?
// What’s the difference between a function’s parameters and arguments PASSED to a function?
// What’s the syntax for a NAMED function?
// How do we assign a function to a variable?
// Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
// Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
// Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory 
// somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! (See: our meeting-room app 
// for an example!)