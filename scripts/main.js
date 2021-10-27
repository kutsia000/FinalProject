let Nav = document.getElementById("navigation");
let BurgerMenu = document.getElementById("BurgerMenu");


BurgerMenu.addEventListener('click',function(){
    Nav.classList.toggle("menu-toggled")
});