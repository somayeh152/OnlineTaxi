$(function(){

  $("#signinlink").click(function(){
    $("#regform").hide();
    $("#forgetpassform").hide();
    $("#loginform").show();
    $("#signinlink").css({"color":"#403ecd" , "font-weight": "bold"});
    $("#reglink").css({"color":"#2f2f2f" , "font-weight": "normal"});
  });

  $("#reglink").click(function(){
    $("#loginform").hide();
    $("#forgetpassform").hide();
    $("#regform").show();
    $("#reglink").css({"color":"#403ecd" , "font-weight": "bold"});
    $("#signinlink").css({"color":"#2f2f2f" , "font-weight": "normal"});
    // $("#regform").css("display","block");
  });

  $("#forgetlink").click(function(){
    $("#loginform").hide();
    $("#forgetpassform").show();
    $("#reglink").css({"color":"#2f2f2f" ,"text-shadow":"1px 1px 1px #ddd", "font-weight": "normal"});
    $("#signinlink").css({"color":"#2f2f2f" , "font-weight": "normal"});
  });


});
