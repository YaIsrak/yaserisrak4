// variable
let navbar = document.getElementById("navbar");
let blackCover = document.getElementById("black-cover");
let work = document.getElementById("work");
let aboutIntro = document.getElementById("about-intro");
let insta = document.getElementById("insta");
let photos = document.getElementById("photos");
let workWith = document.getElementById("work-with");

// Theme Change-Dark
function dark(){
    navbar.classList.toggle("bg-dark");
    navbar.classList.toggle("navbar-dark");
    document.getElementById("d-m").classList.toggle("bg-dark");
    document.getElementById("d-mm").classList.toggle("bg-dark");
    document.getElementById("d-i").classList.toggle("text-white");
    // Home
    blackCover.classList.toggle("full-width");
    work.classList.toggle("bg-dark");
    work.classList.toggle("text-white");
}
function dark1(){
    navbar.classList.toggle("bg-dark");
    navbar.classList.toggle("navbar-dark");
    document.getElementById("d-m").classList.toggle("bg-dark");
    document.getElementById("d-mm").classList.toggle("bg-dark");
    document.getElementById("d-i").classList.toggle("text-white");
    // About
    aboutIntro.classList.toggle("bg-dark");
    insta.classList.toggle("bg-dark");
    insta.classList.toggle("text-white");
    photos.classList.toggle("bg-dark");
    photos.classList.toggle("text-white");
    workWith.classList.toggle("bg-dark");
    workWith.classList.toggle("text-white");
}

function glass(){
    navbar.classList.remove("bg-dark");
    navbar.classList.remove("navbar-dark");
    document.getElementById("d-m").classList.remove("bg-dark");
    document.getElementById("d-mm").classList.remove("bg-dark");
    document.getElementById("d-i").classList.remove("text-white");
    // Home
    blackCover.classList.remove("full-width");
    work.classList.remove("bg-dark");
    work.classList.remove("text-white");
}
function glass1(){
    navbar.classList.remove("bg-dark");
    navbar.classList.remove("navbar-dark");
    document.getElementById("d-m").classList.remove("bg-dark");
    document.getElementById("d-mm").classList.remove("bg-dark");
    document.getElementById("d-i").classList.remove("text-white");
    // About
    aboutIntro.classList.remove("bg-dark");
    insta.classList.remove("bg-dark");
    insta.classList.remove("text-white");
    photos.classList.remove("bg-dark");
    photos.classList.remove("text-white");
    workWith.classList.remove("bg-dark");
    workWith.classList.remove("text-white");
}