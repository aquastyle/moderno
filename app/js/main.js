$(function () {
 
    $(".tare-star").rateYo({
        rating: 3.6,
        starWidth: "12px",
        readOnly: true
      });

      $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
      });

    var mixer = mixitup('.product__inner-box');

});