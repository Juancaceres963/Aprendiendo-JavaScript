console.log("Paginma de objetos")
// Para crear un objeto necesitamos de una variable, y le damos valor de objeto con las llaves {}
// Obajet literal

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

// Object Constructor
// Este ofrece un poco mas de dinamismo y flexibilidad, el otro es mas estatico
// Primero la forma antigua de hacer objetos constructores

function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

const tarea1 = new Tarea("Aprender JavaScript", "Urgente");
const tarea2 = new Tarea("Cocinar", "Medio");
const tarea3 = new Tarea("Pasear al perro", "medio");

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);

//Objetos contructores con clases 

class ListaSuper {
    constructor(alimento, cantidad) {
        this.alimento = [alimento];
        this.cantidad = [cantidad];
    }
}

const compras1 = new ListaSuper(["azucar", "papa", "lechuga"], [2, 6, 2]);

console.log(compras1);

// Ejemplo de el "this" en un objeto literal
// new Date es una funcion para darnos la fecha actual y getFullYear nos da la fecha en año

const mascota = {
    nombre: "Katara",
    edad: 3,
    anioDeNacimiento: function() {
        return new Date().getFullYear() - this.edad;
    }
}

console.log(mascota);
console.log(mascota.anioDeNacimiento());