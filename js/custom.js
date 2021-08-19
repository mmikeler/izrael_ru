document.addEventListener('DOMContentLoaded', function () {
    
  // Calendar
  const myCalendar = new TavoCalendar('#calendar', {
    selected: ['2021-08-20', '2021-09-01'],
    locale: "ru",
    multi_select: false, 
    future_select: false, 
    past_select: false, 
    frozen: false 
  })
})