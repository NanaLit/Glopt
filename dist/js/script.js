const hamburger = document.querySelector('.header__hamburger'),
    menu = document.querySelector('.littlemenu'),
    closeElem = document.querySelector('.littlemenu__close'),
    overlay = document.querySelector('.header__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active'),
    overlay.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active'),
    overlay.classList.remove('active');
});