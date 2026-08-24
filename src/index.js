import { onPageLoad } from "./pageLoaded.js";
import { loadMenu } from "./menu.js";
import * as styles from "./styles/index.css";
import { loadHome } from "./home.js";
import { loadContact } from "./contact.js";

let header = document.querySelector("header");
// Listen for events on buttons, call function from module based on button that was clicked.
header.addEventListener('click', (event) => {
    let menu = document.querySelector("." + styles['menu-division']);
    let content = document.getElementById('content');
    let contact = document.querySelector("." + styles["contact-division"]);
    let contentExists = (document.getElementById("content") != null) ? true : false;
    let menuExists = (document.querySelector("." + styles["menu-division"]) != null) ? true : false;
    let contactExists = (document.querySelector("." + styles["contact-division"]) != null) ? true : false;
    switch(event.target.textContent){
        case "Home":
            //let menu = document.querySelector("." + styles["menu-division"]);
            //let menuExists = (menu != null) ? true : false;
            if(menuExists){
                menu.remove();
            } 
            if(contactExists){
                contact.remove();
            }
            if(contentExists){
                content.remove();
            }
            
            loadHome();
            break;
        case "Menu":
            //let menuNull = (document.querySelector("." + styles["menu-division"]) === null) ? true : false;
            if(contentExists){
                content.remove();
            } 
            if(contactExists){
                contact.remove();
            }
            if(!menuExists){
                loadMenu();
            }
            break;
        case "Contact":
            if(menuExists){
                menu.remove()
            }
            if(contentExists){
                content.remove();
            }
            if(!contactExists){
                loadContact();
            }
            break; 
        default:
            console.log("None match");
    }
});

onPageLoad();
