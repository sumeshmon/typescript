var identityOne = []; // Defines an empty array of numbers
identityOne.push(1, 2, 3); // Adds some numbers to the array
// console.log(identityOne);  // Logs the updated identityOne array
// console.log(['ddd']);  // Logs an array containing the string 'ddd'
//  without generic 
function identityTwo(val) {
    return val;
}
// console.log(identityTwo('Test'));
// with generic
function identityThree(val) {
    return val;
}
// identityThree ('Sumesh') // here the value is passing as string so the return type is will be same.
// with generic and any name
function identityFour(val) {
    return val;
}
console.log(identityFour(123));
