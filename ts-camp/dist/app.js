"use strict";
const button = document.querySelector('button');
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
function clickHandler(msg) {
    console.log('Clicked!' + msg);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You're Welcome!"));
}
//# sourceMappingURL=app.js.map