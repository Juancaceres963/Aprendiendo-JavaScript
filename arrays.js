console.log("Pagina de Arrays");

// Crear un array

const numeros = [10, 11, 12, 14];
console.table(numeros);

// Accediendo a un elementos especifico de un array
const meses = new Array("enero", "febrero", "marzo");
console.log(meses[1]);

// Podemos agregar elementos al array de la siguiente forma
//1ro indicandole con el numero de index que ocupara, esto tambien puede sustituir algun valor que este en el array
meses[3] = "Abril";
console.log(meses);

// Otra forma de agregar eleemntos a un array es con el metodo push. Este metodo agregara elementos al final de un array
meses.push("marzo");
console.log(meses);

// El metodo unshift agrega elementos a un arraypero al principio del array
meses.unshift("Diciembre");
console.log(meses);

// Eliminando elemntos de un array
// Si quisieras eliminar el ultimo elemento de un array, el metodo Pop elimina el ultimo
meses.pop();
console.log(meses);

// Para eliminar elemntos del principio podemos uyilizar el metodo shift
meses.shift();
console.log(meses);

// Podemos eliminar un rango de un arraglo
// El metodo splice puede eliminar en un rango de un arreglo, este toma dos parametros.
//El 1ro es el numero de index por el que comenzara a eliminar,
// y el 2do es el numero de index hasta el que eliminara sin contarlo.

// meses.splice(0, 2);  Comentado para tener mas meses en el siguiente ejemplo
// console.log(meses);

// Se puede cambiar el orden de un arreglo con el metodo reverse. El del final pasa al principio y el del principio al final
// junto con todos los demas elemntos en su respectivas pociciones
meses.reverse();
console.log(meses);

// Para odenar un array alfabeticamente utilizamos el metodo sort
meses.sort();
console.log(meses);

// Un array puede tener cualquier tipo de datos mixtos o no adentro de el
const array = ["hola", 2, true, null, undefined];
console.table(array);
// Cons Array.isArray se puede rectificar si una variable es un arreglo
console.log(Array.isArray(array));

