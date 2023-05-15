import "./Main.css";
import { template as card } from "../Card/Card";
import { template as buttonControl } from "../ButtonControl/ButtonControl";
import { printTemplate as Buscador } from "../Buscador/Buscador";
let pageNum = 1;
let disablePrevious;
let disableNext;
const template = () => {
  return `
  <div class="divTitulos">
    <h1 class="positionD">GALLERY</h1>
    <h1 class="positionC">GALLERY</h1>
  </div>
  <div class="control">
    <div class="containerSearch"></div>
    <button class="getAll">all character</button>
  </div>
    <ul id="gallery"></ul>
    <div class="buttonControl"></div>
    `;
};

const getData = async (pageNum) => {
  const ul = document.querySelector("#gallery");
  ul.innerHTML = "";
  const data = await fetch(
    `https://rickandmortyapi.com/api/character?page=${pageNum}`
  );
  const dataJson = await data.json();
  dataJson.info.prev ? (disablePrevious = false) : (disablePrevious = true);

  dataJson.info.next ? (disableNext = false) : (disableNext = true);

  dataJson.results.forEach((element) => {
    const li = document.createElement("li");
    li.setAttribute("class", "carta");
    li.innerHTML = card(element);
    ul.appendChild(li);
  });
  buttonDraw();
  event();
};
const event = () => {
  const buttonNext = document.querySelector(".next");

  buttonNext.addEventListener("click", () => {
    pageNum++;
    const ulNext = document.querySelector("#gallery");
    ulNext.innerHTML = "";
    getData(pageNum);
  });
  const buttonLast = document.querySelector(".previous");

  buttonLast.addEventListener("click", () => {
    pageNum--;
    const ulLast = document.querySelector("#gallery");
    ulLast.innerHTML = "";
    getData(pageNum);
  });

  const buttonAll = document.querySelector(".getAll");
  buttonAll.addEventListener("click", (e) => {
    const ulAll = document.querySelector("#gallery");
    ulAll.innerHTML = "";
    getData(pageNum);
  });
};

const buttonDraw = () => {
  const divButton = document.querySelector(".buttonControl");
  divButton.innerHTML = buttonControl(disablePrevious, disableNext);
};
export const printTemplate = () => {
  const main = document.querySelector("main");
  main.innerHTML = template();
  Buscador();
  getData(pageNum);
};
