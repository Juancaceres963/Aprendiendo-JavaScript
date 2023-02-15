// Los ciclos o boucles nos permiten realizar una cantida determinada de una accion. Hasta que una condicion se cumpla
// Hay que tener tres factores en cuenta para realizar un boocle for
// el comienzo de la variable (por lo general es = 0)
// La condicion por la cual este boucle se seguira repitiendo
// Y el cambio del estado de la variable inicial para que no se genere un boucle infinito

console.log("Pagina de ciclos. Boucle For");

const carritoDecompras = ["Jabon", "Pollo", "Tomate"];

for (let i = 0; i < carritoDecompras.length; i++){
    console.log(`Producto en el carrito: ${carritoDecompras[i]}`)
}

// While Loop

let i = 0;

while( i < carritoDecompras.length){
    console.log(`Compraste: ${carritoDecompras[i]}`);
    i++;
}

// Do while. A diferencia de el boucle for y el while, el boucle do while almenos correra una vez, sin importar qu ela condicion no se a verdadera

do {
    console.log( i );
    i++;
} while (i < 10)

// Otros iteradores de JavaScript 
console.log("Otros iteradores de JavaScript");

const pendientes = ["Tarea", "Comer", "Pasear a las perritas", "Estudiar JavaScript"];

const carritoDeCompras = [
    {id: 1, producto: "Libro"},
    {id: 2, producto: "Camisa"},
    {id: 3, producto: "Disco"}
];

let automovil = {
    modelo: "Camaro",
    motor: "V8"
}

// Primer tipo tenemos for of:
// El for of puede tomar un array de elementos y crea una variable para poder iterar cada uno de lo selementos en ese array

for(pendiente of pendientes) {
    console.log(pendiente);
}

//Si queremos acceder al producto en especifico de un array de objetos, lo hariamos asi
for(articulo of carritoDeCompras) {
    console.log(articulo.producto);
}

//Y en el caso de que sea un objeto literario al que queremos iterar 
for(info of Object.values(automovil)){
    console.log(info);
}

// For Each y Map. Ambos iteran un array con unsa sintaxis casi que igual, La principal diferencia entre ambos
// es que el metodo map genera un capia del array.
// Al correr este codigo podemos observar como en ambos casos los dos hacen practicamente lo mismo, la unica diferencia 
// es que la variable que se asigno el valor de pendientes atravez de forEach esta indefinida, ya que no genera una copia en la variable este metodo

let nuevoArreglo = pendientes.forEach(tarea => {
    console.log(tarea);
})
console.log(nuevoArreglo);

let nuevoArreglo2 = pendientes.map(tarea => {
    console.log(tarea);
});
//Este codigo tambien puede ser escrito de la siguiente forma gracias al arrow function
//ya que este puede tener el return por defecto
// let nuevoArreglo2 = pendientes.map(tarea => tarea);
console.log(nuevoArreglo2);

// De la misma forma que con el metodo anterior, sii se quiere iterar un objeto literario se debe utilizar 
// Object.values() para poder escoger el objeto 

Object.values(automovil).map(info => {
    console.log(info);
});

// Si se quiere acceder a las keys de un objeto se utiliza .keys
Object.keys(automovil).forEach(info => {
    console.log(info);
});
