import "./Footer.css";

const template = () => {
  return `
    <h2 class="footerText">Jaime Calvo Cuadrado ©2023<h2>
    `;
};

export const printTemplate = () => {
  document.querySelector("footer").innerHTML = template();
};
