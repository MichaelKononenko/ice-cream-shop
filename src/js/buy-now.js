(() => {
  const refs = {
    menuHide: document.querySelector('.mob-menu'),
    heroHide: document.querySelector('.hero'),
    reviewHide: document.querySelector('.customer-reviews'),
    buyNowButton: document.querySelector('.buy-now-button'),
    buyButton: document.querySelector('.mob-menu-btn'),
    buyNowModal: document.querySelector('.buy-now'),
    buyNowOne: document.querySelector('.buy-now-button-one'),
    closeLink: document.querySelector('.buy-now-close'),
    closeIcon: document.querySelector('.close-icon'),
    header: document.getElementById('hideHeader'),
    body: document.querySelector('body'),
  };
  refs.buyNowOne.addEventListener('click', toggleMenu);
  refs.buyNowButton.addEventListener('click', toggleMenu);
  refs.closeLink.addEventListener('click', toggleMenu);
  refs.closeIcon.addEventListener('click', toggleMenu);
  function toggleMenu() {
    // refs.menu.classList.toggle('is-shown');
    refs.heroHide.classList.toggle('hide');
    refs.menuHide.classList.toggle('hide');
    refs.reviewHide.classList.toggle('hide');
    refs.closeLink.classList.toggle('is-hidden');
    refs.buyNowModal.classList.toggle('is-hidden');
    refs.header.classList.toggle('hide');
    refs.body.classList.toggle('no-scrolling');
  }
})();

let first = document.getElementById('firstCount');
let second = document.getElementById('secondCount');
let third = document.getElementById('thirdCount');
document.getElementById('plusFirst').onclick = function () {
  let count = first.innerHTML;
  count < 100 ? first.innerHTML++ : 0;
};
document.getElementById('plusSecond').onclick = function () {
  let count = second.innerHTML;
  count < 100 ? second.innerHTML++ : 0;
};
document.getElementById('plusThird').onclick = function () {
  let count = third.innerHTML;
  count < 100 ? third.innerHTML++ : 0;
};
document.getElementById('minusFirst').onclick = function () {
  let count = first.innerHTML;
  count > 0 ? first.innerHTML-- : 0;
};
document.getElementById('minusSecond').onclick = function () {
  let count = second.innerHTML;
  count > 0 ? second.innerHTML-- : 0;
};
document.getElementById('minusThird').onclick = function () {
  let count = third.innerHTML;
  count > 0 ? third.innerHTML-- : 0;
};
