// 2.1 Inserta dinámicamente un div vacío
const divVacio = document.createElement("div");
document.body.appendChild(divVacio);

// 2.2 Inserta dinámicamente un div que contenga una p
const divConP = document.createElement("div");
const pDentro = document.createElement("p");
pDentro.textContent = "Soy un párrafo dentro del div";
divConP.appendChild(pDentro);
document.body.appendChild(divConP);

// 2.3 Inserta dinámicamente un div que contenga 6 p usando un loop
const divCon6P = document.createElement("div");
for (let i = 1; i <= 6; i++) {
  const p = document.createElement("p");
  p.textContent = `Párrafo número ${i}`;
  divCon6P.appendChild(p);
}
document.body.appendChild(divCon6P);

// 2.4 Inserta dinámicamente una p con el texto 'Soy dinámico!'
const pDinamico = document.createElement("p");
pDinamico.textContent = "Soy dinámico!";
document.body.appendChild(pDinamico);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'
const h2Insert = document.querySelector(".fn-insert-here");
h2Insert.textContent = "Wubba Lubba dub dub";

// 2.6 Basándote en el array crea una lista ul > li
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");
for (const app of apps) {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
}
document.body.appendChild(ul);

// 2.7 Elimina todos los nodos con la clase .fn-remove-me
const removeNodes = document.querySelectorAll(".fn-remove-me");
for (const node of removeNodes) {
  node.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos primeros div
const divs = document.querySelectorAll("div");
const pMedio = document.createElement("p");
pMedio.textContent = "Voy en medio!";
divs[0].insertAdjacentElement("afterend", pMedio);

// 2.9 Inserta p con el texto 'Voy dentro!' dentro de todos los div con la clase .fn-insert-here
const divsInsertHere = document.querySelectorAll(".fn-insert-here");
for (const div of divsInsertHere) {
  const pInside = document.createElement("p");
  pInside.textContent = "Voy dentro!";
  div.appendChild(pInside);
}