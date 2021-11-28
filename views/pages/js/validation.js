$(document).ready(function() {
  $("#singUp-form").validate({
    rules: {
      name : {
        required: true,
        minlength: 3,
        maxlength:20 
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      },
      passwordConfirm: {
        equalTo:"#password",
        required: true,
        minlength: 5
      }
    },
    messages : {
      name: {
        required: "Name is required",
        minlength: "Name should be at least 3 characters",
        maxlength: "Name should be max 20 characters"
      },
      email: {
        required: "Email is required",
        email: "The email should be in the format: abc@domain.tld",
      },
      password: {
        required: "Password is required",
        minlength: "Password should be at least 5 characters"
      },
      passwordConfirm: {
        equalTo:"Password does not match",
        required: "Password confirm is required",
        minlength: "Password should be at least 5 characters"
      }
    }
  });
});


