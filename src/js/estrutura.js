// // ---------------------------------------- GALERIA MOBILE ----------------------------------------//

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


// ------------------------ ESTRUTURA (GALERIA) ------------------------ //

const photos = document.querySelectorAll('.slide');

const openPhoto = ({ target }) => {
    let photoSelected = target.parentNode;
    let photoOpened = document.querySelector('.photo-selected');

    if (photoOpened != null) {
        photoOpened.classList.remove('photo-selected');
    }

    photoSelected.classList.add('photo-selected');

    if (photoSelected == photoOpened){ // -----> Para fechar a foto selecionada
        photoSelected.classList.remove('photo-selected');
    }

}

photos.forEach(photo => {
    photo.addEventListener('click', openPhoto);
});