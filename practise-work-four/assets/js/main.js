(function ($){
	"use strict";

	jQuery(document).ready(function($){

	$(".client-testimonial-carousal").owlCarousel({
        items: 3,
        nav: false,
        margin: 30,
        dots: true,
        loop: true,
    });
	
    $(".product-list").masonry();
        
        
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            mouseDrag: false,
			touchDrag: false,
        });
        
         $(".product-promotion").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: true,
            nav: false,
        });
        
        
        $(".menu-trigger").on("click", function(){
            $(".off-canvas-menu, .off-canvas-overlay").addClass("active");
            return false;
        });
         $(".menu-close, .off-canvas-overlay").on("click", function(){
            $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
            
        });
        
        
         $(".search-trigger").on("click", function(){
            $(".off-canvas-search, .off-canvas-overlay").addClass("active");
            return false;
        });
         $(".menu-close, .off-canvas-overlay").on("click", function(){
            $(".off-canvas-search, .off-canvas-overlay").removeClass("active");
            
        });
        
});

jQuery(window).load(function(){

});

}(jQuery));
