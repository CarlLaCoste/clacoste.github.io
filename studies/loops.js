/*
 * LOOPS:
 *
 * 0. Loops are how we can iterate over our data. Loops are built-in constructs or features of Javascipt,
 * that allow us to execute a block of code as many times as needed. With loops, we can pull out the values 
 * of a collection to work with them one at a time. The different types of loops in javascript are:
 * a. For loops
   b. For - in Loops
   c. While loops
 
 
 
 
 * 1. The For Loop is best for looping over a collections or Arrays. There are three statements that define a foor loop:
 
 
 * a. Starting condition - initializes an index to 0;
 *
 * b. Stopping condition - conditions in order to stop counting. 
 *
 * c. Incrementation - Incrementing by a certain value each time we loop through
 
 
 *
 *
 */ //(EX): 
 
  var array = [];
 for(var i = 0; i < array.length; i++){ //looping fowards through our collection.
     //manipulation of the array goes here.
 }
 
 
 for(var i = array.length -1; i > -1; i--){
     //looping backwards over our collection
     
 }
 
 /* 2. For In Loop pulls out all the keys of an object, one by one. This allows you to use the key to get the value in the object.
 *
 * Keys are essentially strings. we use those keys to get the values of the object.
 *
 *
 *
 */ //(Ex):
 var person = {nameFirst: 'John', nameLast: 'Williams'}; //an object called person
 
 
 for(var key in person){ //we loop through person object and look for every key 
     console.log(person[key]); // we are logging the the key's value using bracket notation. (prints 'John' 'Williams')
 } // we must use array syntax when finding the value of a certain key. ()
 
 /*
 *
 * 3. While Loop uses the 'while' keyword, then in parenthesis, states a condition, if that condition is true it executes 
 * the body of code in the while loop. The while loop does not have an initializer. You must set a variable to a number before 
 * starting the while loop.
 *
 *
 */


//(EX)

var count = 0; // initializing a variable to the number 0.

while(count < 10){ // while our variable is less than 10 
    console.log(count);// print whats inside our variable 
    count++; //add 1 to count then start over.
}

//count should now be 1 and it should print 1 when we loop again. 





