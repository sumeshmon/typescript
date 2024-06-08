function getSomeProducts(products) {
    var myIndex = 6;
    return products[myIndex];
}
// The function getSomeProducts takes an array of type T and returns the element at index 6, or undefined if the index is out of bounds.
// Return Type: The return type of the function is T | undefined, indicating that it can return an element of type T or undefined.
// When called with an empty array ([]), the function returns undefined since there is no element at index 6.
var numOne = getSomeProducts([5]);
console.log(numOne); // Output will be undefined
var numTwo = getSomeProducts([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(numTwo); // Output will be 7
