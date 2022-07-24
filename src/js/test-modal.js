(() => {
  const refs = {
    buyNowButton: document.querySelector('.buy-now-button'),
    buyNowModal: document.querySelector('.buy-now'),
    closeLink: document.querySelector('.buy-now-close'),
    body: document.querySelector('body'),
  };
  refs.buyNowButton.addEventListener('click', toggleMenu);
  refs.closeLink.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.closeLink.classList.toggle('is-hidden');
    refs.buyNowModal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
