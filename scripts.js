let banda = "Metalica";
    cancion = "Entre Sandman";

    let nombre;
nombre = banda + ": " + cancion;

// Length nos dice cuantas letras y espacios tiene una variable
console.log(cancion.length);

// Concat 
// Dos parametros, el primero es la separacion que tendra cada uno de los elementos que se quieran concatenar
//El segundo no es obligatorio y se usa para completarle mas info

nombre = nombre.concat(" ", "y es genial")

// Todas mayusculas

nombre = nombre.toUpperCase();
console.log(nombre);

// Todas minusculas 

nombre = nombre.toLowerCase();
console.log(nombre);

// Split va a dividir una cadena de texto
// Toma un parameto que es el que podra identificar para poder dividir dicho string
//Tener en cuenta que devuelve en formade arrays

let actividad = "Estoy aprendiendo JavaScript con el curso";
nombre = actividad.split(" ");
console.log(nombre);

let intereses = "Programar, Deportes, Musica, Arte, Bailar, Cocinar";
nombre = intereses.split(", ");
console.log(nombre);

// Remplazar valores
//Toma dos argumentos, el primero es lo que se quiere remplazar, y el segundo con lo que sera remplazado

let remplazo = "Estoy aprendiendo JavaScript con el curso";
nombre = remplazo.replace("JavaScript", "JS");
console.log(nombre);

// Includes se encarga de revisar que algo exista
// Toma un parametro para saber que debe revisar
// Regresa un valor booleano

let email = "correo@correo.com";
verificacion = email.includes("@");
console.log(verificacion);

// Repit no spermite repetir un string muchas veces
// Acepta un parametro en numero para saber la cantidad de veces que se repetira

let master = "Master ";
    puppets = "Of Puppets";

console.log(master.repeat(3));
console.log(puppets);