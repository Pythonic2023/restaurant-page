import * as styles from "./styles/index.css";

export const loadMenu = function(){
    const container = document.getElementById("content");
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menu";
    container.appendChild(menuTitle);
}