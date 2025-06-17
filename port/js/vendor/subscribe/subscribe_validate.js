$(document).on('ready', function() {
	function validMail(email) 
	{
		 var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/; 
		 return expr.test(email);
	}	
	
	$("#mce-EMAIL").on("keypress", function(event) {		
		$('#mce-EMAIL').removeClass('place_error errorClass');
		$("#mce-EMAIL").css("border-color", "");	
	});
	
	$(function() {	
        $("#mc-embedded-subscribe").on("click", function(event) {  
			var FormID = $(this).closest("form").attr("id");            			
			var email = $("#mce-EMAIL").val();	
            var dataString = email;			
			var err4 = 'Invalid Email Address';			
			if( email == '' ){				
				 $("#mce-EMAIL").attr('placeholder' , 'Please Enter Your Email');
				 $('#mce-EMAIL').addClass('place_error errorClass');				
				 return false;
			}			
			else if(email != ''){	
			
				if(!validMail(email)){
					$("#mce-EMAIL").val('');
					$("#mce-EMAIL").attr('placeholder' , 'Invalid Email Address');
                    $("#mce-EMAIL").focus()	
					$('#mce-EMAIL').addClass('place_error errorClass'); 
					return false;
				}				
			 }
			    
			 	$.ajax({
				type: "POST",      
				url: 'http://keenicon.us11.list-manage.com/subscribe/post-json?u=e479edaf1c9c3d2aa4e927ed8&amp;id=07753442c3&c=?',      
				data: $('#mc-embedded-subscribe-form').serialize(),
				cache : false,
				dataType: 'json',
				contentType: "application/json; charset=utf-8",
				success: function (data) {
				   if (data['result'] != "success") {						
						//console.log(data['msg']);									   
						$('#FailureMsg').html('Mail not send, Something went Wrong!');
						$('#FailureMsg').show();
						$('#FailureMsg').delay(3000).fadeOut();
				   } else {					
					   $('#'+FormID)[0].reset();  
					   $('#SuccessMsg').html('Mail Sent Successfully !');
					   $('#SuccessMsg').show();
					   $('#SuccessMsg').delay(3000).fadeOut();
				   }				  
				},
				error: function(err) 
				{ 				   
				    $('#FailureMsg').html('Could not connect to the registration server. Please try again later!');
				    $('#FailureMsg').show();
				    $('#FailureMsg').delay(3000).fadeOut();
				}
			});
				  e.preventDefault();
					  
		});				
	}); 
});	
