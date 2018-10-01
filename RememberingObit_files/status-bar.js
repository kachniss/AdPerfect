$(function(){
    $(".js-close-status-bar").on('click', function() {
       $(".story-status-top-bar").fadeOut(1000);
       $(".story-panel").toggleClass("story-panel-dimmed");
    });
});