(() => {
  const refs = {
    buyNowButton: document.querySelector('.buy-now-button'),
    buyNowModal: document.querySelector('.buy-now'),
    closeLink: document.querySelector('.buy-now-close'),
    header: document.getElementById('hideHeader'),
    body: document.querySelector('body'),
  };
  refs.buyNowButton.addEventListener('click', toggleMenu);
  refs.closeLink.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.closeLink.classList.toggle('is-hidden');
    refs.buyNowModal.classList.toggle('is-hidden');
    refs.header.classList.toggle('hide');
    refs.body.classList.toggle('no-scroll');
  }
})();

let first = document.getElementById('firstCount');
let second = document.getElementById('secondCount');
let third = document.getElementById('thirdCount');
document.getElementById('plusFirst').onclick = function () {
  let count = first.innerHTML;
  // if (count <= 100) {
  //   first.innerHTML++;
  // }
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
  // if (count >= 1) {
  //   first.innerHTML--;
  // }
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
