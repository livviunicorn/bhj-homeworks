document.querySelectorAll('.rotator').forEach(initRotator);

function initRotator(rotator) {
  const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
  let index = cases.findIndex(item => item.classList.contains('rotator__case_active'));
  if (index === -1) index = 0;

  function showNext() {
    cases[index].classList.remove('rotator__case_active');

    index = (index + 1) % cases.length;

    const next = cases[index];
    next.classList.add('rotator__case_active');

    if (next.dataset.color) {
      next.style.color = next.dataset.color;
    }

    const speed = Number(next.dataset.speed) || 1000;

    setTimeout(showNext, speed);
  }

  const initialSpeed = Number(cases[index].dataset.speed) || 1000;
  setTimeout(showNext, initialSpeed);
}