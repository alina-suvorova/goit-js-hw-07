import { galleryItems } from './gallery-items.js';

const imgContainer = document.querySelector('.gallery');
const imgMarkup = createImgCardsMarkUp(galleryItems);

imgContainer.insertAdjacentHTML('beforeend', imgMarkup);

imgContainer.addEventListener('click', onImgContainerClick)

function createImgCardsMarkUp (images){
return images.map ( ({preview, original, description}) => {
return `
<a class="gallery__item" href="${original}">
<img class="gallery__image" data-source = "${original}" src="${preview}" alt="${description}" />
</a>
`
}).join("");
}

function onImgContainerClick (event){
    
    event.preventDefault();

    const isGalleryImgEl = event.target.classList.contains('gallery__image');
    if(!isGalleryImgEl){
        return;
    }

    // const activeImgUrl = getImageUrl(event.target);

    new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});

}

// function getImageUrl (img){
//     return img.dataset.source;
// }