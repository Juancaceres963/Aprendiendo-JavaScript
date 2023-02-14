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