// Injects our content into the content div once page is loaded.
import burgerfries from "./pictures/burgerfries.jpg";
import * as styles from "./styles/index.css";

export let onPageLoad = function(){
    document.addEventListener('DOMContentLoaded', () => {

        const contentDivision = document.getElementById('content');
        contentDivision.className = styles["content-division"];
        const header = document.createElement('h1');
        header.textContent = "Sally's Diner, Kickin' good!";

        const burgerPicture = document.createElement('img');
        burgerPicture.className = styles["burger-picture"];
        burgerPicture.src = burgerfries;
        const pictureAttribution = document.createElement("i");
        pictureAttribution.textContent = "Photo by Mathias Reding";

        const introduction = document.createElement('p');
        introduction.textContent = "Want some home cooked fries, a juicy burger and a shake? Well, come to Sally's!"

        contentDivision.appendChild(header);
        contentDivision.appendChild(burgerPicture);
        contentDivision.appendChild(pictureAttribution);
        contentDivision.appendChild(introduction);
    });
}