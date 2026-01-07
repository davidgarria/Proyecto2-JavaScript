const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(list) {
  // Usamos un Set para eliminar duplicados automáticamente
  const uniqueArray = [...new Set(list)];
  return uniqueArray;
}

// Ejemplo de uso:
console.log("Array sin duplicados:", removeDuplicates(duplicates));