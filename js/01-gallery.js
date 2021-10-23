import { galleryItems } from './gallery-items.js';

const imgContainer = document.querySelector('.gallery');
const imgMarkup = createImgCardsMarkUp(galleryItems);

imgContainer.insertAdjacentHTML('beforeend', imgMarkup);

imgContainer.addEventListener('click', onImgContainerClick)

function createImgCardsMarkUp (images){
return images.map ( ({preview, original, description}) => {
return `<div class="gallery__item">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
</div>`
}).join("");
}

function onImgContainerClick (event){
    const isGalleryImgEl = event.target.classList.contains('gallery__image');
    if(!isGalleryImgEl){
        return;
    }

    const activeLargeImg = event.target.dataset.source;

    const instance = basicLightbox.create (
            `<img src="${activeLargeImg}" width="800" height="600">`
         )
        
        instance.show()
}



