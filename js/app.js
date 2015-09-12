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

	  /**
 *
 * Nav Active Highlight
 *
 */
	 	var page = window.location.pathname;
	 	// console.log(page);

	 	var currentPage = page.substring(1, page.length);
	 	// console.log(currentPage);
		
		// var $activeLink = $('.main-nav').children("li:contains('About')").css('border', '1px solid red');
		// var $activeLink = $('.main-nav').children('li').children("a:contains('About')").css('color', 'red');
		
		$(".main-nav").find("[data-page='" + currentPage + "']").addClass('active');

		var dropdown = $('.dropdown').children('li').hasClass('active');
		console.log(dropdown);

		if (dropdown) {
			$('.has-dropdown').addClass('active');
		}

			
});

