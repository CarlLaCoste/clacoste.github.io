// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) { //function that makes an object with key value pairs
    return {id: id, nameFirst: nameFirst, nameLast: nameLast}
        
    }
    
    

 


function makeContactList() { //when this function is called it will create a contacts array and return methods 
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return  {
        // we implemented the length api for you //
        length: function() {
            return contacts.length; // returns length 
        },
        addContact: function(contact){
            return contacts.push(contact); //adds contact to contacts array
        },
        findContact: function(fullName){
            for(var i = 0; i < contacts.length; i++){ //loops over contacts to find full name within object keys.
                if(fullName.toLowerCase() === contacts[i].nameFirst.toLowerCase() + ' ' + contacts[i].nameLast.toLowerCase()){
                    return contacts[i];
                    
                }else{
                    return undefined;
                }
                
            }
            
         }, 
         
        removeContact: function(contact){ //searches contacts but deletes if contact is found :()
            for(var i = 0; i < contacts.length; i++){ // looping through array 
                if(contact === contacts[i]){ //if contact is found 
                    contacts.splice(i,1); //start at i element and remove one element in total 
                }else {
                    return console.log('No such contact');
                }
            
        }
        },
        printAllContactNames: function(){
            var pac = []; //array creation
            for(var i = 0; i < contacts.length; i++){ //looping through contacts
                pac.push(contacts[i].nameFirst + ' ' + contacts[i].nameLast ); //pushes easch full name to pac array.
            }
            return pac.join('\n'); //returning a string replacing the commas with new line character ''\n'
            
            }
            
                
            }
           
            
        }
        

  





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
