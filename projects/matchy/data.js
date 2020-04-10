/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'Human';
animal['name'] = 'seth';
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
noises = [];
noises[0] = 'Yuroo';
noises.push('Hiya');
noises.unshift('Wassup');
noises[noises.length] = 'Bye';
console.log(noises.length);
console.log(noises.length -1);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
noises.push('Good Morning');


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);

var duck = { species: 'duck', name: 'jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }; //creating objects
var dog ={ species: 'dog', name: 'mercedes', noises: ['woof', 'scratch', 'squeal', 'bark'] };
var cat ={ species: 'cat', name: 'rem', noises: ['meow', 'lick', 'growl', 'woosh'] };
animals.push(dog,cat); //adding dog and cat to animals array
console.log(animals);
console.log(animals.length);

animals.push(duck); // adding duck to animals array




//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = []; // I chose this Data Structure because arrays can be easily accessed using bracket notation and looped over. an ideal place to hold any datatype.

function getRandom(){
   return Math.floor((Math.random() * (animals.length))); //multiplying a random decimal by the length of the animals array and rounding that to the nearest wholenumber
};
friends.push(animals[getRandom()].name); //using getRandom to give us a random index's name from the animals array. We then push that to our friends array

animals[1]['friends'] = friends; //adding a friends property to any animal i choose 






/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}