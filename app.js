

// Esto es un comentario xD

let userName = "Abraham";
var userLastName = "Garos";

document.write(`El nombre completo es: ${userName} ${userLastName}.`); 

let numberOne = 200;
let numberTwo = '200';
let result = numberOne === numberTwo;

if (result == true) {
    console.log('Funciono correctamente 1');
}
if (result == false) {
    console.log('Funciono correctamente 2');
}  

let count = 0
while ( count <= 10 ) {
    document.write(`<h2>Numero: </h2> ${count}`);
    count++;
}

function add (number1, number2) {
    let suma = number1 + number2;
    return suma;
}

// Aqui hacemos un programa para validar cuantos caracteres tiene libro
// y le decimos que solo se muestre si el titulo supera o es igual a los 12 caracteres

let beginningTitle = "Este es mi nuevo libro: ";
let libro = "Don Quijote";
beginningTitle += libro;

if( libro.length >= 12) {
    console.log(`${beginningTitle}`);
} else {
    console.log("Las letras en el titulo no superan los 12 caracteres en total.");
    console.log(`En total fueron: ${libro.length} caracteres.`);
}

let miCadena = "JavaScript"; // Extrayendo caracteres dentro de una cadena
console.log(`El ultimo caracter de la cadena es ---> ' ${miCadena[miCadena.length - 1]} ' <---`);


// Manipulacion de ARRAYS

let students = ["Karla", "Abraham", "Mario"];

console.log(`En el array hay: ${students.length} estudiantes.`);

students[students.length] = "Fabian";

console.log(`Los estudiantes son: ${students[0]}, ${students[1]}, ${students[2]}, ${students[3]}.`);
console.log(`En el array hay: ${students.length} estudiantes.`);



