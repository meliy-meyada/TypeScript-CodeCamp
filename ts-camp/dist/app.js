"use strict";
const button = document.querySelector('button');
function clickHandler(msg) {
    let userName = 'Meyade';
    console.log('Clicked!' + msg);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You're Welcome!"));
}
