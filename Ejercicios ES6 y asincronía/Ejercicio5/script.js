const streamers = [
  {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
  {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
  {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
  {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// Seleccionamos el input
const input = document.querySelector('[data-function="toFilterStreamers"]');

// Escuchamos el evento 'input'
input.addEventListener("input", (event) => {
  const searchText = event.target.value.toLowerCase();

  // Filtramos streamers cuyo nombre incluya el texto
  const filteredStreamers = streamers.filter(streamer =>
    streamer.name.toLowerCase().includes(searchText)
  );

  console.log("Coincidencias:", filteredStreamers);
});