var cards = document.querySelectorAll('.products__card');
[...cards].forEach(card => {
  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
  });
});
