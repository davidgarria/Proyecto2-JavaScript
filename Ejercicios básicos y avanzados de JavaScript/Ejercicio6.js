// 1.1 Bucle for de 0 a 9 mostrando i
for (let i = 0; i <= 9; i++) {
  console.log("1.1 Valor de i:", i);
}

// 1.2 Bucle for mostrando solo los números pares (resto = 0)
for (let i = 0; i <= 9; i++) {
  if (i % 2 === 0) {
    console.log("1.2 Valor de i (par):", i);
  }
}

// 1.3 Bucle para contar ovejas
for (let i = 1; i <= 10; i++) {
  if (i < 10) {
    console.log("1.3 Intentando dormir 🐑");
  } else {
    console.log("1.3 ¡Dormido!");
  }
}