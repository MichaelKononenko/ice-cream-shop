(() => {
  const refs = {
    mapOpenButton: document.querySelector('.map-open-button'),
    mapCloseButton: document.querySelector('.map-close'),
    mapModal: document.querySelector('.map-modal'),
    body: document.querySelector('body'),
  };
  refs.mapOpenButton.addEventListener('click', toggleMenu);
  refs.mapCloseButton.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.mapModal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
