const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  let longestWord = stringList[0]; // empezamos con el primer elemento

  for (let i = 1; i < stringList.length; i++) {
    if (stringList[i].length > longestWord.length) {
      longestWord = stringList[i]; // actualizamos si encontramos una más larga
    }
    // Si tienen la misma longitud, no cambiamos (se queda la primera)
  }
  return longestWord;
}

console.log("La palabra más larga es:", findLongestWord(avengers));