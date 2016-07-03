$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('#home');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if ( $(window).width() > 768) {
            if (scroll_start > offset.top) {
                $('.navbar-fixed-top').css('background', '#FFFFFF');
            } else {
                $('.navbar-fixed-top').css('background', 'transparent');
            }
        }
    });
});

$('body').scrollspy({
    target: '.navbar-fixed-top'
});