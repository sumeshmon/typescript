"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// using union type
var user1;
console.log(user1 = ['sumesh', true, false]); // the order is not strict
// using tuples
var user2;
// user2 = ['sumesh',123,false] // +++ error +++ strictly need to follow the order.
user2 = [false, 'sumesh', 456]; // +++ ok +++
// types number restricted
var rgb;
console.log(rgb = [255, 112, 114]); // +++ ok
var myUser1 = [55, 'sumesh'];
console.log(myUser1);
myUser1[1] = 'sali';
myUser1.push['test'];
console.log("This is over rided content ".concat(myUser1));
