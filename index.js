const shareButton = document.querySelector('.share-button');
const popupBox = document.querySelector('.popup-w-caret');
const shareImage = document.querySelector('.share-image');

shareButton.addEventListener('click', function() {

  popupBox.classList.toggle('visible');
  shareImage.classList.toggle('share-button-color-change');
  shareButton.classList.toggle('share-button-background-color-change');
});