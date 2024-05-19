// normal object

// this is normal object and this is not useacse. 

// The usecase is passing an object in to function or return an object to a function

const user = {
    name: 'sumesh',
    isPaid : false
}

// Object through function
function createUser ({name, isPaid} : {name : string, isPaid: boolean}){ 
    return {name,isPaid}
}

const user1 = createUser ({name: 'sumesh', isPaid : false})
// console.log(user1);
// ++++++ syntax ++++++
// function fname ( parameters) : { types } { return }
 


// 
function createAnotherUser ({name,price,email}) : {name: string, price : number} {
    return {name, price, email}
}

let newuser = {name: 'sumesh', price: 999, email:'sumesh@ss.com'}

const user2 = createAnotherUser(newuser)
console.log(user2);



export{} 