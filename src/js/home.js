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