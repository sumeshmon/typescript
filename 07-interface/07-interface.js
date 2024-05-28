"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// using extends
var sali = {
    isAdmin: false,
    dbId: 999,
    email: 'sali@ss.com',
    userId: 777,
    isLogged: false, // this is added additional interface.
    startTrail: function () {
        return 'Hello Sali';
    },
    getCoupenCode: function (name, val) {
        return 100;
    }
};
console.log(sali);
