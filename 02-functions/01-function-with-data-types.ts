// ++++++ using number ++++++
function addTwo (num : number){
    // num.toUpperCase() // if mention the type will throw error, or it will not throw any error
    return num + 2
}
// console.log(addTwo ('5')); // if didn't tell the type the out put will be 52
// console.log(addTwo (45));


// ++++++ using string ++++++
function touppercase (value : string){
    return value.toUpperCase()
}
// console.log(touppercase (123)); // if the string type is not defined this will allow
// console.log(touppercase ('Sumesh'));


// ++++++ many types ++++++
function school (student : string, std : number, isMale: boolean){
    return {
        student : student,
        std : std,
        isMale : true
    }
}
// console.log(school ('Sumesh', '10', true)); // this will allow if we didn't define the type especially std as a string
// console.log(school('Sumesh',5, true));


// ++++++ =false +++++++
function user (name : string, password : string, isPaid : boolean = false){
    return {
        UserName : name,
        Password : password,
        Paid : isPaid
    }
}

// console.log(user ('Sumesh', '123'));

// using arrow
// = false is not used below comsole will throw error
const userOne = (name : string, password : string, isPaid : boolean = false) => {
    return {
        UserName : name,
        Password : password,
        Paid : isPaid
    }
}
console.log(userOne ('Sumesh', '123'));

export{}