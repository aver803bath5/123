$(document).ready(function(){
  $(".button-collapse").sideNav();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
  $('select').material_select();

  var slideItems = $('.slide-item');
  var slideCount = 0;
  setInterval(function() {
    var currentSlide = $(slideItems[slideCount]);
    currentSlide.addClass('animated slideOutLeft');
    setTimeout(function(){
      currentSlide.removeClass('active slideOutLeft slideInRight');
      slideCount += 1;
      if (slideCount === 3) {
        slideCount = 0;
      }
      $(slideItems[slideCount]).addClass('active animated slideInRight');
    }, 500);
  }, 3000);
});
