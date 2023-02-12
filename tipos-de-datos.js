// En JavaScript como no debemos asignar un tipo de dato para las variables, estas pueden ir cambiando si tipo con forme vamos avanzando

// Reconocer que tipo de dato es con el typeOf
console.log("Seccion de tipos de datos con TypeOf");
// String
const persona = "Juan";
console.log(typeof persona);

// Numero
const number = 45;
console.log(typeof number);

// booleano
const bool = true;
console.log(typeof bool);

// Rescribiendo y cambiando lo svalores 

console.log("Rescribiendo una variable")

let valor;
console.log(typeof valor);
valor = "Hola";
console.log(typeof valor);
valor = "23553";
console.log(typeof valor);
valor = 346547;
console.log(typeof valor);
valor = true;
console.log(typeof valor);

console.log("Datos un poco mas extraños(arrays, objetos, etc)")
valor = null;
console.log(typeof valor);
valor = [2,2,3,4,5,6,];
console.log(typeof valor);
valor = {nombre:"Juan", ciudad:"Argentina"};
console.log(typeof valor);
valor = new Date();
console.log(typeof valor);