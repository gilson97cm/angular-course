//TIPOS DE VARIABLES

//string
var name_: string;
name_ = "Felipe";
var lastName: string = "Suarez";

//number
var number_: number;
number_ = 10;
var age: number = 45;

//boolean
var marithalStatus: boolean;
marithalStatus = false;
var policeman: boolean = true;

//array
var friendsArray: Array<string>;
friendsArray = ["Carlos", "Jose"];
var brotherArray: Array<string> = ["Carlos", "Jose"];

//enums
enum Parentesco { Padre, Madre, Hermano, Hermama, Hijo };
var parentesco: Parentesco = Parentesco.Padre;

//any
var variable: any;
variable = 10;
variable = "Test";
variable = ["Carlos", "Jose", 1];

//void
function storeInformations(information: string): void {
    //codigo
}

function returnNumber(information: string): number {
    //codigo
    return 10;
}