$(document).ready(function () {

    // NAVBAR
    $('.nav-menu').click(function(){
        $('.nav').toggleClass('nav-open');
      });

      // Toggle Sort by Price
      $('.ascending').click(function(){
        $('.ascend').addClass('hidden');
        $('.descend').removeClass('hidden');
      });

      $('.descending').click(function(){
        $('.descend').addClass('hidden');
        $('.ascend').removeClass('hidden');
      });

      //BULMA FOR SORTING
      $('.dropdown-trigger').click(function(e){
        $('.sorttrigger').toggleClass('is-active');
        e.stopPropagation();
      });
});

$('.responsive-slide').slick({
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  autoplay: true,
  slidesToScroll: 3,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});