
$(document).ready(function(){
    var swiperLeft = new Swiper('.swiper-left', {
        slidesPerView: 1,
        spaceBetween: 100,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
            //type: 'fraction',
            clickable: true,
        },
        /*autoplay: {
            delay: 2000,
        },*/
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    var swiperRightr = new Swiper('.swiper-right', {
        slidesPerView: 1,
        spaceBetween: 100,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
        }
    });
});
