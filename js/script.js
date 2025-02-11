$(function () {
    //gnb
    $('.gnb > li').on('mouseover', function () {
        $(this).find('.subMenu').stop().slideDown();
    });
    $('.gnb > li').on('mouseleave', function () {
        $(this).find('.subMenu').stop().slideUp();
    });


    //swiper-living_banner
    var swiper = new Swiper(".living_banner", {
        slidesPerView: 2,
        spaceBetween: 20,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });
    //swiper-mobile menu
    var swiper = new Swiper(".gnb_area.mobile", {
        slidesPerView: 5,
        spaceBetween: 20,
        freeMode: false,
        cssMode: false
    });
})