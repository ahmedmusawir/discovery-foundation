// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(function() {
 $(".accordion").on("click", "dd:not(.active)", function (event) {
   $("dd.active").removeClass('active').find(".content").slideUp("fast");
   $(this).addClass('active').find(".content").slideToggle("fast");
 });
});

$(document).ready(function(){
      $('.frontpage-portfolio-slider').slick({
        	infinite: true,
		  	slidesToShow: 3,
		  	slidesToScroll: 1,
		  	autoplay: true,
  			autoplaySpeed: 2000,


      });
 });