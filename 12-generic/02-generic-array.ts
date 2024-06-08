function getSomeProducts <T> (products : T[]) : T | undefined {
    const myIndex = 6
    return products[myIndex]
}

// The function getSomeProducts takes an array of type T and returns the element at index 6, or undefined if the index is out of bounds.

// Return Type: The return type of the function is T | undefined, indicating that it can return an element of type T or undefined.

// When called with an empty array ([]), the function returns undefined since there is no element at index 6.
const numOne = getSomeProducts([]);
// console.log(numOne);  // Output will be undefined


// When called with an array that has at least seven elements ([1, 2, 3, 4, 5, 6, 7, 8]), the function returns the element at index 6, which is 7.

// This way, your function can handle cases where the array may not have enough elements without causing runtime errors.
const numTwo = getSomeProducts([1, 2, 3, 4, 5, 6, 7, 8]);
// console.log(numTwo);  // Output will be 7





