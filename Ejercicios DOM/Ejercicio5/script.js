const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Crear lista UL
const ul = document.createElement("ul");
ul.classList.add("album-list");

// Recorrer array y crear LI por cada álbum
for (const album of albums) {
  const li = document.createElement("li");
  li.textContent = album;
  ul.appendChild(li);
}

// Insertar lista en la sección
const section = document.getElementById("albums-section");
section.appendChild(ul);