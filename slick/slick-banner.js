$(document).ready(function(){
  $('.banners').slick({
    dots: true,
    autoplay:true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    prevArrow: "<img src='./images/arrow2.svg' class='prev' alt='1'>",
    nextArrow: "<img src='./images/arrow1.svg' class='next' alt='2'>",
    dotsClass: "my-dots"
  });
});
