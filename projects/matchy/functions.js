/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals,string){ //function declaration called search and takes in parameters of our animals array and string representing name of animal 
    for(var i = 0; i < animals.length; i++){ //looping through array
        if(string.charAt(0).toLowerCase() === animals[i].name.charAt(0).toLowerCase()){ // if string matches animals' name, return animal's object
            return animals[i];
        }
        }
        return null; // return null if not 
        }




//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){ // function declaration called replace that takes in thre parameters of animals, name, and replacement
    for(var i = 0; i < animals.length -1; i++){//looping over array 
        if(name === animals[i].name){ // if name matches name property in animals array 
            animals.splice(i,1,replacement); //delete certain element and replace it with replacement object using .splice
        }
        
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals,name){
    for(var i = 0; i < animals.length-1; i++){//looping over animals
        if(name === animals[i].name){ //if name matches name property
            animals.splice(i,1);//remove that element
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals,animal){
    for(var i = 0; i < animals.length; i++){
        if(animal.name.length > 0 && animal.species.length > 0 && animal.name !== animals[i].name){ //only pushing animal to animals under these conditions
        animals.push(animal);
    
}else{
    return undefined; //undefinded 
}

}
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
