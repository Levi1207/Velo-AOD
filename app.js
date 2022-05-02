function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector("img")) {
            ibg[i].style.backgroundImage =
                "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
        }
    }
}
ibg();

$('.icon-menu').click(function (event) {
    $(this).toggleClass('active')
    $(".menu__body").toggleClass("active");
    $(".body").toggleClass("lock");
})

$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("open");
        $(".menu-overlay").toggleClass("open");
    });
});

if ($('.slider__body').length > 0) {
    $('.slider__body').slick({
        dots: true,
        arrows: false,
        accessibility: false,
        slidesToShow: 1,
        autoplaySpeed: 3000,
        nextArrow: '<button type="button" class"stick-next"></button>',
        prevArrow: '<button type="button" class"stick-next"></button>',
        responsive: [{
            breakpoint: 768,
            settings:{}
        }]
    });
}