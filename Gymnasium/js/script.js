$(function () {

    'use strict';

    // Slider JS Start

    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    // About Video Start

    new VenoBox({
        selector: ".my_video"
    });

    new VenoBox({
        selector: '.my-image',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });

    // Testimonial Part Start

    $('.test-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        speed: 1000,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Counter Up

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('.logo_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
        nextArrow: '<i class="fas fa-angle-right next-ar"></i>',
        prevArrow: '<i class="fas fa-angle-left prev-ar"></i>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });

    //   Menu Fix

    var navOff = $('.navigation').offset().top;

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > navOff) {
            $('.navigation').addClass('manu-fix');
        } else {
            $('.navigation').removeClass('manu-fix');
        }
    });

    // Back to Top


    $('.back-to-top').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        });
    });

    $(window).scroll(function () {
        var scrolling2 = $(this).scrollTop();

        if (scrolling2 > 150) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut()
        }
    });

});