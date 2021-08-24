//CLASES

class Persona {

    //atributos
    public name: string;
    private lastName: string;
    protected age: number;

    //constructor
    constructor(name_: string, lastName_: string, age_: number) {
        this.name = name_;
        this.lastName = lastName_;
        this.age = age_;
    }

    //metodos
    public saludar(): void {
        console.log("Hola mi nombre es " + this.name + " " + this.lastName);
        console.log(`Hola mi nombre es ${this.name} ${this.lastName}`);

    }
}

//herencia
class Trabajador extends Persona {
    //atributos
    numeroEmpleado: number;

    //metodos
    horaDeEntrada() {
        console.log(`Mi hora de entrada es 8am`);
    }

}

//instancia de la clase
var estudiante: Persona = new Persona("Jose", "Calderon", 23);
estudiante.saludar();

var trabajador: Trabajador = new Trabajador("Carlos", "Quintero", 34);
trabajador.numeroEmpleado = 234;
trabajador.horaDeEntrada();;
