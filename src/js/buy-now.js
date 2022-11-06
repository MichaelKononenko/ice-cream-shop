(() => {
  const refs = {
    mobileButton: document.querySelector('button[data-buy-now]'),
    buyNowModal: document.querySelector('div[data-buy-now-modal]'),
    headerButton: document.querySelector('button[data-buy-now-menu]'),
    closeLink: document.querySelector('.buy-now-close'),
    closeIcon: document.querySelector('.close-icon'),
    body: document.querySelector('body'),
    menu: document.querySelector('.mob-menu'),
    cartButton: document.querySelector('buy-now__cart'),
    quantity: document.querySelector('quantity'),
  };

  function disableLink() {
    cartButton.onclick.preventDefault();
    quantity.onclick.preventDefault();
  }

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

class Shop {
  constructor({ name, price, amount } = {}) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.quantity = 0;
  }

  addToCart() {
    this.amount -= 1;
    this.quantity += 1;
    cart.totalQuantity += 1;
    cart.totalPrice += this.price;

    if (!cart.items.includes(this.name)) {
      cart.items.push(this.name);
    }

    this.updateUIQuantity();
    console.log(cart);
  }
  removeFromCart() {
    this.amount += 1;
    this.quantity -= 1;
    cart.totalQuantity -= 1;
    cart.totalPrice -= this.price;

    if (this.quantity < 1) {
      const index = cart.items.indexOf(this.name);
      cart.items.splice(index, 1);
    }

    this.updateUIQuantity();
    console.log(cart);
  }

  updateUIQuantity() {
    document.getElementById(this.name).innerHTML = this.quantity;
  }
}

const cart = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const iceCream = new Shop({ name: 'iceCream', price: 1, amount: 100 });
const iceCoffee = new Shop({ name: 'iceCoffee', price: 2, amount: 100 });
const milkShake = new Shop({ name: 'milkShake', price: 3, amount: 100 });

document.getElementById('plusFirst').onclick = () => {
  iceCream.addToCart();
};
document.getElementById('minusFirst').onclick = () => iceCream.removeFromCart();

document.getElementById('plusSecond').onclick = () => iceCoffee.addToCart();

document.getElementById('minusSecond').onclick = () =>
  iceCoffee.removeFromCart();

document.getElementById('plusThird').onclick = () => milkShake.addToCart();

document.getElementById('minusThird').onclick = () =>
  milkShake.removeFromCart();
