document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("hamburger");
    const iconMenu = document.getElementById("icon-menu");
    const iconClose = document.getElementById("icon-close");

    button.addEventListener("click", function() {
        iconMenu.classList.toggle("hidden");
        iconClose.classList.toggle("hidden");
    });

    window.onscroll = function() {
        const header = document.querySelector("header");
        const fixed = header.offsetTop;

        if (window.pageYoff > fixedNav) {
            header.classList.add("navbar-fixed");
        } else {
            header.classList.remove("navbar-fixed");
        }
    }
});