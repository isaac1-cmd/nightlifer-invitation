document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("viewMenuBtn");
    const welcome = document.getElementById("welcome");
    const menu = document.getElementById("menu");
    const viewer = document.getElementById("menuViewer");

    button.addEventListener("click", function () {

        welcome.style.display = "none";

        menu.style.display = "block";

        viewer.style.display = "block";

        menu.scrollIntoView({
            behavior: "smooth"
        });

    });

});