$(function(){
    if ($(".story-status-top-bar").length) {
        $(".story-panel").addClass("story-panel-dimmed");
    } 

    $(".js-close-status-bar").on('click', function() {
       $(".story-status-top-bar").fadeOut(1000);
       $(".story-panel").removeClass("story-panel-dimmed");
    });
});