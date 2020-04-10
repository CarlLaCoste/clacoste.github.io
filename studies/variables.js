/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";
 
 
 /*  4. Var, Let, and Const 
 
 Var, let, and const are all variable declarations.
 
 LET:
 
 The LET statement declares a block scope local variable, can be reassigned, is hoisted to the top of their scope, but
 not availble until the interpreter reaches the lin the variable is declared. 
 
 (Ex) */ let schoolName = 'Operation Spark'; /*
 
 CONST:
 
 The CONST statement declares a block scope local variable just like let, however, the reference of a constant cannot
 change through reassignment, and it CANNOT be redeclared. A variable declared with const must be initialized and can 
 never be declared. 
 
 (EX) */ // const schoolName = 'Operation Spark'; /* schoolName cannot be redeclared to any other value. It was always be 
 /*'Operation Spark'.
 
 VAR:
 
 The VAR statement declares a variable but does not have to be initialized to a value. 
 
 (EX) */ // var schoolName = 'Operation Spark' /*
 
 /* 5.  HOISTING
 
 Before statements are executed, all function and var declarations are hoisted (brought) to the top of the program.
 
 Var values, if not declared already, will throw undefinded instead of Reference Error because var statements are hoisted
 to the top of program 
 
 (EX) */ console.log(x); // prints undefinded 

var x = 5; //Declaration

console.log(x); //prints 5

/* The Let and Const keywords are not hoisted, therefore, there will be a reference error if you try referencing before they 
are declared.  */