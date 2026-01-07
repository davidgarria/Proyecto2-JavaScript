// 1.1 Evento click en el botón
const btn = document.getElementById("btnToClick");
btn.addEventListener("click", (event) => {
  console.log("Información del evento click:", event);
});

// 1.2 Evento focus en el input con clase .focus
const inputFocus = document.querySelector(".focus");
inputFocus.addEventListener("focus", () => {
  console.log("Valor del input en focus:", inputFocus.value);
});

// 1.3 Evento input en el input con clase .value
const inputValue = document.querySelector(".value");
inputValue.addEventListener("input", () => {
  console.log("Valor actual del input:", inputValue.value);
});