(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open-btn'),
    closeMenuBtn: document.querySelector('.menu-close-btn'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
    menu_list: document.querySelector('.mob-menu__list'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menu_list.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-shown');
    refs.body.classList.toggle('no-scroll');
  }
})();

//Animated scroll

$(document).on('click', '.header__link', function (e) {
  e.preventDefault();
  let id = $(this).attr('href'),
    topSpace = 0; //This variable should be equal to navigation menu size if it is fixed.
  $('html, body').animate(
    {
      scrollTop: $(id).offset().top - topSpace,
    },
    800 // This is the animation speed.
  );
});

$(document).on('click', '.mob-menu__link', function (e) {
  e.preventDefault();
  let id = $(this).attr('href'),
    topSpace = 0; //This variable should be equal to navigation menu size if it is fixed.
  $('html, body').animate(
    {
      scrollTop: $(id).offset().top - topSpace,
    },
    800 // This is the animation speed.
  );
});
