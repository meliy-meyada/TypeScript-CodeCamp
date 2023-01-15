"use strict";
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
}
sendAnalytics('THE data');
