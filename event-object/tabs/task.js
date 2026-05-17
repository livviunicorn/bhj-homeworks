const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((tab, index) => {
    tab.onclick = function () {
        tabs.forEach(item => {
            item.classList.remove('tab_active');
        });

        contents.forEach(item => {
            item.classList.remove('tab__content_active');
        });

        tab.classList.add('tab_active');
        contents[index].classList.add('tab__content_active');
    };
});