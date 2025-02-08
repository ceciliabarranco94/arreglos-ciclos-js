/*
Exercise #3 (sugerencia reduce())

Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.

Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

const numbers1 = [1, 2, 3, 4];

    const initialValue = 0;
    const sumWithInitial = numbers1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
    );

    console.log(sumWithInitial); //10

const numbers2 = [1, 2, 3, 4];

    const productWithInitial = numbers2.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    );

    console.log(productWithInitial); //24


//DOCUMENTACIÓN
/*
    const array1 = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
    );

    console.log(sumWithInitial);
    // Expected output: 10
*/