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

    /**** animation scripts *****/
    window.sr = ScrollReveal();
    sr.reveal('.steps ul li', {
        reset: true,
        mobile: false
    });
    /** end of animation scripts **/

});