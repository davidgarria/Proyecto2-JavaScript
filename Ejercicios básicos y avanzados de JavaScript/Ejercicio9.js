const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let suma = 0; // inicializamos acumulador en 0
  for (let i = 0; i < numberList.length; i++) {
    suma += numberList[i]; // sumamos cada elemento
  }
  return suma; // devolvemos el resultado final
}

// Ejemplo de uso:
console.log("La suma de los números es:", sumNumbers(numbers));