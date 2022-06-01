import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const containerRef = document.querySelector('.gallery');

// containerRef.addEventListener('click', onOpenModal);


const makeItemMarkup = item => {
    return `
    <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="Image description" />
</a>
  `
}
const makeAllItemMarkup = galleryItems.map(makeItemMarkup)
  .join('\n');

containerRef.insertAdjacentHTML('beforeend', makeAllItemMarkup)

