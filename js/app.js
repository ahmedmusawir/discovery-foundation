// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs


jQuery(document).ready(function($){

	  $( 'body' ).fadeIn(2000);   

	  $(document).foundation();

	  $(function() {
		 $(".accordion").on("click", "dd:not(.active)", function (event) {
		   $("dd.active").removeClass('active').find(".content").slideUp("fast");
		   $(this).addClass('active').find(".content").slideToggle("fast");
		 });
		});

      $('.frontpage-portfolio-slider').slick({
        	infinite: true,
		  	slidesToShow: 3,
		  	slidesToScroll: 1,
		  	autoplay: true,
  			autoplaySpeed: 2000,


      });

     $('.portfolio-slider').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		});
						
				

      wow = new WOW(
	    {
	      boxClass:     'wow',      // default
	      animateClass: 'animated', // default
	      offset:       0,          // default
	      mobile:       true,       // default
	      live:         true        // default
	    }
	  )
	  wow.init();
 });