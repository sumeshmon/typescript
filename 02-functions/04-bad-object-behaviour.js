"use strict";
// normal object
Object.defineProperty(exports, "__esModule", { value: true });
// this is normal object and this is not useacse. 
// The usecase is passing an object in to function or return an object to a function
var user = {
    name: 'sumesh',
    isPaid: false
};
// Object through function
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
    return { name: name, isPaid: isPaid };
}
var user1 = createUser({ name: 'sumesh', isPaid: false });
// console.log(user1);
// ++++++ syntax ++++++
// function fname ( parameters) : { types } { return }
// 
function createAnotherUser(_a) {
    var name = _a.name, price = _a.price, email = _a.email;
    return { name: name, price: price, email: email };
}
var newuser = { name: 'sumesh', price: 999, email: 'sumesh@ss.com' };
var user2 = createAnotherUser(newuser);
console.log(user2);
