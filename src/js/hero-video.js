(() => {
  const refs = {
    openVideoBtn: document.querySelector('.hero__btn--product'),
    closeVideoBtn: document.querySelector('.btn__icon--video'),
    video: document.querySelector('.backdrop'),
    body: document.querySelector('body'),
  };

  refs.openVideoBtn.addEventListener('click', toggleVideo);
  refs.closeVideoBtn.addEventListener('click', toggleVideo);

  function toggleVideo() {
    refs.video.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openVideoBtn: document.querySelector('.hero__btn--made'),
    closeVideoBtn: document.querySelector('.btn__icon--video-made'),
    video: document.querySelector('.backdrop-made'),
    body: document.querySelector('body'),
  };

  refs.openVideoBtn.addEventListener('click', toggleVideo);
  refs.closeVideoBtn.addEventListener('click', toggleVideo);

  function toggleVideo() {
    refs.video.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
