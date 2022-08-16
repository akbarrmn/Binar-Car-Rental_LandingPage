$(".carousel").owlCarousel({
    margin: 30,
    loop: true,
    autoplay: true,
    dots: false,
    nav: true,
    navText: ["<img src='./icon/Left.png'>", "<img src='./icon/Right.png'>"],

    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            stagePadding: 200,
            items: 1,
        },
        1200: {
            stagePadding: 300,
            items: 1,
        },
        1300: {
            stagePadding: 400,
            items: 1,
        }
    }
});