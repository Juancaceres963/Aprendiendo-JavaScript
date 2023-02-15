const cliente = {
  apellido: "Caceres",
  tipo: "Premium",
  datos: {
    ubicacion: {
      ciudad: "Capital Federal",
      pais: "Argentina",
    },
    cuenta: {
      numero: 234534346,
      tipo: "Corriente",
    },
  },
};

// Si yo quisiera obtener el apellido del cliente siendo este un objeto, antes seria de la siguiente forma
//const apellidoCliente = cliente.apellido;
//const tipoCliente = cliente.tipo;

// console.log(apellidoCliente);
// console.log(tipoCliente);

// Ahora con el Object Destructuring es mucho mas sencillo
// Solo devemos crear otorgar la variable, y entre llaves {} indicamos
// el nombre exacto del key para poder acceder a su valor

let { apellido, tipo } = cliente;

console.log(apellido);
console.log(tipo);

// Se puede notar la diferencia en la simplicidad del codigo, mas corto y muhco mas sencillo de ver

// Suponinedo que sea un poco mas estructurado el objeto al que se quiera aceder los datos

let {
  datos: {
    ubicacion: { pais },
  },
} = cliente;
console.log(pais);
// Asi se accederian a los datos de un objeto mas complejo y estructurado de distinta forma
// Si lo hiciera de la forma antigua se pondrian muchos puntos par apoder especificar
// let paisCliente = cliente.datos.ubicacion.pais;

// Tenemos algo llamado Object Literal Echacement
// Este sirve para unir varias variables a un solo objeto
console.log("Secmento de Object Literal Enhacement");

const team = "Metalica",
  ritmo = "Heavy metal",
  canciones = ["cancion1", "cancion2", "cancion3"];

// Forma vieja

const metalica = {
  team: team,
  ritmo: ritmo,
  canciones: canciones,
};
console.log(metalica);

// Forma nueva. Se busca acortar el codigo, siempre qu elas keys y los valores sean iguales en un objeto
// solo basta con ponerlo una sola vez
const metalica2 = { team, ritmo, canciones };
console.log(metalica);
