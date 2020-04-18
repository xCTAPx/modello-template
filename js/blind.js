export function blind() {
    // Desktop version


const blind = document.querySelector(".bind-menu"),
close = document.querySelector(".close"),
normalScreenBtn = document.getElementById("menu-normal-screen"),
mobileScreenBtn = document.getElementById("menu-low-screen");

let screenWidth = document.body.clientWidth;

normalScreenBtn.addEventListener("click", blindOn);

let fullWindow = window.innerWidth,
withoutScrollbar = document.documentElement.clientWidth;

let marginR = fullWindow - withoutScrollbar;

function blindOn() {
blind.classList.add("blind-cover");
window.scrollTo(0, 0);
document.body.style.overflow = "hidden";

if(screenWidth > 468) document.body.style.marginRight = marginR + "px";
}


close.addEventListener("click", blindOff);

function blindOff() {
blind.classList.remove("blind-cover");
document.body.style.overflow = "";

if(screenWidth > 468) document.body.style.marginRight = 0 + "px";
}


// Mobile version


mobileScreenBtn.addEventListener("click", blindOn);
}