//  ++++++ if the god is passed under items if we mouse hover TS will display the types automatically.

const gods = ['Krishna', 'Shiva']
// const gods = [10,20,30]

const allGods = gods.map( (items):string => {
    return items
    // return 10 // getting error because : string is assigned in the function
})

console.log(allGods);

export{}