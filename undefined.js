"use strict";
function hi(name) {
    let hello = 'hola';
    if (name) {
        hello += name.toUpperCase();
    }
    else {
        hello += 'nobody';
    }
    console.log(hello);
}
hi('Juan');
hi(null);
