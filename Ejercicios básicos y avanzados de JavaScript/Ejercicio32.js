const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {
  let oldest = xMen[0]; // empezamos con el primero

  for (let i = 1; i < xMen.length; i++) {
    if (xMen[i].year < oldest.year) {
      oldest = xMen[i]; // actualizamos si encontramos uno más antiguo
    }
  }

  return oldest;
}

console.log("El miembro más antiguo es:", findOldestXMen(xMen));