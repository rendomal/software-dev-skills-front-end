let menuBtn;
let menu;
let menuNav;
let menuBranding;
let navItems;

// An array of all the elements except menu button;
let elements;

let showMenu = false;

function init() {
    menuBtn = document.querySelector('.menu-btn');
    menu = document.querySelector('.menu');
    menuNav = document.querySelector('.menu-nav');
    menuBranding = document.querySelector('.menu-branding');
    navItems = document.querySelectorAll('.nav-item');

    menuBtn.addEventListener('click', toggleMenu);

    elements = [menu,menuNav,menuBranding,...navItems];
}

function toggleMenu() {
    let toggleState = showMenu ? 'add' : 'remove';

    menuBtn.classList[toggleState]('close');
    elements.forEach(item=>item.classList[toggleState]('show'));

    showMenu = !showMenu;
}
