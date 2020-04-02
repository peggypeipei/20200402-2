$(".button1").mouseleave(
  function(){
    $(this).css("border-bottom","solid 7px transparent");
  }
);
$(".button1").mouseenter(
  function(){
    $(this).css("border-bottom","solid 7px #05e6ff");
  }
);


$(".slider").mouseenter(
  function(){
    $(".slider").css("width","250px");
    $(".img5").css("transform","translateX(-20%)");
    $(".img7").css("opacity","1");
    $(".img6").css("opacity","1");
  }
);
$(".slider").mouseleave(
  function(){
    $(".slider").css("width","0px");
    $(".img5").css("left","1200px");
    $(".img7").css("opacity","0");
    $(".img6").css("opacity","0");
  }
);
$(".img5").mouseenter(
  function(){
    $(".slider").css("width","250px");
    $(".img6").css("opacity","1");
    $(".img7").css("opacity","1");
  }
);
$(".img5").mouseleave(
  function(){
    $(".slider").css("width","0px");
    $(".img6").css("opacity","0");
    $(".img7").css("opacity","0");
    $(".img6").css("transition-duration","0.5s");
    $(".img7").css("transition-duration","0.5s");
  }
);
$(".button3").mouseenter(
 function(){
   $(this).css("border-bottom","solid 7px #66231b")
 }
);
$(".button3").mouseleave(
 function(){
   $(this).css("border-bottom","solid 7px transparent")
 }
);
$(".num1").click(
  function(){
    $(".step1").css("visibility","visible");
  }
);

$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "3%");
	$(".discovery").addClass("active").siblings().removeClass("active");
  $(".ppic.rice").css("opacity","1");
  $(".ppic.makerice").css("opacity","0");
  $(".ppic.coldrice").css("opacity","0");
  $(".ppic.add").css("opacity","0");
  $(".ppic.smile").css("opacity","0");
  $(".ppic.bake").css("opacity","0");
  $(".hand").css("opacity","0");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "20%");
	$(".strategy").addClass("active").siblings().removeClass("active");
  $(".ppic.makerice").css("opacity","1");
  $(".ppic.rice").css("opacity","1");
  $(".ppic.coldrice").css("opacity","0");
  $(".ppic.add").css("opacity","0");
  $(".ppic.smile").css("opacity","0");
  $(".ppic.bake").css("opacity","0");
  $(".hand").css("opacity","0");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "40%");
	$(".creative").addClass("active").siblings().removeClass("active");
  $(".ppic.coldrice").css("opacity","1");
  $(".ppic.makerice").css("opacity","1");
  $(".ppic.rice").css("opacity","1");
  $(".ppic.add").css("opacity","0");
  $(".ppic.smile").css("opacity","0");
  $(".ppic.bake").css("opacity","0");
  $(".hand").css("opacity","0");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "60%");
	$(".production").addClass("active").siblings().removeClass("active");
  $(".ppic.add").css("opacity","1");
  $(".ppic.coldrice").css("opacity","1");
  $(".ppic.makerice").css("opacity","1");
  $(".ppic.rice").css("opacity","1");
  $(".ppic.bake").css("opacity","0");
  $(".ppic.smile").css("opacity","0");
  $(".hand").css("opacity","0");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "80%");
	$(".analysis").addClass("active").siblings().removeClass("active");
  $(".ppic.smile").css("opacity","1");
  $(".ppic.add").css("opacity","1");
  $(".ppic.coldrice").css("opacity","1");
  $(".ppic.makerice").css("opacity","1");
  $(".ppic.rice").css("opacity","1");
  $(".ppic.bake").css("opacity","0");
  $(".hand").css("opacity","0");
});

$(".step06").click( function() {
	$("#line-progress").css("width", "100%");
	$(".distillation").addClass("active").siblings().removeClass("active");
  $(".ppic.bake").css("opacity","1");
  $(".ppic.smile").css("opacity","1");
  $(".ppic.add").css("opacity","1");
  $(".ppic.coldrice").css("opacity","1");
  $(".ppic.makerice").css("opacity","1");
  $(".ppic.rice").css("opacity","1");
  $(".hand").css("opacity","0");
});