// export const renderImages = (images) => {
//     const gallery = document.getElementById('gallery');
//     gallery.innerHTML = images.hits.map(hit => 
//       `<div class="image-card">
//         <img src="${hit.webformatURL}" alt="${hit.tags}">
//         <p>Likes: ${hit.likes}</p>
//       </div>`
//     ).join('');
//   };

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function clearGallery() {
  const gallery = document.getElementById('gallery');
  if (gallery) {
  gallery.innerHTML = '';
 }
}

export function renderImages(images) {
  const gallery = document.getElementById('gallery');
  if (gallery) {
  images.forEach(image => {
    const imgElement = document.createElement('a');
    imgElement.href = image.largeImageURL;
    imgElement.innerHTML = `<img src="${image.webformatURL}" alt="${image.tags}" title="${image.tags}"/>`;
    gallery.appendChild(imgElement);
  });
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
 }
}

export function showLoader() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'block';
 }
}

export function hideLoader() {
 const loader = document.getElementById('loader')
 if (loader) {
  loader.style.display = 'none';
 }
}

export function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight'
  });
}
  