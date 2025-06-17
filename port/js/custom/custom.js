

	$(document).on('ready', function() {
    ("use strict"); //Start of Use Strict
    var menu_bar = $(".navbar-default");
    var menu_li = $(".navbar-default li a");
    var collapse = $(".navbar-collapse");
    var top_menu = $("#top-nav");

    //RESPONSIVE MENU SHOW AND HIDE FUNCTION
    menu_li.on("click", function (event) {
      collapse.slideToggle();
    });
    $(".navbar-default .navbar-toggle").click(function (e) {
      collapse.slideToggle();
    });

    //RESPONSIVE MENU BGCOLOR
    $(".navbar-header button").on("click", function (e) {
      $("#bs-example-navbar-collapse-1").css({
        "background-color": "#333333",
      });
      $("#bs-example-navbar-collapse-1 li a").css({
        color: "#ffffff",
      });
    });

    //PRINT RESUME FUNCTION
    $("#printerButton").on("click", function (event) {
      var myWindow = window.open(
        "download-resume.html",
        "My Resume",
        "width=1000"
      );
      myWindow.focus();
      myWindow.print();
    });

    //HEADER SLIDER FUNCTION
    $(".carousel").carousel({
      interval: 2000,
    });

    // YOUTUBE BACKGROUND VIDEO FUNCTION
    var player = $(".player");
    if (player.length) {
      player.mb_YTPlayer();
    }

    // Show popup after 10 seconds
    setTimeout(function () {
      $("#popup-container").fadeIn();
    }, 500000);

    // Send form data to PHP file using AJAX
    $("#popup-form-container").submit(function (e) {
      e.preventDefault();
      var popup_name = $("#popup-name").val();
      var popup_email = $("#popup-email").val();
      var popup_phone = $("#popup-phone").val();
	  var submitButton = $("#popup-form-container .popup-btn");
	  console.log(submitButton)
    var originalText = submitButton.html();
    submitButton.html("Sending...").prop("disabled", true);
      $.ajax({
        type: "POST",
        url: "send_email.php",
        data: {
          popup_name: popup_name,
          popup_email: popup_email,
          popup_phone: popup_phone,
        },
        success: function (data) {
          if (data.success) {
            submitButton.html("Sent!").prop("disabled", true);
            setTimeout(function () {
              submitButton.html(originalText).prop("disabled", false);
			   $("#popup-container").fadeOut();
            }, 2000);
			
          } else {
            submitButton.html("Failed!").prop("disabled", true);
            setTimeout(function () {
              submitButton.html(originalText).prop("disabled", false);
            }, 2000);
          }
        },
      });
    });

    // Close popup when clicking outside of it
    $("#popup-container").on("click", function (e) {
      if (e.target === this) {
        $(this).fadeOut();
      }
    });



    //CONTACT FORM VALIDATION
    if ($("#contact-form").length) {
      $("#contact-form").each(function () {
        $(this).validate({
          errorClass: "error",
          submitHandler: function (form) {
            var submitButton = $(form).find('input[type="submit"]');
            var originalText = submitButton.val();
            submitButton.val("Sending...").prop("disabled", true);

            $.ajax({
              type: "POST",
              url: "../../send_email.php",
              data: $(form).serialize(),
              success: function (data) {
                submitButton.val(originalText).prop("disabled", false);
                if (data) {
                  $("#sucessMessage").html("Mail Sent Successfully !");
                  $("#sucessMessage").show();
                  $("#sucessMessage").delay(3000).fadeOut();
                } else {
                  $("#failMessage").html(data);
                  $("#failMessage").show();
                  $("#failMessage").delay(3000).fadeOut();
                }
              },
              error: function (XMLHttpRequest, textStatus, errorThrown) {
                submitButton.val(originalText).prop("disabled", false);
                $("#failMessage").html(textStatus);
                $("#failMessage").show();
                $("#failMessage").delay(3000).fadeOut();
              },
            });
          },
        });
      });
    }
    return false;
    // End of use strict
  });



// form processing with ajax
// $(document).ready(function () {
//   $("#contact-form").submit(function (event) {
//     event.preventDefault(); // Prevent default form submission

//     // Get form values
//     var firstName = $("#name").val();
//     var lastName = $("#Iname").val(); // Corrected ID to lname
//     var email = $("#email").val();
//     var message = $("#message").val();

//     // Basic client-side validation (you should add more robust validation)
//     if (firstName == "" || lastName == "" || email == "" || message == "") {
//       $("#failMessage").html("Please fill in all fields.");
//       $("#sucessMessage").html(""); // Clear the success message if there was one
//       return;
//     }
//     if (!isValidEmail(email)) {
//       // check for valid email
//       $("#failMessage").html("Please enter valid Email.");
//       $("#sucessMessage").html(""); // Clear the success message if there was one
//       return;
//     }

//     $.ajax({
//       type: "POST",
//       url: "../../send_email.php", // Path to your PHP script
//       data: {
//         name: firstName,
//         lname: lastName,
//         email: email,
//         message: message,
//       },
//       dataType: "json", // Expecting JSON response from PHP
//       success: function (response) {
//         if (response.success) {
//           $("#sucessMessage").html(response.message);
//           $("#failMessage").html("");
//           $("#contact-form")[0].reset(); // Clear the form
//         } else {
//           $("#failMessage").html(response.message);
//           $("#sucessMessage").html("");
//         }
//       },
//       error: function (jqXHR, textStatus, errorThrown) {
//         console.error("AJAX Error:", textStatus, errorThrown); // Log errors to the console
//         $("#failMessage").html("An error occurred. Please try again later.");
//         $("#sucessMessage").html("");
//       },
//     });
//   });
// });

function isValidEmail(email) {
  var emailRegex =
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailRegex.test(email);
}