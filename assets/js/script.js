$(document).ready(function(){
  var valid=0;
  $("#submit").click(function(){
  valid +=1;
  var email    = $("#email").val();
	var emailreg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
	var password = $("#Password").val();
	var firstname= $("#Firstname").val();
  var nameReg  = new RegExp(/^[A-Za-z]+$/) ;
	var date     = $("#dob").val();
	var dateReg  = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
	var pop      = ["#email","#Password","#Firstname","#dob"];
	var remove   = ["#emailremove", "#nameremove","#passwordremove","#DOBremove"];
	var ok       = ["#namesign","#emailsign","#passwordsign","#DOBsign"];
   if(valid >0)
   {
       if(email == "" || !emailreg.test(email))
       {
         $("#emailsign").hide();
         $("#emailremove").show();
       }
       else
       {
          $("#emailremove").hide();
          $("#emailsign").show();
       }
       if(password == "" || password.length <6)
       {
         $("#passwordsign").hide();
         $("#passwordremove").show();

       }
       else
       {
         $("#passwordremove").hide();
         $("#passwordsign").show();
       }
       if(firstname == "" || !nameReg.test(firstname))
       {
         $("#namesign").hide();
         $("#nameremove").show();
       }
       else
       {
         $("#nameremove").hide();
         $("#namesign").show();
       }
       if(date == "" || !dateReg.test(date))
       {
         $("#DOBsign").hide();
         $("#DOBremove").show();
       }
       else
       {
         $("#DOBremove").hide();
         $("#DOBsign").show();
       }
    }
      if(email == "" || password == "" || firstname == "" || date == "")
	    {
         $(".well").show();
         for(var p=0;p<=pop.length;p++)
          {
          	$(pop[p]).popover("show");
          }
          return false;
      }
       if(!emailreg.test(email) ||  password.length < 6 || !nameReg.test(firstname) || !dateReg.test(date))
      {
     	  for(var p=0;p<=pop.length;p++)
        {
          	$(pop[p]).popover("show");
        }
        for(var i=0;i<=remove.length;i++)
        {
          if(i == 0)
          {
            if(email == "" || !emailreg.test(email))
            $(remove[i]).show();
            else
             $(remove[i]).hide();
             $("#email").popover("hide");
          }
          else if(i == 1)
          {
            if(password == "" || password.length < 6)
             $(remove[i]).show();
             else
             $(remove[i]).hide();
              $("#Password").popover("hide");
          }
          else if(i == 2)
          {
            if(firstname == "" || !nameReg.test(firstname))
             $(remove[i]).show();
             else
             $(remove[i]).hide();
              $("#Firstname").popover("hide");
          }
          else if(i == 3)
          {
            if(date == "" || !dateReg.test(date))
             $(remove[i]).show();
             else
             $(remove[i]).hide();
             $("#dob").popover("hide");
          }
        }
          return false;
      }
      else
      {
        alert("Thank you for your registration");
	     return true;
      }
 });
  $("#email").blur(function(){
  	mail();
  });
  $("#Password").blur(function(){
    password();
  });
  $("#Firstname").blur(function(){
    firstName();
  });
  $("#dob").blur(function(){
    date();
  });
  mail();
  password();
  date();
  firstName();
});

function mail()
{
    var email = $("#email").val();
    var emailreg =new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
   if(email =="" || !emailreg.test(email))
   {
      $("#email").focusout(function(){
        $("#emailsign").hide();
        $("#emailremove").show();
        $("#email").popover("show");
      });
      return false;
    }
    else
    {
   	  $("#emailremove").hide();
  	  $("#emailsign").show();
  	  $("#email").popover("hide");
      return true;
    }
}
function password()
{
    var password =$("#Password").val();
    if(password == "" || password.length <6)
    {
       $("#Password").focusout(function(){
         $("#passwordsign").hide();
         $("#passwordremove").show();
         $("#Password").popover("show");
      });
      return false;
    }
    else
    {
	    $("#passwordremove").hide();
      $("#passwordsign").show();
      $("#Password").popover("hide");
 	    return true;
    }
}
function firstName()
{
  	var firstname =$("#Firstname").val();
    var nameReg = new RegExp(/^[A-Za-z]+$/);
   if(firstname == "" || !nameReg.test(firstname))
   {
   	  $("#Firstname").focusout(function(){
        $("#namesign").hide();
        $("#nameremove").show();
        $("#Firstname").popover("show");
      });
      return false;
   }
   else
   {
   	 $("#nameremove").hide();
   	 $("#namesign").show();
   	 $("#Firstname").popover("hide");
     return true;
   }
}
function date()
{
     var date =$("#dob").val();
     var dateReg =new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
  if(date == "" || !dateReg.test(date))
  {
     $("#dob").focusout(function(){
       $("#DOBsign").hide();
       $("#DOBremove").show();
       $("#dob").popover("show");
     });
     return false;
  }
  else
  {
 	  $("#DOBremove").hide();
 	  $("#DOBsign").show();
 	  $("#dob").popover("hide");
  }
    return true;
}





