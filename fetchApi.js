descargarInfoUsuarios(30);

function descargarInfoUsuarios(cantidad) {
    const api = `https://api.randomuser.me/?nat=US&results=${cantidad}`;
// El metodo fetch va a ser un apeticion a una api (url)
    fetch(api)
// Las peticiones con fetch esperan una respuest en json
        .then(respuesta => respuesta.json())
        .then(datos => imprimirHTML( datos.results ));
}

function imprimirHTML(datos) {
    datos.forEach(usuario => {
        // A travez de este console.log podemos observar todas las keys values con las que la Api 
        //nos manda la informacion, asi podemos acceder ya luego creando la destructurind de cada keys value que queramos
        console.log(usuario);
        // Creamos una const li que sera como una card con toda la informacion de cada uno de los usuarios
        const li = document.createElement("li");
        // Aca realizamos una destructuracion de la informacion de usuario pasada por la api
        const { name: {first}, name: {last}, picture: {medium}, nat} = usuario;
        // A cada uno de los li le vamos a estar inyectando esta informacion, obtenido las variables gracias al destructuring
        li.innerHTML = `
            Nombre: ${first} ${last}
            Pais: ${nat}
            imagen: <img src="${medium}">
        `;
        //Se lo inyectamos al elemento contenedor en el HTML atravez de su ID, cada uno como un individuo li (hijo)
        document.querySelector("#app").appendChild(li);
    });
}