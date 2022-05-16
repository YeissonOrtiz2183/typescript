"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.getNombre = function () { return this.nombre; };
    Persona.prototype.setNombre = function (nombre) { this.nombre = nombre; };
    Persona.prototype.getEdad = function () { return this.edad; };
    Persona.prototype.setEdad = function (edad) { this.edad = edad; };
    ;
    Persona.prototype.imprimir = function () {
        console.log("Nombre: ".concat(this.nombre, " y edad:").concat(this.edad));
    };
    return Persona;
}());
exports.Persona = Persona;
