const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  let suma = 0;

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      // Si es número, lo sumamos directamente
      suma += list[i];
    } else if (typeof list[i] === "string") {
      // Si es string, sumamos su longitud
      suma += list[i].length;
    }
  }

  // Calculamos el promedio dividiendo entre el total de elementos
  let promedio = suma / list.length;
  return promedio;
}

// Ejemplo de uso:
console.log("El promedio mezclado es:", averageWord(mixedElements));