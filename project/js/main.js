let buttonMob = document.getElementById('nav__mobile'); 
let navMenu = document.getElementById('nav'); 
buttonMob.onclick = function(e) {
    e.preventDefault();
    buttonMob.classList.toggle('active');
    navMenu.classList.toggle('active');
}
