// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(function() {
 $(".accordion").on("click", "dd:not(.active)", function (event) {
   $("dd.active").removeClass('active').find(".content").slideUp("fast");
   $(this).addClass('active').find(".content").slideToggle("fast");
 });
});