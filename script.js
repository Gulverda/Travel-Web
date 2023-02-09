const header = document.querySelector("header");
const loader = document.querySelector('.loader');
const fullweb = document.querySelector('.fullweb');


function init(){
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        fullweb.style.display = 'block';
        setTimeout(() => (fullweb.style.opacity = 1), 50);
    }, 8000);
}

init();

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};