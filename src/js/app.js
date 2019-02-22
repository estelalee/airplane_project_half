$(document).ready(function () {
    $('.carousel').slick({
        arrows: false,
        autoplay: true,
        fade: false,
        autoplaySpeed: 3000,
        speed: 500,
    });
});

$('.explore__slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: false,
    prevArrow: ".explore__prev",
    nextArrow: ".explore__next",
    responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});