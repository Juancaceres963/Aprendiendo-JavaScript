console.log("Pagina de condicionales")

// Los condicionales estaran evaluando la condicion que se les pase por los parentesis. si esa condicion se cumple
// se ejecutara la linea del codigo que contenga el if
// si la condicion no se cumple se ejecutara el codigo que contenga el else 

const puntaje = 1000;

if (puntaje === 1000) {
    console.log("Si es igual");
} else {
    console.log("No no son iguales");
}

// para utilizar como condicion tenemos los siguientes caracteres 
// < menor que, > mayor que, == igual (no estricto), === estrictamente igual, <= menor o igual, >= mayor o igual
// En un If se ejecutara la primera condicion que se cumpla

// Para validar si existe un valor 

let dinero;
dinero = 500;
carrito = 300

if (dinero > carrito){
    console.log(`Pago correcto.`);
} else {
    console.log("Fondos insuficientes");
}

// Operadores Booleanos Logicos || y &&

let hora = 18;
if (hora > 0 && hora <= 12) {
    console.log("Buenos dias");
} else if (hora > 12 && hora <= 18) {
    console.log("Buenas tardes");
} else if (hora > 18 && hora <= 24) {
    console.log("Buenas noches")
} else {
    console.log("Horario no valido")
}

// Operador Ternario (condicional)
console.log("Seccion de operador ternario")

let logueado = false;
console.log( logueado ? "Estas logueado" : "Iniciar secion");

// Seccion de Switch condicionales 
console.log("Seccion de Condicional Shitch statement");

const metodoDePago = "er";

switch(metodoDePago) {
    case "Efectivo":
        console.log(`Pagaste con ${metodoDePago}, muchas gracias por su compra`);
        break;
    case "Tarjeta":
        console.log(`Pagaste con ${metodoDePago}, Procesando su pago, espere un momento`);
        break;
    case "Cheque":
        console.log(`Pagaste con ${metodoDePago}, Revisaremos qu etenga fondos, espere un momento`);
        break;
    default:
        noPagaste();
        break;
};

// Las funciones sin ningun problema pueden ir dentro de un if, switch sin problema alguno. 
//Al igual que un if tambien puede ir dentro de una funcion 

function noPagaste() {
    console.log("Metodo de pago invalido");
}