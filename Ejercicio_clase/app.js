let datos = [
  { nombre: "pepito", edad: 20, ciudad: "Cali" },
  { nombre: "juanito", edad: 50, ciudad: "Bogota" },
];
let tablaDatos = document.querySelector("#tabladatos");

datos.forEach((dato) => {
  tablaDatos.innerHTML += `
    <tr>
        <td> ${dato.nombre}</td >
        <td> ${dato.edad}</td>
        <td> ${dato.ciudad}</td>
    </tr>`;
});
