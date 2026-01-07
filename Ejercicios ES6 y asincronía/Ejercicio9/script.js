// 1. Seleccionamos el elemento <img>
const img = document.querySelector(".random-image");

// 2. Generamos un número aleatorio entre 1 y 151 (primera generación)
const randomId = Math.floor(Math.random() * 151) + 1;

// 3. Construimos la URL con el ID aleatorio
const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

// 4. Hacemos la petición a la API
fetch(url)
  .then(response => response.json())
  .then(pokemon => {

    const imageUrl = pokemon.sprites.other["official-artwork"].front_default;

    // 6. Asignamos la imagen al <img>
    img.src = imageUrl;
    img.alt = pokemon.name;
  })
  .catch(error => console.error("Error al cargar Pokémon:", error));
