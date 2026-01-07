function rollDice(faces) {
  // Math.random() genera un número entre 0 y 1
  // Multiplicamos por el número de caras y usamos Math.floor para redondear
  // Sumamos 1 porque los dados empiezan en 1, no en 0
  return Math.floor(Math.random() * faces) + 1;
}

console.log("Dado de 6 caras:", rollDice(6));   // resultado entre 1 y 6
console.log("Dado de 10 caras:", rollDice(10)); // resultado entre 1 y 10
console.log("Dado de 20 caras:", rollDice(20)); // resultado entre 1 y 20