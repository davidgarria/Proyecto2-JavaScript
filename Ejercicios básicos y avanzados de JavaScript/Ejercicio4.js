// Array inicial
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 4.1 - Saca a "Tendo" por consola atacando su posición
console.log("4.1:", aldeanos[3]); // posición 3 porque empieza en 0

// 4.2 - Coloca en el último lugar de este array a "Cervasio"
aldeanos.push("Cervasio");
console.log("4.2:", aldeanos);

// 4.3 - Cambia el primer elemento de este array por "Bambina"
aldeanos[0] = "Bambina";
console.log("4.3:", aldeanos);

// 4.4 - Dale la vuelta a este array
aldeanos.reverse();
console.log("4.4:", aldeanos);

// 4.5 - Cambia a "Narciso" por "Canela" usando un método de array
// Buscamos el índice de "Narciso"
let indiceNarciso = aldeanos.indexOf("Narciso");
if (indiceNarciso != -1) {
  aldeanos.splice(indiceNarciso, 1, "Canela"); // reemplaza en esa posición
}
console.log("4.5:", aldeanos);

// 4.6 - Imprime el último elemento sin atacar la posición explícitamente
console.log("4.6:", aldeanos[aldeanos.length - 1]);