'use strict';

window.onscroll = function () {
    toScroll()
};

var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;

function toScroll() {
    return window.pageYOffset >= sticky ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

function myNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}