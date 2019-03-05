$(function(){

  // start of sidemenu part. with below codes menu section moves out of page and comes back
  var $navClick = 0;
  $("#navButton").click(function(){
    if ($navClick == 0) {
      $("#navbar").stop().animate({"right":"0"},800);
      $("#sidebar").stop().animate({"right":"-20%" , "left":"0"},800);
      $("#main").stop().animate({"right":"0"},800);
      $navClick = 1;
    }
    else {
      $("#navbar").stop().animate({"right":"20%"},800);
      $("#sidebar").stop().animate({"right":"0" , "left":"20%"},800);
      $("#main").stop().animate({"right":"20%"},800);
      $navClick = 0;
    }
  });

  // end of sidemenu part


//-------------------------
 // slidetoggle in sidemenu
  $(".uppermenu").click(function(){
     var menuOption = $(this).parent().children(".submenu");
     $(menuOption).slideToggle();
   });


//-------------------------
// selecting user from users list
  $("#users .table tr").click(function(){
    $("#single-user .panel").css("display","block");
    // $(this).attr("href","#single-user");
  });

  //-------------------------
  // selecting driver from drivers list
    $("#drivers .table tr").click(function(){
      $("#single-driver .panel").css("display","block");
      // $(this).attr("href","#single-driver");
    });



//-------------------------

//href ra begir va .panele hamon ro show kon baghi ro ham hide kon
  // $("a.ex").click(function(){
  //   var me=$(this).attr("href");
  //   var mme = me+ " .panel";
  //   $(".panel").fadeOut(400, function(){
  //     $(mme).fadeIn(500);
  //   });
  // });



// --------------------------------
  $("#user-profile .user-info button").click(function(){
    $(".panel").fadeOut(400, function(){
      $("#edituser>.panel").fadeIn(500);
    });
  });

//-------------------------
  $("#driver-profile .driver-info button").click(function(){
    $(".panel").fadeOut(400, function(){
      $("#editdriver>.panel").fadeIn(500);
    });
  });


  // --------------------------------
    $("#addsettingbtn").click(function(){
      $(".panel").fadeOut(400, function(){
        $("#addsetting>.panel").fadeIn(500);
      });
    });

  //-------------------------
    $("#editsettingbtn").click(function(){
      $(".panel").fadeOut(400, function(){
        $("#editsetting>.panel").fadeIn(500);
      });
    });

    //-------------------------for addsetting page
      $("#addsettingfield").click(function(){
        var myhtml= "<div class='newItem'><div class='form-group'><label class='col-md-3 control-label' for='newsettingname'>نام تنظیم جدید</label><div class='col-md-3'><input type='text' class='form-control' name='newsettingname'></div></div><div class='form-group'><label class='col-md-3 control-label' for='newsettingval'>مقدار تنظیم جدید</label><div class='col-md-3'><input type='text' class='form-control' name='newsettingname'></div></div></div>";
        $("#holdsethtml").append(myhtml);
      });



});
