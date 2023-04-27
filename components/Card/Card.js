import "./Card.css";

export const template = (character) => {
  return `
    <img src="${character.image}"/>
    <div class="divPosition">
    <h2 class="positionB">${character.name}</h2>
    <h2 class="positionA">${character.name}</h2>
    </div>
    <div class="verdeDiv">
    <p><span class="verde">Estado: </span>${character.status}</p>
    </div>
    <div class="verdeDiv">
    <p><span class="verde">Especie: </span>${character.species}</p>
    </div>
    <div class="verdeDiv">
    <p><span class="verde">Nacionalidad: </span>${character.origin.name}</p>
    </div>
    `;
};
