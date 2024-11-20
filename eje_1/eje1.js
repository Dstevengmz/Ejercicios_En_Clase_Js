const divinformacion = document.getElementById("infoid");
console.log(divinformacion.textContent);

const detalle = document.querySelector(".detalles");
detalle.textContent = `este es un detalle para modificado`;

const parrafo = document.querySelectorAll("p");
parrafo.forEach((p) => {
p.style.backgroundColor = "lightblue";
});
