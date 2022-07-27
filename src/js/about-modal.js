(() => {
  const refs = {
    aboutModalCloseLink: document.querySelector('.about-modal-close-link'),
    openAboutModalBtn: document.querySelector('.about__button'),
    closeAboutModalBtn: document.querySelector('.about-modal__close-btn'),
    aboutModal: document.querySelector('.about-backdrop'),
    bodyAbout: document.querySelector('body'),
  };
  refs.aboutModalCloseLink.addEventListener('click', toggleModal);
  refs.openAboutModalBtn.addEventListener('click', toggleModal);
  refs.closeAboutModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.aboutModal.classList.toggle('is-hidden');
    refs.bodyAbout.classList.toggle('about-modal--open');
  }
})();
