(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".video-play-btn").magnificPopup({
			type: 'video',
		});


		 $(".testimonial-slide-area").owlCarousel({
            items: 1,
            dots: true,
            nav: false,
            autoplay: true,
            loop: true
            
        });
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	