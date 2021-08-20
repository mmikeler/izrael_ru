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

})