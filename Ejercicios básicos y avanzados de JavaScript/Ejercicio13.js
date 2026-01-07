const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function nameFinder(nameList, value) {
  // Buscamos el índice del valor en el array
  let index = nameList.indexOf(value);

  if (index !== -1) {
    // Si existe, devolvemos true y la posición
    return { exists: true, position: index };
  } else {
    // Si no existe, devolvemos false
    return { exists: false };
  }
}