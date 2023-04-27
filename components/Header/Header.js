import "./Header.css";

const template = () => {
  return `
    <img src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png" alt="logo"/>
    `;
};

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template();
};
