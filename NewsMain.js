jQuery(document).ready(function () {

    jQuery(".play-1, .play-2").yu2fvl();

    jQuery(".owl-carousel4").owlCarousel(
        {
            loop: true,
            center: true,
            margin: 20,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 2,

                },
                600: {
                    items: 3,

                },
                1000: {
                    items: 5,
                    nav: true,
                    loop: true
                }
            }
        }
    );

    jQuery(".owl-carousel5").owlCarousel(
        {
            loop: true,
            center: false,
            margin: 10,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 2,

                },
                600: {
                    items: 3,

                },
                1000: {
                    items: 6,
                    nav: false,
                    loop: true
                }
            }
        }
    );

});

function myFunction(x) {
    x.classList.toggle("change");
}