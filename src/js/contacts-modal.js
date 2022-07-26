(() => {
  const refs = {
    contactsCloseLink: document.querySelector('.overlay-link-close'),
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.contactsCloseLink.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('no-scroll');
    refs.modal.classList.toggle('is-hidden');
  }
})();
