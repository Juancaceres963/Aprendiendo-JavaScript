// Math 
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