/*
OPTIONAL: Exercise # 6

Write a function that performs the bubble algorithm.

Input [3, 6, 12, 5, 100, 1]

Output [1, 3, 5, 6, 12, 100]
*/

function bubbleSort(arr) {
    let n = arr.length;
    
    // Outer loop to traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        // Inner loop to compare each pair of adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let input = [3, 6, 12, 5, 100, 1];
let sortedArray = bubbleSort(input);
console.log(sortedArray);

