// 4.1 Filtrar valores mayores que 18
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const over18 = ages1.filter(age => age > 18);
console.log("4.1 Mayores de 18:", over18);
// [22, 24, 55, 65, 21, 90]

// 4.2 Filtrar valores pares
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const evenAges = ages2.filter(age => age % 2 === 0);
console.log("4.2 Números pares:", evenAges);
// [22, 14, 24, 12, 90]

// 4.3 Filtrar streamers con gameMorePlayed = 'League of Legends'
const streamers1 = [
  {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
  {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
  {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
  {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lolStreamers = streamers1.filter(streamer => streamer.gameMorePlayed === 'League of Legends');
console.log("4.3 Streamers de LoL:", lolStreamers);
// [{Ibai...}, {Reven...}]

// 4.4 Filtrar streamers cuyo nombre incluye 'u'
const streamers2 = [
  {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
  {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
  {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
  {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersWithU = streamers2.filter(streamer => streamer.name.includes('u'));
console.log("4.4 Streamers con 'u' en el nombre:", streamersWithU);
// [{Rubius...}, {AuronPlay...}]

// 4.5 Filtrar streamers cuyo gameMorePlayed incluye 'Legends'
// Además, poner gameMorePlayed en MAYÚSCULAS si age > 35
const streamers3 = [
  {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
  {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
  {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
  {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const legendsStreamers = streamers3
  .filter(streamer => streamer.gameMorePlayed.includes('Legends'))
  .map(streamer => {
    if (streamer.age > 35) {
      return {...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase()};
    }
    return streamer;
  });

console.log("4.5 Streamers de Legends con ajuste de edad:", legendsStreamers);
// [{Ibai...}, {Reven con gameMorePlayed en MAYÚSCULAS}]