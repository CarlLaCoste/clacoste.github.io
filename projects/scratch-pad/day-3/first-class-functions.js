// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    return function(value){ // returns a function
        if(value > base){ //evaluating value and base. this is an example of a closure
            return true;
        }else{
            return false;
        }
        };
        
    }
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //


/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value){ // returns a function 
        if(value < base){ //evaluating value and base
            return true;
        }else{
             return false;
        }
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) { 
    // YOUR CODE BELOW HERE //
    return function(string){
        if(string[0].toLowerCase() === startsWith.toLowerCase()){ //testing if char = first element in string (we use bracket notation)
            return true;
        }else{
            return false;
        }
    };
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    return function(string){
        if(string[string.length - 1].toLowerCase() === endsWith.toLowerCase()){ // tests to see if last element in string matches char(endsWith)
            return true;
        }else{
            return false;
        }
    }

    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    var modi = []; 
    
    for( var i = 0; i < strings.length ; i++){//looping over strings array 
        let result = modify(strings[i]);//calling the function modify with a parameter of a certain element in strings array.
        modi.push(result); //pushing it to a collection called modi which holds the modified strings. 
    }
    return modi; 
    
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) { //we are testing to see if all strings passed the test. 
    // YOUR CODE BELOW HERE //;
    var asp = []; //creating an array to hold are strings that passed!
    for(var i = 0; i < strings.length; i++){// looping string array
        let result = test(strings[i]); // assigning result to the function test which tests each element in the array because of for loop
        if(result === true){ // if the test results are true we push to asp array 
            asp.push(result);
        }
        else{
            console.log(i);
        }
        
    }
        
        if(asp.length === strings.length){ //compare lengths of each string. The only way all could pass is if both arrays have the same ammount of elements.
            return true;
        }else{
            return false;
        }
        
        
        
        
    
    
    
    
}  
    
    // YOUR CODE ABOVE HERE //


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}