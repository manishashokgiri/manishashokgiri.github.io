$(document).ready(function(){
	$(document).on("click",".send_message",function(e){
		e.preventDefault();
		console.log("button pressed");
		var form = $(".contact_form").serialize();
		console.log(form);
		$.ajax({
			url:"././mail/contact_me.php",
			type:"POST",
			data:form,
			dataType : "json",
			success:function(response){
				if(response.error == "Invalid Email"){
					console.log("Invalid");
					$("#inputemail").closest("div").append("<span class='error'>Provide Valid Email</span>");
				}
				else{
					$(".success").append("");
				}
			}
		})
	})
})