"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// class User {
//     name: string
//     email : string
//     readonly city : string = 'Thrissur'
//     constructor (name:string, email: string){
//         this.name
//         this.email        
//     }
// }
// shortcut code of above
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
        this.city = 'Thrissur';
    }
    User.prototype.getUserInfo = function () {
        return "Name: ".concat(this.name, ", Email: ").concat(this.email, ", City: ").concat(this.city);
    };
    return User;
}());
// Creating an instance of the User class correctly
var user3 = new User('sumesh', 'sss@speechSynthesis.com');
// The readonly property 'city' will always be 'Thrissur'
console.log("This is from user3: ".concat(user3.getUserInfo()));
