(function($) {

  'use stirct';

  if($('.mv-slider')[0]){
    $('.mv-slider').slick({
     dots:true,
     arrows:false,
     fade:true,
     speed:1500,
     autoplaySpeed:3000,
    });
  }

  $('.header .nav-open').on('click',function(){
    $('.header').toggleClass('is-open')
    $('.body').toggleClass('is-open')
  })

})(jQuery);