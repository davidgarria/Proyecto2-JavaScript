// 3.1 Dado el array de usuarios, devolver un array con sus nombres
const users1 = [
  {id: 1, name: 'Abel'},
  {id: 2, name: 'Julia'},
  {id: 3, name: 'Pedro'},
  {id: 4, name: 'Amanda'}
];

const userNames = users1.map(user => user.name);
console.log("3.1 Nombres de usuarios:", userNames);
// ["Abel", "Julia", "Pedro", "Amanda"]


// 3.2 Cambiar el nombre a 'Anacleto' si empieza por 'A'
const users2 = [
  {id: 1, name: 'Abel'},
  {id: 2, name: 'Julia'},
  {id: 3, name: 'Pedro'},
  {id: 4, name: 'Amanda'}
];

const updatedNames = users2.map(user => 
  user.name.startsWith("A") ? "Anacleto" : user.name
);
console.log("3.2 Nombres actualizados:", updatedNames);
// ["Anacleto", "Julia", "Pedro", "Anacleto"]


// 3.3 Añadir ' (Visitado)' si isVisited = true
const cities = [
  {isVisited: true, name: 'Tokyo'},
  {isVisited: false, name: 'Madagascar'},
  {isVisited: true, name: 'Amsterdam'},
  {isVisited: false, name: 'Seul'}
];

const visitedCities = cities.map(city => 
  city.isVisited ? `${city.name} (Visitado)` : city.name
);
console.log("3.3 Ciudades con estado de visita:", visitedCities);
// ["Tokyo (Visitado)", "Madagascar", "Amsterdam (Visitado)", "Seul"]