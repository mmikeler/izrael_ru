$(document).ready(function($){
    
  // Calendar
  const myCalendar = new TavoCalendar('#calendar', {
    selected: ['2021-08-20', '2021-09-01'],
    locale: "ru",
    multi_select: false, 
    future_select: false, 
    past_select: false, 
    frozen: false 
  })

  // Mobile nav
  $('body').on('click','.menu-bar', function (e) {
    const nav = $('.nav-wrapper');
    $(e.target).toggleClass('toogle');
    $(nav).slideToggle('1000');
    $('body').toggleClass('no-scroll');
  })

  // Mobile nav with scroll
  $(window).on('scroll', function () {
    // pageYOffset
    
  })

  // Media preview
  $('.media-preview').on('click', function (e) {
    const media = e.target.closest('.media-preview').dataset.url;
    $('.popup-overlay video').attr('src', media);
    $('.popup-overlay').fadeIn(300);
    $('body').toggleClass('no-scroll');
  })
  $('.popup-overlay i').on('click', function (e) {
    $(e.target).closest('.popup-overlay').fadeOut(0);
    $(e.target).closest('.popup-wrapper').find('video').attr('src', '');
    $('body').toggleClass('no-scroll');
  })
  $('.popup-wrapper').on('click', function (e) {
    $(e.target).closest('.popup-overlay').fadeOut(0);
    $(e.target).closest('.popup-wrapper').find('video').attr('src', '');
    $('body').toggleClass('no-scroll');
  })
  $('.popup').on('click', function (e) {
    e.stopPropagation();
  })

})