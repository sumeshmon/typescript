"use strict";
// ++++++ String ++++++
Object.defineProperty(exports, "__esModule", { value: true });
// let greetings : string = 'Welcome'
var greetings = "Sumesh"; // TS is smart, automatically detuct the type
console.log(greetings);
var test = greetings.toUpperCase(); // can access all the method of an string
console.log(test);
// *********************************************************************** //
// ++++++ Number ++++++
var myNum = 133456.5656666;
var num = myNum.toFixed();
// let num = myNum.toString()
console.log(num);
// *********************************************************************** //
// ++++++ boolean ++++++
var isLoggedIn = true;
console.log(isLoggedIn);
