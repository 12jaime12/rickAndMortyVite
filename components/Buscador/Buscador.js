import "./Buscador.css";
import { template as card } from "../Card/Card";
const template = () => {
  return `
    <div>
    <input class="searchInput" type="text" placeholder="ej: Rick Sanchez" />
    <button class="searchButton">Search</button>
    </div>
  `;
};

export const event = () => {
  const button = document.querySelector(".searchButton");
  button.addEventListener("click", async (e) => {
    const ul = document.querySelector("#gallery");
    ul.innerHTML = "";
    const data = await fetch("https://rickandmortyapi.com/api/character");
    const dataJson = await data.json();
    const input = document.querySelector(".searchInput");
    dataJson.results.forEach((element) => {
      if (element.name.toLowerCase().includes(input.value)) {
        const li = document.createElement("li");
        li.innerHTML = card(element);
        ul.appendChild(li);
      }
    });
  });
};

export const printTemplate = () => {
  document.querySelector(".containerSearch").innerHTML = template();
  event();
};
