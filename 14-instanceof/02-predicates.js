// line no 5th, the pet is Fish is not there, then line number 11 and 14 if mouse hover will display both
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return 'Fish Food';
    }
    else {
        pet;
        return 'Bird Food';
    }
}
// Create a Bird object
var bird = {
    fly: function () { return console.log("Flying"); }
};
console.log(getFood(bird)); // Output: Bird Food
