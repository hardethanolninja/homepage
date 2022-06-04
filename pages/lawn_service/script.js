"use strict";

const navbar = document.querySelector("#navbar-main");

//remove navbar opacity when scrolling past hero
window.onscroll = () => {
  if (window.scrollY > window.innerHeight - navbar.offsetHeight) {
    navbar.classList.remove("bg-opacity-75");
  } else {
    navbar.classList.add("bg-opacity-75");
  }
};
