const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const songsByGenre = {};

// Bucle para clasificar canciones por género
for (let i = 0; i < tracks.length; i++) {
  const song = tracks[i];
  const genre = song.genre;

  if (!songsByGenre[genre]) {
    songsByGenre[genre] = []; // inicializamos el array si no existe
  }

  songsByGenre[genre].push(song); // añadimos la canción al género correspondiente
}

console.log("Canciones clasificadas por género:", songsByGenre);