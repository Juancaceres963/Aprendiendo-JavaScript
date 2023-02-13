console.log("Pagina de funciones");

// Hemos visto hasta aca varias funciones que tien eel lenguaje, como console.lo(), alert(), pront(), etc
// Para crear nosotros nuestros propias funciones tenemos las siguientes formas:

// Funciones declarativas 
function saludar() {
    console.log("Hola")
}
saludar();
saludar();
saludar();
// Se pueden llamar cuantas veces se quiera, asi reutilizando codigo.

// Funciones expresivas 
const suma = function(){
    console.log( 1 + 2)
}
suma();

// Las funciones siempre deben crearse y luego llamarse, para llamar una funcion se debe colocar el nombre de ella y los parentesis.
// La diferencia entre funciones declarativas y funciones expresivas, aparted e su sintaxis dondo en las expresevias
// se debe crear una variable y luego el valor sera la funcion
// Al momento de leer codigo las funciones declarativas son capaces de leerse incluso si son llamadas antes de ser creadas

// PARAMETROS: Pasarle parametros a una funcion es utilizar codigo que esta fuera de una funcion y pasarlo adentro de ella

function saludar2(nombre, trabajo = "No sabemos !") {
    console.log("Hola " + nombre + " tu trabajo es " + trabajo)
}
saludar2("Juan Andres", "Desarrollador web");
saludar2("Andrea" );
saludar2("Daniel", "Desarrollador de juegos");

// Una funcion puede tomar tantos parametros como se necesiten
// Los parametros van en los parentesis al crear la funcion, se llaman al desarrollar lo que haran la funcion
// y se les da el valor cuando se este llamando la funcion ya escrita.
// Le podemos dar parametros por defaul a una funcion asignandole un valor al parametro cuando estamos creandola (Ejemplo con andrea)
// Los parametro spor defaul van a tomarse en cuenta siempre y cuando no se le haya dado un valor al parametro cuando se este llamando la funcion.

// Otro ejemplo
const suma2 = function(a = 0, b = 0){
    console.log( a + b)
}
suma2();
suma2(63);
suma2(26, 106);

// Lo bueno de pasar parametros es qu ehacemos a la funcion mas inteligente y practica para utilizarla en diferentes esenarios

// Otro tipo de funciones son las funciones IIFI
// Estas funciones se invocan inmediatamente y su sintaxsis es la siguiente
// Para pasarle parametros es igual seria en los parentesis

(function(tecnologia) {
    console.log(" Soy una IIFI, enmseñandote " + tecnologia)
})("JavaScript");

// Metodos 
// Los metodos son funciones adentro de objetos, siguen siendo igual que las funciones pero simplemente estan dentro de un obejto
console.log("Seccion de Metodos (Objetos)");

const musica = {
    reproducir: function(cancion) {
        console.log("Estas escuchando la cancion : " + cancion);
    },
    pausar: function() {
        console.log("Musica pausada..")
    }
}
//Se pueden crear funciones de objetos fuera del objeto, solo hay que asegurarse de darle el nombre del objeto
musica.borrar = function(id) {
    console.log("Borrando la cancion con el ID : " + id)
}

musica.reproducir("Ella es calladita");
musica.pausar();
musica.reproducir("Eres mi chica ideal");
musica.borrar(234);