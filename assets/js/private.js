$(document).ready(function() {
    $('.box-home-template').click(function(){
        $('.box-home-template, .video-template').addClass('active');
        $('.video-template video').trigger('play');
        $('.cursor').hide();
    });
});
