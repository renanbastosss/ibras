const photos = document.querySelectorAll('.slide');

const openPhoto = ({ target }) => {
    let photoSelected = target.parentNode;
    let photoOpened = document.querySelector('.photo-selected');

    if (photoOpened != null) {
        photoOpened.classList.remove('photo-selected');
    }

    photoSelected.classList.add('photo-selected');

    if (photoSelected == photoOpened){
        photoSelected.classList.remove('photo-selected');
    }

}

photos.forEach(photo => {
    photo.addEventListener('click', openPhoto);
});