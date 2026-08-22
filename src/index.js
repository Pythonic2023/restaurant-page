import { onPageLoad } from "./pageLoaded.js";
import { loadMenu } from "./menu.js";

let header = document.querySelector("header");
// Listen for events on buttons, call function from module based on button that was clicked.
header.addEventListener('click', (event) => {
    let content = document.getElementById('content');

    switch(event.target.textContent){
        case "Home":
            console.log("Home clicked");
            break;
        case "Menu":
            while(content.hasChildNodes()){
                content.childNodes.forEach(child => child.remove());
            }
            loadMenu();
            break;
        case "About":
            console.log("About clicked");
            break; 
        default:
            console.log("None match");
    }
});

onPageLoad();
