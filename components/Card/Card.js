import "./Card.css";

export const template = (character) => {
  return `
    <img src="${character.image}"/>
    <h2>${character.name}</h2>
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
