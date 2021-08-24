//CLASES
var Persona = /** @class */ (function () {
    function Persona() {
    }
    //metodos
    Persona.prototype.saludar = function () {
        console.log("Hola mi nombre es " + this.name + " " + this.lastName);
    };
    return Persona;
}());
var estudiante = new Persona();
estudiante.name = 'Jose';
estudiante.lastName = 'Calderon';
estudiante.saludar();
