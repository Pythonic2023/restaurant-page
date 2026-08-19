// Injects our content into the content div once page is loaded.

export let onPageLoad = function(){
    document.addEventListener('DOMContentLoaded', () => {
        const contentDivision = document.getElementById('content');
        const header = document.createElement('h1');
        header.textContent = "Sally's Diner, Kickin' good!";
        const introduction = document.createElement('p');
        introduction.textContent = "Want some home cooked fries, a juicy burger and a shake? Well come to Sally's!"
        contentDivision.appendChild(header);
        contentDivision.appendChild(introduction);
    });
}