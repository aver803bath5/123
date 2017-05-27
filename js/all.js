$(document).ready(function(){
  $('.modal').modal();
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
  var sliderPoints = $('.slider-point').siblings();
  var activeSlideID = slideCount % 3;
  var sliderPointerMovement = function() {
    activeSlideID = slideCount % 3;
    $(sliderPoints).removeClass('active');
    $(sliderPoints[activeSlideID]).addClass('active');
  };
  var nextSliderMovement = function() {
    slideCount = slideCount + 100;
    if (slideCount > 200) {
      slideCount = 0;
    }
    sliderContainer.css({
      transform: "translateX(-" + slideCount.toString() + "%)",
    });
    sliderPointerMovement();
  };
  var previousSliderMovement = function() {
    slideCount = slideCount - 100;
    if (slideCount < 0) {
      slideCount = 200;
    }
    sliderContainer.css({
      transform: "translateX(-" + slideCount.toString() + "%)",
    });
    sliderPointerMovement();
  }
  var sliderTimer = setInterval(function() {
    if (isSliderIntervalPause) {
      return false;
    } else {
      nextSliderMovement();
    }
  }, 3500);

  $('.slider-container, .slider-point-container').hover(function() {
    isSliderIntervalPause = true;
  }, function() {
    isSliderIntervalPause = false;
  });

  $('.slide-left').on('click', function(event) {
    event.preventDefault();
    isSliderIntervalPause = true;
    previousSliderMovement();
  });

  $('.slide-right').on('click', function(event) {
    event.preventDefault();
    isSliderIntervalPause = true;
    nextSliderMovement();
  });

  $('.slider-point-container').on('click',  '.slider-point', function(event) {
    var sliderPointerID = $(this).data('id');
    slideCount = (sliderPointerID - 1) * 100;
    sliderContainer.css({
      transform: "translateX(-" + slideCount.toString() + "%)",
    });
    sliderPointerMovement();
  });

  $('.update-product-type-modal-trigger').on('click', function(event) {
    event.preventDefault();
    $('#updateProductTypeModal').modal('open');
    $('#udpateproductTypeInput').val($($(this).parent().parent().children('td')[0]).text());
  });

  $('.delete-check-modal-trigger').on('click', function(event) {
    event.preventDefault();
    $('#deleteCheckModal').modal('open');
  })

});
