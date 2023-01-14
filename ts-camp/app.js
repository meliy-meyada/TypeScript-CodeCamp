"use strict";
let userInput;
let userName;
userInput = 5;
userName = 'Meya';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateErr(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {}
}
generateErr('An error occurred', 500);
