// : number after the parameter won't allow to use string inside the function.
function addTwo(num) {
    return num + 2;
    // return 'sumesh'
}
// console.log(addTwo(5));
function multipleTypes(num) {
    if (num > 5) {
        return [true, 12];
    }
    return [false, 12];
}
// console.log(multipleTypes(6));
// ++++++ void ++++++
function consoleError(logError) {
    console.log(logError);
    // return false // will get error for return because void return nothing
}
// consoleError('sdsa')
// ++++++ never ++++++
// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
function handlingError(errorMsg) {
    throw new Error(errorMsg);
}
// This line will throw an error and stop the execution of the script
try {
    handlingError('404 error');
}
catch (error) {
    console.error(error); // Properly handle the error
}
