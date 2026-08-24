// Injects our content into the content div once page is loaded.

import { loadHome } from "./home.js";

export let onPageLoad = function(){
    document.addEventListener('DOMContentLoaded', () => {
        loadHome();
    });
}