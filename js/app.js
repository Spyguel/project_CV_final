const menu = document.querySelector (".menu");
const openBtn = document.querySelector (".open");
const closeBtn = document.querySelector (".close");

function toggleMenu() {
    menu.classList.toggle("opened")
}

openBtn.addEventListener("click", toggleMenu)
closeBtn.addEventListener("click", toggleMenu)