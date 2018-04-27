$(function () {
    
    //Dynamic scroll
    
    $("#nasze-atuty").click(function () {$.scrollTo($('#atuty-headnig'), 600);});
    $("#zakres-uslug").click(function () {$.scrollTo($('#uslugi-heading'), 600);});
    $("#kontakt").click(function () {$.scrollTo($('footer'), 800);});
    
    $('#up-button').click(function() {$.scrollTo($('body'), 800);});
		
		//pokaż dopiero po scrollowaniu
		$(window).scroll(function()
		{
			if($(this).scrollTop()>400) $('#up-button').fadeIn();
			else $('#up-button').fadeOut();
		})
        
        
    //Read-more fadeInOut
    $(".read-more").click(function () {
        $('body').css("overflow", "hidden");
    });

        
    $("#ksiegowosc-link").click(function () {
        $("#ksiegowosc-text").fadeIn();
        $("#dark-background").fadeIn();
    });
    
    $("#kadry-link").click(function () {
        $("#kadry-text").fadeIn();
        $("#dark-background").fadeIn();
    });
    
    $("#inne-link").click(function () {
        $("#inne-text").fadeIn();
        $("#dark-background").fadeIn();
    });
    
    $(".icon-cancel").click(function(){
        $(".read-more-div").fadeOut();
        $("#dark-background").fadeOut();
        $('body').css("overflow", "auto");
    });
    
    
    
    //Animating effects
    var $window_width = $(window).width();
    
    if($window_width >= 997) {
        $(".collumn-wrapper").addClass('animation-element');
    } else {
        $(".collumn-wrapper").removeClass('animation-element');
    }
    
    
    var $animation_elements = $('.animation-element');
    var $window = $(window);
    
    
    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        
        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_positon = (element_top_position + element_height);
            
            //sprawdź czy element jest widoczny
            if ( (element_bottom_positon >= window_top_position) && ( (element_top_position + 100) <= window_bottom_position) ) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }
    
    $window.on('scroll resize', check_if_in_view);
    
    
    
    
    
    
    
 
    
});