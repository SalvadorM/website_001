$(function() {
  //navigation animation
  function navTog(){
    var currS = $(this).scrollTop();

    if (currS < 15){
      $('.burger-box').removeClass('scrollNav');
      $('.icon').removeClass('icontog');
    }
    else{
      $('.icon').addClass('icontog');
      $('.burger-box').addClass('scrollNav');
    }
  }
  $(window).scroll( navTog );

  //Menu toggle
  $('.burger-box').click(function(){
    $('.links-nav').toggleClass('togMenu');
  });

});
