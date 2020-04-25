$("sandMail").on("click", function(){
	var email=$("#email").val().trim();
	var name=$("#name").val().trim();
	var phone=$("#phone").val().trim();
	
	if(email ==""){
		$("errorMess").text("name");
		return false;
	}
	
	
      $.ajax({
		  url:'ajax/mail.php',
		  type: 'POST',
		  cache: false,
		  data: 'name':name, 'email': email 'phone':phone},
		  dataType: 'html',
          beforeSend: function(){
			  $("#sandMail").prop("disable", true);
		  },
		  success: function (data){
			  alert(data);
			  $("#sandMail").prop("disable", false);
		  }
		  })
	  
	  
	  
	  
});