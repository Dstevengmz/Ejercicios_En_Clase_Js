let empleado = [
  {
    nombre: "pepito",
    empleadoa: "204",
    telefono: "320154110",
    area: {
      id: 1,
      nombreA: "sistemas"
    },
  },
];
let tablaDatos = document.querySelector("#tabladatos");

empleado.forEach((e) => {
  tablaDatos.innerHTML += `
    <tr>
        <td> ${e.nombre}</td >
        <td> ${e.empleadoa}</td>
        <td> ${e.telefono}</td>
        <td> ${e.area.id}</td>
        <td> ${e.area.nombreA}</td>
    </tr>`;
});
