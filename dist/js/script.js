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

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/all/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/all/right.png"></button>'
    });
});