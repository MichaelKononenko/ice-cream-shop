(() => {
  const refs = {
    mobileButton: document.querySelector('button[data-buy-now]'),
    buyNowModal: document.querySelector('div[data-buy-now-modal]'),
    headerButton: document.querySelector('button[data-buy-now-menu]'),
    closeLink: document.querySelector('.buy-now-close'),
    closeIcon: document.querySelector('.close-icon'),
    body: document.querySelector('body'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.headerButton.addEventListener('click', headerShop);
  function headerShop() {
    refs.closeLink.classList.remove('is-hidden');
    refs.buyNowModal.classList.remove('is-hidden');
    refs.body.classList.add('no-scroll');
  }

  refs.closeLink.addEventListener('click', closeShop);
  refs.closeIcon.addEventListener('click', closeShop);

  refs.mobileButton.addEventListener('click', mobileShop);
  function mobileShop() {
    refs.closeLink.classList.remove('is-hidden');
    refs.buyNowModal.classList.remove('is-hidden');
  }

  refs.closeLink.addEventListener('click', closeShop);
  refs.closeIcon.addEventListener('click', closeShop);
  function closeShop() {
    refs.closeLink.classList.add('is-hidden');
    refs.buyNowModal.classList.add('is-hidden');
    refs.menu.classList.contains('is-shown')
      ? null
      : refs.body.classList.remove('no-scroll');
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

const shoppingCart = {
  iceCream: document.getElementById('firstCount'),
  iceCofee: document.getElementById('secondCount'),
  milkShake: document.getElementById('thirdCount'),
  addDessert(dessert) {
    this[dessert].innerHTML++;
    console.log(`${dessert} was added`);
  },
  removeDessert(dessert) {
    this[dessert].innerHTML > 0
      ? this[dessert].innerHTML--
      : (this[dessert].innerHTML = 0);
    console.log(`${dessert} was removed`);
  },
};

document.getElementById('plusFirst').onclick = () => {
  shoppingCart.addDessert('iceCream');
};

document.getElementById('plusSecond').onclick = () =>
  shoppingCart.addDessert('iceCofee');

document.getElementById('plusThird').onclick = () =>
  shoppingCart.addDessert('milkShake');

document.getElementById('minusFirst').onclick = () =>
  shoppingCart.removeDessert('iceCream');

document.getElementById('minusSecond').onclick = () =>
  shoppingCart.removeDessert('iceCofee');

document.getElementById('minusThird').onclick = () =>
  shoppingCart.removeDessert('milkShake');
