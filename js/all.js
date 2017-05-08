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

  var sliderContainer = $('.slider-container');
  var slideCount = 0;
  var isSliderIntervalPause = false;
  var sliderTimer = setInterval(function() {
    console.log(isSliderIntervalPause);
    if (isSliderIntervalPause) {
      return false;
    } else {
      slideCount = slideCount + 100;
      if (slideCount >= 200) {
        slideCount = -100;
      }
      sliderContainer.css({
        transform: "translateX(-" + slideCount.toString() + "%)",
      });
    }
  }, 3000);

  sliderContainer.hover(function() {
    isSliderIntervalPause = true;
  }, function() {
    isSliderIntervalPause = false;
  });

  $('.slide-left').on('click', function(event) {
    event.preventDefault();
    isSliderIntervalPause = true;
    slideCount = slideCount - 100;
    if (slideCount < 0) {
      slideCount = 200;
    }
    sliderContainer.css({
      transform: "translateX(-" + slideCount.toString() + "%)",
    });
  });

  $('.slide-right').on('click', function(event) {
    event.preventDefault();
    isSliderIntervalPause = true;
    slideCount = slideCount + 100;
    if (slideCount === 300) {
      slideCount = 0;
    }
    sliderContainer.css({
      transform: "translateX(-" + slideCount.toString() + "%)",
    });
  });
});
