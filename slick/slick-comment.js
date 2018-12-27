$(document).ready(function(){
  $('.comments').slick({
    autoplay:true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    prevArrow: "<img src='./images/arrow2.svg' class='prev-comment' alt='1'>",
    nextArrow: "<img src='./images/arrow1.svg' class='next-comment' alt='2'>"
  });
});
