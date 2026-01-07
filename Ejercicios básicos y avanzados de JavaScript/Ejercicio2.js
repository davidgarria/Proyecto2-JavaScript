// 1. Luke Skywalker cumple años
const jedi = {nombre: "Luke Skywalker", edad: 19};

// Actualizamos la edad a 25
jedi.edad = 25;
console.log("Edad actualizada de Luke Skywalker:", jedi.edad);

// 2. Presentación al estilo Leia Organa
let nombre = "Leia";
let apellido = "Organa";
let edad = 20;

let mensaje = "Soy "+ nombre +" "+ apellido +", tengo "+ edad +" años y soy una princesa de Alderaan.";
console.log(mensaje);

// 3. Calculando el coste total de sables de luz
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

let precioTotalSables = sable1.precio + sable2.precio;
console.log("El precio total de los sables es:", precioTotalSables);

// 4. Actualizando el precio final de las naves
let precioBaseGlobal = 25000; // cambiamos a 25.000 créditos

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Actualizamos el precio final sumando precioBaseGlobal
nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log("Precio final de la nave " + nave1.nombre + ":", nave1.precioFinal);
console.log("Precio final de la nave " + nave2.nombre + ":", nave2.precioFinal);