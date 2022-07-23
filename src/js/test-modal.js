(() => {
  const refs = {
    openModalButton: document.querySelector('.test-modal-open-button'),
    closeModalButton: document.querySelector('.test__backdrop--close'),
    testModal: document.querySelector('.test__backdrop'),
    testLink: document.querySelector('.test__link'),
    body: document.querySelector('body'),
  };
  refs.openModalButton.addEventListener('click', toggleMenu);
  refs.closeModalButton.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.testLink.classList.toggle('is-hidden');
    refs.testModal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
