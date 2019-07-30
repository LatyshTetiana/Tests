$(document).ready(function() {
  $('.slick-main').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<div class="pointer-left"><img src="img/prev.png"></div>',
    nextArrow: '<div class="pointer-right"><img src="img/next.png"></div>',
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  $('.slick-main').slickLightbox({
    itemSelector: 'a',
    navigateByKeyboard: true
  });
});
