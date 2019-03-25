'use strict';

window.onscroll = function () {
    toScroll()
};

var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;

function toScroll() {
    return window.pageYOffset >= sticky ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

/!*------Navbar-----*!/
var mainNavBar = document.getElementById("js-navbar");
var navBarIcon = document.getElementById("js-navbar__icon");

navBarIcon.onclick = function() {
    mainNavBar.classList.toggle('open');
};