function api2() { 

    const comentario=document.querySelector("#comentario")
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then(respuesta => respuesta.json())
        .then(datos => {

            console.log(datos)
            datos.forEach(element => {
                let item = document.createElement('li');
                item.innerHTML = `
                <p> ${element.name} </p>
                    <p>${element.email}</p>
                    <p>${element.body}</p>
                    `;
                comentario.appendChild(item);       
            });
        // document.querySelectorAll("#nombre").textContent = datos.name;
        // document.querySelectorAll("#email").textContent = datos.email;
        // document.querySelectorAll("#body").textContent = datos.body;

        });
} 
api2()