import { onPageLoad } from "./pageLoaded.js";
import { loadMenu } from "./menu.js";
import * as styles from "./styles/index.css";

let header = document.querySelector("header");
// Listen for events on buttons, call function from module based on button that was clicked.
header.addEventListener('click', (event) => {
    let content = document.getElementById('content');
    switch(event.target.textContent){
        case "Home":
            console.log("Home clicked");
            break;
        case "Menu":
            let contentExists = (content != null) ? true : false;
            let menuNull = (document.querySelector("." + styles["menu-division"]) === null) ? true : false;
            if(contentExists){
                content.remove();
            }
            if(menuNull){
                loadMenu();
            }
            break;
        case "About":
            console.log("About clicked");
            break; 
        default:
            console.log("None match");
    }
});

onPageLoad();
