function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i; // devolvemos el índice si coincide
    }
  }
  return -1; // si no se encuentra, devolvemos -1
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1); // eliminamos el elemento en la posición encontrada
  }
  return array; // retornamos el array modificado
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Han Solo")); 
console.log(findArrayIndex(mainCharacters, "Rey"));     
console.log(findArrayIndex(mainCharacters, "Yoda"));     

console.log(removeItem(mainCharacters, "Leia"));
console.log(removeItem(mainCharacters, "Rey"));  
console.log(removeItem(mainCharacters, "Yoda"));