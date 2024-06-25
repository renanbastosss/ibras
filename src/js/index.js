// ---------------------------------------- HEADER BAR ----------------------------------------//

const header = document.querySelector('header');
let lastScrollTop = 0;

const checkScroll = () => {
    let scrollTop = window.scrollY
    let headerStyle = header.style

    if (window.screen.width <= 419) {
        if (scrollTop < 64) {
            headerStyle.top = '0px'
            headerStyle.position = 'absolute'
        } else if (scrollTop < lastScrollTop) {
            headerStyle.top = '-64px'
            headerStyle.position = 'fixed'
        } else {
            headerStyle.top = '-64px'
            headerStyle.position = 'fixed'
        }
    } else {
        if (scrollTop < 86) {
            headerStyle.top = '0px'
            headerStyle.position = 'absolute'
        } else if (scrollTop < lastScrollTop) {
            headerStyle.top = '-86px'
            headerStyle.position = 'fixed'
        } else {
            headerStyle.top = '-86px'
            headerStyle.position = 'fixed'
        }
    }

    lastScrollTop = scrollTop;
};

window.addEventListener('scroll', function () {
    checkScroll();
})

// ----------------- MOBILE ---------------- //

const menuOpener = document.querySelector('.menu-opener');
const menu = document.querySelector('.menu ul');
const mobileScreen = window.screen.width <= 690

function closeMenu() {
    menu.style.display = 'none';
}

function openMenu() {
    menu.style.display = 'flex';
}

menuOpener.addEventListener('click', () => {
    menu.style.display == 'flex' ? closeMenu() : openMenu();
})

menu.addEventListener('click', function (e) {
    if (e.target != this && mobileScreen) {
        closeMenu();
    }
})