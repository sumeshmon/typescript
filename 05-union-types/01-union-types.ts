// if remove the type string the string will get error
let score :  string | number 
score = 33
score = '33'

// combining 2 types
type User = {
    name : string ;
    id : number    
}
type Admin = {
    username : string;
    id : number
}
let sumesh : User | Admin = {name: 'sumesh', id:123}
console.log(sumesh);
sumesh = {username : 'Theertha', id:77} // the username is from another type. if | Admin remove will get error
console.log(sumesh);


