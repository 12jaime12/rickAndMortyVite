import "./Card.css";

export const template = (character) => {
  return `
    <img src="${character.image}"/>
    <h2>${character.name}</h2>
    <div class="verdeDiv">
    <p class="verde">Estado:</p><p>${character.status}</p>
    </div>
    <div class="verdeDiv">
    <p class="verde">Especie:</p><p>${character.species}</p>
    </div>
    <div class="verdeDiv">
    <p class="verde">Nacionalidad:</p><p>${character.origin.name}</p>
    </div>
    `;
};
