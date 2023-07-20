let menu =document .querySelector("#menu-icon");
let navlist =document .querySelector(".navlist");

menu.openclick =() => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}