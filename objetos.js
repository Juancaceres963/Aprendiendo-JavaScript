console.log("Paginma de objetos")
// Para crear un objeto necesitamos de una variable, y le damos valor de objeto con las llaves {}

const pasajero = {
    nombre: "Juan",
    apellido: "Caceres",
    edad: 24,
    trabajo: true,
    musica: ["regue", "merengue", "salsa"],
    hogar: {
        ciudad: "CABA",
        pais: "Argentina"
    }
};

console.log(pasajero);

// Para acceder a una propiedad especifico de un obejeto se hace con "." es mucho mas comun
console.log(pasajero.nombre);

// Un objeto puede contener adentro de el cualquier tipo de datos,hasta un array y un mismo objeto
console.log(pasajero.musica);
console.log(pasajero.hogar);

// Para acceder a elementos como arrays u objetos que estan dentro de un obejto se utilizaria de la siguiente forma
console.log(pasajero.musica[1]);
// imprimiria en la consola "merengue"
console.log(pasajero.hogar.pais);
// imprimira "Argentina"

// Tambien se ouede acceder a una propiedad de un obejto con [] no es tan comun
console.log(pasajero["musica"]["2"]);
//imprimiria "salsa"