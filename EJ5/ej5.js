let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;
  let resultado = document.querySelector("#resultado");
  num1 = parseInt(num1);
  num2 = parseInt(num2);
//   resultado = parseInt(resultado);
  let suma = num1 + num2;
  alert(suma);
  resultado.value = suma;
  //   resultado.style.backgroundColor = "green";
});
