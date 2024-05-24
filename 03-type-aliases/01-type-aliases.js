"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return __assign({}, user);
}
var user1 = createUser({ name: 'Sumesh', email: 'sumesh@sumesh.com', isActive: false });
function printCoord(pt) {
    console.log("The value of X is ".concat(pt.x));
    console.log("The value of Y is ".concat(pt.y));
}
printCoord({ x: 200, y: 300 });
