console.log("Pagina de metodos (filter, find)");

const pasajeros = [
  { name: "Juan", age: 24 },
  {
    name: "Andrea",
    age: 20,
    profecion: "Comerciante",
    playList: {
      camilo: ["yo y tu", "Tutututu"],
      lasso: ["Ojos marrones", "un verano sin ti"],
    },
  },
  { name: "Daniel", age: 18 },
  { name: "Jorge", age: 28 },
];

// Obteniendo las personas mayores de 22 con el metodo filter
let mayores = pasajeros.filter((pasajero) => pasajero.age > 22);
console.log(mayores);
// Podemos ver que el metodo hace una iteracion por todo el array de objetos y filtar en un avariable nueva los
// a todos pasajeros con una edad mayor a la que se le otroga en la comparacion

//Si queremos extraer informacion de un pasajero en especifico usamos el metodo FIND
let andrea = pasajeros.find((pasajero) => pasajero.name === "Andrea");
console.log(andrea);
// Este metodo encuentra un objeto y ofrece tod ala info que el tenga

// Su poninendo que queremos sacar un promedio de edades totales en el vuelo
let totaly = pasajeros.reduce((edadTotales, pasajero) => {
    return edadTotales + pasajero.age;
}, 0);
//Primero con esto obtenemos la edad total de todos 
console.log(totaly);
// Luego sacamos el promedio de la edad de los pasajeros .length
console.log(totaly / pasajeros.length);