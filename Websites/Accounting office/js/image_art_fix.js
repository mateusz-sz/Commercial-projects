//This file fixes image-art divs height problem depending on window width

$(function () {
    
    var text_height = $("div.collumn").outerHeight(); 
    $(".image-art").css("height", text_height+50);
    
});