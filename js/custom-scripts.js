$(document).ready(function () {

    /*** scroll script ***/
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });
    /*** the end of the scroll script ***/

    /*** sliders scripts ***/
    $('.slider-teachers').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1/*,
        responsive: [
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            }
        ]*/
    });

    $('.slider-reviews').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1/*,
         responsive: [
         {
         breakpoint: 1340,
         settings: {
         slidesToShow: 3
         }
         },
         {
         breakpoint: 1024,
         settings: {
         slidesToShow: 2
         }
         },
         {
         breakpoint: 800,
         settings: {
         slidesToShow: 1
         }
         }
         ]*/
    });
    /*** the end of sliders scripts ***/

});