// 1.1 Crear lista ul > li con países
const countriesList = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement("ul");

for (const country of countriesList) {
  const li = document.createElement("li");
  li.textContent = country;
  ulCountries.appendChild(li);
}

document.body.appendChild(ulCountries);

// 1.2 Eliminar el elemento con clase .fn-remove-me
const removeMe = document.querySelector(".fn-remove-me");
if (removeMe) removeMe.remove();

// 1.3 Crear lista ul > li dentro del div con atributo data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ulCars = document.createElement("ul");

for (const car of cars) {
  const li = document.createElement("li");
  li.textContent = car;
  ulCars.appendChild(li);
}

const printHereDiv = document.querySelector('[data-function="printHere"]');
printHereDiv.appendChild(ulCars);

// 1.4 Crear divs con h4 + img
const countriesWithImages = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const container = document.createElement("div");
container.id = "image-container";

for (const item of countriesWithImages) {
  const div = document.createElement("div");
  div.classList.add("card");

  const h4 = document.createElement("h4");
  h4.textContent = item.title;

  const img = document.createElement("img");
  img.src = item.imgUrl;
  img.alt = item.title;

  div.appendChild(h4);
  div.appendChild(img);
  container.appendChild(div);
}

document.body.appendChild(container);

// 1.5 Botón para eliminar el último div
const deleteLastBtn = document.createElement("button");
deleteLastBtn.textContent = "Eliminar último div";
deleteLastBtn.addEventListener("click", () => {
  const cards = document.querySelectorAll(".card");
  if (cards.length > 0) {
    cards[cards.length - 1].remove();
  }
});

document.body.appendChild(deleteLastBtn);

// 1.6 Botón para eliminar cada div individualmente
const cards = document.querySelectorAll(".card");

for (const card of cards) {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar este div";
  deleteBtn.addEventListener("click", () => {
    card.remove();
  });
  card.appendChild(deleteBtn);
}