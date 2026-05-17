const reveals = Array.from(document.querySelectorAll('.reveal'));

function revealCheck() {
  reveals.forEach(reveal => {
    const { top, bottom } = reveal.getBoundingClientRect();

    if (bottom > 0 && top < window.innerHeight) {
      reveal.classList.add('reveal_active');
    } else {
      reveal.classList.remove('reveal_active');
    }
  });
}

window.addEventListener('scroll', revealCheck);

revealCheck();