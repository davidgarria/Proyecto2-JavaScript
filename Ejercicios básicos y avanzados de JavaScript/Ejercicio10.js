const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let suma = 0;

  // Recorremos el array y acumulamos la suma
  for (let i = 0; i < numberList.length; i++) {
    suma += numberList[i];
  }

  // Calculamos el promedio: suma / cantidad de elementos
  let promedio = suma / numberList.length;

  return promedio;
}

// Ejemplo de uso:
console.log("El promedio es:", average(numbers));