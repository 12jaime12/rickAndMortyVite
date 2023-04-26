import "./Main.css";
import { template as card } from "../Card/Card";
import { template as buttonControl } from "../ButtonControl/ButtonControl";
let pageNum = 1;
let disablePrevious;
let disableNext;
const template = () => {
  return `
    <h1>GALLERY</h1>
    <ul id="gallery"></ul>
    <div class="buttonControl"></div>
    `;
};

const getData = async (pageNum) => {
  const ul = document.querySelector("#gallery");
  const data = await fetch(
    `https://rickandmortyapi.com/api/character?page=${pageNum}`
  );
  const dataJson = await data.json();
  dataJson.info.prev ? (disablePrevious = false) : (disablePrevious = true);

  dataJson.info.next ? (disableNext = false) : (disableNext = true);

  dataJson.results.forEach((element) => {
    const li = document.createElement("li");
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
};

const buttonDraw = () => {
  const divButton = document.querySelector(".buttonControl");
  divButton.innerHTML = buttonControl(disablePrevious, disableNext);
};
export const printTemplate = () => {
  const main = document.querySelector("main");
  main.innerHTML = template();
  getData(pageNum);
};
