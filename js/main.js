const nav = document.querySelector("header");


window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        nav.classList.add("scrolled");
    }
    else {
        nav.classList.remove("scrolled");
    }
});


const mobilebtn = document.querySelector(".mobile-menu-icon");
const nav_header = document.querySelector("header");

const show_hide = () => {
    nav_header.classList.toggle("mobile");
};
mobilebtn.addEventListener("click", () => show_hide());

// mobilebtn.onclick = function () {
//     document.querySelector('.main-menu-area').style.cssText = 'transition: all 0.8s linear;';
// }
