const menu = document.querySelector (".menu");
const openBtn = document.querySelector (".open");
const closeBtn = document.querySelector (".close");

function toggleMenu() {
    menu.classList.toggle("opened")
}

openBtn.addEventListener("click", toggleMenu)
closeBtn.addEventListener("click", toggleMenu)

const menulink = document.querySelectorAll('.menu a[href^="#"]');
menulink.forEach(menulink=> {
    menulink.addEventListener("click", function() {
        menu.classList.remove("opened")
    })
})