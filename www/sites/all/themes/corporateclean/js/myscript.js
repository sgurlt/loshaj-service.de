jQuery(document).ready(function($) {

  // Change Image Opactiy on hover -> Reference Slide
  $('.views-field-field-bilder img.masked, .views-field-field-bilder .field-type-image img').mouseenter(function(){
    $(this).animate({
      opacity: 1
    }, 500, function() {
    // Animation complete.
    });
  });
  
  $('.views-field-field-bilder img.masked, .views-field-field-bilder .field-type-image img').mouseleave(function(){
    $(this).animate({
      opacity: 0.8
    }, 500, function() {
    // Animation complete.
    });
  });


});