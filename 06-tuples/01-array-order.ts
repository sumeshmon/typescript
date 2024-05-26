// using union type
let user1: (string | number | boolean)[];
console.log(user1 = ['sumesh', true, false]); // the order is not strict

// using tuples
let user2 : [boolean, string, number]
// user2 = ['sumesh',123,false] // +++ error +++ strictly need to follow the order.
user2 = [false, 'sumesh', 456] // +++ ok +++

// types number restricted
let rgb : [number, number, number]
console.log(rgb = [255,112,114]); // +++ ok
// console.log(rgb = [255,112,114,0.5]); // +++ can't pass 4th value, because 3 types are defined.

// overriding using type
type User = [number, string]
let myUser1 : User = [55, 'sumesh']
console.log(myUser1) // Logs: [55, 'sumesh'];
myUser1[1] = 'sali'
myUser1.push('test')
console.log(`This is over rided content ${myUser1}`); // Logs: This is overridden content: 55,sali





export{}