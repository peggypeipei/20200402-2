$(".button1").mouseleave(
  function(){
    $(this).css("border-bottom","solid 7px transparent");
  }
);
$(".button1").mouseenter(
  function(){
    $(this).css("border-bottom","solid 7px #84b0f5");
  }
);
$(".section2 .button3").click(
  function(){
    $(".all").css("visibility","visible");
    $(".section2 h1").css("opacity","0");
    $(".section2 p").css("opacity","0");
    $(".section2 .button3").css("opacity","0");
  }
);
$(".section2").mouseleave(
  function(){
    $(".all").css("visibility","hidden");
  }
);
$(".section2").mouseenter(
  function(){
    $(".section2 h1").css("opacity","1");
    $(".section2 p").css("opacity","1");
    $(".section2 .button3").css("opacity","1");
  }
);
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $(".nav").addClass("f-nav");
        $(".button1").css("color","#575757");
    } else {
        $(".nav").removeClass("f-nav");
        $(".button1").css("color","white");
    }
});
var s = skrollr.init();