// JavaScript Document
$(document).on('ready', function() {
    if (Modernizr.touch) {
    // show the close overlay button
    $(".close-overlay").removeClass("hidden");
     // handle the adding of hover class when clicked  
	  $(".img").on("click", function(event) {
         if (!$(this).hasClass("hover")) {
           $(this).addClass("hover");
            }
         });
     // handle the closing of the overlay
     $(".close-overlay").on("click", function(event) {
       e.preventDefault();
       e.stopPropagation();
       if ($(this).closest(".img").hasClass("hover")) {
       $(this).closest(".img").removeClass("hover");
        }
       });
      } else {
       // handle the mouseenter functionality
        $(".img").mouseenter(function(){
         $(this).addClass("hover");
        })
       // handle the mouseleave functionality
        .mouseleave(function(){
        $(this).removeClass("hover");
       });
     }
  });