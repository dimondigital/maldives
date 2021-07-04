/**
 * Created by WEB on 05.01.2017.
 */
$(document).ready(function () {

    $h3 = $('#main h3');
    $nav = $('nav');
    $win = $(window);
    $gallery = $('.gallery-cont');

    // overwrite scrolling
    $win.on('scroll', function (event) {
        var top = $win.scrollTop();
        var topOffset = top - $h3.scrollTop();
        $h3.position.top += 200;

        // console.log('top: ' + top);
        // console.log('nav.height: ' + $nav.height());
        
        if(top > 0) {
            $nav.addClass('scrolled');
        } else {
            $nav.removeClass('scrolled');
        }
    });

    $('.item').hover(
        function() {
            $(this).find('h2').css('opacity', '1');
            $(this).find('.mask').css('opacity', '0.6');
            $(this).addClass('col-lg-4 col-md-6').removeClass('col-lg-2 col-md-5');
        }, function() {
            $(this).find('h2').css('opacity', '0');
            $(this).find('.mask').css('opacity', '0');
            $(this).removeClass('col-lg-4 col-md-6').addClass('col-lg-2 col-md-5');
        }
    );

    // open the nav
    $('.open-nav').click(function () {
        // alert('click');
        $('.small-item').toggleClass('hidden-sm hidden-xs open-height');
    });
});