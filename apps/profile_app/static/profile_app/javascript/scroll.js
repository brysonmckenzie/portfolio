$(document).ready(function() {
    
    var headerHeight = $('#pagetop').outerHeight()  ;
    console.log(headerHeight);

    // Get the header height

  $(".slide-click").click(function(e) {
      

    var linkHref = $(this).attr('href');
 


      $('html, body').animate({
          scrollTop: $(linkHref).offset().top - headerHeight
      }, 1000 );

      e.preventDefault();

      
  });
});
