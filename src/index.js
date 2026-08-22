import { onPageLoad } from "./pageLoaded.js";
import { loadMenu } from "./menu.js";

let header = document.querySelector("header");
// Listen for events on buttons, call function from module based on button that was clicked.
header.addEventListener('click', (event) => {
    switch(event.target.textContent){
        case "Home":
            console.log("Home clicked");
            break;
        case "Menu":
            console.log("menu clicked");
            break;
        case "About":
            console.log("About clicked");
            break; 
        default:
            console.log("None match");
    }
});

onPageLoad();
