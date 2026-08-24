import * as styles from "./styles/index.css";

export const loadMenu = function(){
    const body = document.querySelector("body");
    const menuContainer = document.createElement("div");
    const menuTitle = document.createElement("h1");
    menuContainer.className = styles["menu-division"];
    menuTitle.textContent = "Menu";
    body.appendChild(menuContainer);
    menuContainer.appendChild(menuTitle);

    let fooditems = [
        {menuItem: "Eggs And Bacon", description: "A tasty egger and bacon!"},
        {menuItem: "Burgers And Fries", description: " A juicy burger and a basket of crispy, homecooked fries."},
        {menuItem: "The Loaded Poutine", description: "A Big ol' basket of fries with a mean serving of gravy and curds. Freshly cooked bacon will still be sizzlin' when it hits your taste bud's like a gravy train."},
    ];
    fooditems.forEach(item => {
        let foodMenuDiv = document.createElement('div');
        foodMenuDiv.classList = styles["menu-division"];
        let menuItem = document.createElement('h2');
        let menuItemDescription = document.createElement("p");
        menuItem.textContent = item.menuItem;
        menuItemDescription.textContent = item.description;
        menuContainer.appendChild(foodMenuDiv);
        foodMenuDiv.appendChild(menuItem);
        foodMenuDiv.appendChild(menuItemDescription);
    })
}