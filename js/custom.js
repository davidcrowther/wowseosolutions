

$(document).ready(function(){  
  
  

    $(".bg-1").anystretch('img/bg-1.jpg');
    $(".bg-2").anystretch('img/bg-2.jpg');
    $(".bg-3").anystretch('img/bg-3.png');


    $('form.submit-form-1').validate({
        rules: { 
          name: {
            minlength: 2,
            required: true
          },
          subject: {
            minlength: 2,
            required: true
          },
          message: {
            minlength: 2,
            required: true
          },
          email: {
            minlength: 2,
            required: true,
            email: true
          } 
        },
        highlight: function(label) {
            $(label).closest('.form-group').addClass('has-error');
        },
        success: function(label) {
            label
                .text('OK!').addClass('valid')
                .closest('.form-group').addClass('has-success');
        }
    });
 

    $('form.submit-form-2').validate({
        rules: { 
          name: {
            minlength: 2,
            required: true
          },
          subject: {
            minlength: 2,
            required: true
          },
          message: {
            minlength: 2,
            required: true
          },
          email: {
            minlength: 2,
            required: true,
            email: true
          } 
        },
        highlight: function(label) {
            $(label).closest('.form-group').addClass('has-error');
        },
        success: function(label) {
            label
                .text('OK!').addClass('valid')
                .closest('.form-group').addClass('has-success');
        }
    });
 
  
});