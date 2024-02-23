"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//problem no: 28
var promptSync = require("prompt-sync");
var prompt = promptSync();
var age = prompt('Enter your age: ');
if (age <= 2) {
    console.log("Baby");
}
else if (2 < age && age <= 4) {
    console.log("Toddler");
}
else if (4 < age && age <= 13) {
    console.log("Kid");
}
else if (13 < age && age <= 20) {
    console.log("Teenager");
}
else if (20 < age && age <= 65) {
    console.log("adult");
}
else {
    console.log("elder");
}
