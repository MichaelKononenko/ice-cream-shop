new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  simulateTouch: true,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.swiper-slide',
  },
  loop: true,
  speed: 800,
  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
    shadow: false,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  a11y: {
    enabled: true,
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    firstSlideMessage: 'This is the first slide',
    lastSlideMessage: 'This is the last slide',
    paginationBulletMessage: 'Go to slide {{index}}',
    notificationClass: 'swiper-notification',
    containerMessage: '',
    containerRoleDescriptionMessage: '',
    itemRoleDescriptionMessage: '',
  },
});
