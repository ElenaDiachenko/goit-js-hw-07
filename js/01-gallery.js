import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerRef = document.querySelector('.gallery');

const makeItemMarkup = item => {
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src= ${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div>
  `
}
const makeAllItemMarkup = galleryItems.map(makeItemMarkup)
  .join('\n');

containerRef.insertAdjacentHTML('beforeend', makeAllItemMarkup)

console.log(makeItemMarkup);


