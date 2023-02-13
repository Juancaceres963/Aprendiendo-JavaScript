console.log("Template Strings");

const empleado = "Juan"
    labura = "desarrollador front-end";

console.log(`Numbre: ${empleado}, Trabaja: ${labura}`);

// Al concatenar estamos tratando de decir a JS que lo que se necuentra entre llaves anteseguido a el signo de dolar
// se va a tratar como si fuera una variable o incluso una funcion

// Ejemplo y comparacion entre `` y +

const contenedorApp = document.querySelector("#mensaje");

// let html = "<ul>" +
//                 "<li> Nombre: " + empleado + "</li>" +
//                 "<li> Trabajo: " + labura + "</li>" +
//             "</ul>" ;

// contenedorApp.innerHTML = html;

let html2 = `<ul>
                <li> Nombre: ${empleado}</li>
                <li> Trabajo: ${labura}</li>
            </ul>`;

contenedorApp.innerHTML = html2;

// Ambos funcionan igual, simplemente es mas legible y con menos 
//posibilidad de error al momento de escribir codigo utilizando ``.