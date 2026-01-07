const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

// Índice para recorrer las frutas sin repetir
let fruitIndex = 0;

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan && fruitIndex < fruits.length) {
    // Reemplazamos la comida no vegana con una fruta
    foodSchedule[i].name = fruits[fruitIndex];
    foodSchedule[i].isVegan = true; // ahora es vegana
    fruitIndex++; // avanzamos al siguiente fruto
  }
}

console.log("Array resultante:", foodSchedule);