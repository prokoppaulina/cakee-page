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
        if(scroll_start > offset.top) {
            $('.navbar-fixed-top').css('background', '#FFFFFF');
        } else {
            $('.navbar-fixed-top').css('background', 'transparent');
        }
    });
});

$('body').scrollspy({
    target: '.navbar-fixed-top'
});

$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
});

// $(document).bind('scroll',function(e){
//     $('section').each(function(){
//         if (
//             $(this).offset().top < window.pageYOffset + 20
// //begins before top
//             && $(this).offset().top + $(this).height() > window.pageYOffset + 20
// //but ends in visible area
// //+ 10 allows you to change hash before it hits the top border
//         ) {
//             window.location.hash = $(this).attr('id');
//         }
//     });
// });