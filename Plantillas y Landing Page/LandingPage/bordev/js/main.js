$(function() {

    'use strict';

    // smooth scroll
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({

                scrollTop: $(hash).offset().top

            }, 850, function() {

                window.location.hash = hash;

            });

        }

    });

    // hide navbar on mobile after click
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // navbar on scroll
    $(window).on('scroll', function() {

        if ($(document).scrollTop() > 50) {

            $(".fixed-top").css({
                "background-color": "#fff",
                "box-shadow": "rgba(0, 0, 0, 0) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0) 0px 3px 1px -2px"
            });

            $(".navbar-brand").css({
                "color": "#333"
            });

            $(".navbar-nav li a").css({
                "color": "#555"
            });

            $(".navbar-light .navbar-toggler").css({
                "color": "#333",
            });


        } else {

            $(".fixed-top").css({
                "background-color": "transparent",
                "transition": ".5s ease-out",
                "box-shadow": "none"
            });

            $("a.navbar-brand").css({
                "color": "#fff"
            });

            $(".navbar-nav li a").css({
                "color": "#fff"
            });


        }

    });

    // filterizr
    $('.filtr-container').imagesLoaded( function() {
        var filterizr = $('.filtr-container').filterizr();
    });

    // portfolio filter
    $('.portfolio-menu li').on('click', function() {
        $('.portfolio-menu li').removeClass('active');
        $(this).addClass('active');
    });

    // magnific popup
    $('.portfolio').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.myimage', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });
    
    // fakeLoader
    $("#fakeLoader").fakeLoader({
        timeToHide:1200, 
        zIndex:"9999",
        spinner:"spinner1",
        bgColor:"#1e90ff", 
    });

});