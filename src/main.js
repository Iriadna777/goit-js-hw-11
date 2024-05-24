import { fetchImages } from './js/pixabay-api.js';
import { clearGallery, renderImages, showLoader, hideLoader, showError } from './js/render-functions.js';
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// document.querySelector('.search-form').addEventListener('submit', async event => {
//   event.preventDefault();
//   const query = document.getElementById('search-input').value.trim();
//   if (!query) {
//     alert('Please enter a search term');
//     return;
//   }
//   try {
//     const data = await fetchImages(query);
//     renderImages(data);
//   } catch (error) {
//     console.error('Error fetching images:', error);
//   }
// });

// document.addEventListener('DOMContentLoaded', () => {
  
//   iziToast.show({
//     position: 'topCenter',
//     message: 'Sorry, there are no images matching your search query. Please try again!'
//   });

// });

const form = document.getElementById('search-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = document.getElementById('search-input').value.trim();
  if (!query) {
    showError('Please enter a search term');
    return;
  }
  
  clearGallery();
  showLoader();
  
  try {
    const images = await fetchImages(query);
    if (images.length === 0) {
      showError('Sorry, there are no images matching your search query. Please try again!');
    } else {
      renderImages(images);
    }
  } catch (error) {
    showError('Failed to fetch images. Please try again later.');
  } finally {
    hideLoader();
  }
});


 


