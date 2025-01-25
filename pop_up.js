const loginButton = document.querySelector(".banner__icon-wrapper");
const popUp = document.querySelector(".pop-up");

function toggleMenu() {
    popUp.classList.toggle("pop-up-active"); 
    loginButton.classList.toggle("active");	
}

loginButton.addEventListener("click", toggleMenu);
