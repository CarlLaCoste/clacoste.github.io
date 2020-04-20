//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var arr = [];
    for(var value in object){
        arr.push(object[value]); 
        
    }
    return arr; // returning array full of object values

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var arr = [];
    for(var key in object){
        arr.push(key);
        
    }
    return arr.join(' '); // returning a string of keys seperated by a space.  

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
  var arr = [];
    for(var value in object){
        if(typeof object[value] === 'string')
        arr.push(object[value]);
        
    }
    return arr.join(' '); // returning a string of values seperated by a space. 

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection) === true){ // using array method to see if the collection is an array 
        return 'array'; // returns array if it is an array 
        }else if(typeof collection === 'object' && collection !== null && collection instanceof Date === false){ // using typeof and excluding all object possibilities except actual objects
            return 'object';
    }else {
        return false;
    }
    
    }
    


//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
     return string.charAt(0).toUpperCase() + string.slice(1); //duplicating the first element but capatalized, then removing the second element
     
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var str = string.split(' '); //splitting the string into seperate words
    var caw = []; //creating array literal 
    for(var i = 0; i<str.length; i++){ // looping through our string
        caw.push(str[i][0].toUpperCase() + str[i].slice(1)); // Capatalizing the first letter of every word and adding it to our array 
        
        
    }
    return caw.join(' '); // the join method returns a string with capitalized words seperated by a space. 
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return 'Welcome' + " " + capitalizeWord(object.name) + '!'; //using capitalizeWord to capitalize the name property in the object

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    
    return capitalizeWord(object.name) + ' is a ' + capitalizeWord(object.species);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
if(object.hasOwnProperty('noises') === true && object['noises'].length > 0){ // if noises is a property and has a length greater than 0
    return object.noises.join(" "); //returning a string of noises seperated by a space. 
}
else {return "there are no noises"}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if(string.includes(word)){ // includes method checks and sees if word is included in string. 
        return true;
    }else{
        return false;
    }
        
    }
    
    



//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name); // adding name to our friends property in object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(object.hasOwnProperty('friends') && object.friends.includes(name) === true){ // if object has a property of friends and the name is in our friends property.
        return true;
        
    }else{
        return false;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var list = [];                              
    var nf = [];
    var friends = [];                         
    for(var i=0; i<array.length; i++){  //looping through array parameter         
        if(name === array[i].name){  // if name parameter is equal to object name in array            
            friends = array[i]; //
        }else{
            list.push(array[i].name);
        }
    }
    if(friends === null){
        return list;
    }
    for(var i=0; i<list.length; i++){
        if(friends.friends.indexOf(list[i]) == -1){
            nf.push(list[i]);
        }
    }
    return nf;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value; // adding key value pair to object
    
    return object;
    

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var i = 0; i < array.length; i++) //looping through array 
        if (object.hasOwnProperty(array[i])) { // checks to see if array element is a property of object
        // code will run
            delete object[array[i]]; // deletes property if conditional is true. 
    } return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var newArray = []
 for (var i = 0; i <= array.length - 1; i++){  // looping through array 
        if(newArray.indexOf(array[i]) === -1) { // if elements in array have not been seen before
            newArray.push(array[i]) // adding all unique elements to new array 
    }  
}
return newArray;
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}