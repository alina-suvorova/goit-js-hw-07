import { galleryItems } from './gallery-items.js';

const imgContainer = document.querySelector('.gallery');
const imgMarkup = createImgCardsMarkUp(galleryItems);

imgContainer.insertAdjacentHTML('beforeend', imgMarkup);

imgContainer.addEventListener('click', onImgContainerClick)

function createImgCardsMarkUp (images){
return images.map ( ({preview, original, description}) => {
return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
</div>`
}).join("");
}

function onImgContainerClick (event){
    
    event.preventDefault();
    
    const isGalleryImgEl = event.target.classList.contains('gallery__image');
    if(!isGalleryImgEl){
        return;
    }

    const activeImgUrl = getImageUrl(event.target);

    const instance = basicLightbox.create (
            `<img src="${activeImgUrl}" width="800" height="600">`
        )
    instance.show()
}

function getImageUrl (img) {
    return img.dataset.source;
}
