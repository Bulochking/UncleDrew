const loginButton = document.querySelector(".banner__icon-wrapper");
const popUp = document.querySelector(".pop-up");
const bannerDark = document.querySelector(".banner");

function toggleMenu() {
    popUp.classList.toggle("pop-up-active"); 
    loginButton.classList.toggle("active");	
    bannerDark.classList.toggle("banner-dark");
}

loginButton.addEventListener("click", toggleMenu);

document.addEventListener("click", function(event) {
    const isClickInsidePopUp = popUp.contains(event.target);
    const isClickOnButton = loginButton.contains(event.target);

    if (!isClickInsidePopUp && !isClickOnButton) {
        popUp.classList.remove("pop-up-active");
        loginButton.classList.remove("active");
        bannerDark.classList.remove("banner-dark");
    }
});
