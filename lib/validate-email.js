(function ($) {
	$.fn.emailValidator = function (input) {
		// your code here
		var regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/
		return regex.test(input)
	}
})(jQuery)

$( "#email" ).keyup(function() {
	let value = $(this).val()
	let input = $.fn.emailValidator(value)
	console.log(input);
	
	if (!input) {
		$(this).addClass("error")
		$("#message").text("email wrong format!").css('color','red')
	}else {
		$(this).addClass("success")
		$("#message").text("email format true!").css('color','green')
	}

  });
