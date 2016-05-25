$(document).ready(function () {

    /*** scroll script ***/
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });
    /*** the end of the scroll script ***/

    /** nav-menu script **/
    $('.nav-icon').click(function() {
        $('nav ul li').slideToggle();
    });
    /** the end of the nav-menu script **/

    /*** in-cabinet script ***/
    $('.in-cabinet ul li').hover(
        function() {
            if($(window).width() > 960){
                var layer = $(this);
                layer.find('.hover-layer').stop().fadeIn(1000);
                setTimeout(function() {
                    layer.find('.icon').stop().fadeIn();
                }, 500);
                setTimeout(function() {
                    layer.find('.text-white').stop().fadeIn();
                }, 1000);
            }
        },
        function() {
            if($(window).width() > 960){
                $(this).find('.hover-layer').css('display', 'none');
                $(this).find('.text-white').css('display', 'none');
                $(this).find('.icon').css('display', 'none');
            }
        }
    );

    $('.in-cabinet i').click(function() {
        $(this).toggleClass('fa-angle-up fa-angle-down');
        $('.in-cabinet ul .hidden').slideToggle();
    });
    /*** the end of the in-cabinet script ***/

    /*** sliders scripts ***/
    $('.slider-teachers').slick({
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider-reviews').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    /*** the end of sliders scripts ***/

    /*** window-callback ***/
    $('.get-callback').click(function () {
        $('.window').fadeIn();
    });

    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.modal-form')).length) $('.window').fadeOut();
        if ($target.hasClass('close-marker')) $('.window').fadeOut();
    });
    /*** the end of the window-callback script ***/

    /**** animation scripts *****/
    window.sr = ScrollReveal();
    sr.reveal('.steps ul li', {
        reset: true,
        mobile: false
    });
    /** end of animation scripts **/

    /*** image zoom ***/

    /*** end of image zoom ***/

});