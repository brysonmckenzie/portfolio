$(document).ready(function() {
    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top;

        alert('hello')
    
        $("body, html").animate({
            scrollTop: position
        });
    });

});
