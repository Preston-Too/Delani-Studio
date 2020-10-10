$(document).ready(function(){
    $(".design").click(function(){
      $("#design-image").toggle();
      $("#design").toggle();
    });
});
$(document).ready(function(){
    $(".dev").click(function(){
      $("#dev-image").toggle();
      $("#development").toggle();
    });
});
$(document).ready(function(){
    $(".product").click(function(){
      $("#product-image").toggle();
      $("#product").toggle();
    });
});

$(document).ready(function(){
    $("#work1").mouseenter(function(){
        $("#picture1").show();
      })
      .mouseleave(function(){
        $("#picture1").hide();
      });

      $("#work2").mouseenter(function(){
        $("#picture2").show();
      })
      .mouseleave(function(){
        $("#picture2").hide();
      });

      $("#work3").mouseenter(function(){
        $("#picture3").show();
      })
      .mouseleave(function(){
        $("#picture3").hide();
      });

      $("#work4").mouseenter(function(){
        $("#picture4").show();
      })
      .mouseleave(function(){
        $("#picture4").hide();
      });
    });
