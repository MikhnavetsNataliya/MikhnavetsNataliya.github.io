'use strict'

window.onscroll = function() {toScroll()};

var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;

function toScroll() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}