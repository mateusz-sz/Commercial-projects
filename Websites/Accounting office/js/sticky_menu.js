$(document).ready(function () {

    
    var navTop = $("nav").offset().top;
    
    
    $("nav").wrap('<div class="nav-placeholder"></div>');
    $(".nav-placeholder").height($("nav").outerHeight());
    
    
    
    $(window).scroll(function(){
        var windowTop = $(window).scrollTop();
        
        if(windowTop >= navTop) {
            $("nav").addClass('fixed');
        } else {
            $("nav").removeClass('fixed');
        }
    });
    
    
});