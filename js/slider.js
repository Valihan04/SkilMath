const swiper = new Swiper('.swiper', {

    loop: true,

    slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,

    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });