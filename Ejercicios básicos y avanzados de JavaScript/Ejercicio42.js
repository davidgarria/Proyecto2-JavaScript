const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  // Guardamos temporalmente el valor del primer índice
  const temp = array[index1];
  // Intercambiamos posiciones
  array[index1] = array[index2];
  array[index2] = temp;

  return array; // retornamos el array modificado
}

console.log(swap(fantasticFour, 0, 1));
console.log(swap(fantasticFour, 2, 3));