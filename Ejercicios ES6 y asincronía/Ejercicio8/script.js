// 1. Seleccionamos los elementos del DOM
const select = document.getElementById("character-list");
const img = document.querySelector(".character-image");

// 2. Hacemos la petición a la API
fetch("https://thronesapi.com/api/v2/Characters")
  .then(response => response.json())
  .then(characters => {
    
    // 3. Rellenamos el select con los nombres
    characters.forEach(character => {
      const option = document.createElement("option");
      option.value = character.imageUrl;   // guardamos la URL de la imagen
      option.textContent = character.fullName; // mostramos el nombre
      select.appendChild(option);
    });

    // 4. Cuando el usuario selecciona un personaje, cambiamos la imagen
    select.addEventListener("change", (event) => {
      const imageUrl = event.target.value;
      img.src = imageUrl;
    });
  })
  .catch(error => console.error("Error al cargar personajes:", error));
