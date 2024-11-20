const url = document.getElementsByTagName("url")[1];
console.log(url.textContent);
if (!url) {
  url.href = "youtube.com";
} else {
  console.log((url.href = "google.com"));
}
const titulo = document.getElementById("nombretitulo");
console.log(titulo.textContent);

titulo.textContent = `Titulo Modificado`;
// titulo.array.forEach((e) => {
//   e.style.backgroundColor = "red";
// });
