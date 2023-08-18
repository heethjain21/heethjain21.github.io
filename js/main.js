function darkToggle() {
    var element = document.body;
    element.classList.add("dark");
    document.getElementById("themeButtonImage").src = "images/icons/moon.png";
    localStorage.setItem('theme', "light");
    console.log("Current Theme: Dark");
}

function lightToggle() {
    var element = document.body;
    element.classList.remove("dark");
    document.getElementById("themeButtonImage").src = "images/icons/sun.png";
    localStorage.setItem('theme', "dark");
    console.log("Current Theme: Light");
}

function expand(){

    var hamburger = document.getElementById("hamburger");
    var menu = document.getElementById("menu");
    var menuIcon = document.getElementById("menuIcon");

    if (hamburger.checked){
        menu.style.opacity = "1";
        menu.style.visibility = "visible";
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    } else {
        menu.style.opacity = "0";
        menu.style.visibility = "hidden";
        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-times");
    }

}

var navbar = document.getElementById("navbar");
var navbarHeight = navbar.clientHeight;
var marginTop = 40;

window.addEventListener('scroll', (e)=>{
    if (window.pageYOffset > navbarHeight - marginTop) {
       navbar.classList.add('shadow');
    }
    else {
       navbar.classList.remove('shadow');
    }
});

let currentTheme = null;
if (localStorage.getItem('theme')) {
    currentTheme = localStorage.getItem('theme');
}

function toggle(){

    if (localStorage.getItem('theme')) {
        currentTheme = localStorage.getItem('theme');
    }

    if(currentTheme == "light") {
        lightToggle();
    } else {
        darkToggle();
    }
}


window.onload = (event) => {

    if (currentTheme == "light") {
        darkToggle();
    } else {
        lightToggle();
    }
};