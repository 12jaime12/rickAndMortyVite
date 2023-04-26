import "./style.css";
import { printTemplate as Header } from "./components/Header/Header";
import { printTemplate as Footer } from "./components/Footer/Footer";
import { printTemplate as Main } from "./components/Main/Main";
import {
  printTemplate as Buscador,
  event,
} from "./components/Buscador/Buscador";

Header();
Main();
Buscador();
event();
Footer();
