type Fish = { swim : () => void}
type Bird = { fly : () => void}

// line no 5th, the pet is Fish is not there, then line number 11 and 14 if mouse hover will display both
function isFish(pet : Fish | Bird) : pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood ( pet : Fish | Bird) {
    if (isFish (pet)){
        pet
        return 'Fish Food'
    } else {
        pet
        return 'Bird Food'
    }
}

// Create a Bird object
const bird: Bird = { 
    fly: () => console.log("Flying") 
}

console.log(getFood(bird)) // Output: Bird Food