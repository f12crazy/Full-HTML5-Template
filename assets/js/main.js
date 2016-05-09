(function($) {
    'use strict';

    $(function() {

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


        /*  ==========================================================================
            Fade and Animate Slide
            ========================================================================== */
        var animate_slide2 = $('.fade-animate-slide2');

        /*  --------------------------------
            Init slide
        ------------------------------------ */
        animate_slide2.on('init', function() {
            $(this).addClass("first");
        });

        /*  --------------------------------
            Setup slide
        ------------------------------------ */
        animate_slide2.slick({
            dots: true,
            fade: true,
        });

        /*  --------------------------------
            Active animate first run times
        ------------------------------------ */
        animate_slide2.on('setPosition', function() {
            if ($(this).hasClass("first")) {
                activeAnimate($(this), 0);
                animate_slide2.removeClass("first");
            }
        });

        /*  --------------------------------
            After change Slide
        ------------------------------------ */
        animate_slide2.on('afterChange', function(event, slick, currentSlide, nextSlide) {
            activeAnimate($(this), currentSlide);
        });

        /*  --------------------------------
            Before change slide
        ------------------------------------ */
        animate_slide2.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            deActiveAnimate($(this), currentSlide);
        });



        /*  ==========================================================================
            Vertical and animate slide
            ========================================================================== */
        var vertical_animate = $('.vertical-animate-slide');

        /*  --------------------------------
            Init slide
        ------------------------------------ */
        vertical_animate.on('init', function() {
            $(this).addClass("first");
        });

        /*  --------------------------------
            Setup slide
        ------------------------------------ */
        vertical_animate.slick({
            dots: true,
            vertical: true,
            verticalSwiping: true
        });

        /*  --------------------------------
            Active animate first run times
        ------------------------------------ */
        vertical_animate.on('setPosition', function() {
            if ($(this).hasClass("first")) {
                activeAnimate($(this), 0);
                animate_slide2.removeClass("first");
            }
        });

        /*  --------------------------------
            After change Slide
        ------------------------------------ */
        vertical_animate.on('afterChange', function(event, slick, currentSlide, nextSlide) {
            activeAnimate($(this), currentSlide);
        });

        /*  --------------------------------
            Before change slide
        ------------------------------------ */
        vertical_animate.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            deActiveAnimate($(this), currentSlide);
        });

    }); // end document ready

})(jQuery) // end JQuery namespace