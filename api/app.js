
    function urlfuncion() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
        document.querySelector("#nombre_usuario").textContent = datos.name;
        document.querySelector("#correo_usuario").textContent = datos.email;
        document.querySelector("#street").textContent = datos.address.street;
    });
}

urlfuncion()

