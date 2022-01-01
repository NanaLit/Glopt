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

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: {
                    required: "Пожалуйста, введите свой номер телефона"
                },
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };
    validateForms('#consultation-form');
    validateForms('#consultation');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }
        
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('form').trigger('reset');
        });
        return false;
    });
});


