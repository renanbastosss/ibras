// ---------------------------------------- HEADER BAR ----------------------------------------//

const header = document.querySelector('header');
let lastScrollTop = 0;

const checkScroll = () => {
    let scrollTop = window.scrollY

    if (window.screen.width < 690) {
        header.style.transition = '0.3s'
        if (scrollTop < 134) {
            header.style.top = '0px'
            header.style.position = 'absolute'
        } else if (scrollTop < lastScrollTop) {
            header.style.top = '-84px'
            header.style.position = 'fixed'
        } else {
            header.style.top = '-134px'
            setTimeout(() => {
                header.style.position = 'fixed'
            }, 500)
        }
    } else if (window.screen.width < 900) {
        if (scrollTop < 123) {
            header.style.top = '0px'
            header.style.position = 'absolute'
        } else if (scrollTop < lastScrollTop) {
            header.style.top = '-69px'
            header.style.position = 'fixed'
        } else {
            header.style.top = '-69px'
            header.style.position = 'fixed'
        }
    } else {
        if (scrollTop < 84) {
            header.style.top = '0px'
            header.style.position = 'absolute'
        } else if (scrollTop < lastScrollTop) {
            header.style.top = '-84px'
            header.style.position = 'fixed'
        } else {
            header.style.top = '-84px'
            header.style.position = 'fixed'
        }
    }

    lastScrollTop = scrollTop;
    console.log(scrollTop);
    console.log(lastScrollTop);
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