/* 
Exercise #2 (sugerencia map())

Write a function that:

    -Takes in an array of numbers.
    -Doubles the value of each number in the array.
    -Prints out the new updated array.

Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

const array1 = [1, 2, 4, 5];

const map1 = array1.map((x) => x * 2);

console.log(map1); // [2, 4, 8, 10]


//DOCUMENTACIÓN
/*
    const array1 = [1, 4, 9, 16];

    // Pass a function to map
    const map1 = array1.map((x) => x * 2);

    console.log(map1);
    // Expected output: Array [2, 8, 18, 32]
    
*/


//PRUEBAS
/*
    function doubleNumbers( multiplier, ...theArgs ){
        return theArgs.map((x) => multiplier * x);
    }
    let numbers = doubleNumbers[1, 2, 4, 5];
    console.log(numbers);


    let numbers = [1, 2, 4, 5];
    function doubleNumbers = numbers.map((x) => x * 2);
    doubleNumbers();

*/
