console.log("Seccion de funciones y metodos para numeros");

// Funciones y metodos para numeros 
let numero1 = 50,
    numero2 = "10",
    numero3 = "tres",
    numero4 = "20.20"

// Convertir un string a numero 
console.log(Number(numero2) + numero1);

// ParseInt se encargar de converit un string a numero, y a demas de que hace que el numero sea entero
console.log(parseInt(numero4) + numero1);

// ParseFloat se encargar de converit un string a numero, y de dejar los desimales si el numero asi lo tiene
console.log(parseFloat(numero4) + numero1);

// Otros datos en convercion
console.log("Seccion de Otros datos en convercion");

let dato;
//Convertir de boolean a numero 
dato = Number(true);
console.log(dato);

dato = Number(false);
console.log(dato);

//otras conversiones con number
dato = Number([1,2,3,4]);
console.log(dato);

dato = Number(null);
console.log(dato);

dato = Number("hola mundo");
console.log(dato);

// To Fixed elimina las desimales pero devuelve en string
// To fixed solo puede ser aplicado en numeros
// Puede aceptar o no un parametro, este sera en numero y define si se quiere dejar alguna cantidad de decimales
dato = 1243546.435345677;
console.log(dato.toFixed(4));
dato = Number("1243546.435345677");
console.log(dato.toFixed());

// Math 
console.log("Seccion de Math ");
// Round esta se va a encargar de redondiar un numero

resultado = Math.round(2.5)
console.log(resultado);

// Floor redondiara hacia abajo
resultado = Math.floor(6.9)
console.log(resultado);

// Ceil va a rendodiar hacia arriba
resultado = Math.ceil(6.2)
console.log(resultado);

// Raiz cuadrada 
resultado = Math.sqrt(144)
console.log(resultado);

// Valor absoluto te pasara un numero negativo a positivo
resultado = Math.abs(-14)
console.log(resultado);

// Pow te obtendra la potencia de un numero
// Toma dos valores 1ro el numero que se va a potenciar, el 2do es el numero de la potencia
resultado = Math.pow(8, 3)
console.log(resultado);

// Para saber el numero minimo de una serie de numeros se usa el Mim
resultado = Math.min(8, 3, 10, 39)
console.log(resultado);

// Para saber el numero maximo de una serie de numeros se usa el Max
resultado = Math.max(8, 3, 10, 39)
console.log(resultado);

// Viendo como funciona += -= va a ir incrementando o restando sobre el valor qu eya tenemos

let carrito = 0;
carrito += 20;
console.log(carrito)

carrito += 50;
console.log(carrito)

carrito += 10;
console.log(carrito)

carrito -= 40;
console.log(carrito)

//En este ejemplo de carrito fue sumando a la variable cada ves que estaba el +=, y se resta cada vez que -=

// Concerciones de numero a string
console.log("Convertir de numero a string");

// El metodo String en este caso es el qu ehace posible qu ese pueda saber la longitud del numero, ya que .length no funciona con numeros 

let id = 19435346578;
    id = String(id);

console.log(id);
console.log(id.length);

// Deto de Booleano a string

let boolean = true;
    boolean = String(boolean);

console.log(boolean);
console.log(boolean.length);