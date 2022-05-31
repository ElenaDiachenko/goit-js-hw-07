import { galleryItems } from './gallery-items.js';
// Change code below this line


const containerRef = document.querySelector('.gallery');

containerRef.addEventListener('click', onOpenModal);

function onOpenModal(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }
    const html = `
     <img src = "${e.target.dataset.source}" 
    />
	`

    const instance = basicLightbox.create(html, {
        onShow: (instance) => console.log('onShow', instance),
        onClose: (instance) => console.log('onClose', instance)
    })

    instance.show((instance) => console.log('finished show()', instance))
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




// const containerRef = document.querySelector('.gallery');

// containerRef.addEventListener('click', onOpenModal);

// function onOpenModal(e) {
//     e.preventDefault();
//     if (e.target.nodeName !== 'IMG') {
//          return
//      }
//     const instance = basicLightbox.create(`
// 	 <img src = "${e.target.dataset.source}" 
//     />
// `)
//     instance.show()
    
    
// }

// const makeItemMarkup = item => {
//   return `
//   <div class="gallery__item">
//   <a class="gallery__link" href="${item.original}">
//     <img
//       class="gallery__image"
//       src= ${item.preview}
//       data-source=${item.original}
//       alt=${item.description}
//     />
//   </a>
// </div>
//   `
// }
// const makeAllItemMarkup = galleryItems.map(makeItemMarkup)
//   .join('\n');

// containerRef.insertAdjacentHTML('beforeend', makeAllItemMarkup)





