(() => {
  const refs = {
    buyNowButton: document.querySelector('button[data-buy-now]'),
    buyNowModal: document.querySelector('div[data-buy-now-modal]'),
    buyNowOne: document.querySelector('button[data-buy-now-menu]'),
    closeLink: document.querySelector('.buy-now-close'),
    closeIcon: document.querySelector('.close-icon'),
    body: document.querySelector('body'),
  };
  refs.buyNowOne.addEventListener('click', toggleMenu);
  refs.buyNowButton.addEventListener('click', toggleMenu);
  refs.closeLink.addEventListener('click', toggleMenu);
  refs.closeIcon.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.closeLink.classList.toggle('is-hidden');
    refs.buyNowModal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scrolling');
  }

  $(function () {
    let header = $('.header');
    let hero = $('.hero');
    let heroHeight = hero.height();

    $(window).scroll(function () {
      if ($(this).scrollTop() < heroHeight) {
        header.css({ background: 'transparent' });
      } else {
        header.css({ background: 'rgba(241, 154, 154, 0.3)' });
      }
    });
  });
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
