
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) { //funtion that takes in parameter of a number
  for (let line = "#"; line.length <= number; line += "#") //looping / reprinting our line variable until it reaches out parameter
  console.log(line);

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  for(var i = start; i <= end; i++){
    if(i % 15 === 0){ // if divisible by 3 and 5
            console.log('fizzbuzz');
     }  else if(i % 3 === 0){ // if divisible by 3
         console.log('fizz');
            
        }else if(i % 5 === 0){ // if dvisible by 5
            console.log('buzz');
        }
        else{
            console.log(i);
        }
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
  let size = number;

let board = "";

for (let y = 0; y < size; y++) { //looping until y is greater than our parameter
  for (let x = 0; x < size; x++) { // lopping until x is greater than our parameter
    if ((x + y) % 2 == 0) { //if x + y is an even number will print a space
      board += " ";
    } else {
      board += "#"; //if x+y is odd it will print '#'
    }
  }
  board += "\n"; //prints new line after number parameter is reached
}

console.log(board); //prints the whole board which is a string

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
