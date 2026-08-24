import * as styles from "./styles/index.css";

export const loadContact = function(){
    const topEmployees = [
        {name: "Sally", phoneNumber: "111-111-1111"},
        {name: "Wally", phoneNumber: "111-111-1112"},
        {name: "Cally", phoneNumber: "111-111-1113"},
    ];

    const body = document.querySelector("body");
    const contactDivision = document.createElement("div");
    const contactHeader = document.createElement("h1");
    contactHeader.textContent = "Contact";
    contactDivision.className = styles["contact-division"];

    body.appendChild(contactDivision);
    contactDivision.appendChild(contactHeader);
    topEmployees.forEach(employee => {
        let name = document.createElement("h2");
        let phoneNumber = document.createElement("p");
        name.textContent = employee.name;
        phoneNumber.textContent = employee.phoneNumber;
        contactDivision.appendChild(name);
        contactDivision.appendChild(phoneNumber);
    });

}