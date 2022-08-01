const sliderScreen = document.querySelector('.sliders');
const arrowLeft = document.querySelector('.arrow.back');
const arrowRight = document.querySelector('.arrow.forward');

let slidePosition = 0;
const goRight = () => {
    if (slidePosition > -200) {
    slidePosition += -100;
    sliderScreen.style.marginLeft = slidePosition+'vw';
    } else {
        slidePosition = 0;
        sliderScreen.style.marginLeft = slidePosition+'vw';
    }
}

const goLeft = () => {
    if (slidePosition < 0) {
    slidePosition += 100;
    sliderScreen.style.marginLeft = slidePosition+'vw';
    } else {
        slidePosition = -200;
        sliderScreen.style.marginLeft = slidePosition+'vw';
    }
}

arrowRight.addEventListener('click', goRight);
arrowLeft.addEventListener('click', goLeft);


// ---------------------------------------- GALLERY ----------------------------------------//

const smallPhotos = document.querySelectorAll('.manual-btn');
const firstPhoto = document.querySelector('.slide.first');
const smallPhotosContainer = document.querySelector('.manual-navigation')

smallPhotos.forEach(photo => {
    photo.addEventListener('click', (element) => {
        let photoSelected = element.target
        let imgNumber = photoSelected.id.slice(3)
        let marginSlide = imgNumber*10-10
        let marginSmallContainer = imgNumber*120-470

        firstPhoto.style.marginLeft = `-${marginSlide}%`

        if (imgNumber <=3) {
            smallPhotosContainer.style.marginLeft = '15px'
        } else {
            smallPhotosContainer.style.marginLeft = `-${marginSmallContainer}px`
        }

        let elementSelected = document.querySelector('.selected')
        if (elementSelected != null) {
            elementSelected.classList.remove('selected')
        }

        photoSelected.classList.add('selected')
        
    })
});


// ---------------------------------------- HEADER BAR ----------------------------------------//

const menuItens = document.querySelectorAll('.menus')

const goToSection = (event) => {
    const elementId = event.target.id
        const toSection = document.querySelector(`${elementId}`).offsetTop

        if (mobileScreen) {
            window.scroll({
                top: toSection,
                behavior: "smooth",
            })
        } else {
            window.scroll({
                top: toSection-55,
                behavior: "smooth",
            });
        }

        const itemSelected = document.getElementById(`${elementId}`)
        itemSelected.classList.add('active')

        console.log(elementId);
        console.log(toSection);
}

menuItens.forEach(item => {
    item.addEventListener('click', goToSection)
});

function changeMenuItem() {
    let home = document.getElementById('#home')
    let ourMission = document.getElementById('#our-mission')
    let historic = document.getElementById('#historic')
    let contactUs = document.getElementById('#contact-us')
    let newSection = document.getElementById('#new-section')
    let gallery = document.getElementById('#gallery')
    let footer = document.getElementById('#footer')
    let scroll = this.scrollY;

    if (scroll >= 0 || scroll < 300) {
        document.querySelector('.active').classList.remove('active');
        home.classList.add('active')
    }

    if (scroll >= 400) {
        document.querySelector('.active').classList.remove('active');
        ourMission.classList.add('active')
    }

    if (scroll >= 1350) {
        document.querySelector('.active').classList.remove('active');
        historic.classList.add('active')
    }

    if (scroll >= 2300) {
        document.querySelector('.active').classList.remove('active');
        contactUs.classList.add('active');
    }

    if (scroll >= 3000) {
        document.querySelector('.active').classList.remove('active');
        newSection.classList.add('active');
    }

    if (scroll > 3700) {
        document.querySelector('.active').classList.remove('active');
        gallery.classList.add('active');
    }

    if (scroll > 4500) {
        document.querySelector('.active').classList.remove('active');
        footer.classList.add('active');
    }
}


const header = document.querySelector('header');
let lastScrollTop = 0;

const checkScroll = () => {
    let scrollTop = window.scrollY

    if (scrollTop < 139) {
        header.style.top = '0px'
        header.style.position = 'absolute'
    } else if (scrollTop < lastScrollTop) {
        header.style.top = '-84px'
        header.style.position = 'fixed'
    } else {
        header.style.top = '-84px'
        header.style.position = 'fixed'
    }
    console.log(scrollTop);
    console.log(lastScrollTop);

    lastScrollTop = scrollTop;
};

window.addEventListener('scroll', function () {
    changeMenuItem();
    checkScroll();
})

// ----------------- MOBILE ---------------- //

const menuOpener = document.querySelector('.menu img');
const menu = document.querySelector('.menu nav');
const mobileScreen = window.screen.width < 800

menuOpener.addEventListener('click', () => {
    menu.style.display == 'block' ? closeMenu() : openMenu();
})

menu.addEventListener('click', function (e) {
    if (e.target != this && mobileScreen) {
        closeMenu();
    }
})

function closeMenu() {
    menu.style.display = 'none';
}

function openMenu() {
    menu.style.display = 'block';
}