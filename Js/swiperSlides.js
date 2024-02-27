var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    // slidesPerGroup: 3,
    // loopFillGroupWithBlank: true,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   <!-- Swiper JS -->
//   <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

//   <!-- Initialize Swiper -->
//   <script>
    // var swiper = new Swiper(".slide-content", {
    //   spaceBetween: 30,
    //   centeredSlides: true,
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    // });
//   </script>