const sliderScreen = document.querySelector('.sliders');
const arrowLeft = document.querySelector('.arrow.back');
const arrowRight = document.querySelector('.arrow.forward');

let slidePosition = 0;
const goRight = () => {
    if (slidePosition > -200) {
        slidePosition += -100.5;
        sliderScreen.style.marginLeft = slidePosition + 'vw';
    } else {
        slidePosition = 0;
        sliderScreen.style.marginLeft = slidePosition + 'vw';
    }
}

const goLeft = () => {
    if (slidePosition < 0) {
        slidePosition += 101;
        sliderScreen.style.marginLeft = slidePosition + 'vw';
    } else {
        slidePosition = -201;
        sliderScreen.style.marginLeft = slidePosition + 'vw';
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

        if (window.screen.width < 600) {
            return
        } else {
            let photoSelected = element.target
            let imgNumber = photoSelected.id.slice(3)
            let marginSlide = imgNumber * 10 - 10
            let marginSmallContainer = imgNumber * 120 - 470

            firstPhoto.style.marginLeft = `-${marginSlide}%`

            if (imgNumber <= 3) {
                smallPhotosContainer.style.marginLeft = '15px'
            } else {
                smallPhotosContainer.style.marginLeft = `-${marginSmallContainer}px`
            }

            let elementSelected = document.querySelector('.selected')
            if (elementSelected != null) {
                elementSelected.classList.remove('selected')
            }

            photoSelected.classList.add('selected')
        }

    })
});


// ---------------------------------------- GALERIA MOBILE ----------------------------------------//

// const gallery = document.querySelectorAll('.gallery-small-img');
// const modalPhotos = document.querySelector('.gallery-modal');
// const photoContainer = document.querySelector('.gallery-modal-container img')
// const closerPhoto = document.querySelector('.container-imagem span')

// gallery.forEach(photo => {
//     photo.addEventListener('click', () => {
//         if (window.screen.width < 600) {
//         let srcPhoto = photo.getAttribute('src');

//         modalPhotos.style.display = 'block';
//         photoContainer.setAttribute('src', srcPhoto)
//         }
//     });
// });

// function closeModal() {
//     modalPhotos.style.display = 'none';
// }

// modalPhotos.addEventListener('click', closeModal);


// ---------------------------------------- HEADER BAR ----------------------------------------//

const menuItens = document.querySelectorAll('.menus')

const goToSection = (event) => {
    const elementId = event.target.id
    const toSection = document.querySelector(`${elementId}`).offsetTop

    if (window.screen.width > 900) {
        window.scroll({
            top: toSection - 50,
            behavior: "smooth",
        })
    } else if (window.screen.width < 900 & window.screen.width > 690) {
        window.scroll({
            top: toSection - 54,
            behavior: "smooth",
        })
    } else {
        window.scroll({
            top: toSection - 40,
            behavior: "smooth",
        });
    }

    const itemSelected = document.getElementById(`${elementId}`)
    itemSelected.classList.add('active')

    if (window.screen.width < 690) {
        closeMenu()
    }

}

menuItens.forEach(item => {
    item.addEventListener('click', goToSection)
});

function changeMenuItem() {
    let home = document.getElementById('#home')
    let aboutUs = document.getElementById('#about-us')
    let doe = document.getElementById('#doe')
    let contactUs = document.getElementById('#contact-us')
    let services = document.getElementById('#services')
    let gallery = document.getElementById('#gallery')
    let scroll = this.scrollY;

    if (scroll >= 0 || scroll < 300) {
        document.querySelector('.active').classList.remove('active');
        home.classList.add('active')
    }

    if (scroll >= 400) {
        document.querySelector('.active').classList.remove('active');
        aboutUs.classList.add('active')
    }

    if (scroll >= 1650) {
        document.querySelector('.active').classList.remove('active');
        doe.classList.add('active')
    }

    if (scroll >= 2600) {
        document.querySelector('.active').classList.remove('active');
        contactUs.classList.add('active');
    }

    if (scroll >= 3300) {
        document.querySelector('.active').classList.remove('active');
        services.classList.add('active');
    }

    if (scroll > 4400) {
        document.querySelector('.active').classList.remove('active');
        gallery.classList.add('active');
    }

}


const header = document.querySelector('header');
let lastScrollTop = 0;

const checkScroll = () => {
    let scrollTop = window.scrollY

    if (window.screen.width < 690) {
        if (scrollTop < 94) {
            header.style.top = '0px'
            header.style.position = 'absolute'
        } else if (scrollTop < lastScrollTop) {
            header.style.top = '-50px'
            header.style.position = 'fixed'
        } else {
            header.style.top = '-50px'
            header.style.position = 'fixed'
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
    }

    lastScrollTop = scrollTop;
};

window.addEventListener('scroll', function () {
    changeMenuItem();
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

// menu.addEventListener('click', function (e) {
//     if (e.target != this && mobileScreen) {
//         closeMenu();
//     }
// })

