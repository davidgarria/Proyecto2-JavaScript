const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  const foundMutants = [];

  for (let i = 0; i < mutants.length; i++) {
    if (mutants[i].power === power) {
      foundMutants.push(mutants[i].name);
    }
  }

  if (foundMutants.length > 0) {
    return `Mutantes con el poder "${power}": ${foundMutants.join(", ")}`;
  } else {
    return `No se encontró ningún mutante con el poder "${power}".`;
  }
}

// Ejemplos de uso:
console.log(findMutantByPower(mutants, "telepathy")); 
// Mutantes con el poder "telepathy": Professor X

console.log(findMutantByPower(mutants, "magnetism")); 
// Mutantes con el poder "magnetism": Magneto

console.log(findMutantByPower(mutants, "flight")); 
// No se encontró ningún mutante con el poder "flight".