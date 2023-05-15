import "./Card.css";

export const template = (character) => {
  return `
    <img class="img" src="${character.image}" alt="${character.name}"/>
    <div class="divPosition">
    <h2 class="positionB">${character.name}</h2>
    <h2 class="positionA">${character.name}</h2>
    </div>
    <div class="verdeDiv">
    <p class="estado"><span class="verde">Estado: </span>${character.status}</p>
    </div>
    <div class="verdeDiv">
    <p class="especie"><span class="verde">Especie: </span>${character.species}</p>
    </div>
    <div class="verdeDiv">
    <p class="nacionalidad"><span class="verde">Nacionalidad: </span>${character.origin.name}</p>
    </div>
    `;
};
