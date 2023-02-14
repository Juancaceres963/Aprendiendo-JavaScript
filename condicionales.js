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