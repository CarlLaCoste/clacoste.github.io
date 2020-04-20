/*
 * STRING MANIPULATION :
 *
 * 0. Strings are a string of characters, or an Array of characters. Strings can be treated like an Array of characters 
 * we can access the individual characters using bracket notation. 
 *  
 * 
 * 
 *
 * (Ex) */ 
 
 var name = 'Johnny';
 
 console.log(name[0]); // prints 'J'
 
 
 
/*

*  1. String Operands are comparison operators that can be used on string values , but strings also work with the 
     concatenation operator. Conccatenation takes two string values and returns another string that is union of the 
     two Operand.
 *
 
(EX) */


var a = 'Hey';

var b = 'Ryan!';

console.log(a + ' ' + b); // prints 'Hey Ryan!'

console.log(a + b); // prints 'HeyRyan!'



/*


  * 2. String Methods can be used on strings because with Javascript, properties and mehtods are also available 
  * to primitve values. This is a result from Javascript treating primtive values as objects when executing properties 
  * or methods. Some string methods include: 
  * 
  
  * a. .charAt() - Returns the characters from the sepcifies index. */
  
  
  var string = 'words';
  
  console.log(string.charAt(2)); // prints r
  
  /*
  
  * b. .endsWith() - checks whether a string has specifies character. */
  
  
  
  console.log(string.endsWith('s')); // prints true
  
  
  
  
 /*
 
    c. .toUpperCase() - converts a string to UpperCase letters. */
    
    
    console.log(string[0].toUpperCase()); // prints 'Words'


 
 
 
 
 
