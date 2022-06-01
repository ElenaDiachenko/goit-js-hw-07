import { galleryItems } from './gallery-items.js';
// Change code below this line


const containerRef = document.querySelector('.gallery');

containerRef.addEventListener('click', onOpenModal);

function onOpenModal(e) {
  e.preventDefault();
  window.addEventListener('keydown', onEscCloseModal);

    if (e.target.nodeName !== 'IMG') {
        return
    }
       const instance = basicLightbox.create(`
	 <img src = "${e.target.dataset.source}" 
     />
 `)
  instance.show();
  
  function onEscCloseModal(e) {
    if (e.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscCloseModal)
    }
  }
    
}

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

