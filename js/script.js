$(document).ready(function () {
    // Menu
    $(".close-menu").hide();
    $(".menu-toggle").click(function(){
        $(this).find(".close-menu, .open-menu").toggle();
        $('.main-nav ul').children('.main-nav ul li').slideToggle(200);
    });
    $(window).resize(function(){
        if($(window).width()>1162){
            $(".main-nav ul li").removeAttr('style');
            $(this).find(".close-menu, .open-menu").toggle();
        }
    });

    // $('.menu-toggle').click(function () {
    //     $(this).children('i').toggleClass('fa-bars').toggleClass('fa-times');
    //     $('nav ul').children('ul li').slideToggle(300);
    // });

    // Scroll Down
    $('.scroll-down-btn').click(function() {
        const headerHeight = $('#main-header').outerHeight();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - headerHeight
        }, 800);
        return false;
    });
    // Slide
    $('.main-slideshow').slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade:true,
        cssEase: 'linear',
        duration:3000,
    });

    //Scroll Animation
    $(window).scroll(function() {
        var height_web = $(window).height();
        var scroll = $(window).scrollTop();
        var h_header = $('#main-header').outerHeight();
        var h_slide = $('.main-slideshow').outerHeight();
        var h_block_01 = $('.block-01').outerHeight();
        var h_block_02 = $('.block-02').outerHeight();
        var h_block_03 = $('.block-03').outerHeight();
        var h_block_04 = $('.block-04').outerHeight();
        var scroll_1 = h_header + h_slide + h_block_01 - height_web;
        var scroll_2 = scroll_1 + h_block_02;
        var scroll_3 = scroll_2 + h_block_03;
        var scroll_4 = scroll_3 + h_block_04;
        var scroll_5 = scroll_4 + h_block_04;
        if(scroll >= 0 && scroll < scroll_2){
            $('.block-01').addClass( "scroll-reveal" );
        }
        if(scroll >= scroll_1 && scroll < scroll_3){
            $('.block-02').addClass( "scroll-reveal" );
        }
        if(scroll >= scroll_2 && scroll < scroll_4){
            $('.block-03').addClass( "scroll-reveal" );
        }
        if(scroll >= scroll_3 && scroll < scroll_5){
            $('.block-04').addClass( "scroll-reveal" );

        }
    });

    // Back to top
    $('#topBtn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1100);
    });
});