import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Створення розмітки

const galleryEl = document.querySelector(".gallery");
const list = createImgList(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", list);

function createImgList(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </div>`;
    })
    .join("");
}

// Ініціалізація бібліотеки

var lightbox = new SimpleLightbox(".gallery a");

const captionsData = (lightbox.options.captionsData = "alt");
const captionDelay = (lightbox.options.captionDelay = 250);
