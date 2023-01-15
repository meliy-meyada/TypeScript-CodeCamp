"use strict";
const button = document.querySelector('button');
function clickHandler(msg) {
    console.log('Clicked!' + msg);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null));
}
