"use strict";
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
    Country["EEUU"] = "usa";
})(Country || (Country = {}));
const country = Country.Colombia;
console.log('country ', country);
