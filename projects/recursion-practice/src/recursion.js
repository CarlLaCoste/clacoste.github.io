// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
 //Base Case: when 
 if(n < 0){ // if number is negative
   return null; // return null
 }
 if(n == 0){ // if number is zero
   return 1; // return 1
 
   
 }
 return n * factorial(n - 1)
  
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //Base Case: if 
  
  if(!array.length){
    return 0;
  }
  if(array.length === 1){
    return array[0]
  }
  
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15

var arraySum = function(array) {
  
};



// 4. Check if a number is even.
var isEven = function(n) {
  //base case: if n is 1 return false, if n is 0  return true
  
  
  if(n === 1){
    return false;
  }else if(n === 0){
    return true;
  } // recursive step: returning absolute value of n to get (postive value - 2)
  return isEven(Math.abs(n)  -2); 
  
  
  

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // base case
  // if n is 0
  if (n === 0) {
  // return 0
    return 0;
  }
// if n above 0 return n - 1 with n - 1 calling sumBelow, otherwise do the same but with + 1
  return n > 0 ? (n - 1 + sumBelow(n - 1)) : (n + 1 + sumBelow(n + 1));
  // } else if (n < 0 )
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
// if x less than or equal to y
if (x <= y) {
// check if they're equal
  if (y - x === 0) {
// if so, return empty array
    return [];
  }
// check if they're only 1 apart
  if (y - x === 1) {
// if so, return empty array
    return [];
  }
// if their difference is 2 and y is bigger
  if (y - x === 2) {
// return array with x + 1 in it
    return [x + 1];
// otherwise
  } else {
// call range again with 1 less on y
    let list = range(x, y - 1);
// push y - 1 to list
    list.push(y - 1);
// return list
    return list;
  }
}
// if y less than or equal to x
if (y <= x) {
// check if they're equal
  if (x - y === 0) {
// if so, return empty array
    return [];
  }
// check if they're only 1 apart
  if (x - y === 1) {
// if so, return empty array
    return [];
  }
// if their difference is 2 and x is bigger
  if (x - y === 2) {
// return array with y + 1 in it
    return [y + 1];
// otherwise
  } else {
// call range again with 1 less on y
    let list = range(x, y + 1);
// push y - 1 to list
    list.push(y + 1);
// return list
    return list;
  }
}
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //multiply base by self
  //return base multiplied by self exp number of times
  //When exp is 0, stop recurring
  if(exp === 0) {
    return 1;
  } else {
  //On recursive case, subtract from exp if exp positive, otherwise it's 1 divided by exponent with parameters base and -exp
    return exp > 0 ? base * exponent(base, exp - 1) : (1 / (exponent(base, - exp)));
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
// return if n is 1 true, else, if n < 1 false, if n not < 1, call function with n/2 as input
  return n == 1 ? true : (n < 1 ? false : powerOfTwo(n/2)); 
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // base case, ends recursion when string empty
  if (string === "") 
    return "";
  // recursion case
  else
  // return function call with substring 1 (removes first char), plus first character
    return reverse(string.substr(1)) + string.charAt(0);
};




// 10. Write a function that determines if a string is a palindrome. 

 var palindrome = function(string) {
  // remove spaces and change all capital letters to lowercase
  string = string.replace(/\s/g,'').toLowerCase();
  // get the length of the string
  const length = string.length;
  // if length is less than or equal to 1, return true
  if (length <= 1) return true;
  // base case, if string at character index 0 is not equal character at one less 
  // than the string length, return false
  if (string[0] !== string[length - 1]) return false;
  // recursive case: returns a function call slicing string starting at element 1 and stoping at negative (-1).
  return palindrome(string.slice(1, -1));
};




// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {

if (x == 0 || y == 0) {
        return 0;
}

else if( y < 0 ) {
 
    return - x + multiply(x, y + 1);
}
else {
  
    return x + multiply(x, y - 1);
}
};
// base case: have to account for mutilplication rule: when multiplying by zero, the result will be zero.
  // so if x or y is 0, we return 0
  
  // if y is negative return the opposite of result which in this case would be a negative number. 
  
  //returns our x variable plus a function call. if y is negative we add to 1 o y everytime until we reach 0.

    // recursive case - if y is negative, increment y by 1 when implementing multiply. 
    // if y and x are both positive, retutn x plus multiply function, decrementing y by 1.
    //in this case y is positive, so we decrement y by 1 every loop until we reach 0.
    
  
    
    
    
    
    
// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // base case: if both strings are empty return true. 
  if (str1 === '' && str2 === '') { 
    return true; 
    } 
    // if current element at both strings do not equal, return false. .charAt() method evaluates character at a certain index of the string.
  if (str1.charAt(0) !== str2.charAt(0)) {
    return false; 
    }
  // recursive case
  return compareStr(str1.substr(1), str2.substr(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(string){
  // Base case
  // if string length less than 1
  if(string.length <= 1){
  // return storage
    return [string[0]];
  }
  // Recursive case
  // return recursive function calling string with first character sliced off
  return [string[0]].concat(createArray(string.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array, arr = []) {
  // base case - if array is not an array return 'not an array
  if(array.length < 1){
    return arr; 
  }else{
  arr.push(array[array.length -1]);
  }
  return reverseArr(arr.slice(1));
  
  
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // base case
  // if length less than or equal to 0, return value
  if (value === '[]' ? length <= 0 : length <= 1) {
    return [value];
  }
  // recursive case
  // call recursive function with value and length -1, concatenate it to value
  return [value].concat((buildList(value, (length - 1))));
};



// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // base case
  // if array length is less than 1
  if (array.length < 1) {
  // return 0
    return 0;
  }
  // recursive case
  // if value is strictly equal to what is at first index of array input
  if (array[0] === value) {
  // return add 1 to the count, then call function again slicing off first array element, same value
    return 1 + countOccurrence(array.slice(1), value);
  // if value is not strictly equal to what is at first index of array input
  } else if (array[0] !== value) {
  // return call function again slicing off first array element, same value
    return countOccurrence(array.slice(1), value);
  }
};



// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // base case
  // if array length is less than 1
  if (array.length === 1) {
  // return 0
    return [callback(array[array.length - 1])];
  }
  // recursive case
  // return callback function running on first element of array concatenated with
  // recursive call with parameters array slicing the first element off then callback function
  return [callback(array[0])].concat(rMap(array.slice(1), callback));
};


// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  if (n === 1){ // base case: if number is 1 we cannot start sequence
    return [0,1]; // returns array the starting positions of the sequence
  }
  else{ // starts sequence
    
     var sequence = fibonacci(n - 1) // recursive case
    // sequence is a function call with num decremented by 1. //step 1 of sequence
      
    sequence.push(sequence[sequence.length-1] + sequence[sequence.length - 2]); 
    // we are pushing our actual sequence into the variable //step 2 of sequence
    
    return sequence; // return array 
  }
  
  
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //base case: f the number is negative, return null
   if (n < 0){
  return null;
  } else if(n === 1){
    return 1;
    //if the number is strictly equal to 1, return 1
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
    //these are numbers so dont concat, just add
  }
   
};


// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  // base case: if input length is less than 1
  
  if(input.length === 1){
    return [input[0].toUpperCase()];
    
  }
  // recursive case: 
  
  return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
  
};



// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
    // base case: if input length is less than 1
  
  if(array.length === 1){
    return [array[0][0].toUpperCase() + array[0].substr(1)];
    
  }
  // recursive case: 
  
  return [array[0][0].toUpperCase() + array[0].substr(1)].concat(capitalizeFirst(array.slice(1)));
  

  
};

  


// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  // base case: if string.length = 1, returns the tally 
  
  if(str.length === 0){
    
    return obj;
   } else {
     
     //Acquiring gender of customer
    obj[str[0]] ? obj[str[0]]++ : obj[str[0]] = 1; 
    
  }
  // recursive case: 
  
   return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  // let arr = [];
  //base case: list. length  equals 0 returns []
  if (list.length === 0){
    return [];
  }else if(list[0] === list[1] && list[2] === list[0]){
    
   return [list[0]].concat(compress(list.slice(3)));
    
  } else{
    
  
    return list[0] === list[1] ? [list[0]].concat(compress(list.slice(2))) : [list[0]].concat(compress(list.slice(1)));
  }
  // recursive case: if list
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  
  // base case: 
   if (array.length === 0){
    return [];
  }else if(array[0] === 0 && array[1] === 0 && array[2] === 0){
    
   return [array[0]].concat(minimizeZeroes(array.slice(3)));
    
  } else{
    
  
    return array[0] === 0 && array[1] === 0 ? [array[0]].concat(minimizeZeroes(array.slice(2))) : [array[0]].concat(minimizeZeroes(array.slice(1)));
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  // base case: if array. length = 0 return array literal
  if(array.length === 0){
    return [];
    //recursive case: 
  }else if(array[0] < 0){
   return array.length % 2 === 0 ? [-array[0]].concat(alternateSign(array.slice(1))) : [array[0]].concat(alternateSign(array.slice(1)));
  }else if(array[0] > 0){
    
   return array.length % 2 === 0 ? [array[0]].concat(alternateSign(array.slice(1))) : [-array[0]].concat(alternateSign(array.slice(1))); 
  
  }
    
  
  
  
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
function numToText(str) {
	if (str.length === 1 && str === ' ') {
	  return str.slice;
	}
	if (!str) {
		return '';
	}
	var numberNames = 'zero one two three four five six seven eight nine ten'.split(' ');
	var numTranslator = {};
	for (var i = 0 ; i < numberNames.length ; i++) {
			numTranslator[i] = [numberNames[i]];
	}
	var character = str[0];
	character = numTranslator[character] ? numTranslator[character] + '' : character;
	return character + numToText(str.slice(1));
}

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
