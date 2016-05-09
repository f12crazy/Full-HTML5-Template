
(function($) {
    'use strict';

    $(function() {

        /* ==========================================================================
            Menu Mobile
            ========================================================================== */
        $(".rst-main-navigation li.menu-item-has-children").prepend("<span class='rst-open-menu-mobile'></span>");
        $(".rs-toggle-menu-sidebar").click(function() {
            $(this).toggleClass("active");
            // Sidebar menu
            if ($(this).hasClass("active")) {
                $(".rst-main-navigation").stop().animate({
                    right: 0,
                }, 300);
                $(".overlay-mobile").show();
            } else {
                $(".rst-main-navigation").stop().animate({
                    right: -320,
                }, 300);
                $(".overlay-mobile").hide();
            }
        });
        $(".rst-open-menu-mobile").on("click", function(event) {
            $(this).toggleClass("active");
            $(this).parent("li").siblings().find("ul").slideUp();
            $(this).parent("li").siblings().find(".rst-open-menu-mobile").removeClass("active");
            $(this).siblings('ul').slideToggle();
        });

        $(".overlay-mobile,.rst-top-main-navigation .rst-toggle-menu").click(function(){
            $(".rs-toggle-menu-sidebar").click();
        });



        /*  ==========================================================================
            Animate Slide
            ========================================================================== */
        function activeAnimate(slide, currentSlide) {
            slide.find(".slide-item[data-slick-index=" + currentSlide + "]").find(".rs-animate").addClass("animated");

            slide.find(".slide-item[data-slick-index=" + currentSlide + "]").find(".rs-animate").each(function() {

                // add animate
                var animate = $(this).attr("data-animate");
                $(this).addClass(animate);

                // animate delay
                var time_delay = $(this).attr("data-delay");
                $(this).css({
                    "animation-delay": time_delay,
                    "-webkit-animation-delay": time_delay,
                });

                // animate duration
                var duration = $(this).attr("data-duration");
                $(this).css({
                    "animation-duration": duration,
                    "-webkit-animation-duration": duration,
                });
            })
        }

        function deActiveAnimate(slide, currentSlide) {
            slide.find(".slide-item[data-slick-index=" + currentSlide + "]").find(".rs-animate").each(function() {
                var animate = $(this).attr("data-animate");
                $(this).removeClass(animate).removeClass("animated");
            })
        }


        var animate_slide = $('.fade-animate-slide');

        /*
            Init slide
        ------------------------------------ */
        animate_slide.on('init', function() {
            $(this).addClass("first");
        });

        /*
            Setup slide
        ------------------------------------ */
        animate_slide.slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 7000,
        });

        /*
            Active animate first run times
        ------------------------------------ */
        animate_slide.on('setPosition', function() {
            if ($(this).hasClass("first")) {
                activeAnimate($(this), 0);
                animate_slide.removeClass("first");
            }
        });

        /*
            After change Slide
        ------------------------------------ */
        $('.fade-animate-slide').on('afterChange', function(event, slick, currentSlide, nextSlide) {
            activeAnimate($(this), currentSlide);
        });

        /*
            Before change slide
        ------------------------------------ */
        $('.fade-animate-slide').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            deActiveAnimate($(this), currentSlide);
        });


    }); // end document ready

    $(window).resize(function(){

    });// end window resize

})(jQuery) // end JQuery namespace