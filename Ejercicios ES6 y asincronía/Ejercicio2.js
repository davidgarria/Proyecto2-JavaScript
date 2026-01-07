// 2.1 Copia de un array con spread
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];
console.log("2.1 Copia del array:", pointsListCopy);

// 2.2 Copia de un objeto con spread
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = {...toy};
console.log("2.2 Copia del objeto:", toyCopy);

// 2.3 Juntar dos arrays con spread
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];
const combinedPoints = [...pointsList1, ...pointsList2];
console.log("2.3 Array combinado:", combinedPoints);

// 2.4 Fusionar dos objetos con spread
const toyBase = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const mergedToy = {...toyBase, ...toyUpdate};
console.log("2.4 Objeto fusionado:", mergedToy);

// 2.5 Copia de un array eliminando posición 2 (sin modificar el original)
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)];
console.log("2.5 Copia del array sin posición 2:", colorsCopy);
console.log("Array original intacto:", colors);