let stickyNav = document.querySelector(".sticky-nav");
let element = document.querySelector(".main-content");
let install = document.querySelector(".badge.nav-items.dark-badge")


element.addEventListener("scroll", function(event) {
    if (element.scrollTop > 0) {
        // console.log("scrolled");
        stickyNav.style.backgroundColor = "#121212";
        stickyNav.style.boxShadow= "0px -6px 10px 0px white";
        install.style.backgroundColor= "#333333";
    } else {
        stickyNav.style.backgroundColor = "transparent";
        stickyNav.style.boxShadow= "none";
        install.style.backgroundColor= "black";

    }
});