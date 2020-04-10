/*
 * DATATYPES:
 *
 * 0. Datatypes are how we categorize different types of data in Javascript. They have unique and shared properties 
 * between them, and they allow the interpreter to effectively work with different types of data. 
 * 
 * 
 *
 * 1. The most basic datatypes are called primitive or simple datatypes. They include:
 *
 * Numbers: Numeric Data
 * String: Character Data
 * Boolean: True or False
 * NaN: Not a Number
 * undefinded: no value or uninitialized 
 * null: no value
 * Infinity: A global property that has a numeric value representing infinity. 
 *
 * These are simple datatypes because they are atomic and immutable: They do not hold and collect other values, and operations 
 * on primitive values return simple values, they do not alter the original value.
 *
 *
 * 2. Complex Datatypes 
 * Objects 
 * Arrays
 * Functions
 * 
 * These are complex Datatypes because they aggregate other values and therefore are of indefinite size. They also copy by 
 * reference which means when assigning or passing, complex datatype are passed by referencing.
 *
 * 
 *
 *
 * 3. Primitive types vs. Complex types
 * 
 *
 * Because variables only carry a certain amount of memory they can hold actual values of primitive types, but they can only 
 * hold references to values of complex types. Primitive types are copied by value. Complex types are copied by refernce. 

 * 
 *(EX)  Primitive Types are copied by value */
 
 var one = 1;
 
 var b = one; // The value stored in one is now copied to b.
 
 
 b = 2; // Changing the value of b does not effect what is stored in one. 
 
 console.log(one); // prints 1.
/* 
 *
 *
 * (Ex) Complex Types are copied by reference */
 
 
 var a = {one: 'food'};
 
 var b = a; /* assigning b to a which holds an object. Here the value stored is a reference to the value stored in a. They both 
 print the same object. */
 
 b.one = 'chore'; //changing the value at b effects all references. 
 
 console.log(a.one); // prints 'chore'.
 
 
 
 
 
 
 
 
 
 
 
