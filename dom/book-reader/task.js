const book = document.getElementById('book');
const controls = document.querySelector('.book__control_font-size');
const buttons = controls.querySelectorAll('.font-size');

controls.addEventListener('click', (event) => {
    const target = event.target;

    if (!target.classList.contains('font-size')) {
        return;
    }

    event.preventDefault();

    buttons.forEach(btn => {
        btn.classList.remove('font-size_active');
    });

    target.classList.add('font-size_active');

    book.classList.remove('book_fs-small', 'book_fs-big');

    const size = target.dataset.size;

    if (size === 'small') {
        book.classList.add('book_fs-small');
    }

    if (size === 'big') {
        book.classList.add('book_fs-big');
    }
});