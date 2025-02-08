/*
Exercise #1 (sugerencia: join())
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}


printOutString();
Complete the function to print out the string: This is a sentence.
*/

function printOutString(arr = ["This", "is", "a", "sentence."] ) {
  return arr.join(" ");
 }
 
 printOutString(); // 'This is a sentence.'

//DOCUMENTACIÓN EJEMPLOS
 /*
  const elements = ['Fire', 'Air', 'Water'];
      console.log(elements.join());
        // Expected output: "Fire,Air,Water"
      console.log(elements.join(''));
        // Expected output: "FireAirWater"
      console.log(elements.join('-'));
        // Expected output: "Fire-Air-Water"
        
        //arr.join([separator])
      console.log(elements.join([' ']) );


  function square(number) {
    return number * number;
  }

 */
