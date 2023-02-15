//Supongamos tenemos una variable en lo gobal 

// var genero = "Group";
// if (genero){
//     var genero = "Rap";
//     console.log("dentor del if " + genero);
// };
// console.log("fuera del if " + genero);

//Esto me da el mismo valor para la variable apesar de que una esta siendo declarada en el scope interno y otra en el global

// Con las palabras let y const vemos como se comporto de forma mas entendible

let genero = "Group";

if (genero){
    let genero = "Rap";
    console.log("dentor del if " + genero);
};
console.log("fuera del if " + genero);

// De esta forma podemos ver como estas variables apesar de que se llaman igual una se sobre escribe en el 
// interior de una funcion, por lo que cambia su valor en el scope interno nada mas, no global

if (tema){
    var tema = "Rap";
    console.log("dentor del if " + tema);
};

// En este esenario podemos apreciar que JavaScript no entiende y no encuentra esa variable ya que no esta definida en el scope global