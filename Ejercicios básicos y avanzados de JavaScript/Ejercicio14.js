const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];

function repeatCounter(list) {
  let counter = {}; // objeto para almacenar las repeticiones

  for (let i = 0; i < list.length; i++) {
    let word = list[i];
    if (counter[word]) {
      counter[word]++; // si ya existe, incrementamos
    } else {
      counter[word] = 1; // si no existe, lo inicializamos en 1
    }
  }

  return counter;
}