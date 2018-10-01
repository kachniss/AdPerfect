$(function(){

    $(".js-close-status-bar").on('click', function() {
       $(".story-status-top-bar").fadeOut();
       $(".story-panel").toggleClass("story-panel-dimmed");
    });

});




